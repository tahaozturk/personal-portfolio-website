"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, RefreshCw } from "lucide-react"

import { Card } from "@/components/ui/card"

interface NewsSource {
  name: string
  url: string
}

interface NewsItem {
  title: string
  category: string
  summary: string
  sources: NewsSource[]
  tags?: string[]
}

interface NewsDay {
  date: string
  items: NewsItem[]
}

interface RollingNewsFeed {
  updatedAt: string
  title: string
  summary: string
  days: NewsDay[]
}

interface LegacyNewsBrief {
  date: string
  updatedAt: string
  title: string
  summary: string
  items: NewsItem[]
}

type NewsFeedResponse = RollingNewsFeed | LegacyNewsBrief

function formatDate(value: string) {
  const date = new Date(value)

  if (Number.isNaN(date.getTime())) {
    return value
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: value.includes("T") ? "short" : undefined,
  }).format(date)
}

function normalizeFeed(feed: NewsFeedResponse): RollingNewsFeed {
  if ("days" in feed && Array.isArray(feed.days)) {
    return {
      updatedAt: feed.updatedAt,
      title: feed.title,
      summary: feed.summary,
      days: feed.days.slice(0, 10),
    }
  }

  return {
    updatedAt: feed.updatedAt,
    title: feed.title,
    summary: feed.summary,
    days: [
      {
        date: feed.date,
        items: feed.items ?? [],
      },
    ],
  }
}

export default function NewsPage() {
  const [feed, setFeed] = useState<RollingNewsFeed | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    async function loadNews() {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`/news/latest.json?t=${Date.now()}`, {
          cache: "no-store",
          headers: {
            "cache-control": "no-cache",
          },
        })

        if (!response.ok) {
          throw new Error(`News feed returned ${response.status}`)
        }

        const data = (await response.json()) as NewsFeedResponse

        if (isMounted) {
          setFeed(normalizeFeed(data))
        }
      } catch (loadError) {
        if (isMounted) {
          setError(loadError instanceof Error ? loadError.message : "Unable to load the news feed.")
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadNews()

    return () => {
      isMounted = false
    }
  }, [])

  const visibleDays = useMemo(() => feed?.days.slice(0, 10) ?? [], [feed])
  const totalItems = useMemo(() => visibleDays.reduce((total, day) => total + day.items.length, 0), [visibleDays])
  const hasItems = totalItems > 0

  return (
    <div className="min-h-screen bg-background">
      <main className="relative overflow-hidden px-6 py-12 md:py-20">
        <div className="absolute -top-40 left-1/3 h-[600px] w-[600px] rounded-full bg-primary/6 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-24 right-1/4 h-[400px] w-[400px] rounded-full bg-primary/4 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative space-y-12">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="space-y-5">
              <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary">
                Rolling 10-day public news feed
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance bg-gradient-to-br from-foreground via-foreground to-primary/80 bg-clip-text text-transparent">
                {feed?.title ?? "Daily AI & Tech News Brief"}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {feed?.summary ?? "Concise AI, mobile, XR, and consumer technology news summaries with source links."}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                {feed?.updatedAt ? <span className="rounded-full bg-secondary px-3 py-1">Last updated: {formatDate(feed.updatedAt)}</span> : null}
                {feed ? (
                  <span className="rounded-full bg-secondary px-3 py-1">
                    {visibleDays.length} {visibleDays.length === 1 ? "day" : "days"} · {totalItems} {totalItems === 1 ? "item" : "items"}
                  </span>
                ) : null}
              </div>
            </div>
          </div>

          {isLoading ? (
            <Card className="p-8 border-primary/20">
              <div className="flex items-center gap-3 text-muted-foreground">
                <RefreshCw className="h-5 w-5 animate-spin text-primary" />
                Loading latest news feed…
              </div>
            </Card>
          ) : null}

          {error ? (
            <Card className="p-8 border-destructive/30">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Unable to load news</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The public JSON feed could not be loaded right now. Please try refreshing the page.
                </p>
                <p className="text-sm text-muted-foreground/70">{error}</p>
              </div>
            </Card>
          ) : null}

          {!isLoading && !error && !hasItems ? (
            <Card className="p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">No news items available</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The latest feed is empty. Check back after the next feed update.
                </p>
              </div>
            </Card>
          ) : null}

          {hasItems ? (
            <section className="space-y-10" aria-label="Rolling news feed">
              {visibleDays.map((day) => (
                <div key={day.date} className="space-y-5">
                  <div className="flex flex-wrap items-end justify-between gap-3 border-b border-border/60 pb-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-primary">News for</p>
                      <h2 className="text-3xl font-semibold tracking-tight">{formatDate(day.date)}</h2>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                      {day.items.length} {day.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <div className="grid gap-6">
                    {day.items.map((item, index) => (
                      <Card key={`${day.date}-${item.title}-${index}`} className="p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                        <article className="space-y-4">
                          <div className="space-y-3">
                            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {item.category}
                            </span>
                            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.summary}</p>
                          {item.tags?.length ? (
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span key={`${item.title}-${tag}`} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                          {item.sources.length ? (
                            <div className="flex flex-wrap gap-3 pt-2">
                              {item.sources.map((source) => (
                                <a
                                  key={`${item.title}-${source.url}`}
                                  href={source.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {source.name}
                                  <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </article>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ) : null}
        </div>
      </main>

      <footer className="py-12 px-6 border-t border-border/60">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground/60 text-center">© 2025 Taha Öztürk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
