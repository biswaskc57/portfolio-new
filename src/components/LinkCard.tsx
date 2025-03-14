
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  title: string;
  url: string;
  className?: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, url, className }) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "link-card group block p-4 rounded-xl border border-border/50",
        "bg-white/80 backdrop-blur-sm hover:bg-white/90",
        "shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg text-foreground">{title}</h3>
        <ExternalLink className="w-4 h-4 text-primary/70 group-hover:text-primary transition-colors duration-300" />
      </div>
      <p className="mt-1 text-sm text-muted-foreground truncate">{url}</p>
    </a>
  );
};

export default LinkCard;
