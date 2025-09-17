import React from "react"
import { User, Award, Target } from "lucide-react"

export function AboutYouSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              About You
            </h2>
          </div>

          <div className="bg-muted/5 border border-border/20 rounded-xl p-8 md:p-12">
            <div className="text-center space-y-8">
              {/* Profile Image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-primary/20">
                <img 
                  src="/images/ermo-headshot.jpg" 
                  alt="Ermo Egberts" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Ermo Egberts – The "Rick Rubin" for Founder Storytelling
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  15+ years in brand psychology and narrative design. Helped founders raise over €50M. My mission: make authenticity your most powerful growth engine.
                </p>
                
                {/* Team Highlight */}
                <div className="bg-muted/5 border border-border/20 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-foreground mb-3">Backed by a Professional Team</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    While I lead the Signal DNA methodology, you're not just working with me. Our team includes:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Documentary filmmakers with decades of experience</li>
                    <li>• Brand psychologists and narrative experts</li>
                    <li>• Video production specialists</li>
                    <li>• Storytelling consultants from major media companies</li>
                  </ul>
                </div>
                
                {/* Case Study Highlight */}
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
                  <h4 className="font-bold text-primary mb-2">Recent Success Story</h4>
                  <p className="text-sm text-muted-foreground">
                    "Helped a biotech founder refine her Signal DNA. Within 3 months, she went from struggling to explain her vision to closing a €2.3M Series A. 
                    The investor said it was the most compelling founder story he'd heard in years."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">€50M+ Raised</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Brand Psychology Expert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
