import Link from "next/link"
import { BusIcon as SoccerBall } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <SoccerBall className="h-6 w-6" />
            <span className="font-bold">SoccerHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Your ultimate resource for soccer tips, team selection, news, and live scores.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/tips" className="text-sm text-muted-foreground hover:text-foreground">
                Soccer Tips
              </Link>
            </li>
            <li>
              <Link href="/teams" className="text-sm text-muted-foreground hover:text-foreground">
                Find Your Team
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-sm text-muted-foreground hover:text-foreground">
                Football News
              </Link>
            </li>
            <li>
              <Link href="/live-scores" className="text-sm text-muted-foreground hover:text-foreground">
                Live Scores
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Company</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} SoccerHub. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

