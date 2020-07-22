import TextNode from '../TextNode';

type Bound = {
  x: number;
  y: number;
  left: number;
  top: number;
  width: number;
  height: number;
}
class ContainerElement {
  element: HTMLElement;
  styles: CSSStyleDeclaration;
  bound: Bound;
  textNode: TextNode;
  constructor(element: HTMLElement) {
    this.element = element;
    this.styles = window.getComputedStyle(element);
    this.bound = this.getBound(element);
    this.textNode = new TextNode(element.firstChild as Text);
  }
  getBound(element: HTMLElement) {
    const bound = element.getBoundingClientRect();
    return {x: bound.x, y: bound.y, top: bound.top, left: bound.left, width: bound.width, height: bound.height};
  }
  getFont() {
    const fontFamily = this.styles.fontFamily;
    const fontSize = this.styles.fontSize;
    return [this.styles.fontStyle, this.styles.fontWeight, fontSize, fontFamily].join(' ');
  }
}
export default ContainerElement;