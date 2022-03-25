"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OOP5 = void 0;
var p5_1 = __importDefault(require("p5"));
var greeting_component_1 = require("../components/greeting.component");
var OOP5 = /** @class */ (function () {
    function OOP5() {
        this.initP5();
        this.init();
    }
    OOP5.prototype.initP5 = function (userSettings) {
        var _this = this;
        var settings = function (p5) {
            _this.app = p5;
            p5.setup = function () { return _this.setup(); };
            p5.draw = function () { return _this.draw(); };
        };
        new p5_1.default(userSettings || settings);
        this.components = [new greeting_component_1.Greeting(this.app)];
    };
    return OOP5;
}());
exports.OOP5 = OOP5;
