"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { getLeagueFixtures, TOP_LEAGUES, type Match } from '@/lib/api'

export default function SchedulePage() {
  const [activeLeague, setActiveLeague] = useState(TOP_LEAGUES[0].id)
  const [fixtures, setFixtures] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFixtures() {
      setLoading(true)
      const data = await getLeagueFixtures(activeLeague)
      setFixtures(data)
      setLoading(false)
    }
    fetchFixtures()
  }, [activeLeague])

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">Match Schedule</h1>
        <p className="text-muted-foreground">Upcoming matches from top European leagues</p>
      </motion.div>

      <Tabs defaultValue={TOP_LEAGUES[0].id.toString()} className="w-full">
        <TabsList className="w-full justify-start overflow-x-auto">
          {TOP_LEAGUES.map((league) => (
            <TabsTrigger
              key={league.id}
              value={league.id.toString()}
              onClick={() => setActiveLeague(league.id)}
              className="min-w-[120px]"
            >
              {league.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-8">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Card key={i} className="mb-4">
                <CardContent className="p-6">
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {fixtures.map((match: Match) => (
                <Card key={match.id} className="mb-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-right min-w-[140px]">
                          <p className="font-semibold">{match.teams.home.name}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">vs</p>
                          <p className="text-sm text-muted-foreground">
                            {format(new Date(match.date), 'MMM dd, HH:mm')}
                          </p>
                        </div>
                        <div className="text-left min-w-[140px]">
                          <p className="font-semibold">{match.teams.away.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{match.fixture.venue.name}</p>
                        <p className="text-sm text-muted-foreground">{match.fixture.venue.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </Tabs>
    </div>
  )
}