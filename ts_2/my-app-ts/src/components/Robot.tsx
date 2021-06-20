import React, {useContext} from "react";
import styles from "./Robot.module.css"
import {appContext, appSetStateContext} from "../AppSate";
import {useAddToCart} from "../AddToCart";

interface RobotInput {
    id: number,
    name: string,
    email: string,
}

// props：获得范类参数
const Robot: React.FC<RobotInput> = ({id, name, email}) => {
    const value = useContext(appContext)
    const setState = useContext(appSetStateContext)
    const addToCart = useAddToCart()

    // const addToCart = () => {
    //     if (setState) { // setSate is under
    //         setState(state => {
    //             return {
    //                 ...state,
    //                 shoppingCart: {
    //                     items: [...state.shoppingCart.items, {id,name}]
    //                 }
    //             }
    //         })
    //     }
    // }

    return (
        (<li className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot"/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>auth: {value.username}</p>
            <button onClick={()=>addToCart(id,name)}>加入购物车</button>
        </li>)

        // <appContext.Consumer>
        //     {(value) => {
        //         return (<li className={styles.cardContainer}>
        //             <img src={`https://robohash.org/${id}`} alt="robot"/>
        //             <h2>{name}</h2>
        //             <p>{email}</p>
        //             <p>auth: {value.username}</p>
        //         </li>)
        //     }}
        // </appContext.Consumer>
    )
}
// const Robot: React.FC<Robot> = (props) => {
//     const id = props.id;
//     return (
//         <></>
//     )
// }

export default Robot;