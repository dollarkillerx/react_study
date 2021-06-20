import i18next, {i18n} from "i18next";

export interface LanguageState {
    language: "en" | "zh",
    languageList: { name: string, code: string }[]
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        {
            name: "中文",
            code: "zh",
        },
        {
            name: "English",
            code: "en",
        }
    ]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_language":
            i18next.changeLanguage(action.payload)
            return  {...state, language: action.payload}
    }
    return state
}