"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, BusIcon as SoccerBall } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const routes = [
  {
    href: "/tips",
    label: "Tips",
  },
  {
    href: "/teams",
    label: "Teams",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/live-scores",
    label: "Live Scores",
  },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-6">
          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
            <SoccerBall className="h-6 w-6" />
          </motion.div>
          <span className="hidden font-bold sm:inline-block">SoccerHub</span>
        </Link>
        <nav className="hidden md:flex gap-6 flex-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn("text-sm font-medium transition-colors hover:text-primary")}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className="hidden md:flex">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" className="ml-2" asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex items-center gap-2 mb-8">
                <SoccerBall className="h-6 w-6" />
                <span className="font-bold">SoccerHub</span>
              </div>
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 mt-4">
                  <Button variant="outline" asChild>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

