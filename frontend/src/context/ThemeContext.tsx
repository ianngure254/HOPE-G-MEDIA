import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Theme } from '../types/global'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

// Inline script injected before React hydrates to avoid flash
const THEME_SCRIPT = `
  (function() {
    try {
      var stored = localStorage.getItem('hgm-theme');
      var preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      if (preferred === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    try {
      const stored = localStorage.getItem('hgm-theme') as Theme | null
      if (stored === 'dark' || stored === 'light') return stored
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    } catch {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem('hgm-theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}
