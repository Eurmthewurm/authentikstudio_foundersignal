import React from "react"

const AIEnhancedHumanCrafted: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* AI + Human Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* AI Brain */}
            <circle cx="35" cy="35" r="20" stroke="url(#aiGradient)" strokeWidth="2" fill="none" />
            <path d="M25 35 Q35 25 45 35 Q35 45 25 35" stroke="url(#aiGradient)" strokeWidth="2" fill="none" />
            <circle cx="30" cy="30" r="2" fill="url(#aiGradient)" />
            <circle cx="40" cy="30" r="2" fill="url(#aiGradient)" />
            
            {/* Human hand */}
            <path d="M65 25 L75 20 L80 30 L75 40 L65 35 Z" fill="url(#aiGradient)" opacity="0.8" />
            <path d="M70 20 L72 15 L74 20 L72 25 Z" fill="url(#aiGradient)" opacity="0.6" />
            <path d="M72 25 L74 20 L76 25 L74 30 Z" fill="url(#aiGradient)" opacity="0.6" />
            <path d="M74 30 L76 25 L78 30 L76 35 Z" fill="url(#aiGradient)" opacity="0.6" />
            
            {/* Connection line */}
            <path d="M55 35 Q60 30 65 35" stroke="url(#aiGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">AI-Enhanced, Human-Crafted</div>
      </div>
    </div>
  )
}

export default AIEnhancedHumanCrafted