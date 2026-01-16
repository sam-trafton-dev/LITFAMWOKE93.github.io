import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavItem {
  label: string
  code: string
  href: string
  type: "scroll" | "route" | "external"
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const location = useLocation()
  const navigate = useNavigate()

  const navItems: NavItem[] = [
    { label: "HOME", code: "01", href: "/", type: "route" },
    { label: "PERSONNEL", code: "02", href: "#about", type: "scroll" },
    { label: "PROJECTS", code: "03", href: "#projects", type: "scroll" },
    { label: "SYS_LOG", code: "04", href: "/devlog", type: "route" },
    { label: "TRANSMIT", code: "05", href: "mailto:admin@samtrafton.dev?subject=Hello Sam,", type: "external" },
  ]

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (item: NavItem) => {
    setIsOpen(false)
    
    if (item.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
          const element = document.querySelector(item.href)
          element?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      } else {
        const element = document.querySelector(item.href)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b-2 border-primary/50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <Terminal className="h-5 w-5 text-primary" />
          <div className="font-terminal text-lg tracking-wider">
            <span className="text-primary">US</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-primary">WY</span>
            <span className="text-muted-foreground">::</span>
            <span className="text-foreground">TRAFTON_S</span>
          </div>
          <a 
            href="https://ko-fi.com/dynamicimposter" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:text-primary transition-colors border border-border px-2 py-0.5"
          >
            [DONATE]
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center">
            {navItems.map((item, index) => (
              <li key={item.label} className="flex items-center">
                {item.type === "external" ? (
                  <a
                    href={item.href}
                    className="px-3 py-1 text-xs tracking-widest hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/30"
                  >
                    <span className="text-muted-foreground">{item.code}:</span>
                    {item.label}
                  </a>
                ) : item.type === "route" ? (
                  <Link
                    to={item.href}
                    className="px-3 py-1 text-xs tracking-widest hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/30"
                  >
                    <span className="text-muted-foreground">{item.code}:</span>
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-3 py-1 text-xs tracking-widest hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/30"
                  >
                    <span className="text-muted-foreground">{item.code}:</span>
                    {item.label}
                  </button>
                )}
                {index < navItems.length - 1 && (
                  <span className="text-muted-foreground/30">│</span>
                )}
              </li>
            ))}
          </ul>
          
          {/* System Time */}
          <div className="ml-4 pl-4 border-l border-primary/30 text-xs text-muted-foreground font-mono">
            <span className="text-primary/60">SYS_TIME:</span>
            <span className="ml-1 tabular-nums">{currentTime}</span>
          </div>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="border border-primary/30">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l-2 border-primary/50">
            <SheetHeader>
              <SheetTitle className="font-terminal text-primary tracking-widest">
                [ NAVIGATION ]
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.type === "external" ? (
                      <a
                        href={item.href}
                        className="block p-3 text-sm tracking-widest hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-muted-foreground mr-2">[{item.code}]</span>
                        {item.label}
                      </a>
                    ) : item.type === "route" ? (
                      <Link
                        to={item.href}
                        className="block p-3 text-sm tracking-widest hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-muted-foreground mr-2">[{item.code}]</span>
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="block w-full text-left p-3 text-sm tracking-widest hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all"
                      >
                        <span className="text-muted-foreground mr-2">[{item.code}]</span>
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <div className="pt-6 mt-6 border-t border-primary/30">
                <div className="text-xs text-muted-foreground">
                  <div>SYS_TIME: {currentTime}</div>
                  <div className="mt-1">STATUS: <span className="text-green-500">ONLINE</span></div>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

