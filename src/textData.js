/* 弹幕储存器 防止弹幕超载 储存多余弹幕*/
class textData {
    constructor(){
        this.textAll = [];
    }
    input( textConfig ){
        this.textAll.push( textConfig );
    }
    output(){
        return this.textAll.shift();
    }
}

export default new textData();