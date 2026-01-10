import { useParams, Link, Navigate } from "react-router-dom"
import { lazy, Suspense } from "react"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostBySlug } from "@/data/posts"

// Lazy load syntax highlighter - it's heavy!
const CodeBlock = lazy(() => import("@/components/CodeBlock"))

// Fallback for code blocks while loading
function CodeBlockFallback() {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-border">
      <div className="px-4 py-2 bg-muted/50 border-b border-border">
        <div className="h-4 w-20 bg-muted animate-pulse rounded" />
      </div>
      <div className="p-4 space-y-2">
        <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
        <div className="h-4 w-1/2 bg-muted animate-pulse rounded" />
        <div className="h-4 w-2/3 bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}

// Wrapped CodeBlock with Suspense
function LazyCodeBlock(props: { code: string; language: string; filename?: string }) {
  return (
    <Suspense fallback={<CodeBlockFallback />}>
      <CodeBlock {...props} />
    </Suspense>
  )
}

// Post content components - each post's full content lives here
function BuildingPortfolioContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <p>
        When I decided to rebuild my portfolio, I wanted something that would be fast,
        modern, and actually enjoyable to maintain. After evaluating several options,
        I landed on a stack that's become my go-to for React projects. 
      </p>

      <h2>The Stack</h2>
      <ul>
        <li><strong>Vite</strong> - Lightning fast build tool and dev server</li>
        <li><strong>React 18</strong> - For building the UI components</li>
        <li><strong>TypeScript</strong> - Type safety that actually helps</li>
        <li><strong>Tailwind CSS</strong> - Utility-first styling</li>
        <li><strong>shadcn/ui</strong> - Beautiful, accessible components</li>
      </ul>

      <h2>Setting Up the Project</h2>
      <p>
        Getting started was straightforward. Vite's React TypeScript template gives you
        a solid foundation:
      </p>

      <LazyCodeBlock
        language="bash"
        filename="terminal"
        code={`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install`}
      />

      <p>
        Then adding Tailwind and shadcn/ui:
      </p>

      <LazyCodeBlock
        language="bash"
        filename="terminal"
        code={`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn@latest init`}
      />

      <h2>Component Architecture</h2>
      <p>
        I organized the components to be self-contained and reusable. Here's an example
        of how I structured a simple card component:
      </p>

      <LazyCodeBlock
        language="tsx"
        filename="src/components/ProjectCard.tsx"
        code={`interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link?: string
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <Card className="hover:border-primary/50 transition-colors">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}`}
      />

      <h2>Lessons Learned</h2>
      <p>
        Building this site reinforced a few things for me:
      </p>
      <ol>
        <li>Start simple and iterate - don't over-engineer from the start</li>
        <li>Tailwind's utility classes are incredibly productive once you learn them</li>
        <li>TypeScript catches so many bugs before they happen</li>
        <li>Good component design makes everything easier</li>
      </ol>

      <p>
        The source code is available on my GitHub if you want to take a closer look
        at how everything fits together.
      </p>
    </article>
  )
}

function GitHubActionsContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <p>
        Manual deployments are tedious and error-prone. After one too many "oops I forgot
        to build before pushing" moments, I invested time in setting up proper CI/CD
        with GitHub Actions.
      </p>

      <h2>The Goal</h2>
      <p>
        I wanted a workflow that would:
      </p>
      <ol>
        <li>Run tests on every push and PR</li>
        <li>Build and deploy to production on merge to main</li>
        <li>Provide clear feedback on failures</li>
      </ol>

      <h2>Basic Workflow Structure</h2>
      <p>
        GitHub Actions workflows live in <code>.github/workflows/</code>. Here's
        a basic CI workflow:
      </p>

      <LazyCodeBlock
        language="yaml"
        filename=".github/workflows/ci.yml"
        code={`name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Run tests
        run: npm test`}
      />

      <h2>Deploying to GitHub Pages</h2>
      <p>
        For static sites like this portfolio, GitHub Pages is perfect. Here's the
        deployment workflow:
      </p>

      <LazyCodeBlock
        language="yaml"
        filename=".github/workflows/deploy.yml"
        code={`name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install and build
        run: |
          npm ci
          npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4`}
      />

      <h2>Pro Tips</h2>
      <ul>
        <li>
          <strong>Cache dependencies</strong> - The <code>cache: 'npm'</code> option
          speeds up builds significantly
        </li>
        <li>
          <strong>Use <code>npm ci</code></strong> - It's faster and more reliable
          than <code>npm install</code> in CI
        </li>
        <li>
          <strong>Set up branch protection</strong> - Require CI to pass before merging
        </li>
        <li>
          <strong>Keep workflows DRY</strong> - Use reusable workflows for common patterns
        </li>
      </ul>

      <p>
        Now every push triggers the pipeline, and I can merge with confidence knowing
        the tests pass and deployment is automatic. It's one of those investments that
        pays dividends every single day.
      </p>
    </article>
  )
}

