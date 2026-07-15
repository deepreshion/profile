export interface TerrainPoint {
  id: number
  x: number
  y: number
  depth: number
  intensity: number
  delay: number
}

export interface TerrainLine {
  id: number
  from: number
  to: number
  opacity: number
}

export interface TerrainGrid {
  points: TerrainPoint[]
  lines: TerrainLine[]
}

export interface BackgroundNode {
  id: number
  x: number
  y: number
  radius: number
  depth: number
  intensity: number
  accent: boolean
  phase: number
}

export interface BackgroundEdge {
  id: number
  from: number
  to: number
  opacity: number
}

export interface CodeGlyph {
  id: number
  x: number
  y: number
  lines: string[]
  opacity: number
  accentLine: number
  phase: number
}

export interface WireShape {
  id: number
  x: number
  y: number
  size: number
  sides: 3 | 4 | 6
  rotation: number
  opacity: number
  phase: number
}

export interface HeroScene {
  width: number
  height: number
  terrain: TerrainGrid
  nodes: BackgroundNode[]
  edges: BackgroundEdge[]
  glyphs: CodeGlyph[]
  shapes: WireShape[]
}
