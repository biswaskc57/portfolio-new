
import React from 'react';

const AnimatedSVG: React.FC = () => {
  return (
    <svg 
      width="500" 
      height="500" 
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -z-10 opacity-20 md:opacity-30 max-w-full h-auto"
    >
      {/* Animated circles */}
      <circle 
        cx="250" 
        cy="250" 
        r="100" 
        stroke="url(#gradient1)" 
        strokeWidth="2" 
        fill="none" 
        className="animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      <circle 
        cx="250" 
        cy="250" 
        r="150" 
        stroke="url(#gradient2)" 
        strokeWidth="1.5" 
        fill="none" 
        className="animate-pulse" 
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />
      <circle 
        cx="250" 
        cy="250" 
        r="200" 
        stroke="url(#gradient3)" 
        strokeWidth="1" 
        fill="none" 
        className="animate-pulse" 
        style={{ animationDuration: '15s', animationDelay: '2s' }}
      />
      
      {/* Animated dots */}
      <circle 
        cx="250" 
        cy="50" 
        r="4" 
        fill="url(#gradient1)" 
        className="animate-floating" 
        style={{ animationDuration: '4s' }}
      />
      <circle 
        cx="400" 
        cy="250" 
        r="4" 
        fill="url(#gradient2)" 
        className="animate-floating" 
        style={{ animationDuration: '5s', animationDelay: '1s' }}
      />
      <circle 
        cx="250" 
        cy="450" 
        r="4" 
        fill="url(#gradient3)" 
        className="animate-floating" 
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />
      <circle 
        cx="100" 
        cy="250" 
        r="4" 
        fill="url(#gradient1)" 
        className="animate-floating" 
        style={{ animationDuration: '7s', animationDelay: '3s' }}
      />
      
      {/* Code symbols */}
      <text x="280" y="150" fill="url(#gradient1)" className="animate-floating" style={{ animationDuration: '8s', fontSize: '16px', fontFamily: 'monospace' }}>{'<React />'}</text>
      <text x="160" y="350" fill="url(#gradient2)" className="animate-floating" style={{ animationDuration: '7s', animationDelay: '1s', fontSize: '14px', fontFamily: 'monospace' }}>{'TypeScript'}</text>
      <text x="320" y="300" fill="url(#gradient3)" className="animate-floating" style={{ animationDuration: '9s', animationDelay: '2s', fontSize: '12px', fontFamily: 'monospace' }}>{'GraphQL'}</text>
      <text x="150" y="180" fill="url(#gradient1)" className="animate-floating" style={{ animationDuration: '6s', animationDelay: '3s', fontSize: '14px', fontFamily: 'monospace' }}>{'AWS'}</text>
      
      {/* Connections between nodes */}
      <line x1="250" y1="50" x2="400" y2="250" stroke="url(#gradient1)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-dash" />
      <line x1="400" y1="250" x2="250" y2="450" stroke="url(#gradient2)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-dash" style={{ animationDelay: '1s' }} />
      <line x1="250" y1="450" x2="100" y2="250" stroke="url(#gradient3)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-dash" style={{ animationDelay: '2s' }} />
      <line x1="100" y1="250" x2="250" y2="50" stroke="url(#gradient1)" strokeWidth="0.5" strokeDasharray="5,5" className="animate-dash" style={{ animationDelay: '3s' }} />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FEC6A1" />
        </linearGradient>
        <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEC6A1" />
          <stop offset="100%" stopColor="#FDE1D3" />
        </linearGradient>
        <linearGradient id="gradient3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FDE1D3" />
        </linearGradient>
        
        {/* Animation for dashed lines */}
        <style>
          {`
            @keyframes dash {
              to {
                stroke-dashoffset: 100;
              }
            }
            .animate-dash {
              animation: dash 20s linear infinite;
            }
            @keyframes floating {
              0% { transform: translate(0, 0); }
              50% { transform: translate(8px, 8px); }
              100% { transform: translate(0, 0); }
            }
            .animate-floating {
              animation: floating 6s ease-in-out infinite;
            }
          `}
        </style>
      </defs>
    </svg>
  );
};

export default AnimatedSVG;
