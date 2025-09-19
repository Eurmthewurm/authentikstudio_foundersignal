import React from "react"
import { User, Award, Target, Film, Users, Star } from "lucide-react"

export function AboutYouSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Meet Ermo Egberts - Founder Storytelling Specialist
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
              
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  I've spent years studying what makes founders magnetic, working directly with breakthrough entrepreneurs like <strong className="text-foreground">Aaron Abke</strong> (spiritual teacher with 1M+ followers) and <strong className="text-foreground">J-Griff</strong> (€2M to €8M growth).
                </p>
                
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  My secret weapon: Partnership with <strong className="text-foreground">John</strong>, a documentary filmmaker with 15+ years creating stories for National Geographic, Discovery, and BBC. Together, we apply documentary-quality narrative techniques to founder stories.
                </p>
                
                {/* AuthentikStudio Advantage */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6">The AuthentikStudio Advantage:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <Film className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Documentary filmmaker collaboration for cinematic quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Direct experience with successful founders (Aaron Abke, J-Griff)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Unique blend of spiritual storytelling + business strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Proven €50M+ in founder funding success</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted/5 border border-border/20 rounded-lg p-6">
                  <p className="text-xl font-light text-foreground italic">
                    "Your story deserves the same documentary-quality narrative mastery that made David Attenborough legendary."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 justify-center">
                  <Film className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">15+ Years Documentary</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Target className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">€50M+ Raised</span>
                </div>
                <div className="flex items-center gap-3 justify-center">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">1M+ Followers Reached</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
