
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

    public static helloworld() {
        console.log("hellow world");
    }
}


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

function main() {
    let dk = new Person("Dk", 20);
    dk.sayHello();

    Person.helloworld();

    let mydb = new MySQL("mysql");
    mydb.showInfo();
}




main()
