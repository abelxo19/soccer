"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Ultimate Soccer Resource
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Tips, teams, news, and live scores - everything you need to enhance your soccer experience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/tips">Explore Tips</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/live-scores">Live Scores</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="aspect-video overflow-hidden rounded-xl bg-foreground/5 sm:w-full">
              <div className="h-full w-full bg-[url('/placeholder.svg?height=600&width=800')] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

