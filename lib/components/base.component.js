"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseComponent = void 0;
var app_1 = require("../core/app");
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.app = app_1.OOP5.p5;
    }
    BaseComponent.prototype.init = function () { };
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;
