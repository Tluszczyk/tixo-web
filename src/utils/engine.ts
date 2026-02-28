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
export type GameResult = Player.X | Player.O | Player.None;

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
export type EvaluationWeights = number[] | [number, number, number, number, number, number];

/**
 * Winning combinations for a 3x3 grid
 */
const WIN_LINES: readonly (readonly [number, number, number])[] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export class GameState {
  public board: Int8Array;
  public macroBoard: Int8Array;
  public activeMacroBoard: number;
  public lastMove: number;
  public lastPlayer: Player | 0;

  constructor() {
    this.board = new Int8Array(81);
    this.macroBoard = new Int8Array(9);
    this.activeMacroBoard = -1;
    this.lastMove = -1;
    this.lastPlayer = Player.None;
  }

  /**
   * Creates a deep copy of the current game state.
   */
  public clone(): GameState {
    const clone = new GameState();
    clone.board.set(this.board);
    clone.macroBoard.set(this.macroBoard);
    clone.activeMacroBoard = this.activeMacroBoard;
    clone.lastMove = this.lastMove;
    clone.lastPlayer = this.lastPlayer;
    return clone;
  }

  /**
   * Returns an array of legal move indices (0-80).
   */
  public getLegalMoves(): number[] {
    const moves: number[] = [];
    if (this.checkWin() !== null) return moves;

    // Try to move in the active macro board if it's still available
    if (this.activeMacroBoard !== -1 && this.macroBoard[this.activeMacroBoard] === MacroState.None) {
      const m = this.activeMacroBoard;
      for (let i = 0; i < 9; i++) {
        if (this.board[m * 9 + i] === Player.None) {
          moves.push(m * 9 + i);
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
              moves.push(m * 9 + i);
            }
          }
        }
      }
    }
    return moves;
  }

  /**
   * Applies a move to the game state.
   * @param move The index of the square (0-80)
   * @param player The player making the move
   */
  public makeMove(move: number, player: Player): void {
    this.board[move] = player;
    this.lastMove = move;
    this.lastPlayer = player;

    const m = Math.floor(move / 9);
    const localMove = move % 9;

    // Check for macro board win/draw
    if (this.macroBoard[m] === MacroState.None) {
      let won = false;
      for (const [a, b, c] of WIN_LINES) {
        if (
          this.board[m * 9 + a] === player &&
          this.board[m * 9 + b] === player &&
          this.board[m * 9 + c] === player
        ) {
          this.macroBoard[m] = player as unknown as MacroState;
          won = true;
          break;
        }
      }

      if (!won) {
        let full = true;
        for (let i = 0; i < 9; i++) {
          if (this.board[m * 9 + i] === Player.None) {
            full = false;
            break;
          }
        }
        if (full) {
          this.macroBoard[m] = MacroState.Draw;
        }
      }
    }

    // Set next active macro board
    if (this.macroBoard[localMove] !== MacroState.None) {
      this.activeMacroBoard = -1;
    } else {
      this.activeMacroBoard = localMove;
    }
  }

  /**
   * Checks for a game-over condition.
   * @returns The winning Player, Player.None for a draw, or null if the game is still ongoing.
   */
  public checkWin(): GameResult | null {
    // Check for macro board wins
    for (const p of [Player.X, Player.O]) {
      const macroP = p as unknown as MacroState;
      for (const [a, b, c] of WIN_LINES) {
        if (
          this.macroBoard[a] === macroP &&
          this.macroBoard[b] === macroP &&
          this.macroBoard[c] === macroP
        ) {
          return p;
        }
      }
    }

    // Check for overall draw (all macro boards completed)
    let full = true;
    for (let i = 0; i < 9; i++) {
      if (this.macroBoard[i] === MacroState.None) {
        full = false;
        break;
      }
    }

    if (full) return Player.None;

    return null;
  }
}

/**
 * Heuristic evaluation of the current board state.
 */
