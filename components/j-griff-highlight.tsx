"use client"

import React, { useState } from "react"
import { Play, ExternalLink, X } from "lucide-react"

export function JGriffHighlight() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
  }

  const handleCloseVideo = () => {
    setIsVideoOpen(false)
  }

  return (
    <>
      <section className="w-full px-5 py-20 md:py-24 overflow-hidden flex justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-muted/5 border border-border/20 rounded-2xl p-8 md:p-12 cursor-pointer hover:bg-muted/10 transition-all duration-300"
            onClick={handleVideoClick}
          >
            {/* Success Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <Play className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium text-sm">Success Story</span>
            </div>
            
            {/* Main Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight mb-8">
              "AuthentikStudio helped us go from <span className="text-primary">€2M to €8M</span> in just <span className="text-primary">18 months</span>"
            </blockquote>
            
            {/* Attribution with Photo */}
            <div className="flex items-center justify-center gap-4 mb-8">
              {/* J-Griff Photo */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                <span className="text-primary font-bold text-xl">JG</span>
              </div>
              <div className="text-left">
                <div className="text-foreground font-semibold text-lg">J-Griff</div>
                <div className="text-muted-foreground text-sm">Tech Founder</div>
                <div className="text-primary text-xs font-medium">The Level Up Collective</div>
              </div>
            </div>
            
            {/* Subtext */}
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              The Signal DNA framework transformed how J-Griff communicates his value proposition, leading to 4x revenue growth in just 18 months.
            </p>
            
            {/* Click to Watch */}
            <div className="flex items-center justify-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Play className="w-5 h-5" />
              <span className="font-medium text-lg">Click Thumbnail to Watch Full Story</span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl mx-4">
            {/* Close Button */}
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            {/* Video Container */}
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
              {/* Embedded Video Player */}
              <iframe
                src="https://player.vimeo.com/video/1112128628?autoplay=1&title=0&byline=0&portrait=0"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="J-Griff Success Story"
              />
            </div>
            
            {/* Fallback for external link */}
            <div className="mt-4 text-center">
              <a
                href="https://vimeo.com/1112128628"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Open in Vimeo</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
