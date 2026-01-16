import { useEffect, useState } from "react"

export function Footer() {
  const [uptime, setUptime] = useState("00:00:00")
  
  useEffect(() => {
    const startTime = Date.now()
    const updateUptime = () => {
      const elapsed = Date.now() - startTime
      const hours = Math.floor(elapsed / 3600000).toString().padStart(2, '0')
      const minutes = Math.floor((elapsed % 3600000) / 60000).toString().padStart(2, '0')
      const seconds = Math.floor((elapsed % 60000) / 1000).toString().padStart(2, '0')
      setUptime(`${hours}:${minutes}:${seconds}`)
    }
    const interval = setInterval(updateUptime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-background border-t-2 border-primary/50 mt-auto">
      <div className="container mx-auto px-4 py-4">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider">
          {/* Left: WY Branding */}
          <div className="flex items-center gap-4">
            <div className="border border-primary/30 px-3 py-1">
              <span className="text-primary font-terminal">CORALLIS</span>
              <span className="text-muted-foreground ml-2">CORP</span>
            </div>
            <div className="text-muted-foreground hidden sm:block">
              "BUILDING BETTER WORLDS"
            </div>
          </div>

          {/* Center: Status indicators */}
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]" />
              <span>CONN:ACTIVE</span>
            </div>
            <div className="hidden sm:block">
              UPTIME:<span className="text-primary ml-1 tabular-nums">{uptime}</span>
            </div>
            <div className="hidden md:block">
              SESSION:<span className="text-primary ml-1">AUTHENTICATED</span>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sam-trafton-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-3 py-1 hover:border-primary hover:text-primary transition-all"
            >
              [GIT]
            </a>
            <a
              href="https://www.linkedin.com/in/sam-trafton-042334244/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-3 py-1 hover:border-primary hover:text-primary transition-all"
            >
              [LI]
            </a>
            <a
              className="invisible absolute"
              rel="me"
              href="https://mastodon.social/@litfamwoke"
            >
              Mastodon
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-3 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} TRAFTON_S // ALL_RIGHTS_RESERVED
          </div>
          <div className="font-mono">
            TERMINAL_ID: <span className="text-primary">MU-TH-UR_6000</span> // 
            BUILD: <span className="text-primary">2.4.1</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

