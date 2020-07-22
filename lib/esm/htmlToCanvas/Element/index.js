"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextNode_1 = require("../TextNode");
var ContainerElement = /** @class */ (function () {
    function ContainerElement(element) {
        this.element = element;
        this.styles = window.getComputedStyle(element);
        this.bound = this.getBound(element);
        this.textNode = new TextNode_1.default(element.firstChild);
    }
    ContainerElement.prototype.getBound = function (element) {
        var bound = element.getBoundingClientRect();
        return { x: bound.x, y: bound.y, top: bound.top, left: bound.left, width: bound.width, height: bound.height };
    };
    ContainerElement.prototype.getFont = function () {
        var fontFamily = this.styles.fontFamily;
        var fontSize = this.styles.fontSize;
        return [this.styles.fontStyle, this.styles.fontWeight, fontSize, fontFamily].join(' ');
    };
    return ContainerElement;
}());
exports.default = ContainerElement;
//# sourceMappingURL=index.js.map