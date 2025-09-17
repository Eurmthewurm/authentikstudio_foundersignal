"use client"

import React, { useState } from "react"
import { Play, X, ExternalLink } from "lucide-react"

export function JGriffVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
  }

  const handleCloseVideo = () => {
    setIsVideoOpen(false)
  }

  return (
    <>
      {/* Video Thumbnail */}
      <div className="mt-12 md:mt-16">
        <div 
          className="group cursor-pointer hover:opacity-90 transition-opacity duration-300"
          onClick={handleVideoClick}
        >
          <div className="relative w-80 h-48 md:w-96 md:h-56 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/20 overflow-hidden">
            {/* J-Griff Photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for J-Griff photo - you can replace this with actual image */}
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
                  <span className="text-primary font-bold text-2xl">JG</span>
                </div>
              </div>
            </div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors backdrop-blur-sm">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
            
            {/* Video Info */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-background/80 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-semibold text-foreground">J-Griff Success Story</p>
                <p className="text-xs text-muted-foreground">€2M to €8M in 18 months</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
