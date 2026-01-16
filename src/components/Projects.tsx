import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Mail, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

// Terminal readout messages
const READOUT_MESSAGES = [
  "NOTE: SOME_ADVISE_PRUNING_PROJECTS //",
  "LEARNING_IS_JOURNEY //",
  "CODE_TRAIL_SHOWS_GROWTH //",
  "STARRED_ITEMS = CURRENT_PRIDE. . . ",
  ". . .",
  "END TRANSMISSION"
]

// Terminal readout component with typing effect
function TerminalReadout() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentMessage = READOUT_MESSAGES[currentMessageIndex]
    
    if (isTyping) {
      // Typing phase
      if (displayText.length < currentMessage.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentMessage.slice(0, displayText.length + 1))
        }, 30) // Typing speed
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, pause before clearing
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause to read
        return () => clearTimeout(timeout)
      }
    } else {
      // Clearing phase - move to next message
      const timeout = setTimeout(() => {
        setDisplayText("")
        setCurrentMessageIndex((prev) => (prev + 1) % READOUT_MESSAGES.length)
        setIsTyping(true)
      }, 300) // Brief pause before next message
      return () => clearTimeout(timeout)
    }
  }, [displayText, currentMessageIndex, isTyping])

  return (
    <div className="text-sm text-muted-foreground max-w-2xl mx-auto pt-4 border border-border p-4 bg-background/50 min-h-[60px] flex items-center">
      <span className="text-primary">&gt; </span>
      <span className="text-flicker">{displayText}</span>
      <span className="cursor-blink text-primary ml-0.5">█</span>
    </div>
  )
}

const projects = [
  {
    id: "001",
    title: "DYNAMIC_IMPOSTERS_DOME_LIGHTS",
    subtitle: "PROJECT_ZOMBOID_MOD",
    status: "DEPRECATED",
    description:
      "LUA_API_HIJACK // JAVA_ENGINE_LIGHTING_COMMANDS // USER_ABILITY: READ_BOOKS_IN_VEHICLES // FEATURE_NOW_IN_CORE_GAME // CHALLENGE: LUA_TABLES + UNOFFICIAL_JAVA_API_INSPECTION",
    tech: ["JAVA", "LUA"],
    image: "/img/didl_snap.png",
    link: "https://github.com/sam-trafton-dev/DIDL",
  },
  {
    id: "002",
    title: "BANKWAVE_NEON_NETWORTH",
    subtitle: "ITCH.IO_RELEASE",
    status: "ACTIVE",
    description:
      "INDIE_GAME_STUDIO_INTERNSHIP // GAME_JAM_TO_KICKSTARTER_EXPANSION // FIRST_GO_EXPERIENCE // PATTERNS: FAN_OUT.FAN_IN.RATE_LIMITING.WORKERS",
    tech: ["GO", "YARNSPINNER", "EBITENGINE"],
    image: "/img/bankwave_logo.png",
    link: "https://frabjous-studios.itch.io/bankwave",
  },
  {
    id: "003",
    title: "SWIPE_SLAM",
    subtitle: "ANDROID_CRUD_APP",
    status: "ARCHIVED",
    description:
      "ADLIB_POETRY_PROMPTS // CRUD_OPERATIONS: CREATE.READ.UPDATE.DELETE // COLLABORATIVE_POEM_BUILDING // PUBLICATION_STATUS: UNPUBLISHED",
    tech: ["KOTLIN", "FIREBASE", "GCP_FUNCTIONS"],
    image: "/img/swipeslam.png",
    link: null,
  },
  {
    id: "004",
    title: "ARC_RAIDERS_STEAM_ANALYSIS",
    subtitle: "DATA_ANALYTICS_NLP",
    status: "ACTIVE",
    description:
      "OLLAMA_OPEN_SOURCE_MODEL // SEMANTIC_ANALYSIS // OBJECTIVE: IDENTIFY_CRITICAL_DEV_TASKS // OUTPUT: PRIORITIZED_TASK_RECOMMENDATIONS",
    tech: ["PYTHON", "OLLAMA", "NLP", "DATA_ANALYTICS"],
    image: "/img/arc_raiders_logo.png",
    link: "https://github.com/sam-trafton-dev/nlp-steam-arc-raiders/tree/master",
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-card/30 scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="text-xs text-muted-foreground tracking-widest">
              ════════════════════════════════════════
            </div>
            <h2 className="text-4xl md:text-5xl font-terminal text-glow flex items-center justify-center gap-3">
              <Database className="h-8 w-6" />
              [ PROJECT_DATABASE ]
            </h2>
            <div className="text-xs text-muted-foreground tracking-widest">
              ENTRIES: {projects.length} // TYPE: PUBLIC_REPOSITORY
            </div>
            <div className="text-xs text-muted-foreground tracking-widest">
              ════════════════════════════════════════
            </div>
            <TerminalReadout />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-border hover:border-primary/50 transition-all duration-300 bg-background group hover:border-glow"
              >
                {/* Entry Header */}
                <div className="border-b border-border p-3 bg-card/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-terminal text-lg">
                      ENTRY_{project.id}
                    </span>
                    <span className={`text-xs px-2 py-0.5 border ${
                      project.status === 'ACTIVE' 
                        ? 'border-green-500/50 text-green-500' 
                        : project.status === 'DEPRECATED'
                        ? 'border-red-500/50 text-red-500'
                        : 'border-muted-foreground/50 text-muted-foreground'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    [{project.tech.length}_TECHNOLOGIES]
                  </div>
                </div>

                {/* Image */}
                <div className="relative w-full h-40 overflow-hidden bg-card border-b border-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <div>
                    <div className="data-label mb-1">&gt; PROJECT_NAME</div>
                    <h3 className="text-lg font-terminal text-primary group-hover:text-glow transition-all">
                      {project.title}
                    </h3>
                  </div>

                  <div>
                    <div className="data-label mb-1">&gt; CLASSIFICATION</div>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>

                  <div>
                    <div className="data-label mb-1">&gt; DESCRIPTION</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="data-label mb-2">&gt; TECH_STACK</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border p-3 bg-card/30">
                  {project.link ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full text-xs tracking-wider"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        [ ACCESS_REPOSITORY ]
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full text-xs tracking-wider"
                    >
                      <a
                        href="mailto:admin@samtrafton.dev?subject=Request to Review Project Code"
                      >
                        [ REQUEST_ACCESS ]
                        <Mail className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-muted-foreground tracking-widest">
            ════════════════════════════════════════<br/>
            [ END_OF_DATABASE_QUERY ]
          </div>
        </div>
      </div>
    </section>
  )
}

