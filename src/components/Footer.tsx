import { Github, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-accent border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sam Trafton. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sam-trafton-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sam-trafton-042334244/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              className="invisible"
              rel="me"
              href="https://mastodon.social/@litfamwoke"
            >
              Mastodon
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

