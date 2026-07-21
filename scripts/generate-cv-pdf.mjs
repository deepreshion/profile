import { createServer } from 'node:http'
import { createReadStream } from 'node:fs'
import { mkdir, stat } from 'node:fs/promises'
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from 'playwright'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = path.join(rootDir, 'public')
const staticDir = path.join(rootDir, '.output', 'public')
const port = Number(process.env.CV_PDF_PORT || 4177)
const host = '127.0.0.1'
const baseUrl = `http://${host}:${port}`
const locales = [
  { code: 'ru', route: '/ru/cv' },
  { code: 'en', route: '/cv' }
]
const nuxiBin = path.join(rootDir, 'node_modules', '@nuxt', 'cli', 'bin', 'nuxi.mjs')

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp'
}

const runNuxtGenerate = async () => {
  await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, [nuxiBin, 'generate'], {
      cwd: rootDir,
      stdio: 'inherit',
      env: {
        ...process.env,
        GITHUB_ACTIONS: ''
      }
    })

    child.once('error', reject)
    child.once('exit', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`nuxi generate exited with code ${code}`))
    })
  })
}

const resolveStaticPath = async (requestUrl) => {
  const url = new URL(requestUrl, baseUrl)
  const decodedPath = decodeURIComponent(url.pathname)
  const normalizedPath = decodedPath === '/' ? '/index.html' : decodedPath
  const candidate = path.resolve(staticDir, `.${normalizedPath}`)
  const relativeCandidate = path.relative(staticDir, candidate)

  if (relativeCandidate.startsWith('..') || path.isAbsolute(relativeCandidate)) return null

  try {
    const info = await stat(candidate)
    if (info.isFile()) return candidate
    if (info.isDirectory()) {
      const indexPath = path.join(candidate, 'index.html')
      const indexInfo = await stat(indexPath)
      if (indexInfo.isFile()) return indexPath
    }
  } catch {
    const indexPath = path.join(staticDir, normalizedPath, 'index.html')
    try {
      const indexInfo = await stat(indexPath)
      if (indexInfo.isFile()) return indexPath
    } catch {
      return null
    }
  }

  return null
}

const createStaticServer = () => createServer(async (request, response) => {
  let filePath

  try {
    filePath = await resolveStaticPath(request.url || '/')
  } catch {
    response.writeHead(400)
    response.end('Bad request')
    return
  }

  if (!filePath) {
    response.writeHead(404)
    response.end('Not found')
    return
  }

  response.writeHead(200, {
    'content-type': contentTypes[path.extname(filePath)] || 'application/octet-stream'
  })
  createReadStream(filePath).pipe(response)
})

await mkdir(outputDir, { recursive: true })
await runNuxtGenerate()

const server = createStaticServer()
await new Promise((resolve) => server.listen(port, host, resolve))

let browser

try {
  browser = await chromium.launch()

  for (const { code, route } of locales) {
    const context = await browser.newContext({ viewport: { width: 1240, height: 1754 } })
    const pageErrors = []

    try {
      await context.addCookies([{
        name: 'portfolio-locale',
        value: code,
        url: baseUrl
      }])
      const page = await context.newPage()

      page.on('pageerror', (error) => pageErrors.push(error.message))
      page.on('console', (message) => {
        if (message.type() === 'error') pageErrors.push(message.text())
      })

      const response = await page.goto(`${baseUrl}${route}?print=1`, { waitUntil: 'networkidle' })

      if (!response?.ok()) {
        throw new Error(`Failed to load ${route}: HTTP ${response?.status() || 'unknown'}`)
      }

      await page.waitForSelector(`#cv-print-root[data-locale="${code}"]`, { timeout: 15_000 })
      await page.emulateMedia({ media: 'print' })

      await page.pdf({
        path: path.join(outputDir, `ruslan-vorontsov-cv-${code}.pdf`),
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true
      })
    } finally {
      await context.close()
    }

    if (pageErrors.length > 0) {
      console.warn(`Generated ${code} PDF with page console errors:\n${pageErrors.join('\n')}`)
    }

    console.log(`Generated public/ruslan-vorontsov-cv-${code}.pdf`)
  }
} finally {
  if (browser) await browser.close()
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()))
}
