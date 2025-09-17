import SignalDNADiscovery from "./bento/signal-dna-discovery"
import SignalEngineering from "./bento/signal-engineering"
import SignalAmplification from "./bento/signal-amplification"
import AIEnhancedHumanCrafted from "./bento/ai-enhanced-human-crafted"
import BuiltForSpeed from "./bento/built-for-speed"
import FutureProofAgainstAI from "./bento/future-proof-against-ai"

const BentoCard = ({ title, description, Component }) => (
  <div className="flex flex-col justify-start items-start relative group">
    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <h3 className="self-stretch text-foreground text-base font-semibold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="self-stretch text-muted-foreground text-sm leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
    <div className="self-stretch h-24 md:h-32 relative z-10 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Phase 1: Deep Story Archaeology",
      description: "AI-powered founder psychology assessment and authentic voice discovery session.",
      Component: SignalDNADiscovery,
    },
    {
      title: "Phase 2: Signal Engineering",
      description: "Competitive differentiation mapping and audience resonance optimization.",
      Component: SignalEngineering,
    },
    {
      title: "Phase 3: Signal Amplification",
      description: "Multi-platform content framework and crisis-proof messaging system.",
      Component: SignalAmplification,
    },
    {
      title: "AI-Enhanced, Human-Crafted",
      description: "Our proprietary AI identifies patterns in your story that even you didn't notice.",
      Component: AIEnhancedHumanCrafted,
    },
    {
      title: "Built for Speed",
      description: "Get your complete Signal DNA framework in 72 hours, ready to deploy.",
      Component: BuiltForSpeed,
    },
    {
      title: "Future-Proof Against AI",
      description: "Authentic Signal DNA becomes your most valuable differentiator.",
      Component: FutureProofAgainstAI,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
              The Signal DNA Method
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-base md:text-lg font-normal leading-relaxed">
              Unlike generic "founder story" templates, Signal DNA Discovery™ uses advanced AI analysis combined with deep human psychology to extract your most compelling narrative elements.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
