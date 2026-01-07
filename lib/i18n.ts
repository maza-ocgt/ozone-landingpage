import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/common.json';
import ms from '../public/locales/ms/common.json';
import zh from '../public/locales/zh/common.json';
import ta from '../public/locales/ta/common.json';

const resources = {
  en: { common: en },
  ms: { common: ms },
  zh: { common: zh },
  ta: { common: ta },
};

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en', 
      fallbackLng: 'en',
      defaultNS: 'common',
      interpolation: {
        escapeValue: false,
      },
    });
}

export default i18n;

