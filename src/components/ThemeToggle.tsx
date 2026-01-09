import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')
  const [mounted, setMounted] = useState(false)

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(newTheme)
    }
  }

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
    if (stored) {
      setTheme(stored)
      applyTheme(stored)
    } else {
      applyTheme('system')
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
      if (!currentTheme || currentTheme === 'system') {
        applyTheme('system')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  }

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-10 h-10" />
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border p-1">
      <Button
        variant={theme === 'light' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleThemeChange('light')}
        className="h-8 w-8 p-0"
        aria-label="Light theme"
      >
        <Sun className="h-4 w-4" />
      </Button>
      <Button
        variant={theme === 'dark' ? 'secondary' : 'ghost'}
        size="sm"
        onClick={() => handleThemeChange('dark')}
        className="h-8 w-8 p-0"
        aria-label="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </Button>
    </div>
  )
}

