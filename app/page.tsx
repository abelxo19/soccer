import Link from "next/link"
import { ArrowRight } from "lucide-react"
import HeroSection from "@/components/hero-section"
import TipsPreview from "@/components/tips-preview"
import TeamSelector from "@/components/team-select"
import NewsPreview from "@/components/news-preview"
import LiveScoresPreview from "@/components/live-score"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Soccer Tips</h2>
              <p className="text-muted-foreground mt-2">Improve your game with position-specific tips</p>
            </div>
            <Link href="/tips" className="group flex items-center text-sm font-medium text-primary mt-4 md:mt-0">
              View all tips
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <TipsPreview />
        </section>

        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Pick Your Team</h2>
                <p className="text-muted-foreground mt-2">Find and follow your favorite soccer team</p>
              </div>
              <Link href="/teams" className="group flex items-center text-sm font-medium text-primary mt-4 md:mt-0">
                View all teams
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <TeamSelector league="premier-league" />
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Latest News</h2>
              <p className="text-muted-foreground mt-2">Stay updated with news from top leagues</p>
            </div>
            <Link href="/news" className="group flex items-center text-sm font-medium text-primary mt-4 md:mt-0">
              View all news
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <NewsPreview />
        </section>

        <section className="bg-muted py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Live Scores</h2>
                <p className="text-muted-foreground mt-2">Track matches in real-time from around the world</p>
              </div>
              <Link
                href="/live-scores"
                className="group flex items-center text-sm font-medium text-primary mt-4 md:mt-0"
              >
                View all matches
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <LiveScoresPreview />
          </div>
        </section>
      </main>
    </div>
  )
}

