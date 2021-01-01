"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import req = require('request');
var request_1 = __importDefault(require("request"));
main();
function main() {
    request_1.default('https://www.baidu.com', function (err, response, body) {
        if (err) {
            console.error(err);
        }
        else {
            console.log(body);
        }
    });
}
