"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
var base_component_1 = require("./base.component");
var Greeting = /** @class */ (function (_super) {
    __extends(Greeting, _super);
    function Greeting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Greeting.prototype.draw = function () {
        this.app.background(0);
        this.app.fill("gray");
        this.app.textSize(20);
        this.app.textAlign("center", "center");
        this.app.text("Greetings!\nYou have finished setup.", this.app.height / 2, this.app.width / 2);
    };
    return Greeting;
}(base_component_1.BaseComponent));
exports.Greeting = Greeting;
