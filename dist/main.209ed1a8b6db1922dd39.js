/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lineController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lineController */ \"./src/lineController.js\");\n/* harmony import */ var _textData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textData */ \"./src/textData.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @module lineController {Object} [弹幕行管理器]\n * @module textData       {Object} [弹幕管理器]\n */\n\n\n/* 弹幕核心控制器 */\n\nvar barrageController =\n/*#__PURE__*/\nfunction () {\n  /* 弹幕基本配置 */\n  function barrageController(_ref) {\n    var _ref$canvas = _ref.canvas,\n        canvas = _ref$canvas === void 0 ? null : _ref$canvas,\n        _ref$fontSize = _ref.fontSize,\n        fontSize = _ref$fontSize === void 0 ? 20 : _ref$fontSize,\n        _ref$fillStyle = _ref.fillStyle,\n        fillStyle = _ref$fillStyle === void 0 ? '#000' : _ref$fillStyle,\n        _ref$step = _ref.step,\n        step = _ref$step === void 0 ? 1 : _ref$step,\n        _ref$interval = _ref.interval,\n        interval = _ref$interval === void 0 ? 15 : _ref$interval;\n\n    _classCallCheck(this, barrageController);\n\n    this.canvas = canvas;\n    this.fontSize = fontSize;\n    this.fillStyle = fillStyle;\n    this.step = step;\n    this.interval = interval;\n    /* 弹幕集合 */\n\n    this.textAll = [];\n    /* 验证配置项是否完成 */\n\n    this.configDone = true;\n    /* 判断canvas元素真实性 */\n\n    var canvasTrue = Object.prototype.toString.call(canvas).slice(8, -1) !== 'HTMLDivElement';\n\n    if (canvasTrue === false) {\n      console.error('请传递正确的 canvas 元素');\n      this.configDone = false;\n    } else {\n      this._ctx = canvas.getContext(\"2d\");\n    }\n    /* 验证canvas基本属性真实性 */\n\n\n    if (canvas.width === undefined || canvas.height === undefined) {\n      console.error('请为 canvas 元素添加 ！宽高 ！属性');\n      this.configDone = false;\n    } else {\n      this.width = canvas.width;\n      this.height = canvas.height;\n    }\n  }\n  /* 弹幕控制器-单例 */\n\n\n  _createClass(barrageController, [{\n    key: \"barrageInit\",\n\n    /* 弹幕系统 初始化 */\n    value: function barrageInit() {\n      this.textMove();\n      this.lineCore = new _lineController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.height, this.fontSize, this.width);\n      this.ctx.fillStyle = this.fillStyle;\n      this.ctx.font = \"\".concat(this.fontSize - 4, \"px Times New Roman\");\n      this.ctx.textBaseline = \"bottom\";\n    }\n    /* 弹幕初始化 */\n\n  }, {\n    key: \"textInit\",\n    value: function textInit(text) {\n      var fontWidth = this.ctx.measureText(text).width;\n      var textConfig = {\n        text: text,\n        step: this.step,\n\n        /* 弹幕X轴位置等于 画布宽度+文字宽度 */\n        x: this.width + fontWidth,\n\n        /* 弹幕Y轴位置 */\n        y: this.fontSize,\n\n        /* 弹幕文字宽度 */\n        fontWidth: fontWidth,\n\n        /* 弹幕终点 */\n        textEnd: -fontWidth,\n\n        /* 弹幕经过终点时设置为true */\n        die: false\n      };\n      /* 修正Y轴坐标 */\n\n      if (this.lineCore.flagType === true) {\n        var line = this.lineCore.createLine(textConfig);\n        textConfig.y = line * this.fontSize;\n      } else {\n        /* 如果画布所有行入口都关闭 则返回false 同时将弹幕压入存储器中 */\n        _textData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].input(textConfig);\n        textConfig = false;\n      }\n\n      return textConfig;\n    }\n    /* 弹幕入口 */\n\n  }, {\n    key: \"textInput\",\n    value: function textInput(text) {\n      /* 获取弹幕配置 */\n      var textConfig = this.textInit(text);\n      /* 将弹幕压入集合中 */\n\n      if (textConfig !== false) {\n        this.textAll.push(textConfig);\n      }\n    }\n    /* 绘制弹幕 */\n\n  }, {\n    key: \"textDraw\",\n    value: function textDraw(textConfig) {\n      this.ctx.fillText(textConfig.text, textConfig.x, textConfig.y);\n      /* 绘制完弹幕 及时更新X轴坐标 */\n    }\n    /* 清楚弹幕轨迹 */\n\n  }, {\n    key: \"textClear\",\n    value: function textClear(textConfig) {\n      // 清空当前绘制的文字\n      this.ctx.clearRect(textConfig.x + 1, textConfig.y - this.fontSize, textConfig.fontWidth + 2, this.fontSize + 2);\n    }\n    /* 弹幕移动 */\n\n  }, {\n    key: \"textMove\",\n    value: function textMove() {\n      var _this = this;\n\n      this.timer = setInterval(function () {\n        _this.textAll.forEach(function (item, index, self) {\n          /* 监听弹幕存储器中是否存在弹幕 同时画布所有行都没关闭 */\n          if (_textData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textAll.length > 0 && _this.lineCore.flagType === true) {\n            var textConfig = _textData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].output();\n            /* 从弹幕存储器中获取弹幕 并修正Y轴坐标 */\n\n            var line = _this.lineCore.createLine(textConfig);\n\n            textConfig.y = line * _this.fontSize;\n            /* 将弹幕压入集合中 */\n\n            _this.textAll.push(textConfig);\n          }\n\n          _this.textClear(item);\n\n          _this.textDraw(item);\n\n          item.x -= item.step;\n\n          if (item.x < item.textEnd) {\n            item.die = true;\n            /* 删除过期弹幕 */\n\n            self.splice(index, 1);\n          }\n\n          ;\n        }); // clearInterval( this.timer );\n\n      }, this.interval);\n    }\n  }, {\n    key: \"ctx\",\n    get: function get() {\n      return this._ctx;\n    }\n    /* 获取弹幕存储器中弹幕个数 */\n\n  }, {\n    key: \"textRemaining\",\n    get: function get() {\n      return _textData__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textAll.length;\n    }\n    /* 获取当前画布中弹幕个数 */\n\n  }, {\n    key: \"textCurrent\",\n    get: function get() {\n      return this.textAll.length;\n    }\n  }], [{\n    key: \"getInstance\",\n    value: function getInstance(config) {\n      if (barrageController.instance === undefined) {\n        barrageController.instance = new barrageController(config);\n\n        if (barrageController.instance.configDone) {\n          /* 当验证 config通过后 */\n          barrageController.instance.barrageInit();\n        }\n\n        ;\n      }\n\n      ;\n      return barrageController.instance;\n    }\n  }]);\n\n  return barrageController;\n}();\n\nwindow.barrageController = barrageController; // if( document.getElementById('barrage') ){\n//     let barrage = barrageController.getInstance({\n//         canvas:document.getElementById('barrage'),\n//         fontSize: 20,\n//         fillStyle: '#000',\n//         step: 1\n//     });\n//     let timer = null;\n//     let timerFlat = false;\n//     document.getElementById('btn').addEventListener( 'click' , e => {\n//         if( timerFlat === false ){\n//             timerFlat = true;\n//             timer = setInterval( () => {\n//                 barrage.textInput( text.value );    \n//             } , 20);\n//         }else{\n//             timerFlat = false;\n//             clearInterval( timer );\n//         }\n//     });\n//     // barrageController.getInstance().textInput( '123' );\n//     document.getElementById('btn').click();\n// }\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lineController.js":
/*!*******************************!*\
  !*** ./src/lineController.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * @title [弹幕行控制器-控制每一行的开关]\n **/\nvar lineController =\n/*#__PURE__*/\nfunction () {\n  function lineController(height, fontSize, width) {\n    _classCallCheck(this, lineController);\n\n    /* 画布宽度 */\n    this.width = width;\n    /* 画布总行数 */\n\n    this.lineMax = parseInt(height / fontSize);\n    /* 弹幕Config集合 */\n\n    this.textConfigAll = new Array(this.lineMax).fill(true); // this.textConfigAll = new Array( 1 ).fill( true );\n\n    /* 弹幕入口集合 保存当前入口打开的行*/\n\n    this.lineAll = [];\n  }\n\n  _createClass(lineController, [{\n    key: \"createLine\",\n\n    /* 创建弹幕文字Y轴坐标 */\n    value: function createLine(textConfig) {\n      /**\n       * @param textConfig {Object} [弹幕文字配置项]\n       */\n      var index = parseInt(Math.random() * this.lineAll.length + 0);\n      var line = this.lineAll[index];\n      this.textConfigAll[line] = textConfig;\n      /* 下标index表示行 所以+1 */\n\n      return line + 1;\n    }\n  }, {\n    key: \"flagType\",\n    get: function get() {\n      var _this = this;\n\n      var flag = false;\n      this.lineAll = [];\n      /* 获取当前弹幕集合中 入口打开的行数 并另成集合 lineAll */\n\n      this.textConfigAll.forEach(function (item, index, self) {\n        /* 如果 item等于true 或者完全展示在画布上 */\n        if (item === true || item.x < _this.width - 5) {\n          flag = true;\n\n          _this.lineAll.push(index);\n        }\n      });\n      return flag;\n    }\n  }]);\n\n  return lineController;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (lineController);\n\n//# sourceURL=webpack:///./src/lineController.js?");

/***/ }),

/***/ "./src/textData.js":
/*!*************************!*\
  !*** ./src/textData.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/* 弹幕储存器 防止弹幕超载 储存多余弹幕*/\nvar textData =\n/*#__PURE__*/\nfunction () {\n  function textData() {\n    _classCallCheck(this, textData);\n\n    this.textAll = [];\n  }\n\n  _createClass(textData, [{\n    key: \"input\",\n    value: function input(textConfig) {\n      this.textAll.push(textConfig);\n    }\n  }, {\n    key: \"output\",\n    value: function output() {\n      return this.textAll.shift();\n    }\n  }]);\n\n  return textData;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new textData());\n\n//# sourceURL=webpack:///./src/textData.js?");

/***/ })

/******/ });