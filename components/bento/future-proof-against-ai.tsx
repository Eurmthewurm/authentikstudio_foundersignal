import React from "react"

const FutureProofAgainstAI: React.FC = () => {
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
      <div className="text-center space-y-4 p-6">
        {/* Shield/Authenticity Icon */}
        <div className="mx-auto w-16 h-16 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary-dark))" />
              </linearGradient>
            </defs>
            {/* Shield */}
            <path d="M50 10 L70 25 L70 50 Q70 70 50 85 Q30 70 30 50 L30 25 Z" stroke="url(#shieldGradient)" strokeWidth="3" fill="none" />
            
            {/* Authenticity mark */}
            <path d="M40 45 L45 50 L60 35" stroke="url(#shieldGradient)" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* AI resistance waves */}
            <path d="M20 30 Q30 25 40 30" stroke="url(#shieldGradient)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" />
            <path d="M60 30 Q70 25 80 30" stroke="url(#shieldGradient)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
            <path d="M20 60 Q30 55 40 60" stroke="url(#shieldGradient)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
            <path d="M60 60 Q70 55 80 60" stroke="url(#shieldGradient)" strokeWidth="2" fill="none" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
          </svg>
        </div>
        <div className="text-primary font-semibold text-sm">Future-Proof Against AI</div>
      </div>
    </div>
  )
}

export default FutureProofAgainstAI