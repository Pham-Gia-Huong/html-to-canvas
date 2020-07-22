import ContainerElement from './Element';
let _bound: DOMRect;
let _container: ContainerElement;
let _option: CanvasOption;

const _canvas = document.createElement('canvas') as HTMLCanvasElement;
const _context = _canvas.getContext('2d') as CanvasRenderingContext2D;

function _createCanvas() {
  _canvas.width = Math.floor(_bound.width * window.devicePixelRatio);
  _canvas.height = Math.floor(_bound.height * window.devicePixelRatio);
  _canvas.style.width = `${_bound.width}px`;
  _canvas.style.height = `${_bound.height}px`;
}

function _createContext() {
  _context.scale(window.devicePixelRatio, window.devicePixelRatio);
  _context.translate(-_bound.x, -_bound.y);
  _context.textBaseline = 'bottom';
}

function _drawBackground() {
  const bound = _container.bound;
  if (!_option?.background) {
    _context.fillStyle = 'white';
  }
  _context.fillRect(bound.x, bound.y, bound.width, bound.height);
}

function _drawText() {
  const font = _container.getFont();
  _context.font = font;
  _context.fillStyle = _container.styles.color;

  const textList = _container.textNode.textBound;
  textList.forEach(data => {
    _context.fillText(data.text, data.bound.left, data.bound.top + data.bound.height);
  });
}


const htmlToCanvas = (elm: HTMLElement, option?: CanvasOption) => {
  _container = new ContainerElement(elm);
  _option = option || {} as CanvasOption;
  _bound = elm.getBoundingClientRect();

  _createCanvas();
  _createContext();

  _drawBackground();
  _drawText();

  return _canvas;
};

export {htmlToCanvas};