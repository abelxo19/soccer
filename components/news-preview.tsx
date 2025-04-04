"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const news = [
  {
    title: "Manchester City secure dramatic win against Arsenal in title showdown",
    date: "April 3, 2025",
    readTime: "10 min read",
    excerpt:
      "A last-minute goal from Kevin De Bruyne secured a crucial three points for Manchester City in their pursuit of another Premier League title.",
    image: "/placeholder.svg?height=400&width=600",
    league: "Premier League",
  },
  {
    title: "Barcelona's young stars shine in El Clasico victory over Real Madrid",
    date: "April 2, 2025",
    readTime: "8 min read",
    excerpt:
      "Barcelona's academy graduates led the way as they defeated rivals Real Madrid 3-1 at the Camp Nou to extend their lead at the top of La Liga.",
    image: "/placeholder.svg?height=400&width=600",
    league: "La Liga",
  },
  {
    title: "Bayern Munich set new Bundesliga record with tenth consecutive title",
    date: "April 1, 2025",
    readTime: "7 min read",
    excerpt:
      "Bayern Munich have made history by securing their tenth consecutive Bundesliga title with a dominant 4-0 win over Borussia Dortmund.",
    image: "/placeholder.svg?height=400&width=600",
    league: "Bundesliga",
  },
]

export default function NewsPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {news.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full overflow-hidden">
            <div className="aspect-video relative">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                {item.league}
              </div>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">
                <Link href="#" className="hover:underline">
                  {item.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center text-xs mt-2">
                <CalendarIcon className="h-3 w-3 mr-1" />
                {item.date}
                <Clock className="h-3 w-3 ml-3 mr-1" />
                {item.readTime}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

