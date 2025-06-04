
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import German translations
import deCommon from './locales/de/common.json';
import deHero from './locales/de/hero.json';
import deServices from './locales/de/services.json';
import dePages from './locales/de/pages.json';

// Import English translations
import enCommon from './locales/en/common.json';
import enHero from './locales/en/hero.json';
import enServices from './locales/en/services.json';
import enPages from './locales/en/pages.json';

const resources = {
  de: {
    common: deCommon,
    hero: deHero,
    services: deServices,
    pages: dePages,
  },
  en: {
    common: enCommon,
    hero: enHero,
    services: enServices,
    pages: enPages,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'de',
    defaultNS: 'common',
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
