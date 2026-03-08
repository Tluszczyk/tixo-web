/**
 * Player identification
 */
export enum Player {
  X = 1,
  O = -1,
  None = 0,
}

/**
 * Result of the game: Player.X, Player.O, or Player.None for Draw
 */
export type GameResult = Player.X | Player.O | Player.None

/**
 * State of a macro board (3x3 grid)
 */
export enum MacroState {
  X = 1,
  O = -1,
  None = 0,
  Draw = 2,
}

/**
 * Weights for the evaluation function
 */
export type EvaluationWeights = number[]

/**
 * Winning combinations for a 3x3 grid
 */
const WIN_LINES: readonly (readonly [number, number, number])[] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Cols
  [0, 4, 8],
  [2, 4, 6], // Diagonals
]

export class GameState {
  public board: Int8Array
  public macroBoard: Int8Array
  public activeMacroBoard: number
  public lastMove: number
  public lastPlayer: Player | 0

  constructor() {
    this.board = new Int8Array(81)
    this.macroBoard = new Int8Array(9)
    this.activeMacroBoard = -1
    this.lastMove = -1
    this.lastPlayer = Player.None
  }

  /**
   * Creates a deep copy of the current game state.
   */
  public clone(): GameState {
    const clone = new GameState()
    clone.board = new Int8Array(this.board)
    clone.macroBoard = new Int8Array(this.macroBoard)
    clone.activeMacroBoard = this.activeMacroBoard
    clone.lastMove = this.lastMove
    clone.lastPlayer = this.lastPlayer
    return clone
  }

  /**
   * Returns an array of legal move indices (0-80).
   */
  public getLegalMoves(): number[] {
    const moves: number[] = []
    if (this.checkWin() !== null) return moves

    // Try to move in the active macro board if it's still available
    if (
      this.activeMacroBoard !== -1 &&
      this.macroBoard[this.activeMacroBoard] === MacroState.None
    ) {
      const m = this.activeMacroBoard
      for (let i = 0; i < 9; i++) {
        if (this.board[m * 9 + i] === Player.None) {
          moves.push(m * 9 + i)
        }
      }
    }

    // If no moves are possible in the active macro board (or it was -1, or it was won/tied),
    // then all available squares in any AVAILABLE board are legal.
    if (moves.length === 0) {
      for (let m = 0; m < 9; m++) {
        if (this.macroBoard[m] === MacroState.None) {
          for (let i = 0; i < 9; i++) {
            if (this.board[m * 9 + i] === Player.None) {
              moves.push(m * 9 + i)
            }
          }
        }
      }
    }
    return moves
  }

  /**
   * Applies a move to the game state.
   * @param move The index of the square (0-80)
   * @param player The player making the move
   */
  public makeMove(move: number, player: Player): void {
    this.board[move] = player
    this.lastMove = move
    this.lastPlayer = player

    const m = Math.floor(move / 9)
    const localMove = move % 9

    // Check for macro board win/draw
    if (this.macroBoard[m] === MacroState.None) {
      let won = false
      for (const [a, b, c] of WIN_LINES) {
        if (
          this.board[m * 9 + a] === player &&
          this.board[m * 9 + b] === player &&
          this.board[m * 9 + c] === player
        ) {
          this.macroBoard[m] = player as unknown as MacroState
          won = true
          break
        }
      }

      if (!won) {
        let full = true
        for (let i = 0; i < 9; i++) {
          if (this.board[m * 9 + i] === Player.None) {
            full = false
            break
          }
        }
        if (full) {
          this.macroBoard[m] = MacroState.Draw
        }
      }
    }

    // Set next active macro board
    if (this.macroBoard[localMove] !== MacroState.None) {
      this.activeMacroBoard = -1
    } else {
      this.activeMacroBoard = localMove
    }
  }

  /**
   * Checks for a game-over condition.
   * @returns The winning Player, Player.None for a draw, or null if the game is still ongoing.
   */
  public checkWin(): GameResult | null {
    // Check for macro board wins
    for (const p of [Player.X, Player.O]) {
      const macroP = p as unknown as MacroState
      for (const [a, b, c] of WIN_LINES) {
        if (
          this.macroBoard[a] === macroP &&
          this.macroBoard[b] === macroP &&
          this.macroBoard[c] === macroP
        ) {
          return p
        }
      }
    }

    // Check for overall draw (all macro boards completed)
    let full = true
    for (let i = 0; i < 9; i++) {
      if (this.macroBoard[i] === MacroState.None) {
        full = false
        break
      }
    }

    if (full) return Player.None

    return null
  }
}

/**
 * Heuristic evaluation of the current board state.
 */
