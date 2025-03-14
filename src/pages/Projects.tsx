
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
        {t('nav.projects')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project cards would go here */}
        <div className="h-48 flex items-center justify-center border border-border rounded-lg">
          <p className="text-muted-foreground">Projects coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
