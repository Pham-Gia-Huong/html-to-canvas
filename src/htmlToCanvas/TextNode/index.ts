type Bound = {
  text:string;
  bound:ClientRect
}

class TextNode {
  text:string;
  textBound: Bound[];
  childNode: ChildNode
  constructor(childNode: Text) {
    this.childNode = childNode;
    this.text = childNode.data;
    this.textBound = this.getTextBound();
  }
  private getTextBound() {
    const listText = this.breakText(this.text) as string[];

    let offset = 0;
    const textBoundList:Array<{text:string;bound:ClientRect}> = [];
    const ownerDocument = this.childNode.ownerDocument as Document;

    listText.forEach(text => {
      const range = ownerDocument.createRange();

      range.setStart(this.childNode, offset);
      range.setEnd(this.childNode, offset + text.length);
      textBoundList.push({text: text, bound: range?.getBoundingClientRect()});

      offset += text.length;
    });

    return textBoundList;
  }

  private breakText(text: string) {
    const match = text.match(/[^\n]+/gm);
    return match;
  }
}
export default TextNode;