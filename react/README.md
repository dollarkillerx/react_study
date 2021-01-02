# README

### 配置国内镜像
```sh
npm config set registry https://registry.npm.taobao.org

yarn config set registry https://registry.npm.taobao.org --global

yarn config set disturl https://npm.taobao.org/dist --global
```

### init react js
`npx create-react-app my-app`

### init react ts
`npx create-react-app my-app-ts --template typescript`

### vite-app ts
`npm init vite-app vite-react-project --template react-ts`

### tsconfig.js
```json
{
  "compilerOptions": {
    "noImplicitAny": false, // 不需要显示声明变量类型any
    "target": "es5",  // 编译目标版本
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "types": [],
    "allowJs": false,  // 运行混合编译JS文件
    "skipLibCheck": false,
    "esModuleInterop": false,  // 运行使用commonjs的方式import默认文件
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",  // 配置代码模块系统
    "moduleResolution": "Node",  // 编译器工作方式
    "resolveJsonModule": true,
    "isolatedModules": true,  // 编译器将每个文件作为单独的模块来使用
    "noEmit": true, // 当编译错误是 不生成代码
    "jsx": "react" // 运行编译器支持编译react代码
  },
  "include": ["src"]
}
```

### 插件
- vscode css提示 `yarn add typescript-plugin-css-modules --save-dev`
- 优雅的css `yarn add @emotion/css`

### api test
- `https://jsonplaceholder.typicode.com/users`

### 生命周期
- `Mounting`: 创建虚拟DOM, 渲染UI
- `Updating`: 更新虚拟DOM, 重新渲染UI
- `Unmouting` 删除虚拟DOM, 移除UI
```ts
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
```

### React17 变化
- 没有新功能
- 替换了底层代码, 向下兼容, 甩掉历史包袱
- 没有代码断层
- breaking changes
    - 事件委托机制改变 => 虚拟DOM
    - 向原生浏览器靠拢
    - 删除事件池
    - useEffect清理操作改为异步
    - JSX 不可返回undefined
    - 删除部分私有API

### HOOKS
- 状态钩子 `useState()`
    - `const [count, setCount] = useState(0);`
    - 参数可以设置state初始值
    - 返回两个元素数组: `[状态,状态更新函数]`
- 副作用钩子 `useEffect()`
    - 替代 `componentDidMount, DidUpdate, WillUnmount`
```ts
useEffect(() => {
    document.title = `点击${count}次`;
}, [count]);  // 监听count变动而执行


useEffect(() => {
  document.title = `点击${count}次`;
}, []);  // 为空时 第一次挂载UI时执行

useEffect(()=>{
  document.title = `点击${count}次`;
}) // 当二参数没有穿时 每次页面渲染都会执行


useEffect(()=> {  // 异步useEffect
  const fetchData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setRobotGallery(data)
  };
  fetchData()
}, []) 
```
- `useContent` 跨组件数据传递
```tsx 
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


// index
import {AppStateProvider} from './AppState'


ReactDOM.render(
        <React.StrictMode>
          <AppStateProvider>
            <App />
          </AppStateProvider>
        </React.StrictMode>,
        document.getElementById('root')
);


// use
const Robot: React.FC<RobotProps> = ({id, name, email}) => {  // es7语法解构
// const Robot: React.FC<RobotProps> = (props) => {
  const value = useContext(appContext);
  const setState = useContext(appSetStateContext)

  const addToCart = () => {
    if (setState) {
      setState(state => {
        return {
          ...state,
          shoppingCart: {
            items: [...state.shoppingCart.items, {id, name}]
          }
        }
      })
    }
  }

  return (
          <li className={style.cardContainer}>
            <img className={css`width: 100%;`} src={`https://robohash.org/${id}`} alt=""/>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>auth: {value.username}</p>
            <button onClick={addToCart}>添加购物车中</button>
          </li>
  );
};
```
- `useReducer` 管理全局状态
- `useCallback` 回调副作用
- `useRef` 返回引用对象
- `useLayoutEffect` 
- `useDebugValue`

### 高阶组件
```tsx 
import React, {useContext} from 'react'
import {appSetStateContext} from "../AppState";
import {RobotProps} from "./Robot";

export const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    // return class extends React.Component {}

    return (props) => {
        const setState = useContext(appSetStateContext)

        const addToCart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, {id, name}]
                        }
                    }
                })
            }
        }

        return <ChildComponent {...props} addToCart={addToCart}/>
    }
}

// 使用
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
```

### 目录
- `my-app-ts` 基础
- `my-app-ts-func` hooks

### 瓦
- `setState` 异步更新 同步执行 