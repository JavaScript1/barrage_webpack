# 🚀 Welcome to your new awesome project!

This project has been created using **webpack scaffold**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

##### 弹幕插件（Demo）


#### 已知问题

速度和字体变大的话 会造成弹幕在移动过程中没有完全清空 

##### 全局 barrageController 类

```
    barrageController.getInstance({
        <!-- 画布 必填-->
        canvas:document.getElementById('barrage'),
        <!-- 弹幕文字大小 非必填-->
        fontSize: 30,
        <!-- 弹幕颜色 非必填-->
        fillStyle: 'blue',
        <!-- 弹幕移动速度 非必填-->
        step: 1,
        <!-- 计时器间隔 非必填-->
        interval = 15
    });
```

##### 获取关于弹幕的一些信息

```
    /* 获取弹幕存储器中弹幕个数 */
    barrageController.getInstance().textRemaining 
    /* 获取当前画布中弹幕个数 */
    barrageController.getInstance().textCurrent 

```

