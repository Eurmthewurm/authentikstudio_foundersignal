"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "J-Griff",
      role: "Tech Founder",
      image: "/images/j-griff-headshot.jpg",
      quote: "Signal DNA helped me quadruple revenue in 18 months and secure Series A funding. The framework transformed how I communicate with investors and attract top talent.",
      metric: "€6M Revenue Growth",
      metricSubtext: "Series A Secured"
    },
    {
      name: "Aaron Abke",
      role: "Spiritual Entrepreneur",
      image: "/images/placeholder-user.jpg",
      quote: "The Signal DNA method gave me clarity on my unique story pattern. Now I can authentically connect with my 1M+ audience while staying true to my mission.",
      metric: "1M+ Followers",
      metricSubtext: "Authentic Growth"
    },
    {
      name: "Sarah Chen",
      role: "SaaS Founder",
      image: "/images/placeholder-user.jpg",
      quote: "I went from struggling to explain my vision to closing deals in 15 minutes. The archetype framework showed me exactly how to position my story.",
      metric: "300% Deal Close Rate",
      metricSubtext: "Faster Sales Cycle"
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Founder",
      image: "/images/placeholder-user.jpg",
      quote: "Before Signal DNA, I was invisible in investor meetings. Now I'm the founder everyone remembers and wants to work with.",
      metric: "€2.5M Raised",
      metricSubtext: "Investor Interest"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="w-full py-16 sm:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real founders who transformed their storytelling with the Signal DNA Method
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-card border border-primary/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Profile Section */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0 mb-4">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground">{currentTestimonial.name}</h3>
                <p className="text-muted-foreground mb-2">{currentTestimonial.role}</p>
                <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-2">
                  <div className="text-lg font-bold text-primary">{currentTestimonial.metric}</div>
                  <div className="text-sm text-primary/80">{currentTestimonial.metricSubtext}</div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl text-foreground italic leading-relaxed mb-6">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-card border border-primary/20 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg">
            <a href="/quiz">Start Your Success Story</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
