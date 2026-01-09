import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

interface NavItem {
  label: string
  href: string
  type: "scroll" | "route" | "external"
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navItems: NavItem[] = [
    { label: "Home", href: "/", type: "route" },
    { label: "About Me", href: "#about", type: "scroll" },
    { label: "Projects", href: "#projects", type: "scroll" },
    { label: "DevLog", href: "/devlog", type: "route" },
    { label: "Contact", href: "mailto:admin@samtrafton.dev?subject=Hello Sam,", type: "external" },
  ]

  const handleNavClick = (item: NavItem) => {
    setIsOpen(false)
    
    if (item.type === "scroll") {
      // If we're not on the home page, navigate there first then scroll
      if (location.pathname !== "/") {
        navigate("/")
        // Wait for navigation then scroll
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Sam Trafton</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.type === "external" ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : item.type === "route" ? (
                  <Link
                    to={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="mt-8">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label}>
                    {item.type === "external" ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : item.type === "route" ? (
                      <Link
                        to={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item)}
                        className="text-lg font-medium hover:text-primary transition-colors text-left w-full"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <div className="pt-6 mt-6 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

