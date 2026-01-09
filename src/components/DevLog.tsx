import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Calendar, Tag, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { posts, getAllTags, filterPosts } from "@/data/posts"

export function DevLog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const allTags = getAllTags()
  const filteredPosts = filterPosts(searchQuery, selectedTags)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            DevLog
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Thoughts, learnings, and explorations from my journey as a developer.
            No algorithms, no ads, just the inane ramblings of someone who sits at a computer for too long.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1 text-sm text-muted-foreground mr-2">
              <Tag className="h-4 w-4" />
              Filter:
            </span>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer transition-colors hover:bg-primary/80"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-muted-foreground hover:text-foreground underline ml-2"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No posts found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTags([])
                }}
                className="mt-4 text-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Link key={post.slug} to={`/devlog/${post.slug}`}>
                  <Card className="group hover:border-primary/50 transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors flex items-center gap-2">
                        {post.title}
                        <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          {/* Post count */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Showing {filteredPosts.length} of {posts.length} posts
          </div>
        </div>
      </section>
    </div>
  )
}

