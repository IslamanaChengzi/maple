import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
//import Backend from 'i18next-node-fs-backend';
//import { LanguageDetector } from 'i18next-express-middleware';

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['demo'],
    defaultNS: 'demo',

    debug: true,

    interpolation: {
      escapeValue: false // not needed for react!!
    },
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2
    }
  });


export default i18n;