export function evaluateBoard(
  state: GameState,
  weights: EvaluationWeights,
  maximizingPlayer: Player = Player.X
): number {
  let f1 = 0, f2 = 0, f3 = 0, f4 = 0, f5 = 0, f6 = 0;
  const p = maximizingPlayer;
  const opp = (p === Player.X ? Player.O : Player.X);

  // Features 1 & 2: Macro Wins & Macro Centers/Corners
  for (let m = 0; m < 9; m++) {
    const owner = state.macroBoard[m];
    if (owner === (p as unknown as MacroState)) {
      f1 += 1;
      if (m === 4) f2 += 1;
      else if (m === 0 || m === 2 || m === 6 || m === 8) f2 += 0.5;
    } else if (owner === (opp as unknown as MacroState)) {
      f1 -= 1;
      if (m === 4) f2 -= 1;
      else if (m === 0 || m === 2 || m === 6 || m === 8) f2 -= 0.5;
    }
  }

  // Feature 3: Micro Centers
  for (let m = 0; m < 9; m++) {
    const centerIdx = m * 9 + 4;
    if (state.board[centerIdx] === p) f3 += 1;
    else if (state.board[centerIdx] === opp) f3 -= 1;
  }

  // Feature 4: Two-in-a-rows (Micro and Macro)
  const countTwos = (arr: Int8Array, offset: number, player: number) => {
    let twos = 0;
    for (const [a, b, c] of WIN_LINES) {
      let pCnt = 0, eCnt = 0;

      const vals = [arr[offset + a], arr[offset + b], arr[offset + c]];
      for (const val of vals) {
        if (val === player) pCnt++;
        else if (val === 0) eCnt++;
      }

      if (pCnt === 2 && eCnt === 1) twos++;
    }
    return twos;
  };

  let maxTwos = countTwos(state.macroBoard, 0, p);
  let minTwos = countTwos(state.macroBoard, 0, opp);
  for (let m = 0; m < 9; m++) {
    if (state.macroBoard[m] === MacroState.None) {
      maxTwos += countTwos(state.board, m * 9, p);
      minTwos += countTwos(state.board, m * 9, opp);
    }
  }
  f4 = maxTwos - minTwos;

  // Feature 5: The Penalty
  if (state.activeMacroBoard === -1 && state.lastPlayer !== Player.None) {
    if (state.lastPlayer === p) f5 = -1;
    else if (state.lastPlayer === opp) f5 = 1;
  }

  // Feature 6: Blocking
  if (state.lastMove !== -1) {
    const lm = state.lastMove;
    const m = Math.floor(lm / 9);
    const local = lm % 9;
    const lp = state.lastPlayer;
    let blocked = 0;

    for (const line of WIN_LINES) {
      if (line.includes(local)) {
        let oppCnt = 0, selfCnt = 0;
        for (const cellIdx of line) {
          const val = state.board[m * 9 + cellIdx];
          if (val === -lp) oppCnt++;
          else if (val === lp) selfCnt++;
        }
        if (oppCnt === 2 && selfCnt === 1) blocked++;
      }
    }
    if (lp === p) f6 = blocked;
    else if (lp === opp) f6 = -blocked;
  }

  return (
    weights[0] * f1 +
    weights[1] * f2 +
    weights[2] * f3 +
    weights[3] * f4 +
    weights[4] * f5 +
    weights[5] * f6
  );
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
  currentPlayer: Player
): number {
  const win = state.checkWin();
  if (win !== null) {
    if (win === maximizingPlayer) return 10000 + depth;
    if (win === (maximizingPlayer === Player.X ? Player.O : Player.X)) return -10000 - depth;
    return 0;
  }

  if (depth === 0) {
    return evaluateBoard(state, weights, maximizingPlayer);
  }

  const moves = state.getLegalMoves();
  if (moves.length === 0) {
    return evaluateBoard(state, weights, maximizingPlayer);
  }

  if (currentPlayer === maximizingPlayer) {
    let maxEval = -Infinity;
    for (const move of moves) {
      const childState = state.clone();
      childState.makeMove(move, currentPlayer);
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === Player.X ? Player.O : Player.X
      );
      maxEval = Math.max(maxEval, ev);
      alpha = Math.max(alpha, ev);
      if (beta <= alpha) break;
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      const childState = state.clone();
      childState.makeMove(move, currentPlayer);
      const ev = minimax(
        childState,
        depth - 1,
        alpha,
        beta,
        maximizingPlayer,
        weights,
        currentPlayer === Player.X ? Player.O : Player.X
      );
      minEval = Math.min(minEval, ev);
      beta = Math.min(beta, ev);
      if (beta <= alpha) break;
    }
    return minEval;
  }
}

export interface AIModel {
  name: string;
  depth: number;
  errorRate: number;
  weights: EvaluationWeights;
}

export const AI_MODELS: Record<string, AIModel> = {
  "M5": {
    name: "M5",
    depth: 3,
    errorRate: 0,
    weights: [4.791876510684078, 2.200592306065337, -0.41240583392210495, 0.8161467538544307, 0.2967644390015915, -2.786420976913702]
  },
  "M4": {
    name: "M4",
    depth: 3,
    errorRate: 0.18,
    weights: [4.791876510684078, 2.200592306065337, -0.41240583392210495, 0.8161467538544307, 0.2967644390015915, -2.786420976913702]
  },
  "M3": {
    name: "M3",
    depth: 3,
    errorRate: 0.31,
    weights: [4.791876510684078, 2.200592306065337, -0.41240583392210495, 0.8161467538544307, 0.2967644390015915, -2.786420976913702]
  },
  "M2": {
    name: "M2",
    depth: 3,
    errorRate: 0.4800000000000001,
    weights: [4.791876510684078, 2.200592306065337, -0.41240583392210495, 0.8161467538544307, 0.2967644390015915, -2.786420976913702]
  },
  "M1": {
    name: "M1",
    depth: 3,
    errorRate: 0.6700000000000003,
    weights: [4.791876510684078, 2.200592306065337, -0.41240583392210495, 0.8161467538544307, 0.2967644390015915, -2.786420976913702]
  }
};

/**
 * Calculates the best move for a given player using minimax.
 */
export function getBestMove(
  state: GameState,
  depth: number,
  weights: EvaluationWeights,
  player: Player,
  errorRate: number = 0
): number {
  const moves = state.getLegalMoves();
  if (moves.length === 0) return -1;
  
  const firstMove = moves[0];
  if (moves.length === 1 && firstMove !== undefined) return firstMove;

  if (Math.random() < errorRate) {
    return moves[Math.floor(Math.random() * moves.length)] as number;
  }

  let bestMoves: number[] = [];
  let bestValue = -Infinity;
  let alpha = -Infinity;
  const beta = Infinity;

  for (const move of moves) {
    const childState = state.clone();
    childState.makeMove(move, player);
    const moveValue = minimax(
      childState,
      depth - 1,
      alpha,
      beta,
      player,
      weights,
      player === Player.X ? Player.O : Player.X
    );

    if (moveValue > bestValue) {
      bestValue = moveValue;
      bestMoves = [move];
    } else if (moveValue === bestValue) {
      bestMoves.push(move);
    }
    alpha = Math.max(alpha, bestValue);
  }

  if (bestMoves.length > 0) {
    return bestMoves[Math.floor(Math.random() * bestMoves.length)] as number;
  }

  return moves[0] ?? -1;
}
