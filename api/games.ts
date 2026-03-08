import { functions, tablesDB } from '~/api/appwriteClient'
import type { Game } from '~/api/dto/Game'
import type { Models } from 'appwrite'
import type { CreateGameRequest } from '~/api/requests/CreateGameRequest.ts'
import type { JoinGameRequest } from '~/api/requests/JoinGameRequest.ts'

class GamesService {
  async createGame(
    symbol: 'X' | 'O',
    isOnDevice: boolean = false,
    requestedOpponentId: string | null = null,
  ): Promise<string | null> {
    const body: CreateGameRequest = { symbol, isOnDevice, requestedOpponentId }

    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify(body),
      xpath: '/games/create',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return response.gameId || response.$id || null
      } catch (e) {
        console.error('Failed to parse createGame response', e)
        return null
      }
    }

    return null
  }

  async joinGame(gameId: string): Promise<boolean> {
    const body: JoinGameRequest = { gameId: gameId }

    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify(body),
      xpath: '/games/join',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return !!response.success
      } catch (e) {
        console.error('Failed to parse joinGame response', e)
        return false
      }
    }

    return false
  }

  async listGames(): Promise<Game[]> {
    const rowList: Models.RowList<Game> = await tablesDB.listRows({
      databaseId: 'tixo',
      tableId: 'games',
    })

    return rowList.rows
  }

  async getGame(gameId: string): Promise<Game | null> {
    return await tablesDB.getRow<Game>({
      databaseId: 'tixo',
      tableId: 'games',
      rowId: gameId,
    })
  }

  async submitMove(
    gameId: string,
    x: number,
    y: number,
  ): Promise<{ success: boolean; status: string; winner: string; availableMoves: string } | null> {
    const body = { gameId, move: { x, y } }
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify(body),
      xpath: '/games/move',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (execution.status === 'completed') {
      try {
        return JSON.parse(execution.responseBody)
      } catch (e) {
        console.error('Failed to parse submitMove response', e)
        return null
      }
    }
    return null
  }

  async abandonGame(gameId: string): Promise<{ success: boolean; winner?: string } | null> {
    const body = { gameId }
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify(body),
      xpath: '/games/abandon',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (execution.status === 'completed') {
      try {
        return JSON.parse(execution.responseBody)
      } catch (e) {
        console.error('Failed to parse abandonGame response', e)
        return null
      }
    }
    return null
  }

  async cancelGame(gameId: string): Promise<{ success: boolean; winner?: string } | null> {
    return await this.abandonGame(gameId)
  }

  async analyzeGame(
    gameId: string,
    modelName: 'neural' | 'heuristic' = 'neural',
  ): Promise<boolean> {
    const body = { gameId, modelName }
    const execution = await functions.createExecution({
      functionId: 'ai-handler',
      body: JSON.stringify(body),
      xpath: '/ai/analysis',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return !!response.success
      } catch (e) {
        console.error('Failed to parse analyzeGame response', e)
        return false
      }
    }
    return false
  }
}
export const games = new GamesService()
