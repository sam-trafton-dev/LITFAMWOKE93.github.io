import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const words = ["Building", "Breaking"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentWord((prev) => (prev + 1) % words.length)
        setIsTransitioning(false)
      }, 500) // Half the transition duration
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-muted/50 to-background pt-20 px-4"
    >
      <div className="container mx-auto text-center">
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-primary">Always</span>
            <br></br>
            <span className="relative">
              <span 
                className={`block mb-2 transition-all duration-500 ease-in-out ${
                  isTransitioning ? 'opacity-0 blur-[2px]' : 'opacity-100 blur-0'
                }`}
              >
                {words[currentWord]}
              </span>
            </span>
            <span className="text-primary">Something</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Engineer at heart, building digital products and solving interesting
            problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="min-w-[140px]"
            >
              Learn More
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#projects")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              className="min-w-[140px]"
            >
              View Projects
            </Button>
          </div>
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

