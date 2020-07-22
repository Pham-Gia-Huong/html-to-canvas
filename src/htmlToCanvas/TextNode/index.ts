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
    this.textBound = this.getTextBoundList();
  }

  private getBound(textBoundList:Array<{text:string;bound:ClientRect}> ,offset:number,text:string){
    const ownerDocument = this.childNode.ownerDocument as Document;
    const range = ownerDocument.createRange();

    range.setStart(this.childNode, offset);
    range.setEnd(this.childNode, offset + text.length);
    textBoundList.push({text: text, bound: range?.getBoundingClientRect()});

    offset += text.length;
  }
  
  private getTextBoundList() {
    const listText = this.breakText(this.text) as string[];

    let offset = 0;
    const textBoundList:Array<{text:string;bound:ClientRect}> = [];
    listText.forEach(text => this.getBound(textBoundList, offset, text));
    return textBoundList;
  }

  private breakText(text: string) {
    const match = text.match(/[^\n]+/gm);
    return match;
  }
}
export default TextNode;