import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Terminal, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { posts, getAllTags, filterPosts } from "@/data/posts"

export default function DevLog() {
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
    const date = new Date(dateStr)
    return date.toISOString().replace('T', ' ').substring(0, 19)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-xs text-muted-foreground tracking-widest mb-4">
            ════════════════════════════════════════
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-terminal tracking-tight mb-4 text-glow flex items-center gap-4">
            <Terminal className="h-10 w-10 md:h-12 md:w-12" />
            [ SYSTEM_LOG ]
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl border border-border p-4 bg-card/30">
            <span className="text-primary">&gt; </span>
            DEVELOPER_THOUGHTS // LEARNINGS // EXPLORATIONS<br/>
            <span className="text-primary">&gt; </span>
            NO_ALGORITHMS // NO_ADS // RAW_DATA_STREAM<br/>
            <span className="text-primary">&gt; </span>
            SOURCE: PROLONGED_TERMINAL_EXPOSURE
          </p>
          <div className="text-xs text-muted-foreground tracking-widest mt-4">
            ════════════════════════════════════════
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 border-y-2 border-primary/30 bg-card/20">
        <div className="container mx-auto max-w-4xl space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-primary text-sm font-mono">
              &gt;
            </div>
            <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="SEARCH_LOGS..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-14 font-mono text-sm bg-background border-2 border-border focus:border-primary"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-blink">█</span>
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-xs text-muted-foreground tracking-wider mr-2">
              FILTER_BY_TAG:
            </span>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer transition-all text-xs tracking-wider"
                onClick={() => toggleTag(tag)}
              >
                {tag.toUpperCase()}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="text-xs text-muted-foreground hover:text-primary transition-colors ml-2 border border-border px-2 py-1 hover:border-primary"
              >
                [CLEAR_ALL]
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Posts List */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 border border-border bg-card/30">
              <div className="text-primary font-terminal text-xl mb-4">
                [ NO_RESULTS_FOUND ]
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                QUERY_RETURNED: 0_ENTRIES
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedTags([])
                }}
                className="text-sm text-primary hover:text-glow transition-all border border-primary px-4 py-2"
              >
                [ RESET_FILTERS ]
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.map((post, index) => (
                <Link key={post.slug} to={`/devlog/${post.slug}`}>
                  <div className="border-2 border-border hover:border-primary/50 transition-all duration-300 bg-background group hover:border-glow">
                    {/* Entry Header */}
                    <div className="border-b border-border p-3 bg-card/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary font-terminal">
                          LOG_{String(index + 1).padStart(3, '0')}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          [{formatDate(post.date)}]
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-2 h-2 bg-green-500 rounded-full" />
                        READABLE
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h2 className="text-lg md:text-xl font-terminal text-primary group-hover:text-glow transition-all flex items-center gap-2 mb-2">
                        {post.title.toUpperCase()}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="text-primary/60">&gt; </span>
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Post count */}
          <div className="mt-8 text-center text-xs text-muted-foreground tracking-wider border-t border-border pt-4">
            QUERY_RESULTS: {filteredPosts.length}_OF_{posts.length}_ENTRIES
          </div>
        </div>
      </section>
    </div>
  )
}

