
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { CircleWavyCheck, Lightbulb, Code, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
        {t('nav.about')}
      </h1>
      
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -left-8 top-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute -right-8 top-1/3 w-6 h-6 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute left-1/4 -top-8 w-5 h-5 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
        
        {/* Bio content */}
        <div className="prose prose-invert prose-lg max-w-none">
          {t('about.bio')}
        </div>
        
        {/* Skills section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-secondary/30 p-6 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-medium">Front-end Development</h3>
              </div>
              <p className="text-muted-foreground">React, TypeScript, GraphQL, Next.js, Tailwind CSS</p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <CircleWavyCheck className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-medium">Project Management</h3>
              </div>
              <p className="text-muted-foreground">Agile Methodologies, Jira, Confluence, Team Leadership</p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-medium">Artificial Intelligence</h3>
              </div>
              <p className="text-muted-foreground">AI Business Applications, Machine Learning Fundamentals</p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-medium">Languages</h3>
              </div>
              <p className="text-muted-foreground">English (Fluent), Finnish (Intermediate), Nepali (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
