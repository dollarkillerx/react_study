function main() {
    let my_name: string = "dollarkiller";
    console.log(my_name);

    let p: string = sayHello("hello world");
    console.log(`${p}`);

    let user = [0, 12, 123];
    // sayHello(user);
    let a = "st";
    console.log('a  ', typeof a);
    console.log('s1: ', lhlx("hello world"));
    console.log('s1: ', lhlx(19999));
    console.log('s2: ', lhlx2("hello world"));
    console.log('s2: ', lhlx2(19999));
}

function sayHello(person: string) {
    console.log(typeof person);
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    } else {
        throw new Error('person is not a string');
    }
}

function item() {
    let isDone: boolean = true;
    let money: number = 1999;
    let name: string = "hello world";
    let unsable: void = undefined;
    let u: undefined = undefined;
    let nu: null = null;
    // let num: number = u;
}

function lhlx(something: string | number): number {
    return something.length;  // 如果其中一个类型没有这个属性会返回undefined
}

function lhlx2(something: string | number): string {
    return something.toString();
}

function lhlx3() {
    let my: string | number;
    my = "helloworld";
    my = 12213;
}

function alearName(): void {
    alert('my name');
}

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

function arry() {
    // 普通数组
    let fibonacci: number[] = [1, 2, 3, 4, 4, 6];
    fibonacci.push(12);

    // 泛型数组
    let fib: Array<number> = [1, 2, 3, 34, 45];

    // 接口数组
    interface NumberArray {
        [index: number]: number;
    }
    let fib2: NumberArray = [1, 2, 3, 4, 4, 5, 4];
}

function fnt() {
    let sum: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y;
    };

    // 接口定义函数
    interface SearchFunc {
        (source: string, sub: string): boolean;
    }
    let mySearch: SearchFunc = function (source: string, sub: string): boolean {
        return source.search(sub) !== -1;
    }

    // 可选参数
    let sum2: (x: number, y?: number) => number = function (x: number, y?: number): number {
        if (y) {
            return x + y;
        }
        return x + 15;
    };
}

// 默认参数
function def_func_params(x: number, y: string = 'Hello') {
    return x + y;
}
// 多个
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item);
    });
}

// 断言
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
    } else {
        (animal as Cat).run();
    }
}

// 
// interface ApiError extends Error {
//     code: number;
// }
// interface HttpError extends Error {
//     statusCode: number;
// }
// function isApiError(error: Error):boolean {
//     if (error instanceof ApiError) {
//         return true;
//     }
//     return false;
// }

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

main()