export function evaluateBoard(
  state: GameState,
  weights: EvaluationWeights,
  maximizingPlayer: Player = Player.X,
): number {
  const f = new Float64Array(10)
  const p = maximizingPlayer
  const opp = p === Player.X ? Player.O : Player.X

  // Features 1 & 2: Macro Wins & Macro Centers/Corners
  for (let m = 0; m < 9; m++) {
    const owner = state.macroBoard[m]
    if (owner === (p as unknown as MacroState)) {
      f[0] = (f[0] ?? 0) + 1
      if (m === 4) f[1] = (f[1] ?? 0) + 1
      else if (m === 0 || m === 2 || m === 6 || m === 8) f[1] = (f[1] ?? 0) + 0.5
    } else if (owner === (opp as unknown as MacroState)) {
      f[0] = (f[0] ?? 0) - 1
      if (m === 4) f[1] = (f[1] ?? 0) - 1
      else if (m === 0 || m === 2 || m === 6 || m === 8) f[1] = (f[1] ?? 0) - 0.5
    }
  }

  // Feature 3: Micro Centers
  for (let m = 0; m < 9; m++) {
    const centerIdx = m * 9 + 4
    if (state.board[centerIdx] === p) f[2] = (f[2] ?? 0) + 1
    else if (state.board[centerIdx] === opp) f[2] = (f[2] ?? 0) - 1
  }

  // Feature 4: Two-in-a-rows & Threat Generation (Feature 9)
  const countLines = (arr: Int8Array, offset: number, player: number) => {
    let twos = 0
    let threats = 0
    for (const [a, b, c] of WIN_LINES) {
      let pCnt = 0,
        eCnt = 0

      const valA = arr[offset + a]
      const valB = arr[offset + b]
      const valC = arr[offset + c]

      if (valA === player) pCnt++
      else if (valA === 0) eCnt++
      if (valB === player) pCnt++
      else if (valB === 0) eCnt++
      if (valC === player) pCnt++
      else if (valC === 0) eCnt++

      if (pCnt === 2 && eCnt === 1) twos++
      if (pCnt === 1 && eCnt === 2) threats++
    }
    return { twos, threats }
  }

  let maxTwos = countLines(state.macroBoard, 0, p).twos
  let minTwos = countLines(state.macroBoard, 0, opp).twos
  let maxThreats = 0
  let minThreats = 0

  for (let m = 0; m < 9; m++) {
    if (state.macroBoard[m] === MacroState.None) {
      const pStats = countLines(state.board, m * 9, p)
      const oStats = countLines(state.board, m * 9, opp)
      maxTwos += pStats.twos
      minTwos += oStats.twos
      maxThreats += pStats.threats
      minThreats += oStats.threats
    }
  }
  f[3] = maxTwos - minTwos
  f[8] = maxThreats - minThreats // Feature 9: Threat Generation

  // Feature 5: The Penalty (Sending opponent to -1)
  if (state.activeMacroBoard === -1 && state.lastPlayer !== Player.None) {
    if (state.lastPlayer === p)
      f[4] = -1 // We (p) moved, gave opp a free move -> Bad
    else if (state.lastPlayer === opp) f[4] = 1 // Opp moved, gave us (p) a free move -> Good
  }

  // Feature 6: Blocking
  if (state.lastMove !== -1) {
    const lm = state.lastMove
    const m = Math.floor(lm / 9)
    const local = lm % 9
    const lp = state.lastPlayer
    let blocked = 0

    for (const line of WIN_LINES) {
      if (line.includes(local)) {
        let oppCnt = 0,
          selfCnt = 0
        for (let j = 0; j < 3; j++) {
          const val = state.board[m * 9 + (line[j] ?? 0)]
          if (val === -lp) oppCnt++
          else if (val === lp) selfCnt++
        }
        if (oppCnt === 2 && selfCnt === 1) blocked++
      }
    }
    if (lp === p) f[5] = blocked
    else if (lp === opp) f[5] = -blocked
  }

  // Feature 7: Target Board Safety
  // Evaluate the macro-board the opponent is being sent to.
  // Score -1 for every piece the opponent owns in that board, +1 for every piece we own in it.
  if (state.activeMacroBoard !== -1) {
    const target = state.activeMacroBoard
    let pieceScore = 0
    for (let i = 0; i < 9; i++) {
      const val = state.board[target * 9 + i]
      if (val === (p as number)) pieceScore += 1
      else if (val === (opp as number)) pieceScore -= 1
    }
    f[6] = pieceScore
  } else {
    f[6] = 0
  }

  // Feature 8: Absolute Center Control
  const centerOwner = state.board[40] // 4*9 + 4
  if (centerOwner === p) f[7] = 1
  else if (centerOwner === opp) f[7] = -1

  // Feature 10: Toxicity (Nullified)
  f[9] = 0 // Nullified duplicate to prevent double-penalty

  let score = 0
  for (let i = 0; i < 10; i++) {
    score += (weights[i] ?? 0) * (f[i] ?? 0)
  }
  return score
}

