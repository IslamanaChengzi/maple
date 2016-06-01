import i18n from 'i18next';
//import XHR from 'i18next-xhr-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-node-fs-backend';
import { LanguageDetector } from 'i18next-express-middleware';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .init({
    preload: ['en', 'zh','zh-CN'],
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['demo', 'a'],
    defaultNS: 'demo',
    backend:{
      // path where resources get loaded from
      loadPath: './locales/{{lng}}/{{ns}}.json'
    },
    debug: true,  //tips

    interpolation: {
      escapeValue: false // not needed for react!!
    }
  });
//i18n.init({lng: 'en'});

export default i18n;