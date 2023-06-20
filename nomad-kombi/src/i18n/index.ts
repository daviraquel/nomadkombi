import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import XHR from "i18next-http-backend"

import pt from "./locales/pt.json"
import en from "./locales/en.json"
import es from "./locales/es.json"

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: en,
      es: es,
      pt: pt,
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  })
export default i18n
