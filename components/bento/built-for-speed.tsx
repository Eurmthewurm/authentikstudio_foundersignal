import React from "react"

const BuiltForSpeed: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* Speed/Rocket Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* Rocket body */}
            <path d="M50 20 L60 80 L40 80 Z" fill="url(#speedGradient)" />
            
            {/* Rocket nose */}
            <circle cx="50" cy="20" r="8" fill="url(#speedGradient)" />
            
            {/* Fins */}
            <path d="M40 80 L35 90 L40 85 Z" fill="url(#speedGradient)" opacity="0.8" />
            <path d="M60 80 L65 90 L60 85 Z" fill="url(#speedGradient)" opacity="0.8" />
            
            {/* Exhaust */}
            <path d="M45 80 Q50 90 55 80" stroke="url(#speedGradient)" strokeWidth="3" fill="none" className="animate-pulse" />
            <path d="M47 80 Q50 85 53 80" stroke="url(#speedGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
            
            {/* Speed lines */}
            <line x1="20" y1="30" x2="35" y2="30" stroke="url(#speedGradient)" strokeWidth="2" opacity="0.6" className="animate-pulse" />
            <line x1="20" y1="40" x2="30" y2="40" stroke="url(#speedGradient)" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
            <line x1="20" y1="50" x2="35" y2="50" stroke="url(#speedGradient)" strokeWidth="2" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">Built for Speed</div>
      </div>
    </div>
  )
}

export default BuiltForSpeed