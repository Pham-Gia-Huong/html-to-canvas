import TextNode from '../TextNode';
declare type Bound = {
    x: number;
    y: number;
    left: number;
    top: number;
    width: number;
    height: number;
};
declare class ContainerElement {
    element: HTMLElement;
    styles: CSSStyleDeclaration;
    bound: Bound;
    textNode: TextNode;
    constructor(element: HTMLElement);
    getBound(element: HTMLElement): {
        x: number;
        y: number;
        top: number;
        left: number;
        width: number;
        height: number;
    };
    getFont(): string;
}
export default ContainerElement;
