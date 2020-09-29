"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var People = (function () {
    function People(name, age) {
        this.name = name;
        this.age = age;
    }
    People.prototype.sayName = function () {
        this.name = "nico";
        console.log(this.name);
    };
    return People;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Teacher.prototype.sayMyAge = function () {
        this.age = 20;
        console.log(this.age);
    };
    return Teacher;
}(People));
var t = new Teacher("nico", 20);
t.sayMyAge();
exports.default = t;
