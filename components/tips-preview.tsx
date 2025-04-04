"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const tips = [
  {
    title: "Defensive Positioning",
    description: "Master the art of defensive positioning",
    position: "Defenders",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tips?tab=defenders",
  },
  {
    title: "Switching Play",
    description: "Learn to change the point of attack effectively",
    position: "Midfielders",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tips?tab=midfielders",
  },
  {
    title: "Dribbling Skills",
    description: "Beat defenders with effective dribbling techniques",
    position: "Wingers",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tips?tab=wingers",
  },
  {
    title: "Finishing Techniques",
    description: "Convert chances with various finishing methods",
    position: "Strikers",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tips?tab=strikers",
  },
]

export default function TipsPreview() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <Card className="h-full overflow-hidden">
            <div className="aspect-video relative">
              <Image src={tip.image || "/placeholder.svg"} alt={tip.title} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                {tip.position}
              </div>
            </div>
            <CardHeader className="p-4">
              <CardTitle className="text-lg">{tip.title}</CardTitle>
              <CardDescription>{tip.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={tip.href}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

