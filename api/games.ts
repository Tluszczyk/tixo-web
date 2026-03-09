import { functions, tablesDB } from '~/api/appwriteClient'
import { ExecutionMethod } from 'appwrite'
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

  async listGames(
    limit: number = 25,
    offset: number = 0,
    filters: { status?: string; playerId?: string; creatorId?: string; isOnDevice?: boolean } = {},
  ): Promise<{ games: Game[]; total: number }> {
    const params = new URLSearchParams()
    params.append('limit', limit.toString())
    params.append('offset', offset.toString())
    if (filters.status) params.append('status', filters.status)
    if (filters.playerId) params.append('playerId', filters.playerId)
    if (filters.creatorId) params.append('creatorId', filters.creatorId)
    if (filters.isOnDevice !== undefined) params.append('isOnDevice', filters.isOnDevice.toString())

    const execution = await functions.createExecution({
      functionId: 'app-handler',
      xpath: `/games/list?${params.toString()}`,
      method: ExecutionMethod.GET,
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return {
          games: response.games || [],
          total: response.total || (response.games || []).length,
        }
      } catch (e) {
        console.error('Failed to parse listGames response', e)
        return { games: [], total: 0 }
      }
    }
    return { games: [], total: 0 }
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
