import{c as n}from"./index-CtO13NYq.js";/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("Calendar",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}]]);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=n("Tag",[["path",{d:"M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z",key:"14b2ls"}],["path",{d:"M7 7h.01",key:"7u93v4"}]]),o=[{slug:"engineering-mindset-dome-lights",title:"The Engineering Mindset: A Story About Dome Lights",date:"2024-01-12",excerpt:"When you notice something doesn't work right and you just can't let it go. A story about building my first game mod with zero knowledge of Lua, modding, or the game engine.",tags:["Game Modding","Lua","Problem Solving","Project Zomboid"]},{slug:"building-my-portfolio-site",title:"Building My Portfolio Site with React & Tailwind",date:"2024-01-09",excerpt:"A deep dive into how I built this portfolio site using Vite, React, TypeScript, and Tailwind CSS with shadcn/ui components.",tags:["React","TypeScript","Tailwind","Web Dev"]},{slug:"github-actions-ci-cd",title:"Automating Deployments with GitHub Actions",date:"2023-12-28",excerpt:"How I set up CI/CD pipelines for my projects using GitHub Actions, from testing to automatic deployments.",tags:["DevOps","GitHub Actions","CI/CD","Automation"]}];function d(t){return o.find(e=>e.slug===t)}function u(){const t=new Set;return o.forEach(e=>e.tags.forEach(i=>t.add(i))),Array.from(t).sort()}function m(t,e){return o.filter(i=>{const s=t===""||i.title.toLowerCase().includes(t.toLowerCase())||i.excerpt.toLowerCase().includes(t.toLowerCase()),a=e.length===0||e.some(r=>i.tags.includes(r));return s&&a})}export{g as C,l as T,d as a,m as f,u as g,o as p};
