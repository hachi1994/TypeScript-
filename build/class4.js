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
var People = (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var p = new People("nico");
var BasketballPlayer = (function () {
    function BasketballPlayer() {
    }
    return BasketballPlayer;
}());
var NbaPlayer = (function (_super) {
    __extends(NbaPlayer, _super);
    function NbaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NbaPlayer.prototype.play = function () {
        console.log("在nba打球");
    };
    return NbaPlayer;
}(BasketballPlayer));
var CbaPlayer = (function (_super) {
    __extends(CbaPlayer, _super);
    function CbaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CbaPlayer.prototype.play = function () {
        console.log("在cba打球");
    };
    return CbaPlayer;
}(BasketballPlayer));
var WnbaPlayer = (function (_super) {
    __extends(WnbaPlayer, _super);
    function WnbaPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WnbaPlayer.prototype.play = function () {
        console.log("在wnba打球");
    };
    return WnbaPlayer;
}(BasketballPlayer));
