
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LanguageProvider } from '@/hooks/useLanguage';
import { ThemeProvider } from '@/hooks/useTheme';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Layout;
