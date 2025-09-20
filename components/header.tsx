"use client"

import type React from "react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Quiz", href: "/quiz" },
    { name: "Method", href: "#signal-dna-intro" },
    { name: "Results", href: "#testimonials" },
    { name: "About", href: "#about-you" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/')) {
      return
    }
    
    e.preventDefault()
    if (typeof window !== 'undefined') {
      const targetId = href.substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Fixed Header with Glassmorphism */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'py-4 backdrop-blur-xl bg-background/80 border-b border-border/50 shadow-lg shadow-black/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-8">
              <Link href="/" className="group">
                <div className="flex items-center gap-3">
                  {/* Premium Logo Design */}
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-all duration-300">
                      <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
                      </div>
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-foreground text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      AuthentikStudio
                    </span>
                    <span className="text-primary text-xs font-medium tracking-widest uppercase opacity-80">
                      Signal DNA Discovery™
                    </span>
                  </div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="relative text-muted-foreground hover:text-foreground px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 hover:bg-accent/50 group hover:scale-105"
                  >
                    {item.name}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"></span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* CTA Section */}
            <div className="flex items-center gap-3">
              <Link href="/quiz-optimized" className="hidden md:block">
                <Button className="relative bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 group !shadow-none">
                  <span className="relative z-10">Start Free Assessment</span>
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </Link>
              
              {/* Scarcity Badge */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-600 text-xs font-semibold">3 spots left</span>
              </div>

              {/* Mobile Menu */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-foreground hover:bg-accent/50 rounded-xl transition-all duration-300"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="bg-background/95 backdrop-blur-xl border-l border-border/50 text-foreground w-80"
                >
                  <SheetHeader className="pb-6">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-left text-xl font-bold text-foreground">
                        Menu
                      </SheetTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-muted-foreground hover:text-foreground rounded-xl"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                  </SheetHeader>
                  
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="text-muted-foreground hover:text-foreground hover:bg-accent/50 justify-start text-lg py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:translate-x-2"
                      >
                        {item.name}
                      </Link>
                    ))}
                    
                    <div className="pt-4 mt-4 border-t border-border/50 space-y-3">
                      <Link href="/quiz-optimized" className="block">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary-dark text-primary-foreground hover:from-primary-dark hover:to-primary px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 !shadow-none">
                          Start Free Assessment
                        </Button>
                      </Link>
                      <div className="flex items-center justify-center gap-2 px-3 py-1.5 bg-red-500/10 border border-red-500/20 rounded-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-red-600 text-xs font-semibold">3 spots left this month</span>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-24"></div>
    </>
  )
}
