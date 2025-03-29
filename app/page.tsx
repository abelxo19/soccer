"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Trophy, Calendar, Bell, Star } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Live Football Scores & Updates</h1>
        <p className="text-muted-foreground">Stay updated with real-time scores, statistics, and match highlights</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Trophy className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Top Leagues</h2>
            </div>
            <p className="text-muted-foreground mb-4">Follow premier leagues worldwide</p>
            <Link href="/leagues">
              <Button className="w-full">Explore Leagues</Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Match Schedule</h2>
            </div>
            <p className="text-muted-foreground mb-4">Never miss an important match</p>
            <Link href="/schedule">
              <Button className="w-full">View Schedule</Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <Star className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-semibold">Favorites</h2>
            </div>
            <p className="text-muted-foreground mb-4">Track your favorite teams</p>
            <Button className="w-full">Manage Favorites</Button>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Get Match Notifications</h2>
        <p className="text-muted-foreground mb-6">Stay updated with live scores and important match events</p>
        <Button>
          <Bell className="mr-2 h-4 w-4" />
          Enable Notifications
        </Button>
      </motion.div>
    </div>
  )
}