import I18n from 'react-native-i18n';
import en from './locales/en-US.json';
import he from './locales/he-IL.json';
import languageSettings from './languageSettings';
import {I18nManager} from 'react-native';

export function setLanguage(language = 'en') {
  const {defaultLocale} = languageSettings[language];
  I18n.defaultLocale = defaultLocale;
  I18n.locale = defaultLocale;
  I18n.fallbacks = true;
  I18nManager.allowRTL(false);
}
setLanguage();

I18n.translations = {he, en};

export default I18n;
