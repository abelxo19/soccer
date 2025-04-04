"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Mock data for teams
const leagueTeams = {
  "premier-league": [
    { id: 1, name: "Arsenal", logo: "/placeholder.svg?height=60&width=60" },
    { id: 2, name: "Aston Villa", logo: "/placeholder.svg?height=60&width=60" },
    { id: 3, name: "Chelsea", logo: "/placeholder.svg?height=60&width=60" },
    { id: 4, name: "Liverpool", logo: "/placeholder.svg?height=60&width=60" },
    { id: 5, name: "Manchester City", logo: "/placeholder.svg?height=60&width=60" },
    { id: 6, name: "Manchester United", logo: "/placeholder.svg?height=60&width=60" },
    { id: 7, name: "Newcastle", logo: "/placeholder.svg?height=60&width=60" },
    { id: 8, name: "Tottenham", logo: "/placeholder.svg?height=60&width=60" },
  ],
  "la-liga": [
    { id: 9, name: "Atletico Madrid", logo: "/placeholder.svg?height=60&width=60" },
    { id: 10, name: "Barcelona", logo: "/placeholder.svg?height=60&width=60" },
    { id: 11, name: "Real Madrid", logo: "/placeholder.svg?height=60&width=60" },
    { id: 12, name: "Sevilla", logo: "/placeholder.svg?height=60&width=60" },
    { id: 13, name: "Valencia", logo: "/placeholder.svg?height=60&width=60" },
    { id: 14, name: "Villarreal", logo: "/placeholder.svg?height=60&width=60" },
  ],
  "serie-a": [
    { id: 15, name: "AC Milan", logo: "/placeholder.svg?height=60&width=60" },
    { id: 16, name: "Inter Milan", logo: "/placeholder.svg?height=60&width=60" },
    { id: 17, name: "Juventus", logo: "/placeholder.svg?height=60&width=60" },
    { id: 18, name: "Napoli", logo: "/placeholder.svg?height=60&width=60" },
    { id: 19, name: "Roma", logo: "/placeholder.svg?height=60&width=60" },
  ],
  bundesliga: [
    { id: 20, name: "Bayern Munich", logo: "/placeholder.svg?height=60&width=60" },
    { id: 21, name: "Borussia Dortmund", logo: "/placeholder.svg?height=60&width=60" },
    { id: 22, name: "RB Leipzig", logo: "/placeholder.svg?height=60&width=60" },
    { id: 23, name: "Bayer Leverkusen", logo: "/placeholder.svg?height=60&width=60" },
  ],
  "ligue-1": [
    { id: 24, name: "PSG", logo: "/placeholder.svg?height=60&width=60" },
    { id: 25, name: "Marseille", logo: "/placeholder.svg?height=60&width=60" },
    { id: 26, name: "Lyon", logo: "/placeholder.svg?height=60&width=60" },
    { id: 27, name: "Monaco", logo: "/placeholder.svg?height=60&width=60" },
  ],
}

export default function TeamSelector({ league = "premier-league" }: { league: keyof typeof leagueTeams }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [favoriteTeams, setFavoriteTeams] = useState<number[]>([])

  const teams = leagueTeams[league] || leagueTeams["premier-league"]

  const filteredTeams = teams.filter((team) => team.name.toLowerCase().includes(searchTerm.toLowerCase()))


const toggleFavorite = (teamId: number): void => {
    if (favoriteTeams.includes(teamId)) {
        setFavoriteTeams(favoriteTeams.filter((id: number) => id !== teamId))
    } else {
        setFavoriteTeams([...favoriteTeams, teamId])
    }
}

  return (
    <div className="space-y-4">
      <Input
        type="search"
        placeholder="Search teams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md"
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredTeams.map((team, index) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 mr-3">
                      <Image src={team.logo || "/placeholder.svg"} alt={team.name} fill className="object-contain" />
                    </div>
                    <span className="font-medium">{team.name}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(team.id)}
                    className={cn(favoriteTeams.includes(team.id) ? "text-red-500" : "text-muted-foreground")}
                  >
                    <Heart className="h-5 w-5" fill={favoriteTeams.includes(team.id) ? "currentColor" : "none"} />
                    <span className="sr-only">Favorite</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