/**
 * Minimax algorithm with alpha-beta pruning.
 */
export function minimax(
  state: GameState,
  depth: number,
  alpha: number,
  beta: number,
  maximizingPlayer: Player,
  weights: EvaluationWeights,
  currentPlayer: Player,
): number {
  const win = state.checkWin()
  if (win !== null) {
    if (win === maximizingPlayer) return 10000 + depth
    if (win === (maximizingPlayer === Player.X ? Player.O : Player.X)) return -10000 - depth
    return 0
  }

  if (depth === 0) {
    return evaluateBoard(state, weights, maximizingPlayer)
  }

  const moves = state.getLegalMoves()
  if (moves.length === 0) {
    return evaluateBoard(state, weights, maximizingPlayer)
  }

  if (currentPlayer === maximizingPlayer) {
    let maxEval = -Infinity
    for (const move of moves) {
      const childState = state.clone()
      childState.makeMove(move, currentPlayer)
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === Player.X ? Player.O : Player.X,
      )
      maxEval = Math.max(maxEval, ev)
      alpha = Math.max(alpha, ev)
      if (beta <= alpha) break
    }
    return maxEval
  } else {
    let minEval = Infinity
    for (const move of moves) {
      const childState = state.clone()
      childState.makeMove(move, currentPlayer)
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === Player.X ? Player.O : Player.X,
      )
      minEval = Math.min(minEval, ev)
      beta = Math.min(beta, ev)
      if (beta <= alpha) break
    }
    return minEval
  }
}

export interface AIModel {
  name: string
  depth: number
  errorRate: number
  weights: EvaluationWeights
}

export const AI_MODELS: Record<string, AIModel> = {
  M5: {
    name: 'M5',
    depth: 6,
    errorRate: 0,
    weights: [
      1.0722847064602274, 1.4099713598070003, -0.009565251809416253, 0.2679157953837268,
      0.09227479044701148, 0.541491870400754, -0.4631768174001959, 0.2625262833174409,
      -0.751406896310592, -0.6551348804123012,
    ],
  },
  M4: {
    name: 'M4',
    depth: 5,
    errorRate: 0,
    weights: [
      1.0722847064602274, 1.4099713598070003, -0.009565251809416253, 0.2679157953837268,
      0.09227479044701148, 0.541491870400754, -0.4631768174001959, 0.2625262833174409,
      -0.751406896310592, -0.6551348804123012,
    ],
  },
  M3: {
    name: 'M3',
    depth: 4,
    errorRate: 0,
    weights: [
      1.0722847064602274, 1.4099713598070003, -0.009565251809416253, 0.2679157953837268,
      0.09227479044701148, 0.541491870400754, -0.4631768174001959, 0.2625262833174409,
      -0.751406896310592, -0.6551348804123012,
    ],
  },
  M2: {
    name: 'M2',
    depth: 3,
    errorRate: 0,
    weights: [
      1.0722847064602274, 1.4099713598070003, -0.009565251809416253, 0.2679157953837268,
      0.09227479044701148, 0.541491870400754, -0.4631768174001959, 0.2625262833174409,
      -0.751406896310592, -0.6551348804123012,
    ],
  },
  M1: {
    name: 'M1',
    depth: 2,
    errorRate: 0,
    weights: [
      1.0722847064602274, 1.4099713598070003, -0.009565251809416253, 0.2679157953837268,
      0.09227479044701148, 0.541491870400754, -0.4631768174001959, 0.2625262833174409,
      -0.751406896310592, -0.6551348804123012,
    ],
  },
}

/**
 * Calculates the best move for a given player using minimax.
 */
export function getBestMove(
  state: GameState,
  depth: number,
  weights: EvaluationWeights,
  player: Player,
  errorRate: number = 0,
): number {
  const moves = state.getLegalMoves()
  if (moves.length === 0) return -1

  const firstMove = moves[0]
  if (moves.length === 1 && firstMove !== undefined) return firstMove

  if (Math.random() < errorRate) {
    return moves[Math.floor(Math.random() * moves.length)] as number
  }

  let bestMoves: number[] = []
  let bestValue = -Infinity
  let alpha = -Infinity
  const beta = Infinity

  for (const move of moves) {
    const childState = state.clone()
    childState.makeMove(move, player)
    const moveValue = minimax(
      childState,
      depth - 1,
      alpha,
      beta,
      player,
      weights,
      player === Player.X ? Player.O : Player.X,
    )

    if (moveValue > bestValue) {
      bestValue = moveValue
      bestMoves = [move]
    } else if (moveValue === bestValue) {
      bestMoves.push(move)
    }
    alpha = Math.max(alpha, bestValue)
  }

  if (bestMoves.length > 0) {
    return bestMoves[Math.floor(Math.random() * bestMoves.length)] as number
  }

  return moves[0] ?? -1
}
