import React from "react"

const SignalDNADiscovery: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* DNA Helix Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* DNA Helix */}
            <path
              d="M20 20 Q50 10 80 20 Q50 30 20 20"
              stroke="url(#dnaGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M20 40 Q50 30 80 40 Q50 50 20 40"
              stroke="url(#dnaGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M20 60 Q50 50 80 60 Q50 70 20 60"
              stroke="url(#dnaGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <path
              d="M20 80 Q50 70 80 80"
              stroke="url(#dnaGradient)"
              strokeWidth="3"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
            {/* Connecting lines */}
            <line x1="20" y1="20" x2="20" y2="40" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="20" y1="40" x2="20" y2="60" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="20" y1="60" x2="20" y2="80" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="80" y1="20" x2="80" y2="40" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="80" y1="40" x2="80" y2="60" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
            <line x1="80" y1="60" x2="80" y2="80" stroke="url(#dnaGradient)" strokeWidth="2" opacity="0.6" />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">Deep Story Archaeology</div>
      </div>
    </div>
  )
}

export default SignalDNADiscovery