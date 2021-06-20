import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "./en.json"
import translation_zh from "./zh.json"

const resources = {
    en: {
        translation: translation_en
    },
    zh: {
        translation: translation_zh
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

