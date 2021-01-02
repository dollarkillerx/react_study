import React from 'react';
import RobotData from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import {css} from '@emotion/css'
import ShoppingCart from './components/ShoppingCart'

interface Props {}

interface State {
    robotGallery: any[] // 返回更加灵活
    count: number
}

class App extends React.Component<Props,State> {
    // 1. 生命周期初始化
    constructor(props) {
        super(props);
        this.state = {
            robotGallery: [],
            count: 0,
        }
    }

    // 组件创建好DOM元素以后,挂载进入页面的时候调用
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState({robotGallery: data}))
    }

    // 2. 更新
    // 当prop更新后被调用 以废弃
    // componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any) {}
    // 替代选项
    // 判断什么时候更新组件
    // shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    //     return nextState.some !== this.state.some
    // }
    // 主键更新后被调用
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any) {

    }

    // 2. 销毁
    // 主键销毁时调用 回收资源 避免内存泄露
    componentWillUnmount() {}

    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} className={styles.appLogo} alt="logo"/>
                    <h1 className={css`font-family: 'Slidefu';
                      font-size: 72px`}>罗伯特机器人炫酷吊炸天 巴适的板</h1>
                </div>
                <button onClick={()=>{
                    this.setState({count: this.state.count + 1},()=> {
                        console.log(`count ${this.state.count}`)
                    })
                }}>Add</button>
                <span>count: {this.state.count}</span>
                <ShoppingCart/>
                <div className={styles.robotList}>
                    {
                        this.state.robotGallery.map((r) => (
                            <Robot id={r.id} email={r.email} name={r.name}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;
