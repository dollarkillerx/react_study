import {useContext} from "react";
import {appSetStateContext} from "./AppSate";


export const useAddToCart = () => {
    const setState = useContext(appSetStateContext)
    const addToCart =
        (id, name) => {
            if (setState) {
                setState((state) => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, {id, name}]
                        }
                    }
                })
            }
        }

    return addToCart
}