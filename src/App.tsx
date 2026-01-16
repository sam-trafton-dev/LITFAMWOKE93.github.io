import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense, useState, useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Projects } from "@/components/Projects"

const DevLog = lazy(() => import('@/components/DevLog'))
const DevLogPost = lazy(() => import('@/components/DevLogPost'))

// CRT Effects Overlay Component
function CRTOverlay() {
  return (
    <>
      <div className="crt-scanlines" />
      <div className="crt-vignette" />
    </>
  )
}

// Boot Sequence Component
function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [bootLines, setBootLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  
  const bootMessages = [
    "BUILDING BETTER WORLDS",
    "MU-TH-UR 6000 INTERFACE v2.4.1",
    "═══════════════════════════════════",
    "INITIALIZING SYSTEM...",
    "LOADING PERSONNEL FILES...",
    "ESTABLISHING SECURE CONNECTION...",
    "ACCESS GRANTED",
    "",
    "> WELCOME, USER",
  ]

  useEffect(() => {
    if (currentLine < bootMessages.length) {
      const timer = setTimeout(() => {
        setBootLines(prev => [...prev, bootMessages[currentLine]])
        setCurrentLine(prev => prev + 1)
      }, currentLine === 0 ? 300 : 150 + Math.random() * 100)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(onComplete, 800)
      return () => clearTimeout(timer)
    }
  }, [currentLine, onComplete])

  return (
    <div className="boot-screen">
      <div className="max-w-2xl w-full px-8">
        {bootLines.map((line, index) => (
          <div 
            key={index} 
            className={`boot-text mb-1 ${index === 0 ? 'text-2xl mb-4' : ''} ${index === bootLines.length - 1 ? 'glow-pulse' : ''}`}
          >
            {line}
            {index === bootLines.length - 1 && <span className="cursor-blink">█</span>}
          </div>
        ))}
      </div>
      <CRTOverlay />
    </div>
  )
}

// Terminal Loading Fallback
function TerminalLoading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="text-wy-amber font-terminal text-xl glow-pulse">
          ACCESSING DATA...
          <span className="cursor-blink ml-1">█</span>
        </div>
      </div>
    </div>
  )
}

// Home page component with all sections
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}

function App() {
  const [booting, setBooting] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const handleBootComplete = () => {
    setFadeOut(true)
    setTimeout(() => setBooting(false), 500)
  }

  // Force dark mode for terminal aesthetic
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  if (booting) {
    return (
      <div className={fadeOut ? 'animate-boot-fade' : ''}>
        <BootSequence onComplete={handleBootComplete} />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col terminal-flicker">
        <CRTOverlay />
        <Header />
        <main className="flex-1">
          <Suspense fallback={<TerminalLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/devlog" element={<DevLog />} />
            <Route path="/devlog/:slug" element={<DevLogPost />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

