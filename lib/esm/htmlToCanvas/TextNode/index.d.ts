declare type Bound = {
    text: string;
    bound: ClientRect;
};
declare class TextNode {
    text: string;
    textBound: Bound[];
    childNode: ChildNode;
    constructor(childNode: Text);
    private getTextBound;
    private breakText;
}
export default TextNode;
