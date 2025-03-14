
import React from 'react';
import LinksHeader from '@/components/LinksHeader';
import LinksContainer from '@/components/LinksContainer';

// Updated links data
const links = [
  {
    id: '1',
    title: 'AI Community',
    url: 'https://docs.google.com/document/d/1kaD5QG4RnqISO-sFWnqAzeLd68-eK_qZ6m-bNz1GU1I/edit?tab=t.nhxn444d5ntu',
  },
  {
    id: '2',
    title: 'AIBUM Guidelines',
    url: 'https://docs.google.com/document/d/1yWBC7Anw7mLBznBxSi6CGpdVHxD7GlXKi7kEJN7wz-I/edit?tab=t.0#heading=h.oi1j8vmowids',
  },
  {
    id: '3',
    title: 'Innsbruck - Student Accommodation Info',
    url: 'https://docs.google.com/document/d/1GfLEwKLd8LcOKEqqAeA1336omJwbcrAZY6sE3-5_UgM/edit?tab=t.0',
  },
  {
    id: '4',
    title: 'Innsbruck - Accommodation Research using ChatGPT',
    url: 'https://docs.google.com/document/d/1V_ccMqsyRGOFxyuckvA1XBr2LY4fjd2oYjWJuDMCqnA/edit?tab=t.0#heading=h.7jq35jmi1ggq',
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
