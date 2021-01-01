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
- css提示 `yarn add typescript-plugin-css-modules --save-dev`
- 优雅的css `yarn add @emotion/css`