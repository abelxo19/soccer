"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { motion } from "framer-motion"

const liveMatches = [
  {
    id: 1,
    league: "Premier League",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    homeScore: 2,
    awayScore: 2,
    minute: 78,
    status: "LIVE",
  },
  {
    id: 2,
    league: "La Liga",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeScore: 1,
    awayScore: 0,
    minute: 65,
    status: "LIVE",
  },
  {
    id: 3,
    league: "Serie A",
    homeTeam: "Juventus",
    awayTeam: "Inter Milan",
    homeScore: 0,
    awayScore: 0,
    minute: 32,
    status: "LIVE",
  },
]

export default function LiveScoresPreview() {
  return (
    <div className="space-y-4">
      {liveMatches.map((match, index) => (
        <motion.div
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{match.league}</span>
                <Badge variant="destructive" className="text-xs">
                  LIVE {match.minute}
                </Badge>
              </div>

              <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 relative mr-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt={match.homeTeam}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <span className="font-medium truncate">{match.homeTeam}</span>
                </div>

                <div className="text-center">
                  <div className="text-xl font-bold">
                    {match.homeScore} - {match.awayScore}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <span className="font-medium truncate">{match.awayTeam}</span>
                  <div className="w-8 h-8 relative ml-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt={match.awayTeam}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

