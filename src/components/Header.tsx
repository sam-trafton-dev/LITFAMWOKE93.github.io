import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "mailto:admin@samtrafton.dev?subject=Hello Sam," },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
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
                {item.href.startsWith("mailto:") ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
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
                    {item.href.startsWith("mailto:") ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium hover:text-primary transition-colors block"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
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

