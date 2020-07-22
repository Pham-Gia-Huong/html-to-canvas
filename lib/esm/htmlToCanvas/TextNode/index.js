"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextNode = /** @class */ (function () {
    function TextNode(childNode) {
        this.childNode = childNode;
        this.text = childNode.data;
        this.textBound = this.getTextBound();
    }
    TextNode.prototype.getTextBound = function () {
        var _this = this;
        var listText = this.breakText(this.text);
        var offset = 0;
        var textBoundList = [];
        var ownerDocument = this.childNode.ownerDocument;
        listText.forEach(function (text) {
            var range = ownerDocument.createRange();
            range.setStart(_this.childNode, offset);
            range.setEnd(_this.childNode, offset + text.length);
            textBoundList.push({ text: text, bound: range === null || range === void 0 ? void 0 : range.getBoundingClientRect() });
            offset += text.length;
        });
        return textBoundList;
    };
    TextNode.prototype.breakText = function (text) {
        var match = text.match(/[^\n]+/gm);
        return match;
    };
    return TextNode;
}());
exports.default = TextNode;
//# sourceMappingURL=index.js.map