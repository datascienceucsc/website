webpackHotUpdate("static/development/pages/_error.js",{

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/layout.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/layout.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./layout.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/layout.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.tsx");
var _this = undefined,
    _jsxFileName = "/home/sean/code/datascienceslugs.github.io/components/layout.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Layout = function Layout(_ref) {
  var children = _ref.children,
      pageId = _ref.pageId;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat("", "/favicon.ico"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: _config__WEBPACK_IMPORTED_MODULE_4__["siteTitle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), "/* for constellations on the home page, keep this in layout so that it doesnt get diffed out */", __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("script", {
    src: "".concat("", "/constellation.js"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.PageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "".concat("", "/images/menu-bar.png"),
    alt: "Home",
    className: "fullLogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  })))), _config__WEBPACK_IMPORTED_MODULE_4__["navBar"].map(function (_ref2) {
    var linkText = _ref2.linkText,
        pageId = _ref2.pageId;
    return __jsx("div", {
      key: pageId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat("", "/posts/").concat(pageId),
      as: "".concat("", "/posts/").concat(pageId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "navItem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, linkText)));
  })), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, children), pageId !== "home" ? __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, "\u2190 Back to home"))) : __jsx("div", {
    className: "backToHome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  })), __jsx("footer", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "footerContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://github.com/datascienceslugs",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }, "Github")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.instagram.com/datascienceucsc/?igshid=1kwj608v894a5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, "Instagram")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "https://www.linkedin.com/company/datascienceucsc/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, "LinkedIn")), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "mailto:ucscdatascience@gmail.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, "Email Us!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./config.tsx":
/*!********************!*\
  !*** ./config.tsx ***!
  \********************/
/*! exports provided: name, siteTitle, navBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteTitle", function() { return siteTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBar", function() { return navBar; });
// defines configuration for the website
// name of site/title
var name = "DataScience";
var siteTitle = "Data Science @ SC";
// define pages linked in the header
// these ids correspond to the names of pages (without .md) in posts
// the Home link is added automatically at the beginning of this list
var navBar = [{
  linkText: "About",
  pageId: "about"
}, {
  linkText: "Resources",
  pageId: "resources"
}, {
  linkText: "What is data science?",
  pageId: "what_is_ds"
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/layout.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/layout.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/* container  for entire page*/\n.layout_PageContainer__u6MZq {\n  min-height: 100vh; /* will cover the 100% of viewport */\n  overflow: hidden;\n  display: block;\n  position: relative;\n  padding-bottom: 100px; /* height of your footer */\n}\n\n.layout_header__2rhWq {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n", "",{"version":3,"sources":["/home/sean/code/datascienceslugs.github.io/components/layout.module.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE,iBAAiB,EAAE,oCAAoC;EACvD,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,qBAAqB,EAAE,0BAA0B;AACnD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB","file":"layout.module.css","sourcesContent":["/* container  for entire page*/\n.PageContainer {\n  min-height: 100vh; /* will cover the 100% of viewport */\n  overflow: hidden;\n  display: block;\n  position: relative;\n  padding-bottom: 100px; /* height of your footer */\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n"]}]);
// Exports
exports.locals = {
	"PageContainer": "layout_PageContainer__u6MZq",
	"header": "layout_header__2rhWq"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/utils.module.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/utils.module.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".utils_heading2Xl__1I65m {\n  font-size: 2.5rem;\n  line-height: 1.2;\n  font-weight: 800;\n  letter-spacing: -0.05rem;\n  margin: 1rem 0;\n}\n\n.utils_headingXl__1XecN {\n  font-size: 2rem;\n  line-height: 1.3;\n  font-weight: 800;\n  letter-spacing: -0.05rem;\n  margin: 1rem 0;\n}\n\n.utils_headingLg__de7p0 {\n  font-size: 1.5rem;\n  line-height: 1.4;\n  margin: 1rem 0;\n}\n\n.utils_headingMd__3de6G {\n  font-size: 1.2rem;\n  line-height: 1.5;\n}\n\n.utils_borderCircle__13qdJ {\n  border-radius: 9999px;\n}\n\n.utils_colorInherit__3Gudf {\n  color: inherit;\n}\n\n.utils_padding1px__oCny8 {\n  padding-top: 1px;\n}\n\n.utils_list__S7_pe {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 3rem;\n}\n\n.utils_listItem__2eJpJ {\n  margin: 1.25rem;\n  margin-left: 10%;\n}\n\n.utils_lightText__12Ckm {\n  color: #666;\n}\n\n.utils_blogLink__1eFXD {\n  margin-right: 1.25rem;\n}\n\n.utils_error__Zj3JF {\n  font-size: 200%;\n}\n", "",{"version":3,"sources":["/home/sean/code/datascienceslugs.github.io/styles/utils.module.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,wBAAwB;EACxB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB","file":"utils.module.css","sourcesContent":[".heading2Xl {\n  font-size: 2.5rem;\n  line-height: 1.2;\n  font-weight: 800;\n  letter-spacing: -0.05rem;\n  margin: 1rem 0;\n}\n\n.headingXl {\n  font-size: 2rem;\n  line-height: 1.3;\n  font-weight: 800;\n  letter-spacing: -0.05rem;\n  margin: 1rem 0;\n}\n\n.headingLg {\n  font-size: 1.5rem;\n  line-height: 1.4;\n  margin: 1rem 0;\n}\n\n.headingMd {\n  font-size: 1.2rem;\n  line-height: 1.5;\n}\n\n.borderCircle {\n  border-radius: 9999px;\n}\n\n.colorInherit {\n  color: inherit;\n}\n\n.padding1px {\n  padding-top: 1px;\n}\n\n.list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  margin-top: 3rem;\n}\n\n.listItem {\n  margin: 1.25rem;\n  margin-left: 10%;\n}\n\n.lightText {\n  color: #666;\n}\n\n.blogLink {\n  margin-right: 1.25rem;\n}\n\n.error {\n  font-size: 200%;\n}\n"]}]);
// Exports
exports.locals = {
	"heading2Xl": "utils_heading2Xl__1I65m",
	"headingXl": "utils_headingXl__1XecN",
	"headingLg": "utils_headingLg__de7p0",
	"headingMd": "utils_headingMd__3de6G",
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm",
	"blogLink": "utils_blogLink__1eFXD",
	"error": "utils_error__Zj3JF"
};

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/http-status/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/http-status/lib/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated by CoffeeScript 2.3.0
// # node-http-status

// **Reference:**  

// - https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// - https://tools.ietf.org/html/rfc2324#section-2.3.2

// ## Classes

// The first digit of the status-code defines the class of response. The last two digits do not have any categorization role. There are five values for the first digit:
var classes;

classes = {
  // 1xx - The 1xx (Informational) class of status code indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.
  '1xx': 'Informational',
  '1xx_NAME': 'INFORMATIONAL',
  '1xx_MESSAGE': 'Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.',
  INFORMATIONAL: '1xx',
  // 2xx - The 2xx (Successful) class of status code indicates that the client's request was successfully received, understood, and accepted.
  '2xx': 'Successful',
  '2xx_NAME': 'SUCCESSFUL',
  '2xx_MESSAGE': 'Indicates that the client\'s request was successfully received, understood, and accepted.',
  SUCCESSFUL: '2xx',
  // 3xx - The 3xx (Redirection) class of status code indicates that further action needs to be taken by the user agent in order to fulfill the request.
  '3xx': 'Redirection',
  '3xx_NAME': 'REDIRECTION',
  '3xx_MESSAGE': 'Indicates that further action needs to be taken by the user agent in order to fulfill the request.',
  REDIRECTION: '3xx',
  // 4xx - The 4xx (Client Error) class of status code indicates that the client seems to have erred.
  '4xx': 'Client Error',
  '4xx_NAME': 'CLIENT_ERROR',
  '4xx_MESSAGE': 'Indicates that the client seems to have erred.',
  CLIENT_ERROR: '4xx',
  // 5xx - The 5xx (Server Error) class of status code indicates that the server is aware that it has erred or is incapable of performing the requested method.
  '5xx': 'Server Error',
  '5xx_NAME': 'SERVER_ERROR',
  '5xx_MESSAGE': 'Indicates that the server is aware that it has erred or is incapable of performing the requested method.',
  SERVER_ERROR: '5xx'
};

module.exports = {
  classes: classes,
  // ## Informational 1xx

  // Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.

  // 100 - The server has received the request headers and the client should proceed to send the request body.
  100: 'Continue',
  '100_NAME': 'CONTINUE',
  '100_MESSAGE': 'The server has received the request headers and the client should proceed to send the request body.',
  '100_CLASS': classes.INFORMATIONAL,
  CONTINUE: 100,
  // 101 - The requester has asked the server to switch protocols and the server has agreed to do so.
  101: 'Switching Protocols',
  '101_NAME': 'SWITCHING_PROTOCOLS',
  '101_MESSAGE': 'The requester has asked the server to switch protocols and the server has agreed to do so.',
  '101_CLASS': classes.INFORMATIONAL,
  SWITCHING_PROTOCOLS: 101,
  // 102 Processing (WebDAV; RFC 2518) - A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.
  102: 'Processing',
  '102_NAME': 'PROCESSING',
  '102_MESSAGE': 'A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.',
  '102_CLASS': classes.INFORMATIONAL,
  PROCESSING: 102,
  // 103 Early Hints (RFC 8297) - Used to return some response headers before final HTTP message.
  103: 'Early Hints',
  '103_NAME': 'EARLY_HINTS',
  '103_MESSAGE': 'Used to return some response headers before final HTTP message.',
  '103_CLASS': classes.INFORMATIONAL,
  EARLY_HINTS: 103,
  // ## Successful 2xx

  // Indicates that the client's request was successfully received, understood, and accepted.

  // 200 - Standard response for successful HTTP requests.
  200: 'OK',
  '200_NAME': 'OK',
  '200_MESSAGE': 'Standard response for successful HTTP requests.',
  '200_CLASS': classes.SUCCESSFUL,
  OK: 200,
  // 201 - The request has been fulfilled, resulting in the creation of a new resource.
  201: 'Created',
  '201_NAME': 'CREATED',
  '201_MESSAGE': 'The request has been fulfilled, resulting in the creation of a new resource.',
  '201_CLASS': classes.SUCCESSFUL,
  CREATED: 201,
  // 202 - The request has been accepted for processing, but the processing has not been completed.
  202: 'Accepted',
  '202_NAME': 'ACCEPTED',
  '202_MESSAGE': 'The request has been accepted for processing, but the processing has not been completed.',
  '202_CLASS': classes.SUCCESSFUL,
  ACCEPTED: 202,
  // 203 (since HTTP/1.1) - The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
  203: 'Non-Authoritative Information',
  '203_NAME': 'NON_AUTHORITATIVE_INFORMATION',
  '203_MESSAGE': 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.',
  '203_CLASS': classes.SUCCESSFUL,
  NON_AUTHORITATIVE_INFORMATION: 203,
  // 204 - The server successfully processed the request and is not returning any content.
  204: 'No Content',
  '204_NAME': 'NO_CONTENT',
  '204_MESSAGE': 'The server successfully processed the request and is not returning any content.',
  '204_CLASS': classes.SUCCESSFUL,
  NO_CONTENT: 204,
  // 205 - The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
  205: 'Reset Content',
  '205_NAME': 'RESET_CONTENT',
  '205_MESSAGE': 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.',
  '205_CLASS': classes.SUCCESSFUL,
  RESET_CONTENT: 205,
  // 206 (RFC 7233) - The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
  206: 'Partial Content',
  '206_NAME': 'PARTIAL_CONTENT',
  '206_MESSAGE': 'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.',
  '206_CLASS': classes.SUCCESSFUL,
  PARTIAL_CONTENT: 206,
  // 207 (WebDAV; RFC 4918) - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
  207: 'Multi Status',
  '207_NAME': 'MULTI_STATUS',
  '207_MESSAGE': 'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  '207_CLASS': classes.SUCCESSFUL,
  MULTI_STATUS: 207,
  // 208 (WebDAV; RFC 5842) - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
  208: 'Already Reported',
  '208_NAME': 'ALREADY_REPORTED',
  '208_MESSAGE': 'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  '208_CLASS': classes.SUCCESSFUL,
  ALREADY_REPORTED: 208,
  // 226 (RFC 3229) - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
  226: 'IM Used',
  '226_NAME': 'IM_USED',
  '226_MESSAGE': 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  '226_CLASS': classes.SUCCESSFUL,
  IM_USED: 226,
  // ## Redirection 3xx

  // Indicates that further action needs to be taken by the user agent in order to fulfill the request.

  // 300 - Indicates multiple options for the resource from which the client may choose.
  300: 'Multiple Choices',
  '300_NAME': 'MULTIPLE_CHOICES',
  '300_MESSAGE': 'Indicates multiple options for the resource from which the client may choose.',
  '300_CLASS': classes.REDIRECTION,
  MULTIPLE_CHOICES: 300,
  // 301 - This and all future requests should be directed to the given URI.
  301: 'Moved Permanently',
  '301_NAME': 'MOVED_PERMANENTLY',
  '301_MESSAGE': 'This and all future requests should be directed to the given URI.',
  '301_CLASS': classes.REDIRECTION,
  MOVED_PERMANENTLY: 301,
  // 302 - This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
  302: 'Found',
  '302_NAME': 'FOUND',
  '302_MESSAGE': 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
  '302_CLASS': classes.REDIRECTION,
  FOUND: 302,
  // 303 (since HTTP/1.1) - The response to the request can be found under another URI using the GET method.
  303: 'See Other',
  '303_NAME': 'SEE_OTHER',
  '303_MESSAGE': 'The response to the request can be found under another URI using the GET method.',
  '303_CLASS': classes.REDIRECTION,
  SEE_OTHER: 303,
  // 304 (RFC 7232) - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
  304: 'Not Modified',
  '304_NAME': 'NOT_MODIFIED',
  '304_MESSAGE': 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.',
  '304_CLASS': classes.REDIRECTION,
  NOT_MODIFIED: 304,
  // 305 (since HTTP/1.1) - The requested resource is available only through a proxy, the address for which is provided in the response.
  305: 'Use Proxy',
  '305_NAME': 'USE_PROXY',
  '305_MESSAGE': 'The requested resource is available only through a proxy, the address for which is provided in the response.',
  '305_CLASS': classes.REDIRECTION,
  USE_PROXY: 305,
  // 306 - No longer used. Originally meant "Subsequent requests should use the specified proxy.
  306: 'Switch Proxy',
  '306_NAME': 'SWITCH_PROXY',
  '306_MESSAGE': 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
  '306_CLASS': classes.REDIRECTION,
  SWITCH_PROXY: 306,
  // 307 (since HTTP/1.1) - In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
  307: 'Temporary Redirect',
  '307_NAME': 'TEMPORARY_REDIRECT',
  '307_MESSAGE': 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI.',
  '307_CLASS': classes.REDIRECTION,
  TEMPORARY_REDIRECT: 307,
  // 308 (RFC 7538) - The request and all future requests should be repeated using another URI.
  308: 'Permanent Redirect',
  '308_NAME': 'PERMANENT_REDIRECT',
  '308_MESSAGE': 'The request and all future requests should be repeated using another URI.',
  '308_CLASS': classes.REDIRECTION,
  PERMANENT_REDIRECT: 308,
  // ## Client Error 4xx

  // Indicates that the client seems to have erred.

  // 400 - The server cannot or will not process the request due to an apparent client error.
  400: 'Bad Request',
  '400_NAME': 'BAD_REQUEST',
  '400_MESSAGE': 'The server cannot or will not process the request due to an apparent client error.',
  '400_CLASS': classes.CLIENT_ERROR,
  BAD_REQUEST: 400,
  // 401 (RFC 7235) - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
  401: 'Unauthorized',
  '401_NAME': 'UNAUTHORIZED',
  '401_MESSAGE': 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.',
  '401_CLASS': classes.CLIENT_ERROR,
  UNAUTHORIZED: 401,
  // 402 - Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.
  402: 'Payment Required',
  '402_NAME': 'PAYMENT_REQUIRED',
  '402_MESSAGE': 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.',
  '402_CLASS': classes.CLIENT_ERROR,
  PAYMENT_REQUIRED: 402,
  // 403 - The request was valid, but the server is refusing action.
  403: 'Forbidden',
  '403_NAME': 'FORBIDDEN',
  '403_MESSAGE': 'The request was valid, but the server is refusing action.',
  '403_CLASS': classes.CLIENT_ERROR,
  FORBIDDEN: 403,
  // 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
  404: 'Not Found',
  '404_NAME': 'NOT_FOUND',
  '404_MESSAGE': 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
  '404_CLASS': classes.CLIENT_ERROR,
  NOT_FOUND: 404,
  // 405 - A request method is not supported for the requested resource.
  405: 'Method Not Allowed',
  '405_NAME': 'METHOD_NOT_ALLOWED',
  '405_MESSAGE': 'A request method is not supported for the requested resource.',
  '405_CLASS': classes.CLIENT_ERROR,
  METHOD_NOT_ALLOWED: 405,
  // 406 - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
  406: 'Not Acceptable',
  '406_NAME': 'NOT_ACCEPTABLE',
  '406_MESSAGE': 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
  '406_CLASS': classes.CLIENT_ERROR,
  NOT_ACCEPTABLE: 406,
  // 407 (RFC 7235) - The client must first authenticate itself with the proxy.
  407: 'Proxy Authentication Required',
  '407_NAME': 'PROXY_AUTHENTICATION_REQUIRED',
  '407_MESSAGE': 'The client must first authenticate itself with the proxy.',
  '407_CLASS': classes.CLIENT_ERROR,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  // 408 - The server timed out waiting for the request.
  408: 'Request Time-out',
  '408_NAME': 'REQUEST_TIMEOUT',
  '408_MESSAGE': 'The server timed out waiting for the request.',
  '408_CLASS': classes.CLIENT_ERROR,
  REQUEST_TIMEOUT: 408,
  // 409 - Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
  409: 'Conflict',
  '409_NAME': 'CONFLICT',
  '409_MESSAGE': 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.',
  '409_CLASS': classes.CLIENT_ERROR,
  CONFLICT: 409,
  // 410 - Indicates that the resource requested is no longer available and will not be available again.
  410: 'Gone',
  '410_NAME': 'GONE',
  '410_MESSAGE': 'Indicates that the resource requested is no longer available and will not be available again.',
  '410_CLASS': classes.CLIENT_ERROR,
  GONE: 410,
  // 411 - The request did not specify the length of its content, which is required by the requested resource.
  411: 'Length Required',
  '411_NAME': 'LENGTH_REQUIRED',
  '411_MESSAGE': 'The request did not specify the length of its content, which is required by the requested resource.',
  '411_CLASS': classes.CLIENT_ERROR,
  LENGTH_REQUIRED: 411,
  // 412 (RFC 7232) - The server does not meet one of the preconditions that the requester put on the request.
  412: 'Precondition Failed',
  '412_NAME': 'PRECONDITION_FAILED',
  '412_MESSAGE': 'The server does not meet one of the preconditions that the requester put on the request.',
  '412_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_FAILED: 412,
  // 413 (RFC 7231) - The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
  413: 'Request Entity Too Large',
  '413_NAME': 'REQUEST_ENTITY_TOO_LARGE',
  '413_MESSAGE': 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
  '413_CLASS': classes.CLIENT_ERROR,
  REQUEST_ENTITY_TOO_LARGE: 413,
  // 414 (RFC 7231) - The URI provided was too long for the server to process.
  414: 'Request-URI Too Large',
  '414_NAME': 'REQUEST_URI_TOO_LONG',
  '414_MESSAGE': 'The URI provided was too long for the server to process.',
  '414_CLASS': classes.CLIENT_ERROR,
  REQUEST_URI_TOO_LONG: 414,
  // 415 - The request entity has a media type which the server or resource does not support.
  415: 'Unsupported Media Type',
  '415_NAME': 'UNSUPPORTED_MEDIA_TYPE',
  '415_MESSAGE': 'The request entity has a media type which the server or resource does not support.',
  '415_CLASS': classes.CLIENT_ERROR,
  UNSUPPORTED_MEDIA_TYPE: 415,
  // 416 (RFC 7233) - The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
  416: 'Requested Range not Satisfiable',
  '416_NAME': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '416_MESSAGE': 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
  '416_CLASS': classes.CLIENT_ERROR,
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  // 417 - The server cannot meet the requirements of the Expect request-header field.
  417: 'Expectation Failed',
  '417_NAME': 'EXPECTATION_FAILED',
  '417_MESSAGE': 'The server cannot meet the requirements of the Expect request-header field.',
  '417_CLASS': classes.CLIENT_ERROR,
  EXPECTATION_FAILED: 417,
  // 418 (RFC 2324, RFC 7168) - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
  418: 'I\'m a teapot',
  '418_NAME': 'IM_A_TEAPOT',
  '418_MESSAGE': 'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
  '418_CLASS': classes.CLIENT_ERROR,
  IM_A_TEAPOT: 418,
  // 421 (RFC 7540) - The request was directed at a server that is not able to produce a response.
  421: 'Misdirected Request',
  '421_NAME': 'MISDIRECTED_REQUEST',
  '421_MESSAGE': 'The request was directed at a server that is not able to produce a response.',
  '421_CLASS': classes.CLIENT_ERROR,
  MISDIRECTED_REQUEST: 421,
  // 422 (WebDAV; RFC 4918) - The request was well-formed but was unable to be followed due to semantic errors.
  422: 'Unprocessable Entity',
  '422_NAME': 'UNPROCESSABLE_ENTITY',
  '422_MESSAGE': 'The request was well-formed but was unable to be followed due to semantic errors.',
  '422_CLASS': classes.CLIENT_ERROR,
  UNPROCESSABLE_ENTITY: 422,
  // 423 (WebDAV; RFC 4918) - The resource that is being accessed is locked.
  423: 'Locked',
  '423_NAME': 'LOCKED',
  '423_MESSAGE': 'The resource that is being accessed is locked.',
  '423_CLASS': classes.CLIENT_ERROR,
  LOCKED: 423,
  // 424 (WebDAV; RFC 4918) - The request failed because it depended on another request and that request failed.
  424: 'Failed Dependency',
  '424_NAME': 'FAILED_DEPENDENCY',
  '424_MESSAGE': 'The request failed because it depended on another request and that request failed.',
  '424_CLASS': classes.CLIENT_ERROR,
  FAILED_DEPENDENCY: 424,
  // 426 - The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
  426: 'Upgrade Required',
  '426_NAME': 'UPGRADE_REQUIRED',
  '426_MESSAGE': 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
  '426_CLASS': classes.CLIENT_ERROR,
  UPGRADE_REQUIRED: 426,
  // 428 (RFC 6585) - The origin server requires the request to be conditional.
  428: 'Precondition Required', // RFC 6585
  '428_NAME': 'PRECONDITION_REQUIRED',
  '428_MESSAGE': 'The origin server requires the request to be conditional.',
  '428_CLASS': classes.CLIENT_ERROR,
  PRECONDITION_REQUIRED: 428,
  // 429 (RFC 6585) - The user has sent too many requests in a given amount of time.
  429: 'Too Many Requests',
  '429_NAME': 'TOO_MANY_REQUESTS',
  '429_MESSAGE': 'The user has sent too many requests in a given amount of time.',
  '429_CLASS': classes.CLIENT_ERROR,
  TOO_MANY_REQUESTS: 429,
  // 431 (RFC 6585) - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
  431: 'Request Header Fields Too Large', // RFC 6585
  '431_NAME': 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  '431_MESSAGE': 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
  '431_CLASS': classes.CLIENT_ERROR,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  // 451 (RFC 7725) - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
  451: 'Unavailable For Legal Reasons',
  '451_NAME': 'UNAVAILABLE_FOR_LEGAL_REASONS',
  '451_MESSAGE': 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
  '451_CLASS': classes.CLIENT_ERROR,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  // ## Server Error 5xx

  // Indicates that the server is aware that it has erred or is incapable of performing the requested method.

  // 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  500: 'Internal Server Error',
  '500_NAME': 'INTERNAL_SERVER_ERROR',
  '500_MESSAGE': 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
  '500_CLASS': classes.SERVER_ERROR,
  INTERNAL_SERVER_ERROR: 500,
  // 501 - The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.
  501: 'Not Implemented',
  '501_NAME': 'NOT_IMPLEMENTED',
  '501_MESSAGE': 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.',
  '501_CLASS': classes.SERVER_ERROR,
  NOT_IMPLEMENTED: 501,
  // 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  502: 'Bad Gateway',
  '502_NAME': 'BAD_GATEWAY',
  '502_MESSAGE': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
  '502_CLASS': classes.SERVER_ERROR,
  BAD_GATEWAY: 502,
  // 503 - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
  503: 'Service Unavailable',
  '503_NAME': 'SERVICE_UNAVAILABLE',
  '503_MESSAGE': 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.',
  '503_CLASS': classes.SERVER_ERROR,
  SERVICE_UNAVAILABLE: 503,
  // 504 - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  504: 'Gateway Time-out',
  '504_NAME': 'GATEWAY_TIMEOUT',
  '504_MESSAGE': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
  '504_CLASS': classes.SERVER_ERROR,
  GATEWAY_TIMEOUT: 504,
  // 505 - The server does not support the HTTP protocol version used in the request.
  505: 'HTTP Version not Supported',
  '505_NAME': 'HTTP_VERSION_NOT_SUPPORTED',
  '505_MESSAGE': 'The server does not support the HTTP protocol version used in the request.',
  '505_CLASS': classes.SERVER_ERROR,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  // 506 (RFC 2295) - Transparent content negotiation for the request results in a circular reference.
  506: 'Variant Also Negotiates',
  '506_NAME': 'VARIANT_ALSO_NEGOTIATES',
  '506_MESSAGE': 'Transparent content negotiation for the request results in a circular reference.',
  '506_CLASS': classes.SERVER_ERROR,
  VARIANT_ALSO_NEGOTIATES: 506,
  // 507 (WebDAV; RFC 4918) - The server is unable to store the representation needed to complete the request.
  507: 'Insufficient Storage',
  '507_NAME': 'INSUFFICIENT_STORAGE',
  '507_MESSAGE': 'The server is unable to store the representation needed to complete the request.',
  '507_CLASS': classes.SERVER_ERROR,
  INSUFFICIENT_STORAGE: 507,
  // 508 (WebDAV; RFC 5842) - The server detected an infinite loop while processing the request.
  508: 'Loop Detected',
  '508_NAME': 'LOOP_DETECTED',
  '508_MESSAGE': 'The server detected an infinite loop while processing the request.',
  '508_CLASS': classes.SERVER_ERROR,
  LOOP_DETECTED: 508,
  // 510 (RFC 2774) - Further extensions to the request are required for the server to fulfil it.
  510: 'Not Extended',
  '510_NAME': 'NOT_EXTENDED',
  '510_MESSAGE': 'Further extensions to the request are required for the server to fulfil it.',
  '510_CLASS': classes.SERVER_ERROR,
  NOT_EXTENDED: 510,
  // 511 (RFC 6585) - The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.
  511: 'Network Authentication Required',
  '511_NAME': 'NETWORK_AUTHENTICATION_REQUIRED',
  '511_MESSAGE': 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.',
  '511_CLASS': classes.SERVER_ERROR,
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  // ## Extra code

  // Extra HTTP code implemented by vendors and other specifications.
  extra: {
    // ### Unofficial codes

    // The following codes are not specified by any standard.
    unofficial: {
      // 103 - Used in the resumable requests proposal to resume aborted PUT or POST requests.
      103: 'Checkpoint',
      '103_NAME': 'CHECKPOINT',
      '103_MESSAGE': 'Used in the resumable requests proposal to resume aborted PUT or POST requests.',
      '103_CLASS': classes.INFORMATIONAL,
      CHECKPOINT: 103,
      // 419 Page Expired (Laravel Framework) - Used by the Laravel Framework when a CSRF Token is missing or expired.
      419: 'Page Expired',
      '419_NAME': 'PAGE_EXPIRED',
      '419_MESSAGE': 'Used by the Laravel Framework when a CSRF Token is missing or expired.',
      '419_CLASS': classes.CLIENT_ERROR,
      PAGE_EXPIRED: 419,
      // 218 This is fine (Apache Web Server) - Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.
      218: 'This is fine',
      '218_NAME': 'THIS_IS_FINE',
      '218_MESSAGE': 'Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.',
      '218_CLASS': classes.SUCCESSFUL,
      THIS_IS_FINE: 218,
      // 420 Enhance Your Calm (Twitter) - Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.
      420: 'Enhance Your Calm',
      '420_NAME': 'ENHANCE_YOUR_CALM',
      '420_MESSAGE': 'Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.',
      '420_CLASS': classes.CLIENT_ERROR,
      ENHANCE_YOUR_CALM: 420,
      // 450 Blocked by Windows Parental (Microsoft) - The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.
      450: 'Blocked by Windows Parental Controls',
      '450_NAME': 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS',
      '450_MESSAGE': 'The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.',
      '450_CLASS': classes.CLIENT_ERROR,
      BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
      // 498 Invalid Token (Esri) - Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.
      498: 'Invalid Token',
      '498_NAME': 'INVALID_TOKEN',
      '498_MESSAGE': 'Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.',
      '498_CLASS': classes.CLIENT_ERROR,
      INVALID_TOKEN: 498,
      // 499 Token Required (Esri) - Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.
      499: 'Token Required',
      '499_NAME': 'TOKEN_REQUIRED',
      '499_MESSAGE': 'Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.',
      '499_CLASS': classes.CLIENT_ERROR,
      TOKEN_REQUIRED: 499,
      // 509 Bandwidth Limit Exceeded (Apache Web Server/cPanel) - The server has exceeded the bandwidth specified by the server administrator.
      509: 'Bandwidth Limit Exceeded',
      '509_NAME': 'BANDWIDTH_LIMIT_EXCEEDED',
      '509_MESSAGE': 'The server has exceeded the bandwidth specified by the server administrator.',
      '509_CLASS': classes.SERVER_ERROR,
      BANDWIDTH_LIMIT_EXCEEDED: 509,
      // 530 Site is frozen - Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.
      530: 'Site is frozen',
      '530_NAME': 'SITE_IS_FROZEN',
      '530_MESSAGE': 'Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.',
      '530_CLASS': classes.SERVER_ERROR,
      SITE_IS_FROZEN: 530,
      // 598 (Informal convention) Network read timeout error - Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.
      598: 'Network read timeout error',
      '598_NAME': 'NETWORK_READ_TIMEOUT_ERROR',
      '598_MESSAGE': 'Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
      '598_CLASS': classes.SERVER_ERROR,
      NETWORK_READ_TIMEOUT_ERROR: 598
    },
    // ### Internet Information Services (IIS)

    // Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.
    iis: {
      // 440 - The client's session has expired and must log in again.
      440: 'Login Time-out',
      '440_NAME': 'LOGIN_TIME_OUT',
      '440_MESSAGE': 'The client\'s session has expired and must log in again.',
      '440_CLASS': classes.CLIENT_ERROR,
      LOGIN_TIME_OUT: 440,
      // 449 - The server cannot honour the request because the user has not provided the required information.
      449: 'Retry With',
      '449_NAME': 'RETRY_WITH',
      '449_MESSAGE': 'The server cannot honour the request because the user has not provided the required information.',
      '449_CLASS': classes.CLIENT_ERROR,
      RETRY_WITH: 449,
      // 451 - Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.
      451: 'Redirect',
      '451_NAME': 'REDIRECT',
      '451_MESSAGE': 'Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users\' mailbox.',
      '451_CLASS': classes.CLIENT_ERROR,
      REDIRECT: 451
    },
    // ### NGINX

    // The NGINX web server software expands the 4xx error space to signal issues with the client's request.
    nginx: {
      // 444 - Used internally to instruct the server to return no information to the client and close the connection immediately.
      444: 'No Response',
      '444_NAME': 'NO_RESPONSE',
      '444_MESSAGE': 'Used internally to instruct the server to return no information to the client and close the connection immediately.',
      '444_CLASS': classes.CLIENT_ERROR,
      NO_RESPONSE: 444,
      // 494 - Client sent too large request or too long header line.
      494: 'Request header too large',
      '494_NAME': 'REQUEST_HEADER_TOO_LARGE',
      '494_MESSAGE': 'Client sent too large request or too long header line.',
      '494_CLASS': classes.CLIENT_ERROR,
      REQUEST_HEADER_TOO_LARGE: 494,
      // 495 - An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.
      495: 'SSL Certificate Error',
      '495_NAME': 'SSL_CERTIFICATE_ERROR',
      '495_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.',
      '495_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_ERROR: 495,
      // 496 - An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.
      496: 'SSL Certificate Required',
      '496_NAME': 'SSL_CERTIFICATE_REQUIRED',
      '496_MESSAGE': 'An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.',
      '496_CLASS': classes.CLIENT_ERROR,
      SSL_CERTIFICATE_REQUIRED: 496,
      // 497 - An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.
      497: 'HTTP Request Sent to HTTPS Port',
      '497_NAME': 'HTTP_REQUEST_SENT_TO_HTTPS_PORT',
      '497_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.',
      '497_CLASS': classes.CLIENT_ERROR,
      HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
      // 499 - Used when the client has closed the request before the server could send a response.
      499: 'Client Closed Request',
      '499_NAME': 'CLIENT_CLOSED_REQUEST',
      '499_MESSAGE': 'Used when the client has closed the request before the server could send a response.',
      '499_CLASS': classes.CLIENT_ERROR,
      CLIENT_CLOSED_REQUEST: 499
    },
    // ### Cloudflare

    // Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.
    cloudflare: {
      // 520 - The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.
      520: 'Unknown Error',
      '520_NAME': 'UNKNOWN_ERROR',
      '520_MESSAGE': 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
      '520_CLASS': classes.SERVER_ERROR,
      UNKNOWN_ERROR: 520,
      // 521 - The origin server has refused the connection from Cloudflare.
      521: 'Web Server Is Down',
      '521_NAME': 'WEB_SERVER_IS_DOWN',
      '521_MESSAGE': 'The origin server has refused the connection from Cloudflare.',
      '521_CLASS': classes.SERVER_ERROR,
      WEB_SERVER_IS_DOWN: 521,
      // 522 - Cloudflare could not negotiate a TCP handshake with the origin server.
      522: 'Connection Timed Out',
      '522_NAME': 'CONNECTION_TIMED_OUT',
      '522_MESSAGE': 'Cloudflare could not negotiate a TCP handshake with the origin server.',
      '522_CLASS': classes.SERVER_ERROR,
      CONNECTION_TIMED_OUT: 522,
      // 523 - Cloudflare could not reach the origin server.
      523: 'Origin Is Unreachable',
      '523_NAME': 'ORIGIN_IS_UNREACHABLE',
      '523_MESSAGE': 'Cloudflare could not reach the origin server.',
      '523_CLASS': classes.SERVER_ERROR,
      ORIGIN_IS_UNREACHABLE: 523,
      // 524 - Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.
      524: 'A Timeout Occurred',
      '524_NAME': 'A_TIMEOUT_OCCURRED',
      '524_MESSAGE': 'Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.',
      '524_CLASS': classes.SERVER_ERROR,
      A_TIMEOUT_OCCURRED: 524,
      // 525 - Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
      525: 'SSL Handshake Failed',
      '525_NAME': 'SSL_HANDSHAKE_FAILED',
      '525_MESSAGE': 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
      '525_CLASS': classes.SERVER_ERROR,
      SSL_HANDSHAKE_FAILED: 525,
      // 526 - Cloudflare could not validate the SSL/TLS certificate that the origin server presented.
      526: 'Invalid SSL Certificate',
      '526_NAME': 'INVALID_SSL_CERTIFICATE',
      '526_MESSAGE': 'Cloudflare could not validate the SSL/TLS certificate that the origin server presented.',
      '526_CLASS': classes.SERVER_ERROR,
      INVALID_SSL_CERTIFICATE: 526,
      // 527 - Error 527 indicates that the request timed out or failed after the WAN connection had been established.
      527: 'Railgun Error',
      '527_NAME': 'RAILGUN_ERROR',
      '527_MESSAGE': 'Error 527 indicates that the request timed out or failed after the WAN connection had been established.',
      '527_CLASS': classes.SERVER_ERROR,
      RAILGUN_ERROR: 527
    }
  }
};


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fsean%2Fcode%2Fdatascienceslugs.github.io%2Fpages%2F_error.tsx!./":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fsean%2Fcode%2Fdatascienceslugs.github.io%2Fpages%2F_error.tsx ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_error", function() {
      var mod = __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/_error.tsx */ "./pages/_error.tsx", function() {
          if(!next.router.components["/_error"]) return
          var updatedPage = __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx")
          next.router.update("/_error", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http-status */ "./node_modules/http-status/lib/index.js");
/* harmony import */ var http_status__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http_status__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.tsx");
var _jsxFileName = "/home/sean/code/datascienceslugs.github.io/pages/_error.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageId: statusCode ? statusCode.toString() : "Error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, _config__WEBPACK_IMPORTED_MODULE_5__["siteTitle"], " - ", statusCode)), __jsx("div", {
    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.error,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, statusCode ? "Error | ".concat(statusCode, " - ").concat(http_status__WEBPACK_IMPORTED_MODULE_2___default.a[statusCode]) : "Error | ClientError; check the console or reload the page."))));
}

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./utils.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/utils.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./utils.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/utils.module.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./utils.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/utils.module.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fsean%2Fcode%2Fdatascienceslugs.github.io%2Fpages%2F_error.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=%2Fhome%2Fsean%2Fcode%2Fdatascienceslugs.github.io%2Fpages%2F_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=%2Fhome%2Fsean%2Fcode%2Fdatascienceslugs.github.io%2Fpages%2F_error.tsx!./");


/***/ })

})
//# sourceMappingURL=_error.js.beefdab33a597ce577bb.hot-update.js.map