import { HeroSection } from "@/components/hero-section"
import { CondensedFAQ } from "@/components/condensed-faq"
import { FounderCrisisSection } from "@/components/founder-crisis-section"
import { SignalDNAIntroSection } from "@/components/signal-dna-intro-section"
import { JGriffHighlight } from "@/components/j-griff-highlight"
import { SignalStrengthQuizSection } from "@/components/signal-strength-quiz-section"
import { PricingSection } from "@/components/pricing-section"
import { EmergingPatternsVisualization } from "@/components/emerging-patterns-visualization"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { SEOOptimizedFAQ } from "@/components/seo-optimized-faq"
import { UrgencySection } from "@/components/urgency-section"
import { ScarcityGuaranteeSection } from "@/components/scarcity-guarantee-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      {/* Enhanced Signal Line - More Sophisticated */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/15 to-transparent z-0" />
      
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
        </main>
        
        {/* Quick FAQ - Above the Fold */}
        <CondensedFAQ />
        
        {/* 1. PROBLEM - Founder Crisis */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.1}>
          <FounderCrisisSection />
        </AnimatedSection>
        
        {/* 2. SOLUTION - Signal DNA Intro */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.15}>
          <div id="signal-dna-intro">
            <SignalDNAIntroSection />
          </div>
        </AnimatedSection>
        
        {/* 3. PROOF - J-Griff Case Study */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.2}>
          <JGriffHighlight />
        </AnimatedSection>
        
        {/* 4. HOW IT WORKS - Quiz Section */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.25}>
          <SignalStrengthQuizSection />
        </AnimatedSection>
        
        {/* 5. CORE OFFER - Pricing */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.3}>
          <PricingSection />
        </AnimatedSection>
        
        {/* 6. DATA VISUALIZATION - Emerging Patterns */}
        <AnimatedSection className="relative z-10" delay={0.35}>
          <EmergingPatternsVisualization />
        </AnimatedSection>
        
        {/* 7. SUCCESS STORIES - Streamlined Carousel */}
        <AnimatedSection className="relative z-10" delay={0.4}>
          <TestimonialsCarousel />
        </AnimatedSection>
        
        {/* 8. URGENCY & SCARCITY */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.45}>
          <UrgencySection />
        </AnimatedSection>
        
        {/* 9. GUARANTEES */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.5}>
          <ScarcityGuaranteeSection />
        </AnimatedSection>
        
        {/* 10. FAQ - SEO Optimized */}
        <AnimatedSection className="relative z-10" delay={0.55}>
          <SEOOptimizedFAQ />
        </AnimatedSection>
        
        {/* 11. FINAL CTA */}
        <AnimatedSection className="relative z-10" delay={0.6}>
          <CTASection />
        </AnimatedSection>
        
        {/* FOOTER */}
        <FooterSection />
      </div>
    </div>
  )
}
