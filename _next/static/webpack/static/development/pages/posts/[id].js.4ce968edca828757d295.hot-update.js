webpackHotUpdate("static/development/pages/posts/[id].js",{

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
/* harmony import */ var _constellation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constellation */ "./components/constellation.tsx");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.tsx");
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
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("link", {
    rel: "icon",
    href: "".concat("", "/favicon.ico"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: _config__WEBPACK_IMPORTED_MODULE_5__["siteTitle"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  })), __jsx("div", {
    "class": _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.PageContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("nav", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    key: "home",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "".concat("", "/images/menu-bar.png"),
    alt: "Home",
    className: "fullLogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  })))), _config__WEBPACK_IMPORTED_MODULE_5__["navBar"].map(function (_ref2) {
    var linkText = _ref2.linkText,
        pageId = _ref2.pageId;
    return __jsx("div", {
      key: pageId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "".concat("", "/posts/").concat(pageId),
      as: "".concat("", "/posts/").concat(pageId),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "navItem",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, linkText)));
  })), __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("main", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, children), pageId === "home" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_constellation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/zepto/1.0/zepto.min.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/stats.js/r11/Stats.js",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 15
    }
  }), __jsx("script", {
    src: "".concat("", "/constellation.js"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  })) : __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.backToHome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    as: "" + "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, "\u2190 Back to home")))), __jsx("footer", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footerContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "footer text"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/layout.module.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/layout.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "/* container  for entire page*/\n.layout_PageContainer__u6MZq {\n  min-height: 100vh; /* will cover the 100% of viewport */\n  overflow: hidden;\n  display: block;\n  position: relative;\n  padding-bottom: 100px; /* height of your footer */\n}\n\n.layout_container__2t4v2 {\n  max-width: 36rem;\n  padding: 0 1rem;\n  margin-right: auto;\n  margin-top: 3rem;\n  margin-left: auto;\n  z-index: 1;\n  position: relative;\n}\n\n#layout___next__tigCM {\n  min-height: 100vh !important;\n}\n\n.layout_header__2rhWq {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.layout_backToHome__1vZsp {\n  margin-top: 4rem;\n}\n\n.layout_footer__127N0 {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  bottom: 0;\n  position: absolute;\n  width: 80%;\n  box-sizing: border-box;\n}\n\n.layout_footerContent__2UwFd {\n  margin-top: 4rem;\n  padding: 1rem;\n}\n", "",{"version":3,"sources":["/home/sean/code/datascienceslugs.github.io/components/layout.module.css"],"names":[],"mappings":"AAAA,8BAA8B;AAC9B;EACE,iBAAiB,EAAE,oCAAoC;EACvD,gBAAgB;EAChB,cAAc;EACd,kBAAkB;EAClB,qBAAqB,EAAE,0BAA0B;AACnD;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf","file":"layout.module.css","sourcesContent":["/* container  for entire page*/\n.PageContainer {\n  min-height: 100vh; /* will cover the 100% of viewport */\n  overflow: hidden;\n  display: block;\n  position: relative;\n  padding-bottom: 100px; /* height of your footer */\n}\n\n.container {\n  max-width: 36rem;\n  padding: 0 1rem;\n  margin-right: auto;\n  margin-top: 3rem;\n  margin-left: auto;\n  z-index: 1;\n  position: relative;\n}\n\n#__next {\n  min-height: 100vh !important;\n}\n\n.header {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.backToHome {\n  margin-top: 4rem;\n}\n\n.footer {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  bottom: 0;\n  position: absolute;\n  width: 80%;\n  box-sizing: border-box;\n}\n\n.footerContent {\n  margin-top: 4rem;\n  padding: 1rem;\n}\n"]}]);
// Exports
exports.locals = {
	"PageContainer": "layout_PageContainer__u6MZq",
	"container": "layout_container__2t4v2",
	"__next": "layout___next__tigCM",
	"header": "layout_header__2rhWq",
	"backToHome": "layout_backToHome__1vZsp",
	"footer": "layout_footer__127N0",
	"footerContent": "layout_footerContent__2UwFd"
};

/***/ })

})
//# sourceMappingURL=[id].js.4ce968edca828757d295.hot-update.js.map