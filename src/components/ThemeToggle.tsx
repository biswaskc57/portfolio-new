
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useLanguage } from '@/hooks/useLanguage';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className="flex items-center gap-2">
      <Sun className="h-4 w-4 transition-all" />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
      <Moon className="h-4 w-4 transition-all" />
    </div>
  );
};

export default ThemeToggle;
