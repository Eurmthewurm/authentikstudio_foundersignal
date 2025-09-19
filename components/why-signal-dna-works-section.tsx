import React from "react"
import { Target, Bot, Zap, Shield, Users, Film, Star } from "lucide-react"

export function WhySignalDNAWorksSection() {
  return (
    <section className="w-full overflow-hidden flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why AuthentikStudio Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most storytelling agencies learned from marketing books.<br />
              Most founder coaches never built documentary-quality narratives.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-center mb-6">We're the rare combination:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Direct founder experience</h4>
                  <p className="text-sm text-muted-foreground">Aaron Abke, J-Griff success stories</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Film className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Documentary production quality</h4>
                  <p className="text-sm text-muted-foreground">John's 15+ years with National Geographic, BBC, Discovery</p>
                </div>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Authentic vulnerability focus</h4>
                  <p className="text-sm text-muted-foreground">Not generic "hero's journey" templates</p>
                </div>
              </div>
            </div>
          </div>

            <div className="text-center">
              <div className="bg-muted/5 border border-border/20 rounded-xl p-6 max-w-3xl mx-auto">
                <p className="text-xl font-light text-foreground italic">
                  "The result: Founder stories that feel both deeply authentic AND documentary-quality compelling."
                </p>
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Beyond Templates</h3>
              </div>
              <p className="text-muted-foreground">
                No cookie-cutter "hero's journey" – your Signal DNA is as unique as your fingerprint
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI + Human Psychology</h3>
              </div>
              <p className="text-muted-foreground">
                Proprietary analysis meets lived founder experience for maximum impact
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fast Results</h3>
              </div>
              <p className="text-muted-foreground">
                Full framework in 72 hours – no 6-month brand discovery processes
              </p>
            </div>
            
            <div className="bg-muted/5 border border-border/20 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Future-Proof</h3>
              </div>
              <p className="text-muted-foreground">
                Authenticity is the last differentiator in an AI-driven world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
