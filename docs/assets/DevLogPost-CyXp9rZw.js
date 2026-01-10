const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeBlock-po4n6qCB.js","assets/index-CtO13NYq.js","assets/index-0XVRYGmR.css"])))=>i.map(i=>d[i]);
import{c as h,u as m,j as e,N as g,g as a,L as o,B as u,r as l,_ as p}from"./index-CtO13NYq.js";import{a as x,C as j,T as f}from"./posts-Bthv-QFY.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r=h("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),b=l.lazy(()=>p(()=>import("./CodeBlock-po4n6qCB.js"),__vite__mapDeps([0,1,2])));function v(){return e.jsxs("div",{className:"my-6 rounded-lg overflow-hidden border border-border",children:[e.jsx("div",{className:"px-4 py-2 bg-muted/50 border-b border-border",children:e.jsx("div",{className:"h-4 w-20 bg-muted animate-pulse rounded"})}),e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"h-4 w-3/4 bg-muted animate-pulse rounded"}),e.jsx("div",{className:"h-4 w-1/2 bg-muted animate-pulse rounded"}),e.jsx("div",{className:"h-4 w-2/3 bg-muted animate-pulse rounded"})]})]})}function t(i){return e.jsx(l.Suspense,{fallback:e.jsx(v,{}),children:e.jsx(b,{...i})})}function w(){return e.jsxs("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsx("p",{children:"When I decided to rebuild my portfolio, I wanted something that would be fast, modern, and actually enjoyable to maintain. After evaluating several options, I landed on a stack that's become my go-to for React projects."}),e.jsx("h2",{children:"The Stack"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Vite"})," - Lightning fast build tool and dev server"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React 18"})," - For building the UI components"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TypeScript"})," - Type safety that actually helps"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tailwind CSS"})," - Utility-first styling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"shadcn/ui"})," - Beautiful, accessible components"]})]}),e.jsx("h2",{children:"Setting Up the Project"}),e.jsx("p",{children:"Getting started was straightforward. Vite's React TypeScript template gives you a solid foundation:"}),e.jsx(t,{language:"bash",filename:"terminal",code:`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install`}),e.jsx("p",{children:"Then adding Tailwind and shadcn/ui:"}),e.jsx(t,{language:"bash",filename:"terminal",code:`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn@latest init`}),e.jsx("h2",{children:"Component Architecture"}),e.jsx("p",{children:"I organized the components to be self-contained and reusable. Here's an example of how I structured a simple card component:"}),e.jsx(t,{language:"tsx",filename:"src/components/ProjectCard.tsx",code:`interface ProjectCardProps {
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
}`}),e.jsx("h2",{children:"Lessons Learned"}),e.jsx("p",{children:"Building this site reinforced a few things for me:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Start simple and iterate - don't over-engineer from the start"}),e.jsx("li",{children:"Tailwind's utility classes are incredibly productive once you learn them"}),e.jsx("li",{children:"TypeScript catches so many bugs before they happen"}),e.jsx("li",{children:"Good component design makes everything easier"})]}),e.jsx("p",{children:"The source code is available on my GitHub if you want to take a closer look at how everything fits together."})]})}function y(){return e.jsxs("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsx("p",{children:'Manual deployments are tedious and error-prone. After one too many "oops I forgot to build before pushing" moments, I invested time in setting up proper CI/CD with GitHub Actions.'}),e.jsx("h2",{children:"The Goal"}),e.jsx("p",{children:"I wanted a workflow that would:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Run tests on every push and PR"}),e.jsx("li",{children:"Build and deploy to production on merge to main"}),e.jsx("li",{children:"Provide clear feedback on failures"})]}),e.jsx("h2",{children:"Basic Workflow Structure"}),e.jsxs("p",{children:["GitHub Actions workflows live in ",e.jsx("code",{children:".github/workflows/"}),". Here's a basic CI workflow:"]}),e.jsx(t,{language:"yaml",filename:".github/workflows/ci.yml",code:`name: CI

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
        run: npm test`}),e.jsx("h2",{children:"Deploying to GitHub Pages"}),e.jsx("p",{children:"For static sites like this portfolio, GitHub Pages is perfect. Here's the deployment workflow:"}),e.jsx(t,{language:"yaml",filename:".github/workflows/deploy.yml",code:`name: Deploy

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
        uses: actions/deploy-pages@v4`}),e.jsx("h2",{children:"Pro Tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cache dependencies"})," - The ",e.jsx("code",{children:"cache: 'npm'"})," option speeds up builds significantly"]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"npm ci"})]})," - It's faster and more reliable than ",e.jsx("code",{children:"npm install"})," in CI"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Set up branch protection"})," - Require CI to pass before merging"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep workflows DRY"})," - Use reusable workflows for common patterns"]})]}),e.jsx("p",{children:"Now every push triggers the pipeline, and I can merge with confidence knowing the tests pass and deployment is automatic. It's one of those investments that pays dividends every single day."})]})}function k(){return e.jsxs("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsx("p",{children:"It was a quiet night in the apocalypse. I'd found a decent car, scavenged some gas, and was ready to hole up and read a mechanics manual. Just one problem: it was pitch black, and my character couldn't see the pages."}),e.jsx("p",{children:`"Okay," I thought, "I'll just turn on the headlights." Nope. Still can't read. "What about equipping a flashlight?" Nothing. The game simply didn't support reading inside a vehicle at night. For a simulation game that prides itself on realism, this felt absurd.`}),e.jsx("p",{children:"I'd always imagined that surviving a zombie apocalypse would involve a lot of time in a mobile rig—our sweet skoolie build dream made real in a digital hellscape. Reading, crafting, waiting out the night in relative safety. But here was Project Zomboid telling me that was impossible."}),e.jsx("p",{children:e.jsx("strong",{children:"I couldn't let it go."})}),e.jsx("h2",{children:"Starting from Zero"}),e.jsxs("p",{children:["I had zero modding knowledge for Project Zomboid. Zero knowledge of Lua. Zero understanding of PZ's core engine. But something in my brain just... activated. It was like being possessed. In my heart, I knew: ",e.jsx("em",{children:`"what I'm doing needs to be done."`})]}),e.jsx("p",{children:"That might seem silly for modding a game. But this mindset extends to every area of my work. When something's broken and I know it can be fixed, I can't rest until I figure it out. It's not optional—it's compulsive."}),e.jsx("p",{children:"Within a week, I had:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Connected with the PZ modding community on Discord"}),e.jsx("li",{children:"Hunted down every scrap of documentation about the engine API"}),e.jsx("li",{children:"Set up a version-controlled repo"}),e.jsx("li",{children:"Started breaking things"})]}),e.jsx("h2",{children:"The Technical Challenge"}),e.jsx("p",{children:'The mod itself was conceptually simple: add a "Dome Light" part to vehicles that players could toggle to illuminate the interior. The implementation required:'}),e.jsxs("ul",{children:[e.jsx("li",{children:"Server/client functions for vehicle state synchronization"}),e.jsx("li",{children:"Modifications to vehicle spawning and generation data files"}),e.jsx("li",{children:'A new car part called "DomeLight"'}),e.jsx("li",{children:"Pixel art for the UI menu"}),e.jsx("li",{children:"Steam Workshop publishing"})]}),e.jsx("p",{children:"But here's where it got interesting: the light objects and methods I needed weren't public. The modding API didn't expose them."}),e.jsx("h2",{children:"Breaking Into the Engine"}),e.jsx("p",{children:"The biggest challenge was accessing light functionality that the developers never intended modders to touch. PZ runs on a Java engine with Lua scripting on top, using Kahlua as the bridge. I had two options:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Use reflection to expose private Java classes through Lua"}),e.jsx("li",{children:"Decompile the source code and figure out what to call"})]}),e.jsx("p",{children:"I did both. Here's what inspecting the engine looked like:"}),e.jsx(t,{language:"lua",filename:"debug_inspection.lua",code:`-- Inspecting Java objects through Kahlua to find hidden methods
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
-- Had to dig deeper into the rendering system...`}),e.jsx("p",{children:`After hours of inspection, I found that light sources in PZ are tied to the map grid, not to objects directly. Vehicles don't "have" lights—they spawn light entities on the grid squares they occupy. The dome light needed to create and manage its own light source:`}),e.jsx(t,{language:"lua",filename:"DomeLight.lua",code:`-- Core dome light functionality
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
end`}),e.jsx("h2",{children:"The Payoff"}),e.jsx("p",{children:`After about a week of obsessive work, I published "Dynamic Imposter's Dome Lights" to the Steam Workshop. Players could finally read, craft, and do anything else inside their vehicles at night.`}),e.jsx("p",{children:"The funny part? The very next build release, the developers added official interior lighting to vehicles. My mod became deprecated. But that wasn't the point."}),e.jsx("h2",{children:"Why This Matters"}),e.jsxs("p",{children:["This project taught me something important about how I work. When I see something broken—something that ",e.jsx("em",{children:"should"}),` work but doesn't—a switch flips in my brain. It's not about the size of the problem or whether anyone else cares. It's about the gap between "what is" and "what should be."`]}),e.jsx("p",{children:"That gap is where I live. Whether it's a missing feature in a game, a bug in production code, or a manual process that should be automated—once I see it, I can't unsee it."}),e.jsx("p",{children:"That's problem solving."})]})}const I={"engineering-mindset-dome-lights":e.jsx(k,{}),"building-my-portfolio-site":e.jsx(w,{}),"github-actions-ci-cd":e.jsx(y,{})};function N(){const{slug:i}=m(),s=i?x(i):void 0;if(!s)return e.jsx(g,{to:"/devlog",replace:!0});const d=I[s.slug],c=n=>new Date(n).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("div",{className:"pt-24 pb-4 px-4",children:e.jsx("div",{className:"container mx-auto max-w-4xl",children:e.jsx(a,{variant:"ghost",asChild:!0,className:"gap-2 -ml-4",children:e.jsxs(o,{to:"/devlog",children:[e.jsx(r,{className:"h-4 w-4"}),"Back to DevLog"]})})})}),e.jsx("header",{className:"pb-8 px-4 border-b border-border",children:e.jsxs("div",{className:"container mx-auto max-w-4xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-4",children:[e.jsx(j,{className:"h-4 w-4"}),c(s.date)]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6",children:s.title}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(n=>e.jsxs(u,{variant:"secondary",className:"gap-1",children:[e.jsx(f,{className:"h-3 w-3"}),n]},n))})]})}),e.jsx("main",{className:"py-12 px-4",children:e.jsx("div",{className:"container mx-auto max-w-4xl",children:d||e.jsx("p",{className:"text-muted-foreground",children:"Content coming soon..."})})}),e.jsx("footer",{className:"py-12 px-4 border-t border-border",children:e.jsx("div",{className:"container mx-auto max-w-4xl text-center",children:e.jsx(a,{variant:"outline",asChild:!0,children:e.jsxs(o,{to:"/devlog",children:[e.jsx(r,{className:"mr-2 h-4 w-4"}),"Back to all posts"]})})})})]})}export{N as default};
