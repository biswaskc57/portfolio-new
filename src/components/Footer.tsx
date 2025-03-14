
import React from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-background/50 backdrop-blur-sm border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Biswas K C</p>
          </div>
          
          <Button 
            onClick={scrollToTop} 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-2 group"
            aria-label="Scroll to top"
          >
            <span>{t('footer.scrollTop')}</span>
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
