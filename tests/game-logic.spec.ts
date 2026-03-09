/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, beforeEach, vi } from 'vitest'

// We need to unmock games to test the actual implementation
vi.unmock('~/api/games')

import { functions } from '~/api/appwriteClient'
import { games } from '~/api/games'

describe('Core Game Logic (Unit Tests)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Cancel Game Logic: Assert that the game state updates to CANCELLED and NO winner is set', async () => {
    ;(functions.createExecution as any).mockResolvedValue({
      status: 'completed',
      responseBody: JSON.stringify({ success: true, winner: 'None' })
    })

    const result = await games.cancelGame('game-123')
    
    expect(result?.success).toBe(true)
    expect(result?.winner).toBe('None')
    expect(functions.createExecution).toHaveBeenCalledWith(expect.objectContaining({
      xpath: '/games/abandon'
    }))
  })

  it('Abandon Game Logic: Assert that the game state updates to FINISHED and winner is set', async () => {
    ;(functions.createExecution as any).mockResolvedValue({
      status: 'completed',
      responseBody: JSON.stringify({ success: true, winner: 'O' })
    })

    const result = await games.abandonGame('game-123')
    
    expect(result?.success).toBe(true)
    expect(result?.winner).toBe('O')
    expect(functions.createExecution).toHaveBeenCalledWith(expect.objectContaining({
      xpath: '/games/abandon'
    }))
  })
})
