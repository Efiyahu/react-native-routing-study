import en from './locales/en-US.json';
import he from './locales/he-IL.json';

const languageSettings = {
  en: {
    defaultLocale: 'en-US',
    translations: {en},
    currentLanguage: 'en',
    RTL: false,
  },
  he: {
    defaultLocale: 'he-IL',
    translations: {he},
    currentLanguage: 'he',
    RTL: true,
  },
};

export default languageSettings;
