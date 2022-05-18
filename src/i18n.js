import i18n from "i18next"
import detector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

import translationGr from "./locales/gr/translation.json"
import translationIT from "./locales/it/translation.json"
import translationRS from "./locales/rs/translation.json"
import translationSP from "./locales/sp/translation.json"
import translationENG from "./locales/eng/translation.json"
import translationTn from "./locales/tn/tn.json"

// the translations
const resources = {
 
  english: {
    translation: translationENG,
  },
  tn: {
    translation: translationTn,
  },
}

const language = localStorage.getItem("I18N_LANGUAGE")
if (!language) {
  localStorage.setItem("I18N_LANGUAGE", "en")
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("I18N_LANGUAGE") || "tn",
    fallbackLng: "tn", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
