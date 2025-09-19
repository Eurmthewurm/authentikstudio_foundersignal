import React from "react"
import Link from "next/link"
import { ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react"

export function ContentStrategySection() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Complete{" "}
            <span className="text-primary">Founder Story Framework</span>{" "}
            Resource Hub
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform from invisible founder to industry legend
          </p>
        </div>

        {/* SEO-Optimized Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Pillar Content 1 */}
          <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Founder Archetype Quiz: Discover Your Storytelling DNA
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Take our comprehensive founder archetype assessment to identify your unique storytelling strengths and blind spots. Get personalized insights for your founder journey.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">2 min read</span>
              <Link href="/quiz" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm">
                Take Quiz <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar Content 2 */}
          <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              The Signal DNA Framework: Complete Guide
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Master the proven methodology used by legendary founders like J-Griff and Aaron Abke. Learn how to craft stories that resonate across investors, customers, and talent.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">8 min read</span>
              <Link href="/audit" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm">
                Read Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Pillar Content 3 */}
          <div className="bg-card border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:border-primary/40">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Case Study: J-Griff's €6M Revenue Transformation
            </h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
              Deep dive into how J-Griff transformed from unknown founder to industry legend, generating €6M+ revenue through strategic storytelling and Signal DNA optimization.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">12 min read</span>
              <Link href="/audit" className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-semibold text-sm">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* SEO Keywords Section */}
        <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Master These Founder Storytelling Concepts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Founder Archetype Quiz",
              "Signal DNA Framework", 
              "Founder Story Framework",
              "Investor Pitch Story",
              "Customer Acquisition Story",
              "Talent Attraction Narrative",
              "Crisis Communication",
              "Founder Psychology"
            ].map((keyword) => (
              <div key={keyword} className="text-center p-3 bg-primary/5 rounded-lg border border-primary/10 hover:bg-primary/10 transition-colors duration-300">
                <span className="text-sm font-semibold text-primary">{keyword}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Linking Strategy */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Ready to Transform Your Founder Story?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join 2,847+ founders who've discovered their Signal DNA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
              Take Free Quiz
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/audit" className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors duration-300">
              Book Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
