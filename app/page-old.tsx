import { HeroSection } from "@/components/hero-section"
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
        
        {/* 3. PROOF - Why Signal DNA Works */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.2}>
          <WhySignalDNAWorksSection />
        </AnimatedSection>
        
        {/* 4. LEAD MAGNET - Signal Strength Quiz */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.25}>
          <SignalStrengthQuizSection />
        </AnimatedSection>
        
        {/* 5. SOCIAL PROOF - J-Griff Success Story */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.3}>
          <JGriffHighlight />
        </AnimatedSection>
        
        {/* 6. MORE SOCIAL PROOF - Testimonials */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.35}>
          <div id="testimonials">
            <TestimonialGridSection />
          </div>
        </AnimatedSection>
        
        {/* 7. CORE OFFER - Signal DNA Intensive */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.4}>
          <PricingSection />
        </AnimatedSection>
        
        {/* 7.1. EMERGING PATTERNS DATA VISUALIZATION */}
        <AnimatedSection className="relative z-10" delay={0.45}>
          <EmergingPatternsVisualization />
        </AnimatedSection>
        
        {/* 7.2. SECONDARY CONVERSION OPTIONS */}
        <AnimatedSection className="relative z-10" delay={0.5}>
          <SecondaryConversions />
        </AnimatedSection>
        
        {/* STRATEGIC FOUNDATION SECTIONS */}
        
        {/* 7.1. CONTENT & SEO STRATEGY */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.425}>
          <ContentStrategySection />
        </AnimatedSection>
        
        {/* 7.2. REFERRAL & AFFILIATE ECOSYSTEM */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.45}>
          <ReferralEcosystemSection />
        </AnimatedSection>
        
        {/* 7.3. CUSTOMER SUCCESS WORKFLOW */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.475}>
          <CustomerSuccessWorkflowSection />
        </AnimatedSection>
        
        {/* 7.4. SALES ENABLEMENT & TRAINING */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.5}>
          <SalesEnablementSection />
        </AnimatedSection>
        
        {/* 7.5. THOUGHT LEADERSHIP CADENCE */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.525}>
          <ThoughtLeadershipSection />
        </AnimatedSection>
        
        {/* 7.6. COMPETITIVE MONITORING */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.55}>
          <CompetitiveMonitoringSection />
        </AnimatedSection>
        
        {/* 8. GROUP OFFER - Founders Circle */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.575}>
          <FoundersCircleSection />
        </AnimatedSection>
        
        {/* 9. CREDIBILITY - About You */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.6}>
          <div id="about-you">
            <AboutYouSection />
          </div>
        </AnimatedSection>
        
        {/* 10. URGENCY + SCARCITY - Combined */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.625}>
          <UrgencySection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.65}>
          <ScarcityGuaranteeSection />
        </AnimatedSection>
        
        {/* 11. OBJECTION HANDLING - FAQ */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.675}>
          <FAQSection />
        </AnimatedSection>
        
        {/* 12. FINAL CLOSE - CTA */}
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" delay={0.7}>
          <CTASection />
        </AnimatedSection>
        
        <FooterSection />
      </div>
    </div>
  )
}