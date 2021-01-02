import React,{useState} from 'react'

interface AppStateValue  {
    username: string,
    shoppingCart: {
        items: {
            id: number,
            name: string,
        }[]
    }
}

const defaultContentValue: AppStateValue = {
    username: "dollarkiller",
    shoppingCart: {items: []}
}


export const appContext = React.createContext<AppStateValue>(defaultContentValue);
export const appSetStateContext = React.createContext< React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const AppStateProvider: React.FC = (props) => {
    const [state,setState] = useState<AppStateValue>(defaultContentValue);
    return <appContext.Provider value={state}>
        <appSetStateContext.Provider value={setState}>
            {props.children}
        </appSetStateContext.Provider>
    </appContext.Provider>
}
