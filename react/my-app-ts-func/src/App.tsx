import React, {useState, useEffect} from 'react';
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import {css} from '@emotion/css'
import ShoppingCart from './components/ShoppingCart'

interface Props {
}

interface State {
    robotGallery: any[] // 返回更加灵活
    count: number
}

const App: React.FC = (props) => {
    const [count, setCount] = useState<number>(0);
    const [robotGallery, setRobotGallery] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        document.title = `点击${count}次`;
    }, [count]) // 监听count的变动而执行

    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(resp => resp.json())
    //         .then(data => setRobotGallery(data))
    // }, []) // 当为空时 仅当挂载UI时加载

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await response.json()
            setRobotGallery(data)
        };
        try {
            fetchData()
        }catch (e) {
            setError(e.message)
        }
        setLoading(false);
    }, []) // 当为空时 仅当挂载UI时加载

    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo"/>
                <h1 className={css`font-family: 'Slidefu';
                  font-size: 72px`}>罗伯特机器人炫酷吊炸天 巴适的板</h1>
            </div>
            <button onClick={() => {
                setCount(count + 1)
            }}>Add
            </button>
            <span>count: {count}</span>
            <ShoppingCart/>
            {
                (error !== "") && <div>网站出错: {error}</div>
            }
            {
                loading ?

                    (
                        <div>Loding 加载中</div>
                    )
                    :
                    (
                        <div className={styles.robotList}>
                            {
                                robotGallery.map((r) => (
                                    <Robot id={r.id} email={r.email} name={r.name}/>
                                ))
                            }
                        </div>
                    )
            }
        </div>
    );
}

export default App;
