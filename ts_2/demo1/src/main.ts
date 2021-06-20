let helloWorld: string = "hello world"

let my: number = 16;
let my1: number = 16;

console.log(helloWorld, my + my1)


// list
let list: Array<number> = [16];

console.log(list.length)

for (let i = 0; i < 10; i++) {
    list.push(i)
}

console.log(list.length)

console.log(list)

// union

let union: string | number

union = 16

switch (typeof union) {
    case "string":
        console.log("union is string")
        break
    case "number":
        console.log("union is number")
}

enum Color {
    red = 5,
    green,
    blue
}

let color = Color.green
console.log(color)

let randomValue: any = 666
randomValue = true
randomValue = "abcd"
randomValue = {}

console.log(randomValue)

function printResult(): void {
    console.log("lalala")
    return
}

console.log(printResult())

// function throwError(message: string, errorCode: number): never {
//     throw {
//         message,
//         errorCode
//     }
// }
//
// throwError("not fund", 404);


// 类型适配
let message: any;
message = "avc";
// let addd = (<string>message).endsWith("c");
let ddd2 = (message as string).length;

let log3 = (msg: string, code?: number, def: string = "hellworld") => {
    // code? 可选
}

let drawPoint = (x: any, y: any) => {
    console.log(x, y)
}

interface IPoint {
    x: number,
    y: number,
    drawPoint: () => void,
    getDistances: (p: IPoint) => number,
}

class Point implements IPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    drawPoint(): void {
        console.log(`${(this.x)} ,${(this.y)}`)
    }

    getDistances(p: IPoint): number {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
    }
}

import {HelloWorld} from "./point"
let c = new HelloWorld()
c.hello()
