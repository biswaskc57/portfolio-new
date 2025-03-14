
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
        {t('nav.about')}
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          About content would go here.
        </p>
      </div>
    </div>
  );
};

export default About;
