import { GameState, Player } from './engine'

export const coordToIndex = (coord: string) => {
  const col = coord.charCodeAt(0) - 65
  const row = parseInt(coord.substring(1)) - 1
  return row * 9 + col
}

export const indexToCoord = (index: number) => {
  const x = index % 9
  const y = Math.floor(index / 9)
  const col = String.fromCharCode(65 + x)
  const row = y + 1
  return `${col}${row}`
}

export const getSmallBoard = (board: string, sbIdx: number): string => {
  const sbRow = Math.floor(sbIdx / 3)
  const sbCol = sbIdx % 3
  let res = ''
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = sbRow * 3 + r
      const col = sbCol * 3 + c
      res += board[row * 9 + col]
    }
  }
  return res
}

export const check3x3Winner = (board: string): string | null => {
  const winPatterns: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const pattern of winPatterns) {
    const [p1, p2, p3] = pattern
    if (board[p1] !== '.' && board[p1] === board[p2] && board[p1] === board[p3]) {
      return board[p1] ?? null
    }
  }
  if (!board.includes('.')) return 'D'
  return null
}

export const rebuildGameState = (history: string[]): GameState => {
  const state = new GameState()
  let player: Player = Player.X
  for (const move of history) {
    const col = move.charCodeAt(0) - 65
    const row = parseInt(move.substring(1)) - 1
    const sbIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)
    const cellIdx = (row % 3) * 3 + (col % 3)
    const idx = sbIdx * 9 + cellIdx
    state.makeMove(idx, player)
    player = player === Player.X ? Player.O : Player.X
  }
  return state
}

export const isCellAvailable = (index: number, board: string, availableMovesStr?: string) => {
  if (!availableMovesStr) return true
  if (board[index] !== '.') return false
  const coord = indexToCoord(index)
  const moves = availableMovesStr

  if (moves.startsWith('ALL_AVAILABLE_EXCEPT_TILES:')) {
    const parts = moves.split(':')
    const exceptTiles = parts[1] ? parts[1].split(',').filter(Boolean) : []
    const exceptCells = parts[3] ? parts[3].split(',').filter(Boolean) : []

    const cx = index % 9
    const cy = Math.floor(index / 9)
    const tx = Math.floor(cx / 3) * 3
    const ty = Math.floor(cy / 3) * 3
    const tileCoord = `${String.fromCharCode(65 + tx)}${ty + 1}`

    if (exceptTiles.includes(tileCoord)) return false
    return !exceptCells.includes(coord)
  } else if (moves.startsWith('ALL_AVAILABLE_EXCEPT:')) {
    const parts = moves.split(':')
    const except = parts[1] ? parts[1].split(',').filter(Boolean) : []
    return !except.includes(coord)
  } else if (moves.startsWith('AVAILABLE_IN_TILE:')) {
    const parts = moves.split(':')
    const tileCoord = parts[1]
    if (!tileCoord) return true
    const except = parts[3] ? parts[3].split(',').filter(Boolean) : []
    const tx = tileCoord.charCodeAt(0) - 65
    const ty = parseInt(tileCoord.substring(1)) - 1
    const cx = index % 9
    const cy = Math.floor(index / 9)
    const isInTile = cx >= tx && cx < tx + 3 && cy >= ty && cy < ty + 3
    return isInTile && !except.includes(coord)
  }
  return true
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'IN_PROGRESS':
      return 'bg-green-500/10 text-green-500 border-green-500/20'
    case 'FINISHED':
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    case 'WAITING_FOR_OPPONENT':
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    case 'CANCELLED':
      return 'bg-red-500/10 text-red-500 border-red-500/20'
    default:
      return 'bg-slate-500/10 text-slate-500 border-slate-500/20'
  }
}

export const formatStatus = (status: string) => {
  if (status === 'IN_PROGRESS') return 'LIVE MATCH'
  return status.replace(/_/g, ' ')
}
