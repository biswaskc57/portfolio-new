
import React from 'react';

interface LinksHeaderProps {
  title: string;
  subtitle?: string;
}

const LinksHeader: React.FC<LinksHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="w-full text-center mb-12 animate-slide-down">
      <div className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider">
        COLLECTION
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">{title}</h1>
      {subtitle && (
        <p className="text-muted-foreground max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default LinksHeader;
