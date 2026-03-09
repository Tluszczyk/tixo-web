/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick } from "vue"
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import GamePage from '~/pages/game/[id].vue'
import { mockAccount, mockTablesDB, mockGames } from './setup'
import { GameStatus } from '~/api/dto/GameStatus'
import { useAuthStore } from '~/stores/auth'

describe('In-Game UI Visibility (Integration)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Setup authenticated user
    mockAccount.get.mockResolvedValue({ $id: 'user-123', name: 'Test User' })
  })

  it('Cancel Game: Button shows "Cancel Match" when moves < 2', async () => {
    const mockGame = {
      $id: 'game-123',
      status: GameStatus.IN_PROGRESS,
      xPlayerId: 'user-123',
      oPlayerId: 'user-456',
      moveHistory: ['E4'], // 1 move
      analysisStatus: 'NOT_ANALYZED',
      isOnDevice: false,
      requestedOpponentId: null
    }
    mockGames.getGame.mockResolvedValue(mockGame as any)

    const component = await mountSuspended(GamePage, { route: "/game/game-123" })
    const authStore = useAuthStore()
    await authStore.checkAuth()
    await nextTick()
    await nextTick()
    
    // Find the button in the Active Game Actions section
    const buttons = component.findAll('button')
    const abandonButton = buttons.find(b => 
      b.text().includes('Cancel') || b.text().includes('Abandon')
    )
    
    expect(abandonButton?.exists()).toBe(true)
    expect(abandonButton?.text()).toContain('Cancel')
    expect(abandonButton?.text()).not.toContain('Abandon')
  })

  it('Abandon Game: Button shows "Abandon Match" when moves >= 2', async () => {
    const mockGame = {
      $id: 'game-123',
      status: GameStatus.IN_PROGRESS,
      xPlayerId: 'user-123',
      oPlayerId: 'user-456',
      moveHistory: ['E4', 'E5'], // 2 moves
      analysisStatus: 'NOT_ANALYZED',
      isOnDevice: false,
      requestedOpponentId: null
    }
    mockGames.getGame.mockResolvedValue(mockGame as any)

    const component = await mountSuspended(GamePage, { route: "/game/game-123" })
    const authStore = useAuthStore()
    await authStore.checkAuth()
    await nextTick()
    await nextTick()
    
    const buttons = component.findAll('button')
    const abandonButton = buttons.find(b => 
      b.text().includes('Cancel') || b.text().includes('Abandon')
    )
    
    expect(abandonButton?.exists()).toBe(true)
    expect(abandonButton?.text()).toContain('Abandon')
    expect(abandonButton?.text()).not.toContain('Cancel')
  })

  it('Post-Game Actions: Renders "Request Analysis" button when analysis does not exist', async () => {
    const mockGame = {
      $id: 'game-123',
      status: GameStatus.FINISHED,
      xPlayerId: 'user-123',
      oPlayerId: 'user-456',
      moveHistory: ['E4', 'E5', 'D4', 'D5'],
      analysisStatus: 'NOT_ANALYZED',
      isOnDevice: false,
      requestedOpponentId: null
    }
    mockGames.getGame.mockResolvedValue(mockGame as any)
    mockTablesDB.listRows.mockResolvedValue({ total: 0, rows: [] })

    const component = await mountSuspended(GamePage, { route: "/game/game-123" })
    const authStore = useAuthStore()
    await authStore.checkAuth()
    await nextTick()
    await nextTick()
    
    expect(component.text()).toContain('Tactical Synthesis')
    expect(component.findComponent({ name: 'GameAnalyticsDashboard' }).exists()).toBe(false)
  })
})
