
import { useTranslation as useI18nTranslation } from 'react-i18next';

export const useTranslation = (namespace?: string) => {
  const { t, i18n } = useI18nTranslation(namespace);
  
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    t,
    changeLanguage,
    currentLanguage: i18n.language,
    isGerman: i18n.language === 'de',
    isEnglish: i18n.language === 'en',
  };
};
