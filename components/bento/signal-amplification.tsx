import React from "react"

const SignalAmplification: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* Amplification/Speaker Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="amplificationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* Speaker cone */}
            <path d="M30 20 L30 80 L60 60 L60 40 Z" fill="url(#amplificationGradient)" />
            
            {/* Sound waves */}
            <path d="M60 50 Q70 40 80 50 Q70 60 60 50" stroke="url(#amplificationGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M60 50 Q75 35 90 50 Q75 65 60 50" stroke="url(#amplificationGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M60 50 Q80 30 100 50" stroke="url(#amplificationGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            
            {/* Volume indicator */}
            <rect x="25" y="45" width="8" height="10" fill="url(#amplificationGradient)" opacity="0.8" />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">Signal Amplification</div>
      </div>
    </div>
  )
}

export default SignalAmplification