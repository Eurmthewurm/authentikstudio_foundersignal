import { HeroSection } from "@/components/hero-section"
import { FounderCrisisSection } from "@/components/founder-crisis-section"
import { SignalDNAIntroSection } from "@/components/signal-dna-intro-section"
import { JGriffHighlight } from "@/components/j-griff-highlight"
import { SignalStrengthQuizSection } from "@/components/signal-strength-quiz-section"
import { SignalDNAIntensiveSection } from "@/components/signal-dna-intensive-section"
import { FoundersCircleSection } from "@/components/founders-circle-section"
import { WhySignalDNAWorksSection } from "@/components/why-signal-dna-works-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { UrgencySection } from "@/components/urgency-section"
import { ScarcityGuaranteeSection } from "@/components/scarcity-guarantee-section"
import { AboutYouSection } from "@/components/about-you-section"
import { FAQSection } from "@/components/faq-section"
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
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.1}>
          <FounderCrisisSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.15}>
          <div id="signal-dna-intro">
            <SignalDNAIntroSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.175}>
          <JGriffHighlight />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.2}>
          <SignalStrengthQuizSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.25}>
          <SignalDNAIntensiveSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.3}>
          <FoundersCircleSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.35}>
          <WhySignalDNAWorksSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.4}>
          <div id="testimonials">
            <TestimonialGridSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.425}>
          <UrgencySection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.45}>
          <ScarcityGuaranteeSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.5}>
          <div id="about-you">
            <AboutYouSection />
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.55}>
          <FAQSection />
        </AnimatedSection>
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 md:px-8 py-16 md:py-20" delay={0.6}>
          <CTASection />
        </AnimatedSection>
        
        <FooterSection />
      </div>
    </div>
  )
}