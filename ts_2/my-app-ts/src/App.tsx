import React, {useState, useEffect} from 'react';
import styles from './App.module.css'
// import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import logo from './assets/icons/logo.svg'
import ShoppingCart from "./components/ShoppingCart";

// 组件生命周期
// 1. Mounting: create vDOM 渲染UI
// 2. Updating: 更新虚拟DOM， 重新渲染UI
// 3. Unmounting: 删除虚拟DOM，移除UI

// HOOK
// useState
// useContext 跨组件数据传递
// useReducer 全局状态
// useCallback 回调复作用
interface Props {
    username: string
}

const App: React.FC<Props> = (props) => {
    const [count, setCount] = useState<number>(0); // 参数初始化值
    const [robotGallery, setRobotGallery] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [er, setError] = useState<string>("")

    useEffect(() => {
        document.title = `点击${count}次`
    }, [count]) // 当 [deps]中数据发生变化时会执行，

    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(data => setRobotGallery(data))
    // },[]) // 当[]为空是 只有第一次载入时执行

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setRobotGallery(data)
            } catch (e) {
                setError(e.message)
            }
        }
        fetchData()
        setLoading(false)
    }, []) // 当[]为空是 只有第一次载入时执行

    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} alt="" className={styles.appLogo}/>
                <h1>罗比特 及 机器人 {count}</h1>
            </div>
            <h2>{props.username}</h2>

            <button onClick={() => {
                setCount(count + 1)
            }}>Click
            </button>
            <ShoppingCart/>
            {er !== "" && <h1>错误 {er} </h1>}
            {
                !loading ?
                    <div className={styles.robotList}>
                        {robotGallery.map((r) => (
                            <Robot id={r.id} name={r.name} email={r.email}/>
                        ))}
                    </div>
                    : <h2>loading 加载中</h2>
            }
        </div>
    );
}

export default App;
