import {functions, tablesDB} from "@/api/appwriteClient";
import type {Game} from "@/api/dto/Game";
import {HandleAppwriteErrors} from "@/api/utils/decorators";
import type {Models} from "appwrite";
import { auth } from "@/api/authentication";

class GamesService {
  @HandleAppwriteErrors({}, null)
  async createGame(symbol: 'X' | 'O'): Promise<string | null> {
    const body: any = {symbol: symbol};

    const execution = await functions.createExecution({
      functionId: "699b73ca0012c5269d5b",
      body: JSON.stringify(body)
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
