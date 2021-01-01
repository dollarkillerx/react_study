"use strict";
var Person = /** @class */ (function () {
    function Person(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + ", \u4F60\u597D");
    };
    Person.helloworld = function () {
        console.log("hellow world");
    };
    return Person;
}());
function main() {
    var dk = new Person("Dk", 20);
    dk.sayHello();
    Person.helloworld();
}
main();
