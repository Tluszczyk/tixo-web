import {functions, tablesDB} from "@/api/appwriteClient";
import type {Game} from "@/api/dto/Game";
import {HandleAppwriteErrors} from "@/api/utils/decorators";
import type {Models} from "appwrite";
import type { CreateGameRequest } from '@/api/requests/CreateGameRequest.ts'
import type { JoinGameRequest } from '@/api/requests/JoinGameRequest.ts'

class GamesService {
  @HandleAppwriteErrors({}, null)
  async createGame(symbol: 'X' | 'O'): Promise<string | null> {
    const body: CreateGameRequest = { symbol: symbol }

    const execution = await functions.createExecution({
      functionId: "create-game",
      body: JSON.stringify(body),
    });

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody);
        return response.gameId || response.$id || null;
      } catch (e) {
        console.error('Failed to parse createGame response', e);
        return null;
      }
    }

    return null;
  }

  @HandleAppwriteErrors({}, null)
  async joinGame(gameId: string): Promise<boolean> {
    const body: JoinGameRequest = { gameId: gameId }

    const execution = await functions.createExecution({
      functionId: "join-game",
      body: JSON.stringify(body),
    });

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody);
        return !!response.success;
      } catch (e) {
        console.error('Failed to parse joinGame response', e);
        return false;
      }
    }

    return false;
  }

  @HandleAppwriteErrors({},[])
  async listGames(): Promise<Game[]> {
    const rowList: Models.RowList<Game> = await tablesDB.listRows({
        databaseId: "tixo",
        tableId: "games"
    })

    return rowList.rows;
  }

  @HandleAppwriteErrors({},null)
  async getGame(gameId: string): Promise<Game | null> {
    return await tablesDB.getRow<Game>({
      databaseId: "tixo",
      tableId: "games",
      rowId: gameId
    })
  }
}

export const games = new GamesService();
