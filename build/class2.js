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
    return People;
}());
var Teacher = (function (_super) {
    __extends(Teacher, _super);
    function Teacher(height) {
        var _this = _super.call(this, "nico", 20) || this;
        _this.height = height;
        return _this;
    }
    return Teacher;
}(People));
var t = new Teacher(180);
console.dir(t);
exports.default = {};
