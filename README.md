## 弹幕插件（Demo）

#### 基本条件
    基于你的画布和初始化的基本配置进行调节弹幕的总行数
    基于你画布的宽度进行调节弹幕总行驶距离
    画布的背景和基本属性由你设置插件不会进行干扰和处理
    
    基于webpack打包 需要install下载依赖

    通过 npm run start 启动项目
    
    打包指令 
        npm run build 
        
    弹幕插件有自己的弹幕存储器 多余的弹幕会存储进弹幕存储器中
    弹幕出现的行 即Y轴坐标 是有一个行管理器进行分配 它控制下以条弹幕出现的行数
    如果当前所有行的入口都由弹幕在运行 那么下一条弹幕会被压入存储器中
    
    存储器中的弹幕会被优先获取并被行管理器分配
        
#### 已知问题

速度和字体变大的话 会造成弹幕在移动过程中没有完全清空 

#### 全局 barrageController 类

```
    barrageController.getInstance({
        /* 画布 必填 */
        canvas:document.getElementById('barrage'),
        /* 弹幕文字大小 非必填 */
        fontSize: 20,
        /* 弹幕颜色 非必填 */
        fillStyle: '#000',
        /* 弹幕移动速度 非必填 */
        step: 1,
        /* 计时器间隔 非必填 */
        interval = 15
    });
```

#### 使用
```
    当初始化完毕之后使用 textInput 方法并传递弹幕内容
    barrageController.getInstance().textInput('弹幕文本');
    一般配合 click 事件一起使用
    你也可以使用计时器不断压入 来进行压力测试
    
```

#### 获取关于弹幕的一些信息

```
    /* 获取弹幕存储器中弹幕个数 */
    barrageController.getInstance().textRemaining 
    /* 获取当前画布中弹幕个数 */
    barrageController.getInstance().textCurrent 

```
