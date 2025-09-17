import React from "react"
import { Award, Users, Globe, Star } from "lucide-react"

export function AboutSection() {
  return (
    <section className="w-full px-5 py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Meet Your Signal DNA Architect
            </h2>
            <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
              <span className="text-primary font-semibold text-sm">The "Rick Rubin" for Founder Storytelling</span>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              After watching hundreds of brilliant founders struggle to break through the noise, I developed the Signal DNA Discovery™ method to solve the authenticity crisis facing today's entrepreneurs.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My background spans 15+ years in brand psychology, narrative architecture, and startup scaling. I've worked with founders who've raised over €50M collectively, and I've seen firsthand how the right story can transform everything—from investor meetings to team motivation to customer loyalty.
            </p>
            
            <div className="p-6 border-l-4 border-primary/30 bg-muted/10 rounded-r-lg">
              <p className="text-xl font-light text-foreground italic">
                "The difference? I don't just help you tell your story better. I help you discover the story that was always meant to be told."
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Founders Helped</div>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">12</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">€50M+</div>
                <div className="text-sm text-muted-foreground">Raised by Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
