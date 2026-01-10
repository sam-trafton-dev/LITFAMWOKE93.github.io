import { useParams, Link, Navigate } from "react-router-dom"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostBySlug } from "@/data/posts"
import { CodeBlock } from "@/components/CodeBlock"

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

      <CodeBlock
        language="bash"
        filename="terminal"
        code={`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install`}
      />

      <p>
        Then adding Tailwind and shadcn/ui:
      </p>

      <CodeBlock
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

      <CodeBlock
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

      <CodeBlock
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

      <CodeBlock
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

// Map slugs to content components
const postContent: Record<string, React.ReactNode> = {
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

