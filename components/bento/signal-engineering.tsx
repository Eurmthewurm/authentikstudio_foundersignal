import React from "react"

const SignalEngineering: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* Engineering/Blueprint Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="engineeringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* Blueprint/Grid */}
            <rect x="10" y="10" width="80" height="80" stroke="url(#engineeringGradient)" strokeWidth="2" fill="none" />
            <line x1="30" y1="10" x2="30" y2="90" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="10" x2="70" y2="90" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="30" x2="90" y2="30" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            <line x1="10" y1="70" x2="90" y2="70" stroke="url(#engineeringGradient)" strokeWidth="1" opacity="0.6" />
            
            {/* Central gear */}
            <circle cx="50" cy="50" r="15" stroke="url(#engineeringGradient)" strokeWidth="3" fill="none" />
            <circle cx="50" cy="50" r="5" fill="url(#engineeringGradient)" />
            
            {/* Gear teeth */}
            <path d="M35 50 L40 45 L40 55 Z" fill="url(#engineeringGradient)" />
            <path d="M65 50 L60 45 L60 55 Z" fill="url(#engineeringGradient)" />
            <path d="M50 35 L45 40 L55 40 Z" fill="url(#engineeringGradient)" />
            <path d="M50 65 L45 60 L55 60 Z" fill="url(#engineeringGradient)" />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">Signal Engineering</div>
      </div>
    </div>
  )
}

export default SignalEngineering