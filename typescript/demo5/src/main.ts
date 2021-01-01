namespace com.dk {
    // 导入类
    export class KVLser {
        constructor() {}

        sayHello() {
            console.log("hi, my dear.");
        }
    }

    // 到处函数
    export function showVer() {
        console.log("version is 1.0");
    }

    // 嵌套子命名空间
    export namespace util {
        export class MyDatabase {
            private dbname: string;
            constructor(dbname: string) {
                this.dbname = dbname;
            }
            showMe() {
                console.log(this.dbname + " is good.");
            }
        }
    }
}


function main() {
    let user = new com.dk.KVLser();
    user.sayHello();
}

main()