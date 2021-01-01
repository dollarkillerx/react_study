// import req = require('request');
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


