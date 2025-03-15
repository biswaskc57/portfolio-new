
import React from 'react';

const PersonSVG: React.FC = () => {
  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-full h-auto"
    >
      {/* Head */}
      <circle
        cx="200"
        cy="120"
        r="40"
        fill="url(#headGradient)"
        className="animate-floating"
        style={{ animationDuration: '6s' }}
      />

      {/* Body */}
      <path
        d="M200 160 L200 280"
        stroke="url(#bodyGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        className="animate-pulse"
        style={{ animationDuration: '8s' }}
      />

      {/* Arms */}
      <path
        d="M200 190 L140 220"
        stroke="url(#bodyGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        className="animate-floating"
        style={{ animationDuration: '7s', animationDelay: '0.5s' }}
      />
      <path
        d="M200 190 L260 220"
        stroke="url(#bodyGradient)"
        strokeWidth="5"
        strokeLinecap="round"
        className="animate-floating"
        style={{ animationDuration: '7.5s', animationDelay: '0.8s' }}
      />

      {/* Legs */}
      <path
        d="M200 280 L170 340"
        stroke="url(#bodyGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        className="animate-floating"
        style={{ animationDuration: '5s', animationDelay: '0.3s' }}
      />
      <path
        d="M200 280 L230 340"
        stroke="url(#bodyGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        className="animate-floating"
        style={{ animationDuration: '5.2s', animationDelay: '0.7s' }}
      />

      {/* Laptop */}
      <rect
        x="170"
        y="220"
        width="60"
        height="40"
        rx="4"
        fill="url(#laptopGradient)"
        className="animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      {/* Code symbols floating around */}
      <text 
        x="270" 
        y="100" 
        fill="url(#primaryGradient)" 
        className="animate-floating" 
        style={{ animationDuration: '8s', fontSize: '16px', fontFamily: 'monospace' }}
      >{'<div>'}</text>
      <text 
        x="120" 
        y="140" 
        fill="url(#primaryGradient)" 
        className="animate-floating" 
        style={{ animationDuration: '9s', animationDelay: '1s', fontSize: '14px', fontFamily: 'monospace' }}
      >{'function()'}</text>
      <text 
        x="280" 
        y="260" 
        fill="url(#primaryGradient)" 
        className="animate-floating" 
        style={{ animationDuration: '7s', animationDelay: '2s', fontSize: '12px', fontFamily: 'monospace' }}
      >{'useState()'}</text>
      <text 
        x="100" 
        y="240" 
        fill="url(#primaryGradient)" 
        className="animate-floating" 
        style={{ animationDuration: '10s', animationDelay: '3s', fontSize: '14px', fontFamily: 'monospace' }}
      >{'export'}</text>

      {/* Gradients */}
      <defs>
        <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.5)" />
        </linearGradient>
        <linearGradient id="laptopGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--muted))" />
          <stop offset="100%" stopColor="hsl(var(--muted) / 0.7)" />
        </linearGradient>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.7)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PersonSVG;
