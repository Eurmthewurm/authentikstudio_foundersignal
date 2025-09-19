import React from "react"
import { Award, Users, Globe, Star, Film, Camera } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full px-5 py-16 md:py-20 overflow-hidden flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="flex-shrink-0">
                <Image
                  src="/images/ermo-headshot.jpg"
                  alt="Ermo Egberts - Founder Storytelling Specialist"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-primary/20 shadow-lg"
                />
              </div>
              <div className="flex-1 text-left md:text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  Meet Ermo Egberts - Founder Storytelling Specialist
                </h2>
                <div className="inline-flex items-center px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mt-4">
                  <span className="text-primary font-semibold text-sm">Backed by Documentary Filmmaking Excellence</span>
                </div>
              </div>
            </div>
            
            {/* Partnership Showcase */}
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/ermo-headshot.jpg"
                  alt="Ermo Egberts"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-primary/30"
                />
                <div className="text-2xl text-primary font-bold">+</div>
                <Image
                  src="/images/john-headshot.jpg"
                  alt="John - Documentary Filmmaker"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-primary/30"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold text-foreground">The AuthentikStudio Partnership</p>
                <p className="text-sm text-muted-foreground">Ermo's founder psychology expertise + John's 15+ years with National Geographic, BBC, Discovery</p>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I've spent years studying what makes founders magnetic, working directly with breakthrough entrepreneurs like <strong className="text-foreground">Aaron Abke</strong> (spiritual teacher/entrepreneur with 1M+ following) and <strong className="text-foreground">J-Griff</strong> (€2M to €8M growth story).
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My secret weapon: Partnership with <strong className="text-foreground">John</strong>, a documentary filmmaker with 15+ years creating stories for National Geographic, Discovery, and BBC. Together, we apply documentary-quality narrative techniques to founder stories.
            </p>
            
            <div className="p-6 border-l-4 border-primary/30 bg-muted/10 rounded-r-lg">
              <p className="text-xl font-light text-foreground italic">
                "Your story deserves the same documentary-quality treatment that made David Attenborough legendary."
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">The AuthentikStudio Advantage:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <Film className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Documentary filmmaker collaboration for documentary-quality storytelling</span>
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
                <span className="text-muted-foreground">Proven track record of measurable results</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Years Documentary Experience</div>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">€6M</div>
                <div className="text-sm text-muted-foreground">Generated for J-Griff</div>
              </div>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">1M+</div>
                <div className="text-sm text-muted-foreground">Followers Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
