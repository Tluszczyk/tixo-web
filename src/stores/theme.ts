import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<'dark' | 'light'>((localStorage.getItem('theme') as 'dark' | 'light') || 'dark')

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  watch(
    theme,
    (newTheme) => {
      localStorage.setItem('theme', newTheme)
      applyTheme(newTheme)
    },
    { immediate: true },
  )

  function applyTheme(t: 'dark' | 'light') {
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }

  return { theme, toggleTheme }
})
