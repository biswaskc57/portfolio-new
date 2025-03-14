
import React from 'react';
import LinkCard from './LinkCard';

interface LinkItem {
  id: string;
  title: string;
  url: string;
}

interface LinksContainerProps {
  links: LinkItem[];
}

const LinksContainer: React.FC<LinksContainerProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {links.map((link, index) => (
        <div 
          key={link.id} 
          className="animate-slide-up" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <LinkCard title={link.title} url={link.url} />
        </div>
      ))}
    </div>
  );
};

export default LinksContainer;
