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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.jsx":
/*!**************************!*\
  !*** ./public/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar ProductDetails = function (_React$Component) {\n  _inherits(ProductDetails, _React$Component);\n\n  function ProductDetails(props) {\n    _classCallCheck(this, ProductDetails);\n\n    return _possibleConstructorReturn(this, (ProductDetails.__proto__ || Object.getPrototypeOf(ProductDetails)).call(this, props));\n  }\n\n  _createClass(ProductDetails, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        null,\n        'Product Details'\n      );\n    }\n  }]);\n\n  return ProductDetails;\n}(React.Component);\n\nReactDOM.render(React.createElement(ProductDetails, null), document.getElementById('product-details'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvaW5kZXguanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3B1YmxpYy9pbmRleC5qc3g/YmY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9kdWN0RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBQcm9kdWN0IERldGFpbHNcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxQcm9kdWN0RGV0YWlscyAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QtZGV0YWlscycpKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBOzs7O0FBWEE7QUFDQTtBQWFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/index.jsx\n");

/***/ })

/******/ });