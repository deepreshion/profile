import type {
  BackgroundEdge,
  BackgroundNode,
  CodeGlyph,
  HeroScene,
  TerrainGrid,
  TerrainLine,
  TerrainPoint,
  WireShape,
} from '~/types/hero-background'

const seededRandom = (seed = 8417) => {
  let value = seed >>> 0
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0
    return value / 4294967296
  }
}

export const createGridPoints = (columns: number, rows: number): TerrainGrid => {
  const random = seededRandom(columns * 1009 + rows * 917)
  const points: TerrainPoint[] = []
  const lines: TerrainLine[] = []

  for (let row = 0; row < rows; row += 1) {
    const depth = row / Math.max(rows - 1, 1)
    const projectedY = 52 + Math.pow(depth, 1.7) * 505
    const spread = 380 + depth * 600

    for (let column = 0; column < columns; column += 1) {
      const normalizedX = column / Math.max(columns - 1, 1) - .5
      const x = 500 + normalizedX * spread + (random() - .5) * (5 + depth * 8)
      const y = projectedY + (random() - .5) * (3 + depth * 7)
      points.push({
        id: row * columns + column,
        x,
        y,
        depth,
        intensity: .45 + random() * .55,
        delay: random() * 260,
      })
    }
  }

  let lineId = 0
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const current = row * columns + column
      const depth = row / Math.max(rows - 1, 1)
      if (column < columns - 1) lines.push({ id: lineId++, from: current, to: current + 1, opacity: .05 + depth * .08 })
      if (row < rows - 1 && (column + row) % 2 === 0) lines.push({ id: lineId++, from: current, to: current + columns, opacity: .035 + depth * .055 })
    }
  }

  return { points, lines }
}

const codeSamples = [
  ['function createApp() {', '  const app = createSSRApp(Root)', '  app.use(router)', '  return app', '}'],
  ['const skills = [', '  "Vue.js",', '  "Nuxt",', '  "TypeScript",', '  "Tailwind CSS"', ']'],
  ['type Developer = {', '  name: string;', '  focus: string;', '  passion: string;', '  experience: number;', '}'],
  ['.hero {', '  position: relative;', '  overflow: hidden;', '  transform-style: preserve-3d;', '}'],
  ['// Building', '// scalable', '// solutions'],
]

export const createHeroScene = (width: number, height: number, seed = 8417): HeroScene => {
  const random = seededRandom(seed + Math.round(width) * 31 + Math.round(height) * 17)
  const columns = width < 760 ? 10 : 16
  const rows = width < 760 ? 7 : 9
  const terrain = createGridPoints(columns, rows)
  const terrainScaleX = width / 1000
  const terrainScaleY = Math.max(height * .58, 360) / 600
  const terrainYOffset = height * .32

  terrain.points = terrain.points.map((point) => ({
    ...point,
    x: point.x * terrainScaleX,
    y: terrainYOffset + point.y * terrainScaleY,
  }))

  const nodes: BackgroundNode[] = []
  const nodeCount = width < 760 ? 34 : 76
  for (let index = 0; index < nodeCount; index += 1) {
    const rightBias = random() > .38
    nodes.push({
      id: index,
      x: width * (rightBias ? .36 + random() * .6 : .04 + random() * .34),
      y: height * (.07 + random() * .74),
      radius: random() > .86 ? 2.2 : 1 + random() * 1.5,
      depth: .35 + random() * .95,
      intensity: .35 + random() * .65,
      accent: random() > .78,
      phase: random() * Math.PI * 2,
    })
  }

  const edges: BackgroundEdge[] = []
  let edgeId = 0
  for (let index = 0; index < nodes.length; index += 1) {
    for (let next = index + 1; next < nodes.length; next += 1) {
      const dx = nodes[index].x - nodes[next].x
      const dy = nodes[index].y - nodes[next].y
      const distance = Math.hypot(dx, dy)
      if (distance < (width < 760 ? 105 : 150) && random() > .32) {
        edges.push({ id: edgeId++, from: index, to: next, opacity: .025 + random() * .08 })
      }
    }
  }

  const glyphs: CodeGlyph[] = codeSamples.map((lines, index) => ({
    id: index,
    x: width * ([.24, .46, .77, .37, .86][index] ?? random()),
    y: height * ([.18, .27, .24, .82, .74][index] ?? random()),
    lines,
    opacity: index === 1 ? .42 : .22 + random() * .16,
    accentLine: index === 1 ? 1 : Math.floor(random() * lines.length),
    phase: random() * Math.PI * 2,
  }))

  const shapes: WireShape[] = []
  const shapeCount = width < 760 ? 5 : 12
  for (let index = 0; index < shapeCount; index += 1) {
    shapes.push({
      id: index,
      x: width * (.08 + random() * .86),
      y: height * (.08 + random() * .78),
      size: 12 + random() * (width < 760 ? 26 : 42),
      sides: ([3, 4, 6] as const)[Math.floor(random() * 3)],
      rotation: random() * Math.PI,
      opacity: .08 + random() * .18,
      phase: random() * Math.PI * 2,
    })
  }

  return { width, height, terrain, nodes, edges, glyphs, shapes }
}
