"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link" // Import Link for client-side navigation

export function Header() {
  const navItems = [
    { name: "Method", href: "#features-section" },
    { name: "Results", href: "#testimonials-section" },
    { name: "Pricing", href: "#pricing-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (typeof window !== 'undefined') {
      const targetId = href.substring(1) // Remove '#' from href
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="w-full py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-foreground text-lg font-semibold tracking-tight">AuthentikStudio</span>
                  <span className="text-primary text-xs font-medium tracking-wide">Signal DNA Discovery™</span>
                </div>
              </div>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)} // Add onClick handler
                    className="text-muted-foreground hover:text-foreground px-4 py-2 rounded-full font-normal text-sm transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/audit" rel="noopener noreferrer" className="hidden md:block">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full font-normal text-sm shadow-sm">
              FREE Audit
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)} // Add onClick handler
                    className="text-muted-foreground hover:text-foreground justify-start text-lg py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/audit" rel="noopener noreferrer" className="w-full mt-4">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2 rounded-full font-normal text-sm shadow-sm">
                    FREE Audit
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
