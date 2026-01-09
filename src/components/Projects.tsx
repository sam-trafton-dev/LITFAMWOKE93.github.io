import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const projects = [
  {
    title: "Dynamic Imposter's Dome Lights",
    subtitle: "Project Zomboid Mod",
    description:
      "Use Lua programming API to hijack Java engine lighting commands to give users the ability to read books inside their cars." +
      " Mod is depreacted after feature was implemented into the game. The fun challenege was using Lua tables to access and inspect unnoficial API for Java objects to generate light on the map.",
    tech: ["Java", "Lua"],
    image: "/img/didl_snap.png",
    link: "https://github.com/sam-trafton-dev/DIDL",
  },
  {
    title: "Bankwave: Neon Networth",
    subtitle: "itch.io/bankwave",
    description:
      "Interned with indie game studio to extend game jam edition into full size game for kickstarter campaign. My first experience with Go and concurrency patters like Fan Out, Fan In, and Rate Limiting with Workers.",
    tech: ["Go", "YarnSpinner", "Ebitengine"],
    image: "/img/bankwave_logo.png",
    link: "https://frabjous-studios.itch.io/bankwave",
  },
  {
    title: "Swipe Slam",
    subtitle: "Android CRUD Application",
    description: "Android CRUD application for adlib poetry prompts. User can create, read, update, and delete prompts and add to eachothers poems. No longer published.",
    tech: ["Kotlin", "Firebase", "Google Cloud Functions"],
    image: "/img/swipeslam.png",
    link: null,
  },
  {
    title: "Project Name",
    subtitle: "Coming Soon",
    description: "Small description",
    tech: [],
    image: "/img/if_i_had_one.png",
    link: null,
  },
]

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-muted/50 scroll-mt-20"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <Separator className="w-24 mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of projects I've worked on, from game mods to mobile
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative w-full h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.link ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full sm:w-auto"
                    >
                      <a
                        href="mailto:admin@samtrafton.dev?subject=Request to Review Project Code"
                      >
                        Available on Request
                        <Mail className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

