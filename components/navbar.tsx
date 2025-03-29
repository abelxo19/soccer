"use client"

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Trophy, User } from 'lucide-react'
import { motion } from 'framer-motion'

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <motion.nav 
      className="border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Trophy className="h-6 w-6" />
          <span className="font-bold text-xl">LiveScore Pro</span>
        </Link>
        
        <div className="flex items-center space-x-4 ml-auto">
          <Link href="/leagues">
            <Button variant="ghost">Leagues</Button>
          </Link>
          <Link href="/live">
            <Button variant="ghost">Live Matches</Button>
          </Link>
          <Link href="/news">
            <Button variant="ghost">News</Button>
          </Link>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}