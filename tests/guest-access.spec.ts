import { nextTick } from "vue"
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Sidebar from '~/components/Sidebar.vue'
import { mockAccount } from './setup'
import { useAuthStore } from '~/stores/auth'

describe('Guest Access (Integration)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    // Setup guest state in Appwrite mock
    mockAccount.get.mockRejectedValue(new Error('Unauthorized'))
  })

  it('Sidebar: visible and displays restricted items with lock icon for guests', async () => {
    const component = await mountSuspended(Sidebar)
    const authStore = useAuthStore()
    await authStore.checkAuth()
    await nextTick()
    
    // Check if Match (guest allowed) is visible
    expect(component.text()).toContain('Match')
    
    // Check if restricted items have the lock icon
    const buttons = component.findAll('button')
    const restrictedItems = buttons.filter(b => 
      b.text().includes('Profile')
    )
    
    expect(restrictedItems.length).toBe(1)
    restrictedItems.forEach(item => {
      expect(item.find('.pi-lock').exists()).toBe(true)
      expect(item.classes()).toContain('opacity-50')
    })
  })

  it('Access Control: auth store reflects guest state', async () => {
    const authStore = useAuthStore()
    await authStore.checkAuth()
    
    expect(authStore.isLoggedIn).toBe(false)
    expect(mockAccount.get).toHaveBeenCalled()
  })

  it('Progressive Onboarding: guest can see the Match button', async () => {
    const component = await mountSuspended(Sidebar)
    await nextTick()
    
    const buttons = component.findAll('button')
    const matchButton = buttons.find(b => b.text().includes('Match'))
    
    expect(matchButton?.exists()).toBe(true)
    expect(matchButton?.find('.pi-lock').exists()).toBe(false)
    expect(matchButton?.classes()).not.toContain('opacity-50')
  })
})
