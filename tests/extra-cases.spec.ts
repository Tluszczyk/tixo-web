/* eslint-disable @typescript-eslint/no-explicit-any */
import { nextTick } from "vue"
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import GameOverModal from '~/components/Game/GameOverModal.vue'
import Board from '~/components/Board.vue'
import GameStatusHUD from '~/components/Game/GameStatusHUD.vue'
import GamePage from '~/pages/game/[id].vue'
import { mockAccount, mockGames } from './setup'
import { GameStatus } from '~/api/dto/GameStatus'
import { useAuthStore } from '~/stores/auth'

describe('Extra Test Cases (Elite QA)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockAccount.get.mockResolvedValue({ $id: 'user-123', name: 'Test User' })
  })

  it('Draw State: GameOverModal shows DRAW message correctly', async () => {
    const component = await mountSuspended(GameOverModal, {
      props: {
        show: true,
        matchResult: 'DRAW'
      }
    })
    
    expect(component.text()).toContain("IT'S A DRAW!")
    expect(component.text()).toContain("A perfectly balanced match.")
    expect(component.find('.pi-arrows-h').exists()).toBe(true)
  })

  it('Play out of turn: Board cells are readonly and do not emit cell-click', async () => {
    const component = await mountSuspended(Board, {
      props: {
        readonly: true,
        board: '.'.repeat(81)
      }
    })
    
    const firstCell = component.find('.flex.items-center.justify-center.aspect-square')
    await firstCell.trigger('click')
    
    expect(component.emitted('cell-click')).toBeUndefined()
  })

  it('Network Failures: UI handles error during move submission', async () => {
     const mockGame = {
      $id: 'game-123',
      status: GameStatus.IN_PROGRESS,
      xPlayerId: 'user-123',
      oPlayerId: 'user-456',
      moveHistory: ['E4'],
      board: '.'.repeat(81),
      tileWinners: '.'.repeat(9),
      nextPlayerId: 'user-123', // It's our turn
      analysisStatus: 'NOT_ANALYZED',
      isOnDevice: false,
      requestedOpponentId: null
    }
    mockGames.getGame.mockResolvedValue(mockGame as any)
    mockGames.submitMove.mockRejectedValue(new Error('Network Error'))

    const component = await mountSuspended(GamePage, { route: "/game/game-123" })
    const authStore = useAuthStore()
    await authStore.checkAuth()
    await nextTick()
    await nextTick()
    
    // Set a selected cell so submitMove can proceed
    const board = component.findComponent(Board)
    await board.vm.$emit('cell-click', 0)
    await nextTick()

    // Find the HUD component and trigger submit-move
    const hud = component.findComponent(GameStatusHUD)
    expect(hud.exists()).toBe(true)
    
    // We expect console.error to be called
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    await hud.vm.$emit('submit-move')
    await nextTick()
    
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Failed to submit move'), expect.any(Error))
    consoleSpy.mockRestore()
  })
})
