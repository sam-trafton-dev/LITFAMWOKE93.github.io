const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/CodeBlock-0OVkF20A.js","assets/index-CnKE-FAI.js","assets/index-0XVRYGmR.css"])))=>i.map(i=>d[i]);
import{c as h,u as p,j as e,N as m,g as i,L as r,B as u,r as l,_ as x}from"./index-CnKE-FAI.js";import{a as g,C as j,T as f}from"./posts-CHLLy2vM.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=h("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]),b=l.lazy(()=>x(()=>import("./CodeBlock-0OVkF20A.js"),__vite__mapDeps([0,1,2])));function w(){return e.jsxs("div",{className:"my-6 rounded-lg overflow-hidden border border-border",children:[e.jsx("div",{className:"px-4 py-2 bg-muted/50 border-b border-border",children:e.jsx("div",{className:"h-4 w-20 bg-muted animate-pulse rounded"})}),e.jsxs("div",{className:"p-4 space-y-2",children:[e.jsx("div",{className:"h-4 w-3/4 bg-muted animate-pulse rounded"}),e.jsx("div",{className:"h-4 w-1/2 bg-muted animate-pulse rounded"}),e.jsx("div",{className:"h-4 w-2/3 bg-muted animate-pulse rounded"})]})]})}function n(t){return e.jsx(l.Suspense,{fallback:e.jsx(w,{}),children:e.jsx(b,{...t})})}function v(){return e.jsxs("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsx("p",{children:"When I decided to rebuild my portfolio, I wanted something that would be fast, modern, and actually enjoyable to maintain. After evaluating several options, I landed on a stack that's become my go-to for React projects."}),e.jsx("h2",{children:"The Stack"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Vite"})," - Lightning fast build tool and dev server"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"React 18"})," - For building the UI components"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"TypeScript"})," - Type safety that actually helps"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tailwind CSS"})," - Utility-first styling"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"shadcn/ui"})," - Beautiful, accessible components"]})]}),e.jsx("h2",{children:"Setting Up the Project"}),e.jsx("p",{children:"Getting started was straightforward. Vite's React TypeScript template gives you a solid foundation:"}),e.jsx(n,{language:"bash",filename:"terminal",code:`npm create vite@latest my-portfolio -- --template react-ts
cd my-portfolio
npm install`}),e.jsx("p",{children:"Then adding Tailwind and shadcn/ui:"}),e.jsx(n,{language:"bash",filename:"terminal",code:`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn@latest init`}),e.jsx("h2",{children:"Component Architecture"}),e.jsx("p",{children:"I organized the components to be self-contained and reusable. Here's an example of how I structured a simple card component:"}),e.jsx(n,{language:"tsx",filename:"src/components/ProjectCard.tsx",code:`interface ProjectCardProps {
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
}`}),e.jsx("h2",{children:"Lessons Learned"}),e.jsx("p",{children:"Building this site reinforced a few things for me:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Start simple and iterate - don't over-engineer from the start"}),e.jsx("li",{children:"Tailwind's utility classes are incredibly productive once you learn them"}),e.jsx("li",{children:"TypeScript catches so many bugs before they happen"}),e.jsx("li",{children:"Good component design makes everything easier"})]}),e.jsx("p",{children:"The source code is available on my GitHub if you want to take a closer look at how everything fits together."})]})}function y(){return e.jsxs("article",{className:"prose prose-lg dark:prose-invert max-w-none",children:[e.jsx("p",{children:'Manual deployments are tedious and error-prone. After one too many "oops I forgot to build before pushing" moments, I invested time in setting up proper CI/CD with GitHub Actions.'}),e.jsx("h2",{children:"The Goal"}),e.jsx("p",{children:"I wanted a workflow that would:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Run tests on every push and PR"}),e.jsx("li",{children:"Build and deploy to production on merge to main"}),e.jsx("li",{children:"Provide clear feedback on failures"})]}),e.jsx("h2",{children:"Basic Workflow Structure"}),e.jsxs("p",{children:["GitHub Actions workflows live in ",e.jsx("code",{children:".github/workflows/"}),". Here's a basic CI workflow:"]}),e.jsx(n,{language:"yaml",filename:".github/workflows/ci.yml",code:`name: CI

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
        run: npm test`}),e.jsx("h2",{children:"Deploying to GitHub Pages"}),e.jsx("p",{children:"For static sites like this portfolio, GitHub Pages is perfect. Here's the deployment workflow:"}),e.jsx(n,{language:"yaml",filename:".github/workflows/deploy.yml",code:`name: Deploy

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
        uses: actions/deploy-pages@v4`}),e.jsx("h2",{children:"Pro Tips"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Cache dependencies"})," - The ",e.jsx("code",{children:"cache: 'npm'"})," option speeds up builds significantly"]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Use ",e.jsx("code",{children:"npm ci"})]})," - It's faster and more reliable than ",e.jsx("code",{children:"npm install"})," in CI"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Set up branch protection"})," - Require CI to pass before merging"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Keep workflows DRY"})," - Use reusable workflows for common patterns"]})]}),e.jsx("p",{children:"Now every push triggers the pipeline, and I can merge with confidence knowing the tests pass and deployment is automatic. It's one of those investments that pays dividends every single day."})]})}const k={"building-my-portfolio-site":e.jsx(v,{}),"github-actions-ci-cd":e.jsx(y,{})};function I(){const{slug:t}=p(),s=t?g(t):void 0;if(!s)return e.jsx(m,{to:"/devlog",replace:!0});const d=k[s.slug],c=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx("div",{className:"pt-24 pb-4 px-4",children:e.jsx("div",{className:"container mx-auto max-w-4xl",children:e.jsx(i,{variant:"ghost",asChild:!0,className:"gap-2 -ml-4",children:e.jsxs(r,{to:"/devlog",children:[e.jsx(o,{className:"h-4 w-4"}),"Back to DevLog"]})})})}),e.jsx("header",{className:"pb-8 px-4 border-b border-border",children:e.jsxs("div",{className:"container mx-auto max-w-4xl",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground mb-4",children:[e.jsx(j,{className:"h-4 w-4"}),c(s.date)]}),e.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6",children:s.title}),e.jsx("div",{className:"flex flex-wrap gap-2",children:s.tags.map(a=>e.jsxs(u,{variant:"secondary",className:"gap-1",children:[e.jsx(f,{className:"h-3 w-3"}),a]},a))})]})}),e.jsx("main",{className:"py-12 px-4",children:e.jsx("div",{className:"container mx-auto max-w-4xl",children:d||e.jsx("p",{className:"text-muted-foreground",children:"Content coming soon..."})})}),e.jsx("footer",{className:"py-12 px-4 border-t border-border",children:e.jsx("div",{className:"container mx-auto max-w-4xl text-center",children:e.jsx(i,{variant:"outline",asChild:!0,children:e.jsxs(r,{to:"/devlog",children:[e.jsx(o,{className:"mr-2 h-4 w-4"}),"Back to all posts"]})})})})]})}export{I as default};
