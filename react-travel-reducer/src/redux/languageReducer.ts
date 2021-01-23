import i18n from 'i18next'

export interface LanguageState {
    language: 'zh' | 'en'
    languageList: { name: string, code: string } []
}

const defaultState: LanguageState = {
    language: "zh",
    languageList: [
        {name: "中文", code: "zh"},
        {name: "English", code: "en"}
    ]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case "change_language": {
            const newState = {...state, language: action.payload}
            i18n.changeLanguage(action.payload)
            return newState
        }
        case "add_language": {
            const newState = {languageList: [...state.languageList, action.payload], language: action.payload.code}
            return newState
        }
    }
    return state
}