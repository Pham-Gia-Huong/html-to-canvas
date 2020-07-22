"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlToCanvas = void 0;
var Element_1 = require("./Element");
var _bound;
var _container;
var _option;
var _canvas = document.createElement('canvas');
var _context = _canvas.getContext('2d');
function _createCanvas() {
    _canvas.width = Math.floor(_bound.width * window.devicePixelRatio);
    _canvas.height = Math.floor(_bound.height * window.devicePixelRatio);
    _canvas.style.width = _bound.width + "px";
    _canvas.style.height = _bound.height + "px";
}
function _createContext() {
    _context.scale(window.devicePixelRatio, window.devicePixelRatio);
    _context.translate(-_bound.x, -_bound.y);
    _context.textBaseline = 'bottom';
}
function _drawBackground() {
    var bound = _container.bound;
    if (!(_option === null || _option === void 0 ? void 0 : _option.background)) {
        _context.fillStyle = 'white';
    }
    _context.fillRect(bound.x, bound.y, bound.width, bound.height);
}
function _drawText() {
    var font = _container.getFont();
    _context.font = font;
    _context.fillStyle = _container.styles.color;
    var textList = _container.textNode.textBound;
    textList.forEach(function (data) {
        _context.fillText(data.text, data.bound.left, data.bound.top + data.bound.height);
    });
}
var htmlToCanvas = function (elm, option) {
    _container = new Element_1.default(elm);
    _option = option || {};
    _bound = elm.getBoundingClientRect();
    _createCanvas();
    _createContext();
    _drawBackground();
    _drawText();
    return _canvas;
};
exports.htmlToCanvas = htmlToCanvas;
//# sourceMappingURL=index.js.map