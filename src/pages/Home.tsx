
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import ContactDialog from '@/components/ContactDialog';
import AnimatedSVG from '@/components/AnimatedSVG';
import { Download } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary animate-slide-down">
              Biswas K C
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-slide-up">
              {t('home.intro')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                {t('home.downloadCV')}
              </Button>
              <ContactDialog buttonVariant="outline" />
            </div>
          </div>
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <AnimatedSVG />
            </div>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-floating"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Home;
