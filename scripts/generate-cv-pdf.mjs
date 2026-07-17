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
const locales = ['ru', 'en']
const nuxiBin = path.join(rootDir, 'node_modules', '@nuxt', 'cli', 'bin', 'nuxi.mjs')

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
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
  const candidate = path.normalize(path.join(staticDir, normalizedPath))

  if (!candidate.startsWith(staticDir)) return null

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
  const filePath = await resolveStaticPath(request.url || '/')

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

  for (const locale of locales) {
    const context = await browser.newContext({ viewport: { width: 1240, height: 1754 } })
    await context.addCookies([{
      name: 'portfolio-locale',
      value: locale,
      url: baseUrl
    }])
    const page = await context.newPage()
    await page.goto(`${baseUrl}/cv?locale=${locale}&print=1`, { waitUntil: 'networkidle' })
    await page.waitForSelector(`#cv-print-root[data-locale="${locale}"]`)
    await page.pdf({
      path: path.join(outputDir, `ruslan-vorontsov-cv-${locale}.pdf`),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true
    })
    await context.close()
    console.log(`Generated public/ruslan-vorontsov-cv-${locale}.pdf`)
  }
} finally {
  if (browser) await browser.close()
  await new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()))
}
