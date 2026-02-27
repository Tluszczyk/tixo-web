export interface CreateGameRequest {
  symbol: 'X' | 'O'
  isOnDevice: boolean
  requestedOpponentId?: string | null
}
