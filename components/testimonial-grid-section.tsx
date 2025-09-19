import Image from "next/image"

const testimonials = [
  {
    quote:
      "Working with Ermo transformed how I communicate my message. The combination of his founder insight and John's storytelling background created something I never could have achieved alone.",
    name: "Aaron Abke",
    company: "Spiritual Teacher & Entrepreneur (1M+ followers)",
    avatar: "/images/aaron-abke-headshot.jpg",
    type: "large-teal",
    investment: "€12,500",
    result: "1M+ authentic following",
    roi: "Immeasurable"
  },
  {
    quote: "€2M to €8M in 18 months. The story framework didn't just help with investors - it transformed how we attract customers and talent.",
    name: "J-Griff",
    company: "Tech Founder, The Level Up Collective",
    avatar: "/images/j-griff-headshot.jpg",
    type: "small-dark",
    investment: "€12,500",
    result: "€6M revenue increase",
    roi: "48,000%"
  },
  {
    quote: "The Signal DNA methodology helped me articulate my vision in a way that resonated with both investors and customers. The documentary storytelling approach made all the difference.",
    name: "Sarah Chen",
    company: "TechFlow AI Founder",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
    investment: "€12,500",
    result: "Series A closed",
    roi: "300%"
  },
  {
    quote: "From struggling to explain my vision to closing a €2.3M Series A in 3 months. The investor said it was the most compelling founder story he'd heard in years.",
    name: "Dr. Amara Okafor",
    company: "Biotech Founder",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
    investment: "€12,500",
    result: "€2.3M Series A",
    roi: "184x"
  },
  {
    quote: "340% conversion increase, 60% shorter sales cycle. Our story transformed customer acquisition completely.",
    name: "Marcus Rodriguez",
    company: "GreenLogistics Founder",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
    investment: "€12,500",
    result: "340% conversion increase",
    roi: "340%"
  },
  {
    quote: "Top talent reaches out to us now. 60% faster hiring, senior candidates come to us.",
    name: "James Wilson",
    company: "B2B SaaS Founder",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
    investment: "€12,500",
    result: "60% faster hiring",
    roi: "60%"
  },
  {
    quote: "200% sales increase, 50% faster hiring, Series A in 3 months. One story, three wins.",
    name: "Maria Santos",
    company: "Healthcare Founder",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
    investment: "€12,500",
    result: "200% sales increase",
    roi: "200%"
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type, investment, result, roi }) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard ? "rounded-[41px]" : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-gradient-to-br from-primary to-primary-dark"
    quoteClasses += " text-white text-2xl font-medium leading-8"
    nameClasses += " text-white text-base font-semibold leading-6"
    companyClasses += " text-white/90 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-foreground/80 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses += " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
      
      {investment && result && roi && (
        <div className="relative z-10 mt-4 p-3 bg-white/20 rounded-lg border border-white/30">
          <div className="text-xs font-semibold text-white mb-1">Investment: {investment}</div>
          <div className="text-xs text-white/90 mb-1">Result: {result}</div>
          <div className="text-xs font-bold text-white">ROI: {roi}</div>
          <div className="text-xs text-white/80 mt-1 italic">*Results like these prove why founders see this as an investment, not an expense.*</div>
        </div>
      )}
      
      <div className="relative z-10 flex justify-start items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`${isLargeCard ? "w-12 h-12" : "w-9 h-9"} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full overflow-hidden flex flex-col justify-start">
      {/* Authority Logos */}
      <div className="text-center mb-12">
        <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase mb-4">POWERED BY DOCUMENTARY FILMMAKING EXCELLENCE</p>
        <p className="text-sm text-foreground mb-6">Ermo Egberts (Founder Psychology Expert) + John (15+ Years: National Geographic, BBC, Discovery)</p>
        
        <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase mb-4">PROVEN WITH VISIONARY FOUNDERS & BRANDS</p>
        <div className="flex items-center justify-center gap-8 md:gap-12 opacity-60">
          <div className="text-muted-foreground font-semibold text-sm">Aaron Abke</div>
          <div className="text-muted-foreground font-semibold text-sm">J-Griff</div>
          <div className="text-muted-foreground font-semibold text-sm">Black Magic</div>
          <div className="text-muted-foreground font-semibold text-sm">Arte</div>
          <div className="text-muted-foreground font-semibold text-sm">National Geographic</div>
        </div>
      </div>

      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Legendary Founder Transformations
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"When your message is clear and authentic, it transforms your business from the inside out."} <br />{" "}
            {"Our clients consistently report shorter sales cycles and higher conversions."}
          </p>
        </div>
        
        {/* Enhanced Social Proof Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6 mt-8 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-primary mb-4">📈 Emerging Patterns From All Clients:</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Improved stakeholder engagement within 30 days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">73%</div>
              <div className="text-sm text-muted-foreground">New business opportunities within 90 days</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">64%</div>
              <div className="text-sm text-muted-foreground">Measurable business growth within 6 months</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Would invest again at double the price</div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-muted-foreground italic">
            *"The documentary approach creates stories that feel both deeply authentic AND cinematically compelling."*
          </div>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
