"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nvar Member = function Member() {\n    \"use strict\";\n    _classCallCheck(this, Member);\n    console.log(\"ctor \\xe7alıştı\");\n    this.name = \"Name\";\n    this.surname = \"Surname\";\n    this.birthday = new Date();\n    this.gender = true;\n    this.age = 99;\n};\nfunction Home() {\n    var sendMessage = function sendMessage(id, name, features) {\n        console.log(\"\".concat(id, \" numaralı \").concat(name, \" \\xf6zellikleri \").concat(features.age, \" \").concat(features.city));\n    };\n    var getMember = function getMember() {\n        var member = new Member();\n        member.name = \"D\\xfczg\\xfcn Emre\";\n        member.surname = \"\\xd6zkan\";\n        member.birthday = new Date();\n        member.gender = false;\n        member.age = 32;\n        return member;\n    };\n    var User = {\n        firstName: \"Angela\",\n        lastName: \"Davis\",\n        role: \"Professor\"\n    };\n    console.log(User.firstName);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                        children: [\n                            \"Merhaba \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    sendMessage(1, \"Emre\", {\n                        age: 32,\n                        city: \"İstanbul\"\n                    }),\n                    console.log(getMember())\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/Example/project/pages/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEI7QUFFa0I7Ozs7OztJQUV4Q0UsTUFBTSxZQUFOQSxNQUFNOzs7SUFRUkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYztJQUV0QixLQUFDQyxJQUFJLEdBQUcsQ0FBTTtJQUNsQixJQUFJLENBQUNDLE9BQU8sR0FBRyxDQUFTO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ0MsSUFBSTtJQUN4QixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJO0lBQ2xCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLEVBQUU7O0FBS0YsUUFBUSxDQUFDQyxJQUFJLEdBQUcsQ0FBQztRQWdCckJDLFdBQVcsR0FBcEIsUUFBUSxDQUFDQSxXQUFXLENBQUNDLEVBQVUsRUFBRVIsSUFBWSxFQUFFUyxRQUFrQixFQUFFLENBQUM7UUFDbEVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFFLEdBQWlCQyxNQUFLLENBQXBCUSxFQUFFLEVBQUMsQ0FBVyxjQUFzQkMsTUFBYSxDQUFqQ1QsSUFBSSxFQUFDLENBQWMsbUJBQWtCUyxNQUFhLENBQTdCQSxRQUFRLENBQUNKLEdBQUcsRUFBQyxDQUFDLElBQWdCLE9BQWRJLFFBQVEsQ0FBQ0MsSUFBSTtJQUNqRixDQUFEO1FBRVFDLFNBQVMsR0FBbEIsUUFBUSxDQUFDQSxTQUFTLEdBQVcsQ0FBQztRQUM1QixHQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUNmLE1BQU07UUFDekJlLE1BQU0sQ0FBQ1osSUFBSSxHQUFHLENBQWE7UUFDekJZLE1BQUksQ0FBQ1gsT0FBTyxHQUFHLENBQU87UUFDdkJXLE1BQUssQ0FBQ1YsUUFBUSxHQUFHLEdBQUcsQ0FBQ0MsSUFBSTtRQUMxQlMsTUFBTSxDQUFDUixNQUFNLEdBQUcsS0FBSztRQUNyQlEsTUFBTSxDQUFDUCxHQUFHLEdBQUcsRUFBRTtRQUVmLE1BQU0sQ0FBQ08sTUFBTTtJQUNmLENBQUM7SUEzQkQsR0FBSyxDQUFDQyxJQUFJLEdBQUcsQ0FBQztRQUNaQyxTQUFTLEVBQUUsQ0FBUTtRQUNuQkMsUUFBUSxFQUFFLENBQU87UUFDakJDLElBQUksRUFBRSxDQUFXO0lBQ25CLENBQUM7SUFRRGxCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxJQUFJLENBQUNDLFNBQVM7SUFrQjFCLE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFFdEIsMEVBQWdCOzt3RkFDN0JELGtEQUFJOztnR0FDRnlCLENBQUs7a0NBQUMsQ0FBZTs7Ozs7O2dHQUNyQkMsQ0FBSTt3QkFBQ3JCLElBQUksRUFBQyxDQUFhO3dCQUFDc0IsT0FBTyxFQUFDLENBQThCOzs7Ozs7Z0dBQzlEQyxDQUFJO3dCQUFDQyxHQUFHLEVBQUMsQ0FBTTt3QkFBQ0MsSUFBSSxFQUFDLENBQWM7Ozs7Ozs7Ozs7Ozt3RkFHckNDLENBQUk7Z0JBQUNSLFNBQVMsRUFBRXRCLHFFQUFXOztnR0FDekIrQixDQUFFO3dCQUFDVCxTQUFTLEVBQUV0QixzRUFBWTs7NEJBQUUsQ0FDbkI7d0dBQUNnQyxDQUFDO2dDQUFDSCxJQUFJLEVBQUMsQ0FBb0I7MENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7O29CQUU5Q2xCLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBTSxPQUFFLENBQUM7d0JBQUNGLEdBQUcsRUFBRSxFQUFFO3dCQUFFSyxJQUFJLEVBQUUsQ0FBVTtvQkFBQyxDQUFDO29CQUNwRFosT0FBTyxDQUFDQyxHQUFHLENBQUNZLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJOUIsQ0FBQztLQWpEdUJMLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5cbmNsYXNzIE1lbWJlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgc3VybmFtZTogc3RyaW5nO1xuICBiaXJ0aGRheTogRGF0ZTtcbiAgZ2VuZGVyOiBib29sZWFuO1xuICBhZ2U6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcImN0b3Igw6dhbMSxxZ90xLFcIilcblxuICAgIHRoaXMubmFtZSA9IFwiTmFtZVwiO1xuICAgIHRoaXMuc3VybmFtZSA9IFwiU3VybmFtZVwiO1xuICAgIHRoaXMuYmlydGhkYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMuZ2VuZGVyID0gdHJ1ZTtcbiAgICB0aGlzLmFnZSA9IDk5O1xuXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBVc2VyID0ge1xuICAgIGZpcnN0TmFtZTogXCJBbmdlbGFcIixcbiAgICBsYXN0TmFtZTogXCJEYXZpc1wiLFxuICAgIHJvbGU6IFwiUHJvZmVzc29yXCIsXG4gIH1cblxuICB0eXBlIEZlYXR1cmVzID0ge1xuICAgIGFnZTogTnVtYmVyO1xuICAgIGNpdHk6IFN0cmluZztcbiAgfVxuXG5cbiAgY29uc29sZS5sb2coVXNlci5maXJzdE5hbWUpXG5cbiAgZnVuY3Rpb24gc2VuZE1lc3NhZ2UoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBmZWF0dXJlczogRmVhdHVyZXMpIHtcbiAgICBjb25zb2xlLmxvZyhgJHtpZH0gbnVtYXJhbMSxICR7bmFtZX0gw7Z6ZWxsaWtsZXJpICR7ZmVhdHVyZXMuYWdlfSAke2ZlYXR1cmVzLmNpdHl9YCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRNZW1iZXIoKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZW1iZXIgPSBuZXcgTWVtYmVyKCk7XG4gICAgbWVtYmVyLm5hbWUgPSBcIkTDvHpnw7xuIEVtcmVcIjtcbiAgICBtZW1iZXIuc3VybmFtZSA9IFwiw5Z6a2FuXCI7XG4gICAgbWVtYmVyLmJpcnRoZGF5ID0gbmV3IERhdGUoKTtcbiAgICBtZW1iZXIuZ2VuZGVyID0gZmFsc2U7XG4gICAgbWVtYmVyLmFnZSA9IDMyO1xuXG4gICAgcmV0dXJuIG1lbWJlcjtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwJyAvPlxuICAgICAgICA8bGluayByZWw9J2ljb24nIGhyZWY9Jy9mYXZpY29uLmljbycgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgTWVyaGFiYSA8YSBocmVmPSdodHRwczovL25leHRqcy5vcmcnPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuICAgICAgICB7c2VuZE1lc3NhZ2UoMSwgXCJFbXJlXCIsIHsgYWdlOiAzMiwgY2l0eTogXCLEsHN0YW5idWxcIiB9KX1cbiAgICAgICAge2NvbnNvbGUubG9nKGdldE1lbWJlcigpKX1cbiAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiTWVtYmVyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJzdXJuYW1lIiwiYmlydGhkYXkiLCJEYXRlIiwiZ2VuZGVyIiwiYWdlIiwiSG9tZSIsInNlbmRNZXNzYWdlIiwiaWQiLCJmZWF0dXJlcyIsImNpdHkiLCJnZXRNZW1iZXIiLCJtZW1iZXIiLCJVc2VyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});