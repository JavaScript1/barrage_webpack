/**
 * @title [弹幕行控制器-控制每一行的开关]
 **/
class lineController {
    constructor( height , fontSize , width){
        /* 画布宽度 */
        this.width = width;
        /* 画布总行数 */
        this.lineMax = parseInt( height / fontSize );
        /* 弹幕Config集合 */
        this.textConfigAll = new Array( this.lineMax ).fill( true );
        // this.textConfigAll = new Array( 1 ).fill( true );
        /* 弹幕入口集合 保存当前入口打开的行*/
        this.lineAll = [];
    }
    get flagType(){
        let flag = false;
        this.lineAll = [];
        /* 获取当前弹幕集合中 入口打开的行数 并另成集合 lineAll */
        this.textConfigAll.forEach( ( item, index, self ) => {
            /* 如果 item等于true 或者完全展示在画布上 */
            if( item === true || item.x < (this.width - 5)){
                flag = true;
                this.lineAll.push( index );
            }
        });
        return flag;
    }   
    /* 创建弹幕文字Y轴坐标 */
    createLine( textConfig ){
        /**
         * @param textConfig {Object} [弹幕文字配置项]
         */
        let index = parseInt( Math.random() * this.lineAll.length + 0 );
        let line = this.lineAll[index];
        this.textConfigAll[line] = textConfig;
        /* 下标index表示行 所以+1 */
        return line + 1;
    }
}

export default lineController;