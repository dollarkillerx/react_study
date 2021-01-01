import React from "react";
import style from './Robot.module.css'
import { css } from '@emotion/css'

interface RobotProps {
    id: number,
    name: string,
    email: string,
}

const Robot: React.FC<RobotProps> = ({id,name,email}) => {  // es7语法解构
// const Robot: React.FC<RobotProps> = (props) => {
    return (
        <li className={style.cardContainer}> 
            <img className={css`width: 100%;`} src={`https://robohash.org/${id}`} alt=""/>
            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    );
};

export default Robot;