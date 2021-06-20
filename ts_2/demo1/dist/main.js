"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloWorld = "hello world";
var my = 16;
var my1 = 16;
console.log(helloWorld, my + my1);
// list
var list = [16];
console.log(list.length);
for (var i = 0; i < 10; i++) {
    list.push(i);
}
console.log(list.length);
console.log(list);
// union
var union;
union = 16;
switch (typeof union) {
    case "string":
        console.log("union is string");
        break;
    case "number":
        console.log("union is number");
}
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var color = Color.green;
console.log(color);
var randomValue = 666;
randomValue = true;
randomValue = "abcd";
randomValue = {};
console.log(randomValue);
function printResult() {
    console.log("lalala");
    return;
}
console.log(printResult());
// function throwError(message: string, errorCode: number): never {
//     throw {
//         message,
//         errorCode
//     }
// }
//
// throwError("not fund", 404);
// 类型适配
var message;
message = "avc";
// let addd = (<string>message).endsWith("c");
var ddd2 = message.length;
var log3 = function (msg, code, def) {
    if (def === void 0) { def = "hellworld"; }
    // code? 可选
};
var drawPoint = function (x, y) {
    console.log(x, y);
};
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.drawPoint = function () {
        console.log((this.x) + " ," + (this.y));
    };
    Point.prototype.getDistances = function (p) {
        return Math.pow(p.x - this.x, 2) + Math.pow(p.y - this.y, 2);
    };
    return Point;
}());
var point_1 = require("./point");
var c = new point_1.HelloWorld();
c.hello();