function EngineeringMindsetContent() {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <p>
        It was a quiet night in the apocalypse. I'd found a decent car, scavenged some
        gas, and was ready to hole up and read a mechanics manual. Just one problem:
        it was pitch black, and my character couldn't see the pages.
      </p>

      <p>
        "Okay," I thought, "I'll just turn on the headlights." Nope. Still can't read.
        "What about equipping a flashlight?" Nothing. The game simply didn't support
        reading inside a vehicle at night. For a simulation game that prides itself on
        realism, this felt absurd.
      </p>

      <p>
        I'd always imagined that surviving a zombie apocalypse would involve a lot of
        time in a mobile rig—our sweet skoolie build dream made real in a digital hellscape.
        Reading, crafting, waiting out the night in relative safety. But here was Project
        Zomboid telling me that was impossible.
      </p>

      <p>
        <strong>I couldn't let it go.</strong>
      </p>

      <h2>Starting from Zero</h2>

      <p>
        I had zero modding knowledge for Project Zomboid. Zero knowledge of Lua. Zero
        understanding of PZ's core engine. But something in my brain just... activated.
        It was like being possessed. In my heart, I knew: <em>"what I'm doing needs to
        be done."</em>
      </p>

      <p>
        That might seem silly for modding a game. But this mindset extends to every area
        of my work. When something's broken and I know it can be fixed, I can't rest until
        I figure it out. It's not optional—it's compulsive.
      </p>

      <p>
        Within a week, I had:
      </p>

      <ul>
        <li>Connected with the PZ modding community on Discord</li>
        <li>Hunted down every scrap of documentation about the engine API</li>
        <li>Set up a version-controlled repo</li>
        <li>Started breaking things</li>
      </ul>

      <h2>The Technical Challenge</h2>

      <p>
        The mod itself was conceptually simple: add a "Dome Light" part to vehicles that
        players could toggle to illuminate the interior. The implementation required:
      </p>

      <ul>
        <li>Server/client functions for vehicle state synchronization</li>
        <li>Modifications to vehicle spawning and generation data files</li>
        <li>A new car part called "DomeLight"</li>
        <li>Pixel art for the UI menu</li>
        <li>Steam Workshop publishing</li>
      </ul>

      <p>
        But here's where it got interesting: the light objects and methods I needed
        weren't public. The modding API didn't expose them.
      </p>

      <h2>Breaking Into the Engine</h2>

      <p>
        The biggest challenge was accessing light functionality that the developers
        never intended modders to touch. PZ runs on a Java engine with Lua scripting
        on top, using Kahlua as the bridge. I had two options:
      </p>

      <ol>
        <li>Use reflection to expose private Java classes through Lua</li>
        <li>Decompile the source code and figure out what to call</li>
      </ol>

      <p>
        I did both. Here's what inspecting the engine looked like:
      </p>

      <LazyCodeBlock
        language="lua"
        filename="debug_inspection.lua"
        code={`-- Inspecting Java objects through Kahlua to find hidden methods
local function inspectObject(obj)
    local mt = getmetatable(obj)
    if mt then
        print("=== Metatable ===")
        for k, v in pairs(mt) do
            print(k, type(v))
        end
    end
    
    -- Try to access Java class methods via reflection
    local javaClass = obj:getClass()
    local methods = javaClass:getMethods()
    
    for i = 0, methods.length - 1 do
        local method = methods[i]
        print(method:getName(), method:getParameterTypes())
    end
end

-- Found it: IsoGridSquare has addLampPost() but nothing for interior lights
-- Vehicle class has nothing public for lighting
-- Had to dig deeper into the rendering system...`}
      />

      <p>
        After hours of inspection, I found that light sources in PZ are tied to the
        map grid, not to objects directly. Vehicles don't "have" lights—they spawn
        light entities on the grid squares they occupy. The dome light needed to
        create and manage its own light source:
      </p>

      <LazyCodeBlock
        language="lua"
        filename="DomeLight.lua"
        code={`-- Core dome light functionality
DomeLights = DomeLights or {}

function DomeLights.toggleLight(vehicle, player)
    local domeLightPart = vehicle:getPartById("DomeLight")
    if not domeLightPart then return end
    
    local isOn = domeLightPart:getModData().isOn or false
    
    if isOn then
        DomeLights.removeLight(vehicle)
        domeLightPart:getModData().isOn = false
    else
        DomeLights.createLight(vehicle)
        domeLightPart:getModData().isOn = true
    end
    
    -- Sync state to server
    sendClientCommand(player, "DomeLights", "sync", {
        vehicleId = vehicle:getId(),
        isOn = not isOn
    })
end

function DomeLights.createLight(vehicle)
    local sq = vehicle:getSquare()
    if not sq then return end
    
    -- This was the key discovery - using IsoLightSource directly
    local light = IsoLightSource.new(
        sq:getX(), sq:getY(), sq:getZ(),
        0.9, 0.85, 0.7,  -- Warm interior light color
        6,               -- Radius
        0                -- Offset
    )
    
    vehicle:getModData().domeLightSource = light
    sq:addLightSource(light)
end`}
      />

      <h2>The Payoff</h2>

      <p>
        After about a week of obsessive work, I published "Dynamic Imposter's Dome Lights"
        to the Steam Workshop. Players could finally read, craft, and do anything else
        inside their vehicles at night.
      </p>

      <p>
        The funny part? The very next build release, the developers added official interior
        lighting to vehicles. My mod became deprecated. But that wasn't the point.
      </p>

      <h2>Why This Matters</h2>

      <p>
        This project taught me something important about how I work. When I see something
        broken—something that <em>should</em> work but doesn't—a switch flips in my brain.
        It's not about the size of the problem or whether anyone else cares. It's about
        the gap between "what is" and "what should be."
      </p>

      <p>
        That gap is where I live. Whether it's a missing feature in a game, a bug in
        production code, or a manual process that should be automated—once I see it,
        I can't unsee it.
      </p>

      <p>
        That's problem solving.
      </p>
    </article>
  )
}

// Map slugs to content components
const postContent: Record<string, React.ReactNode> = {
  "engineering-mindset-dome-lights": <EngineeringMindsetContent />,
  "building-my-portfolio-site": <BuildingPortfolioContent />,
  "github-actions-ci-cd": <GitHubActionsContent />,
}

export default function DevLogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return <Navigate to="/devlog" replace />
  }

  const content = postContent[post.slug]

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back navigation */}
      <div className="pt-24 pb-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <Button variant="ghost" asChild className="gap-2 -ml-4">
            <Link to="/devlog">
              <ArrowLeft className="h-4 w-4" />
              Back to DevLog
            </Link>
          </Button>
        </div>
      </div>

      {/* Post Header */}
      <header className="pb-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Calendar className="h-4 w-4" />
            {formatDate(post.date)}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="gap-1">
                <Tag className="h-3 w-3" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </header>

      {/* Post Content */}
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {content || (
            <p className="text-muted-foreground">Content coming soon...</p>
          )}
        </div>
      </main>

      {/* Footer navigation */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Button variant="outline" asChild>
            <Link to="/devlog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

