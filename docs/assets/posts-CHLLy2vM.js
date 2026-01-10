import{c as s}from"./index-CnKE-FAI.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=s("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=s("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),o=[{slug:"building-my-portfolio-site",title:"Building My Portfolio Site with React & Tailwind",date:"2024-01-09",excerpt:"A deep dive into how I built this portfolio site using Vite, React, TypeScript, and Tailwind CSS with shadcn/ui components.",tags:["React","TypeScript","Tailwind","Web Dev"]},{slug:"github-actions-ci-cd",title:"Automating Deployments with GitHub Actions",date:"2023-12-28",excerpt:"How I set up CI/CD pipelines for my projects using GitHub Actions, from testing to automatic deployments.",tags:["DevOps","GitHub Actions","CI/CD","Automation"]}];function d(t){return o.find(e=>e.slug===t)}function g(){const t=new Set;return o.forEach(e=>e.tags.forEach(i=>t.add(i))),Array.from(t).sort()}function p(t,e){return o.filter(i=>{const n=t===""||i.title.toLowerCase().includes(t.toLowerCase())||i.excerpt.toLowerCase().includes(t.toLowerCase()),a=e.length===0||e.some(c=>i.tags.includes(c));return n&&a})}export{l as C,u as T,d as a,p as f,g,o as p};
