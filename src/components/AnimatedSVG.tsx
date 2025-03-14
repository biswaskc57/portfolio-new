
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
      </defs>
    </svg>
  );
};

export default AnimatedSVG;
