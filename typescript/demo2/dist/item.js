"use strict";
function main() {
    var my_name = "dollarkiller";
    console.log(my_name);
    var p = sayHello("hello world");
    console.log("" + p);
    var user = [0, 12, 123];
    // sayHello(user);
    var a = "st";
    console.log('a  ', typeof a);
    console.log('s1: ', lhlx("hello world"));
    console.log('s1: ', lhlx(19999));
    console.log('s2: ', lhlx2("hello world"));
    console.log('s2: ', lhlx2(19999));
}
function sayHello(person) {
    console.log(typeof person);
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    }
    else {
        throw new Error('person is not a string');
    }
}
function item() {
    var isDone = true;
    var money = 1999;
    var name = "hello world";
    var unsable = undefined;
    var u = undefined;
    var nu = null;
    // let num: number = u;
}
function lhlx(something) {
    return something.length; // 如果其中一个类型没有这个属性会返回undefined
}
function lhlx2(something) {
    return something.toString();
}
function lhlx3() {
    var my;
    my = "helloworld";
    my = 12213;
}
function alearName() {
    alert('my name');
}
function itf() {
    var tom = {
        name: 'Tom',
        age: 25,
    };
    console.log(tom);
}
function arry() {
    // 普通数组
    var fibonacci = [1, 2, 3, 4, 4, 6];
    fibonacci.push(12);
    // 泛型数组
    var fib = [1, 2, 3, 34, 45];
    var fib2 = [1, 2, 3, 4, 4, 5, 4];
}
function fnt() {
    var sum = function (x, y) {
        return x + y;
    };
    var mySearch = function (source, sub) {
        return source.search(sub) !== -1;
    };
    // 可选参数
    var sum2 = function (x, y) {
        if (y) {
            return x + y;
        }
        return x + 15;
    };
}
// 默认参数
function def_func_params(x, y) {
    if (y === void 0) { y = 'Hello'; }
    return x + y;
}
// 多个
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function isFish(animal) {
    if (typeof animal) {
        animal.swin();
    }
    else {
        animal.run();
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
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
var p = Sex.MALE;
function Mj(sex) {
    switch (sex) {
        case Sex.FEMALE:
            return 0;
        case Sex.MALE:
            return 1;
        case Sex.UNKNOWN:
            return 2;
    }
}
main();
