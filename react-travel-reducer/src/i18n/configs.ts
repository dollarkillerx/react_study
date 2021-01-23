import i18n from "i18next"
import {initReactI18next} from "react-i18next"
import translation_en from './en.json'
import translation_zh from './zh.json'

const resources = {
    zh: {
        translation: translation_zh,
    },
    en: {
        translation: translation_en,
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh", // 初始化语言

        // 注释掉可以: 使用对象链式调用
        // keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;