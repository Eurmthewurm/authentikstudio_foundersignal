import React from "react"

export function SocialProof() {
  const trustedEntities = [
    "David Attenborough",
    "National Geographic", 
    "BBC",
    "Discovery",
    "Aaron Abke",
    "The Great Awakening Podcast",
    "Black Magic",
    "Arte"
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-8 overflow-hidden">
      <div className="text-center text-muted-foreground text-sm font-medium leading-tight uppercase tracking-wider">
        Trusted by founders at
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 justify-items-center max-w-6xl mx-auto">
        {trustedEntities.map((entity, index) => (
          <div 
            key={index}
            className="text-center text-foreground text-sm md:text-base font-medium leading-tight opacity-80 hover:opacity-100 transition-opacity duration-200"
          >
            {entity}
          </div>
        ))}
      </div>
    </section>
  )
}
