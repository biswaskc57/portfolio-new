
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-gradient">Biswas K C</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </Link>
              <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
                {t('nav.projects')}
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </Link>
            </div>
            <LanguageToggle />
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Menu" className="text-foreground p-2">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent className="bg-background border-l border-border">
                <div className="flex flex-col space-y-6 mt-8">
                  <Link to="/" className="text-foreground hover:text-primary text-lg transition-colors">
                    {t('nav.home')}
                  </Link>
                  <Link to="/projects" className="text-foreground hover:text-primary text-lg transition-colors">
                    {t('nav.projects')}
                  </Link>
                  <Link to="/about" className="text-foreground hover:text-primary text-lg transition-colors">
                    {t('nav.about')}
                  </Link>
                  <div className="pt-4">
                    <LanguageToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
