import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/\\~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayChars, setDisplayChars] = useState("UILD")
  const [isGlitching, setIsGlitching] = useState(false)
  const [typedText, setTypedText] = useState("")

  // The middle parts that change: UILD <-> REAK (both 4 chars)
  const middleParts = ["UILD", "REAK"]
  const fullText = "ENGINEER.DEVELOPER.PROBLEM_SOLVER"

  // Generate random glitch characters
  const getRandomChars = useCallback((length: number) => {
    return Array.from({ length }, () => 
      GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
    ).join("")
  }, [])

  // Glitch transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      const targetIndex = (currentIndex + 1) % middleParts.length
      const targetChars = middleParts[targetIndex]

      // Glitch animation: rapid random characters before settling
      let glitchCount = 0
      const maxGlitches = 12

      const glitchInterval = setInterval(() => {
        if (glitchCount < maxGlitches) {
          // Random glitch characters with occasional "correct" letters bleeding through
          const glitched = Array.from({ length: 4 }, (_, i) => {
            // Increase chance of correct letter as we get closer to end
            if (Math.random() < glitchCount / maxGlitches) {
              return targetChars[i]
            }
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }).join("")
          setDisplayChars(glitched)
          glitchCount++
        } else {
          // Settle on target
          setDisplayChars(targetChars)
          setCurrentIndex(targetIndex)
          setIsGlitching(false)
          clearInterval(glitchInterval)
        }
      }, 50) // Fast flicker speed

    }, 8000)

    return () => clearInterval(interval)
  }, [currentIndex, getRandomChars])

  // Typing effect for subtitle
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background pt-20 px-4 relative"
    >
      {/* Terminal grid background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(38 100% 50% / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(38 100% 50% / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          {/* System Status Header */}
          <div className="text-xs md:text-sm text-muted-foreground tracking-widest mb-8">
            <span className="text-primary">[</span>
            SYSTEM STATUS: OPERATIONAL
            <span className="text-primary">]</span>
            <span className="ml-2 status-dot-active inline-block w-2 h-2 rounded-full" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-terminal tracking-tight text-glow-intense">
            <span className="block text-muted-foreground text-2xl md:text-3xl mb-4">&gt; DIRECTIVE:</span>
            <span className="text-primary">ALWAYS</span>
            <br />
            <span className="block my-2">
              {/* Static B */}
              <span>B</span>
              {/* Glitching middle characters */}
              <span className={isGlitching ? "text-flicker" : ""}>
                {displayChars}
              </span>
              {/* Static ING */}
              <span>ING</span>
            </span>
            <span className="text-primary">SOMETHING</span>
          </h1>
          
          {/* Typed subtitle */}
          <div className="font-mono text-sm md:text-base text-muted-foreground max-w-2xl mx-auto border border-border p-4 bg-card/50">
            <span className="text-primary">&gt; </span>
            {typedText}
            <span className="cursor-blink text-primary">█</span>
          </div>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Building digital products and solving interesting problems.
            <br />
            <span className="text-xs text-primary/60">[ CLEARANCE LEVEL: PUBLIC ]</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="min-w-[180px] text-sm tracking-wider"
            >
              [ ACCESS PERSONNEL FILE ]
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="min-w-[180px] text-sm tracking-wider"
            >
              [ VIEW PROJECT DATA ]
            </Button>
          </div>
          
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="text-muted-foreground hover:text-primary transition-colors group"
              aria-label="Scroll down"
            >
              <div className="text-xs tracking-widest mb-2 group-hover:glow-pulse">SCROLL</div>
              <ArrowDown className="h-6 w-6 mx-auto animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
