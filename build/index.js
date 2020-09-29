"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var c = 1;
var s = "1";
var d = 3;
var a = ["1"];
var e = 1;
function getTotal(a, b) {
    return a + b;
}
function sayHi() {
    console.log("hi");
}
function noOver() {
    while (true) {
        console.log(1);
    }
}
function Ofun(_a) {
    var a = _a.a, b = _a.b;
    return a + b;
}
var stringArr = ["1", "2"];
var numberArr = [1, 2, 3];
var undefinedArr = [undefined, undefined];
var manyArr = ["1", 1];
var objectArr = [{ name: "luanhaoc", age: 20 }, { work: "programer", car: "benz" }];
var Man = (function () {
    function Man(name, age) {
        this.name = name;
        this.age = age;
    }
    return Man;
}());
var manArr = [new Man("nico", 20)];
var arrowFunc = function (str) {
    return str;
};
var mnum = ["s", 1, "d"];
exports.default = {};
