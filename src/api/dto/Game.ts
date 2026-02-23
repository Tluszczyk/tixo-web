import type {Models} from "appwrite";
import { GameStatus } from "./GameStatus";

export interface Game extends Models.DefaultRow {
  xPlayerId: string;
  oPlayerId: string;

  createdBy: string;

  winnerId: string;
  nexPlayerId: string;

  winner: string;
  status: GameStatus;
  moveHistory: string[];

  board: string;
  tileWinners: string;
}
