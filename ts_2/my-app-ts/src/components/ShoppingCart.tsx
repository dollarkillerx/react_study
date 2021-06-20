import React from "react";
import styles from "./ShpooingCart.module.css";
import {FiShoppingCart} from "react-icons/fi"
import {appContext} from "../AppSate";

// 传入参数  (组件之间的传递)
interface Props {

}

// 状态  私有 组件内部状态
interface State {
    isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    // 初始化
    render() {
        return (
            <appContext.Consumer>{
                (value) => {
                    return <div className={styles.cartContainer}>
                        <button className={styles.button} onClick={this.handleClick}>
                            <FiShoppingCart/>
                            <span>购物车 {value.shoppingCart.items.length}(键)</span></button>
                        <div className={styles.cartDropDown}
                             style={{display: this.state.isOpen ? "block" : "none"}}
                        >
                            <ul>
                                {value.shoppingCart.items.map((i)=>(
                                    <li>{i.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            }</appContext.Consumer>
        )
    }
}

export default ShoppingCart;