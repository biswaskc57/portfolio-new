
import React from 'react';
import LinksHeader from '@/components/LinksHeader';
import LinksContainer from '@/components/LinksContainer';
import { useLanguage } from '@/hooks/useLanguage';

const Links: React.FC = () => {
  const { t } = useLanguage();
  
  // Hardcoded links data
  const links = [
    {
      id: '1',
      title: 'GitHub',
      url: 'https://github.com/biswaskc'
    },
    {
      id: '2',
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/biswaskc'
    },
    {
      id: '3',
      title: 'Portfolio',
      url: 'https://biswaskc.com'
    },
    {
      id: '4',
      title: 'Twitter',
      url: 'https://twitter.com/biswaskc'
    },
    {
      id: '5',
      title: 'Medium',
      url: 'https://medium.com/@biswaskc'
    },
    {
      id: '6',
      title: 'Dev.to',
      url: 'https://dev.to/biswaskc'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <LinksHeader 
        title="Useful Links" 
        subtitle="A collection of links to my profiles and resources"
      />
      <LinksContainer links={links} />
    </div>
  );
};

export default Links;
