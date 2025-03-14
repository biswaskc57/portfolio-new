
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About Me',
    'home.intro': 'I am Biswas K C, a software developer currently studying AI for Business Transformation.',
    'home.downloadCV': 'Download CV',
    'home.contact': 'Contact Me',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'footer.scrollTop': 'Scroll to Top',
  },
  fi: {
    'nav.home': 'Koti',
    'nav.projects': 'Projektit',
    'nav.about': 'Tietoa Minusta',
    'home.intro': 'Olen Biswas K C, ohjelmistokehittäjä joka opiskelee AI for Business Transformation.',
    'home.downloadCV': 'Lataa CV',
    'home.contact': 'Ota Yhteyttä',
    'contact.name': 'Nimi',
    'contact.email': 'Sähköposti',
    'contact.message': 'Viesti',
    'contact.send': 'Lähetä Viesti',
    'footer.scrollTop': 'Takaisin ylös',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
