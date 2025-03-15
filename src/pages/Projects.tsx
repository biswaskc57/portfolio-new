
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { Project } from '@/types/Project';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  
  // Use placeholder images from Unsplash
  const carshop = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1600&auto=format&fit=crop";
  const hhApp = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop";
  const noPreview = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1600&auto=format&fit=crop";
  
  const projects: Project[] = [
    {
      name: "CarShop",
      image: carshop,
      description: "A web application for personal trainers to manage clients and workouts.",
      link: "https://biswaskc57.github.io/Casrshop/",
      stacks: ["React", "Material UI"],
    },
    {
      name: "Blog App",
      image: noPreview,
      description: "A blogging platform where users can post and share blogs.",
      link: "https://github.com/biswaskc57/Blog-application",
      stacks: ["React", "Node.js", "Express", "MongoDB", "Cypress"],
    },
    {
      name: "Weather Web App",
      image: noPreview,
      description: "An application that shows weather information for cities.",
      link: "https://github.com/biswaskc57/weather-app",
      stacks: ["React", "TypeScript"],
    },
    {
      name: "Haaga-helia Mobile App",
      image: hhApp,
      description: "A mobile app designed for Haaga-helia university.",
      link: "https://www.figma.com/proto/uKbsEmV8CqyM56cYWpKBdg/Prototyping_FinalProject?node-id=11-2&t=vYo9WJ09hXZTyVUl-1",
      stacks: ["Figma", "Design", "UI/UX"],
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -left-8 top-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute -right-8 top-1/3 w-6 h-6 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute left-1/4 -top-8 w-5 h-5 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: '2s' }}></div>
      </div>
      
      <h1 className="text-4xl font-bold mb-8 text-gradient-primary">
        {t('nav.projects')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <Card 
            key={project.name} 
            className="overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 bg-secondary/30 backdrop-blur-sm"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {project.name}
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map(stack => (
                  <Badge key={stack} variant="secondary">{stack}</Badge>
                ))}
              </div>
            </CardContent>
            
            <CardFooter>
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.link.includes('github') ? 
                    <Github className="h-4 w-4" /> : 
                    <ExternalLink className="h-4 w-4" />
                  }
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
