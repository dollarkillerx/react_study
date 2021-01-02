import React from 'react'
import { css } from '@emotion/css'
import {FiShoppingCart} from 'react-icons/fi'

interface Props {

}

interface State {
    isOpen: boolean
    counts: number
}


class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
            counts: 0
        };
    }

    shopping = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> {
        if ((e.target as HTMLElement).nodeName === 'SPAN') {
            this.setState({isOpen: !this.state.isOpen})
        }
    }

    render() {
        return (
            <div className={css``}>
                <button className={css`
                    color:#7FFFD4;
                    padding: 0 12px;
                    line-height: 34px;
                    background: #0084ff;
                    border: none;
                    outline: none;
                    margin-bottom: 14px;
                    &:hover {
                        border-color: #0077e6;
                        background-color: #0077e6;
                    }
                `}
                    onClick={this.shopping}
                >
                    <FiShoppingCart />&nbsp;&nbsp;
                    <span>购物车 {this.state.counts} 数</span>
                </button>
                <div
                    className={css`
                    background-color: white;
                    box-shadow: 0 1px 7px rgba(0,0,0,0.2);
                    z-index: 999;
                    text-align: center;
                    width: 140px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    ul {
                        margin: 0 0;
                        padding: 0 0;
                        align: center;
                    }
                    ul li {
                        cursor: pointer;
                        border-bottom: 1px solid #f0f2f7;
                    }
                `}
                    style={
                        {
                            display: this.state.isOpen ? "block" : "none",
                        }
                    }
                >
                    <ul>
                        <li onClick={() => {
                            this.setState({ counts: this.state.counts + 1 })
                        }}>robot1</li>
                        <li onClick={() => {
                            this.setState({ counts: this.state.counts + 1 })
                        }}>robot2</li>
                        <li onClick={() => {
                            this.setState({ counts: this.state.counts + 1 })
                        }}>robot3</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;