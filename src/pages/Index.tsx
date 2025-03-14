
import React from 'react';
import LinksHeader from '@/components/LinksHeader';
import LinksContainer from '@/components/LinksContainer';

// Hardcoded links data
const links = [
  {
    id: '1',
    title: 'React Documentation',
    url: 'https://reactjs.org/docs/getting-started.html',
  },
  {
    id: '2',
    title: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/',
  },
  {
    id: '3',
    title: 'Tailwind CSS Documentation',
    url: 'https://tailwindcss.com/docs',
  },
  {
    id: '4',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/en-US/',
  },
  {
    id: '5',
    title: 'GitHub',
    url: 'https://github.com',
  },
  {
    id: '6',
    title: 'Stack Overflow',
    url: 'https://stackoverflow.com',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12">
      <div className="w-full max-w-6xl mx-auto">
        <LinksHeader 
          title="Useful Links" 
          subtitle="A collection of helpful resources for developers" 
        />
        
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 animate-floating"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" style={{ animationDelay: '1s' }}></div>
          
          {/* Links grid */}
          <LinksContainer links={links} />
        </div>
      </div>
    </div>
  );
};

export default Index;
