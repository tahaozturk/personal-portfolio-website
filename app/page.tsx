"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, FileText } from "lucide-react"

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-5xl w-full">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">Taha Öztürk</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">Data Professional</p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Data Engineer • AI & ML Engineer • Data Analyst
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("apps-courses")} className="text-base">
                Apps & Courses
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="text-base">
                Get in Touch
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/taha-%C3%B6zt%C3%BCrk-8ab52a18a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/tahaozturk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://medium.com/@tahaozturk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm">Medium</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Apps & Courses Section */}
      <section id="apps-courses" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Apps & Courses</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Apps</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: "Motivation App",
                    description:
                      "A mobile app for Android and iOS that helps users set goals, track progress, and stay motivated to achieve them.",
                    status: "In progress",
                    tags: ["Mobile", "Android", "iOS", "Productivity"],
                  },
                ].map((item, index) => (
                  <Card key={`app-${index}`} className="p-6 hover:border-primary/50 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Learn more →
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Courses</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: "Solve SQL 50 With Me",
                    description:
                      "A step-by-step video playlist where I solve 50 LeetCode SQL problems to build practical querying skills.",
                    status: "In progress",
                    tags: ["SQL", "LeetCode", "Education", "Video"],
                  },
                ].map((item, index) => (
                  <Card key={`course-${index}`} className="p-6 hover:border-primary/50 transition-colors">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <span className="px-2.5 py-1 text-xs rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="mt-2">
                        Learn more →
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            <p>
            I’m a data professional who has worked across nearly every part of the data ecosystem — from analytics and
            ETL pipelines to machine learning, cloud infrastructure, and API-driven real-time ML engines. My experience
            spans industries such as home appliances, automotive, defence, consulting, fintech, banking, insurance, and scheme
            operations, giving me a broad and adaptable perspective on how data drives impact in different environments.
            </p>
            <p>
              I genuinely enjoy producing things — whether it’s tools, content, or experiments — so beyond my professional work,
              this website is where I share my personal journey in the data world. Here you’ll find links to my LinkedIn, GitHub,
              and Medium profiles, along with the apps and data-oriented courses I’ve launched, and those I’ll continue to launch.
              It’s a curated space for the projects, ideas, and explorations that shape my growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            If you have feedback or suggestions for the projects I build, or if you're
            interested in sponsoring or supporting my work, feel free to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:taha@taha-ozturk.com"
                className="inline-flex items-center gap-2 text-lg hover:text-primary transition-colors"
              >
                <span className="text-muted-foreground">Email:</span>
                <span>taha@taha-ozturk.com</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/taha-%C3%B6zt%C3%BCrk-8ab52a18a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/tahaozturk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://medium.com/@tahaozturk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors"
              >
                <FileText className="w-5 h-5" />
                <span className="text-sm">Medium</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">© 2025 Taha Öztürk. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
