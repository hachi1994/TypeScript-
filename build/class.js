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
var Lady = (function () {
    function Lady() {
        this.name = "my Name";
    }
    Lady.prototype.sayMyName = function () {
        return this.name;
    };
    return Lady;
}());
var XiaoJieJie = (function (_super) {
    __extends(XiaoJieJie, _super);
    function XiaoJieJie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoJieJie.prototype.sayLove = function () {
        console.log("love" + this.name);
    };
    XiaoJieJie.prototype.sayMyName = function () {
        return _super.prototype.sayMyName.call(this) + "你好！";
    };
    return XiaoJieJie;
}(Lady));
var l = new XiaoJieJie();
var a = ["1"];
exports.default = {};
