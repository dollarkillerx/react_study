import React, {useContext} from "react";
import style from './Robot.module.css'
import {css} from '@emotion/css'
import {appContext, appSetStateContext} from '../AppState'
import {withAddToCart} from "./AddToCart";

export interface RobotProps {
    id: number,
    name: string,
    email: string,
    addToCart: (id,name) => void,
}

const Robot: React.FC<RobotProps> = ({id, name, email, addToCart}) => {  // es7语法解构
// const Robot: React.FC<RobotProps> = (props) => {
    const value = useContext(appContext);

    return (
        <li className={style.cardContainer}>
            <img className={css`width: 100%;`} src={`https://robohash.org/${id}`} alt=""/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>auth: {value.username}</p>
            <button onClick={() => addToCart(id,name)}>添加购物车中</button>
        </li>
    );
};

export default withAddToCart(Robot);