
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm font-medium"
      >
        EN
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        variant={language === 'fi' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('fi')}
        className="text-sm font-medium"
      >
        FI
      </Button>
    </div>
  );
};

export default LanguageToggle;
