import { ReactNode } from "react"

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: ReactNode
}

// Posts will be populated with actual content in the components
// This file exports the metadata and a way to get post content
export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
}

export const posts: PostMeta[] = [
  {
    slug: "engineering-mindset-dome-lights",
    title: "The Engineering Mindset: A Story About Dome Lights",
    date: "2024-01-12",
    excerpt: "When you notice something doesn't work right and you just can't let it go. A story about building my first game mod with zero knowledge of Lua, modding, or the game engine.",
    tags: ["Game Modding", "Lua", "Problem Solving", "Project Zomboid"],
  },
  {
    slug: "building-my-portfolio-site",
    title: "Building My Portfolio Site with React & Tailwind",
    date: "2024-01-09",
    excerpt: "A deep dive into how I built this portfolio site using Vite, React, TypeScript, and Tailwind CSS with shadcn/ui components.",
    tags: ["React", "TypeScript", "Tailwind", "Web Dev"],
  },
  {
    slug: "github-actions-ci-cd",
    title: "Automating Deployments with GitHub Actions",
    date: "2023-12-28",
    excerpt: "How I set up CI/CD pipelines for my projects using GitHub Actions, from testing to automatic deployments.",
    tags: ["DevOps", "GitHub Actions", "CI/CD", "Automation"],
  },
]

export function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}

export function filterPosts(searchQuery: string, selectedTags: string[]): PostMeta[] {
  return posts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesTags
  })
}

