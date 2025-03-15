
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-gradient-primary">
        Experience
      </h1>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 via-primary/50 to-transparent" />
        
        {/* Experience items */}
        <div className="space-y-12">
          {/* Frosmo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
            <div className="md:text-right flex flex-col items-start md:items-end order-2 md:order-1 animate-slide-up">
              <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
              <div className="flex items-center md:flex-row-reverse mb-3">
                <Calendar className="h-4 w-4 ml-2 md:ml-0 md:mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">2021 - 2025</span>
              </div>
              <Card className="w-full border-primary/20 hover:border-primary/60 transition-colors">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{t('experience.frosmo')}</p>
                </CardContent>
              </Card>
            </div>
            <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2 mt-6">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4 flex md:hidden items-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary inline" />
                Frosmo Oy
              </h3>
              <h3 className="text-xl font-semibold mb-4 hidden md:block">Frosmo Oy</h3>
              <p className="text-muted-foreground">
                At Frosmo, I designed and developed responsive user interfaces with React and TypeScript. 
                I created reusable components and collaborated with cross-functional teams to deliver high-quality solutions.
              </p>
            </div>
          </div>
          
          {/* Haaga-Helia */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
            <div className="order-1 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-4 flex md:hidden items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-primary inline" />
                Haaga-Helia UAS
              </h3>
              <h3 className="text-xl font-semibold mb-4 hidden md:block">Haaga-Helia UAS</h3>
              <p className="text-muted-foreground">
                During my studies at Haaga-Helia, I worked on software development projects using modern technologies.
                I participated in a collaboration with Siili Solutions, gaining practical experience in real-world applications.
              </p>
            </div>
            <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2 mt-6">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="md:text-right flex flex-col items-start md:items-end order-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-1">Software Development Student</h3>
              <div className="flex items-center md:flex-row-reverse mb-3">
                <Calendar className="h-4 w-4 ml-2 md:ml-0 md:mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">2020 - 2023</span>
              </div>
              <Card className="w-full border-primary/20 hover:border-primary/60 transition-colors">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{t('experience.haagahelia')}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Taco Bell */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
            <div className="md:text-right flex flex-col items-start md:items-end order-2 md:order-1 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-xl font-semibold mb-1">Assistant Manager</h3>
              <div className="flex items-center md:flex-row-reverse mb-3">
                <Calendar className="h-4 w-4 ml-2 md:ml-0 md:mr-2 text-primary" />
                <span className="text-sm text-muted-foreground">2018 - 2021</span>
              </div>
              <Card className="w-full border-primary/20 hover:border-primary/60 transition-colors">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">{t('experience.tacobell')}</p>
                </CardContent>
              </Card>
            </div>
            <div className="hidden md:flex justify-center absolute left-1/2 -translate-x-1/2 mt-6">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-semibold mb-4 flex md:hidden items-center">
                <Briefcase className="h-6 w-6 mr-2 text-primary inline" />
                Taco Bell
              </h3>
              <h3 className="text-xl font-semibold mb-4 hidden md:block">Taco Bell</h3>
              <p className="text-muted-foreground">
                As an Assistant Manager at Taco Bell, I managed shift operations and supervised staff 
                to ensure efficient service. I developed leadership skills and learned to optimize 
                team workloads to maintain high service standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
