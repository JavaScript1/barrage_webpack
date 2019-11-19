/**
 * @module lineController {Object} [弹幕行管理器]
 * @module textData       {Object} [弹幕管理器]
 */
import lineController from './lineController';
import textData from './textData';

/* 弹幕核心控制器 */
class barrageController {
    /* 弹幕基本配置 */
    constructor({
        /* 弹幕元素 */
        canvas = null,
        /* 弹幕大小 */
        fontSize = 20,
        /* 弹幕颜色 */
        fillStyle = '#000',
        /* 弹幕速度 */
        step = 1,
        /* 计时器间隔 */
        interval = 15, 
    }){
        this.canvas = canvas;
        this.fontSize = fontSize;
        this.fillStyle = fillStyle;
        this.step = step;
        this.interval = interval;
        /* 弹幕集合 */
        this.textAll = [];
        /* 验证配置项是否完成 */
        this.configDone = true;
        
        /* 判断canvas元素真实性 */
        let canvasTrue = Object.prototype.toString.call( canvas ).slice( 8 , -1 ) !== 'HTMLDivElement';
        if( canvasTrue === false ){
            console.error( '请传递正确的 canvas 元素' );
            this.configDone = false;
        }else{
            this._ctx = canvas.getContext("2d");
        }
        /* 验证canvas基本属性真实性 */
        if( canvas.width === undefined || canvas.height === undefined ){
            console.error('请为 canvas 元素添加 ！宽高 ！属性');
            this.configDone = false;
        }else{
            this.width = canvas.width;
            this.height = canvas.height;
        }
    }
    /* 弹幕控制器-单例 */
    static getInstance( config ){
        if ( barrageController.instance === undefined ){
            barrageController.instance = new barrageController( config )
            if( barrageController.instance.configDone ){
                /* 当验证 config通过后 */
                barrageController.instance.barrageInit();
            };
        };
        return barrageController.instance;
    }
    get ctx(){
        return this._ctx;
    }
    /* 获取弹幕存储器中弹幕个数 */
    get textRemaining(){
        return textData.textAll.length;
    }
    /* 获取当前画布中弹幕个数 */
    get textCurrent(){
        return this.textAll.length;
    }
    /* 弹幕系统 初始化 */
    barrageInit(){
        this.textMove();
        this.lineCore = new lineController( this.height , this.fontSize , this.width );
        this.ctx.fillStyle = this.fillStyle; 
        this.ctx.font = `${this.fontSize - 4}px Times New Roman`; 
        this.ctx.textBaseline = "bottom"; 
    }
    /* 弹幕初始化 */
    textInit( text ){
        let fontWidth = this.ctx.measureText(text).width;
        let textConfig = {
            text,
            step: this.step,
            /* 弹幕X轴位置等于 画布宽度+文字宽度 */
            x: this.width + fontWidth,
            /* 弹幕Y轴位置 */
            y: this.fontSize,
            /* 弹幕文字宽度 */
            fontWidth,
            /* 弹幕终点 */
            textEnd: -fontWidth,
            /* 弹幕经过终点时设置为true */
            die: false,
        };
        /* 修正Y轴坐标 */
        if( this.lineCore.flagType === true ){
            let line = this.lineCore.createLine( textConfig );
            textConfig.y = line * this.fontSize;
        }else{
            /* 如果画布所有行入口都关闭 则返回false 同时将弹幕压入存储器中 */
            textData.input( textConfig );
            textConfig = false;
        }
        return textConfig
    }
    /* 弹幕入口 */
    textInput( text ){
        /* 获取弹幕配置 */
        let textConfig = this.textInit( text );
        /* 将弹幕压入集合中 */
        if( textConfig !== false ){
            this.textAll.push( textConfig );    
        }
    }
    /* 绘制弹幕 */
    textDraw( textConfig ){
        this.ctx.fillText( textConfig.text , textConfig.x , textConfig.y );
        /* 绘制完弹幕 及时更新X轴坐标 */
    }
    /* 清楚弹幕轨迹 */
    textClear( textConfig ){
        // 清空当前绘制的文字
       this.ctx.clearRect( textConfig.x + 1 , textConfig.y - this.fontSize, textConfig.fontWidth + 2 , this.fontSize + 2 ); 
    }
    /* 弹幕移动 */
    textMove(){
        this.timer = setInterval( () => {
            this.textAll.forEach( ( item , index , self ) => {
                /* 监听弹幕存储器中是否存在弹幕 同时画布所有行都没关闭 */
                if( textData.textAll.length > 0 && this.lineCore.flagType === true ){
                    let textConfig = textData.output();
                    /* 从弹幕存储器中获取弹幕 并修正Y轴坐标 */
                    let line = this.lineCore.createLine( textConfig );
                    textConfig.y = line * this.fontSize;
                    /* 将弹幕压入集合中 */
                    this.textAll.push( textConfig );    
                }
                this.textClear( item );
                this.textDraw( item );
                item.x -= item.step;
                if( item.x < item.textEnd ){
                    item.die = true;
                    /* 删除过期弹幕 */
                    self.splice( index , 1 );
                };
            });
            // clearInterval( this.timer );
        } , this.interval);  
    }
}
window.barrageController = barrageController;


