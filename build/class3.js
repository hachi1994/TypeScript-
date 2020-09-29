"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var People = (function () {
    function People(_name) {
        this._name = _name;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name + "hello";
        },
        set: function (name) {
            this._name = (name + "nihao");
        },
        enumerable: false,
        configurable: true
    });
    return People;
}());
var p = new People("nico");
p.name = "momo";
var Dog = (function () {
    function Dog() {
    }
    Dog.sayWang = function () {
        console.log("wang");
    };
    return Dog;
}());
Dog.sayWang();
exports.default = {};
