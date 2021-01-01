# TS

### 基础配置
- 输出
```
tsc --outDir dist helloworls.ts   // helloworld文件输出到dist目录下
tsc --outDir dist ./src/helloworld.ts

tsc --outDir dist ./src/*.ts
```
- tsconfig.json
```
tsc --init

修改tsconfig.json
 "outDir": "./dist",                              /* Redirect output structure to the directory. */
    "rootDir": "./src",                             /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */

直接运行tsc 就编译完毕了
```
- 动态监视
```
tsc -w
```

### 变量
- any类型
- 变量类型
    - number
    - string
    - boolean
    - symbol 符号类型
    - any 任意类型   // 会忽略编译器的类型检查
    - object 对象(数组 元组 类 接口 函数)
- var & let
    - 限定变量作用范围
    - 防止变量重复定义
```ts
let a = "str"; // 会做类型推导
console.log(typeof a); // => string

let b;  // 如果声明没有赋值 也没有指定类型 会any类型
b = "ast";
console.log(typeof b); // => any

// 枚举
enum Sex {
    MALE,
    FEMALE,
    UNKNOWN,
}
let p = Sex.MALE;

function Mj(sex: Sex): number {
    switch (sex) {
        case Sex.FEMALE:
            return 0;
        case Sex.MALE:
            return 1;
        case Sex.UNKNOWN:
            return 2;
    }
}
let p = Sex.MALE;
```
#### 联合类型
```ts

function lhlx(something: string | number): number {
    return something.length;  // 如果其中一个类型没有这个属性会返回undefined
}

function lhlx3() {
    let my: string | number;
    my = "helloworld";
    my = 12213;
}

const name: string = "ConstName";
const DATA: number[] = [120,656,56]; 
```
#### 对象类型 接口
```ts
interface Person {
    name: string,
    age: number, // 全部必填
}

interface Person2 {
    name: string,
    age?: number,  //可选
}

interface Person3 {
    name: string,
    age?: number,
    [propName: string]: any, // 任意类型 取string
}

interface Person4 {
    readonly id: number; // 只读类型
    name: string,
    age?: number,
}

function itf() {
    let tom: Person = {
        name: 'Tom',
        age: 25,
    }
    console.log(tom);
}
```
#### 数组类型
```ts
     // 普通数组
    let fibonacci: number[] = [1,2,3,4,4,6];
    fibonacci.push(12);

    // 泛型数组
    let fib: Array<number> = [1,2,3,34,45];

    // 接口数组
    interface NumberArray {
        [index: number]: number;
    }
    let fib2: NumberArray = [1,2,3,4,4,5,4];
```

#### 函数
```ts
    let sum: (x: number, y: number) => number = function(x: number, y: number):number {
        return x + y;
    };

    // 接口定义函数
    interface SearchFunc {
        (source: string, sub: string): boolean;
    }
    let mySearch: SearchFunc = function(source: string,sub: string): boolean {
        return source.search(sub) !== -1;
    }

    // 可选参数
    let sum2: (x: number, y?: number) => number = function(x: number, y?: number):number {
        if (y) {
            return x + y;
        }
        return x + 15;
    };

    // 默认参数
    function def_func_params(x: number,y: string = 'Hello') {
        return x + y;
    }
    // 多个
    function push(array: any[], ...items: any[]) {
        items.forEach(function(item){
            array.push(item);
        });
    }
```
#### 断言
```ts
interface Cat {
    name: string,
    run(): void;
}

interface Fish {
    name: string,
    swin(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish)) {
        (animal as Fish).swin();
    }else {
        (animal as Cat).run();
    }
}

interface ApiError extends Error {
    code: number;
}
interface HttpError extends Error {
    statusCode: number;
}
function isApiError(error: Error):boolean {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
```
#### null检查
```ts
let mydata1: string = undefined;
let mydata2: string = null;
let mydata3: string = "";
mydata3 = null;
```
严格空检测 config
```json
"strictNullChecks": true,    
```

#### 第三方库导入
- https://www.typescriptlang.org/dt/search?search=
- `npm install request`
- `npm install --save @types/request`
```ts
import req from "request";

main()
function main() {
    req('https://www.baidu.com',function(err,response,body) {
        if (err) {
            console.error(err);
        }else {
            console.log(body);
        }
    });
}
```

#### 箭头函数
```ts
(param:typem, ...):return_type => { body }


let add = (x: number, y:number):number => {
    return x + y;
}
```

#### Class
```ts
class classname {
    property_name1: type;
    property_name2: type;

    // 构造函数
    constructor(param1: type, param2: type, ...) {

    }

    // 类方法
    match1(para1: type): return_type {

    }
}


class Person {
    name: string;
    sex: number;

    constructor(name: string, sex: number) {
        this.name = name;
        this.sex = sex;
    }

    sayHello() {
        console.log(`${this.name}, 你好`);
    }
}

function main() {
    let dk = new Person("Dk", 20);
    dk.sayHello();
}

main()
```
#### 访问限制
- public 共有访问
- protected 本类和子类
- private 本类

#### 静态成员
```ts
class Database {
    public static dbname: string;
    constructor () {}

    public static connect() {
        if (this.dbname) {
            console.log(this.dbname);
        }else {
            console.log("not dbname");
        }
    }
}
```

#### 命名空间
```ts
namespace ns_name {
    export class class_name {}
    export function func_name {}
    export namespace ns_name {}
}
```

#### 类继承
```ts
    class child_class extend parent_class {}

    class Database {
        protected name: string;
        constructor(name: string) {
            this.name = name;
        }
        showInfo() {
            console.log("hello world");
        }
    }
    class MySQL extends Database {}

    let mydb = new MySQL("mysql");
    mydb.showInfo();
```
#### 接口
```ts
interafce IDatabase {
    connect(): void;
    close(): void;
    exeSql(sql: string): number;
}
class Oracle implements IDatabase {
    connect() {
        console.log("x")
    }
    close() {
        console.log("close");
    }
    exeSql(sql: string): number {
        return 0;
    }
}
```

