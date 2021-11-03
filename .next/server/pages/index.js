(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/projects.yaml":
/*!***************************!*\
  !*** ./lib/projects.yaml ***!
  \***************************/
/***/ ((module) => {

const doc = [({"projects":[({"name":"Weatherly", "code_url":"https://github.com/Salaheddin12/Weatherly", "image":"weatherly.png"}), ({"name":"michlifen-resort", "code_url":"https://github.com/Salaheddin12/michlifen-resort", "image":"michlifen_resort.png"}), ({"name":"Covid-19-Statistics", "code_url":"https://github.com/Salaheddin12/michlifen-resort", "image":"covid-19-statistics.png"})]})];
module.exports = doc.length <= 1 ? doc[0] : doc;

/***/ }),

/***/ "./components/projectCard.js":
/*!***********************************!*\
  !*** ./components/projectCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Levi\\Desktop\\ab-salah\\components\\projectCard.js";

 // import styled from '@emotion/styled'
// const Paragraph = styled.p`
//   color: #333;
//   font-size: 0.75rem;
//   font-family: 'NUNITO';
//   font-size: 1.5rem;
//   line-height: 2.25rem;
//   color: #828282;
//   padding-bottom: 2rem;
// `



const index = ({
  order = 0,
  data
}) => {
  const {
    name,
    image
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    display: "flex",
    maxWidth: 992,
    borderRadius: "24px",
    mx: 100,
    bg: "#FFFFFF",
    justifyContent: "space-between",
    mt: "80px",
    filter: "drop-shadow(4px 4px 15px #E8ECF4)",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      display: "flex",
      flexGrow: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      order: order,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        as: "h3",
        variant: "section-subtitle",
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "yellow-outlined",
        children: "View Project"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: `/images/${image}`,
      maxWidth: "50%",
      alt: "Profile image",
      borderRadius: "0 24px 24px 0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./components/section.js":
/*!*******************************!*\
  !*** ./components/section.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Levi\\Desktop\\ab-salah\\components\\section.js";



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div, {
  shouldForwardProp: prop => {
    return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === 'transition';
  }
});

const Section = ({
  children,
  delay = 0,
  flexDirection = 'row'
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(StyledDiv, {
  initial: {
    y: 10,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1
  },
  transition: {
    duration: 0.8,
    delay
  },
  mb: "9rem",
  display: 'flex',
  flexDirection: flexDirection,
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 11,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

/***/ }),

/***/ "./components/sections/intro.js":
/*!**************************************!*\
  !*** ./components/sections/intro.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "@emotion/styled");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Levi\\Desktop\\ab-salah\\components\\sections\\intro.js";





const Paragraph = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().p)`
  color: #333;
  font-size: 0.75rem;
  font-family: 'NUNITO';
  font-size: 1.5rem;
  line-height: 2.25rem;
  color: #828282;
  padding-bottom: 2rem;
`; // const ButtonTeal = styled.button`
//   background-color: #00a19d;
//   color: #f9faff;
//   border-radius: 8px;
//   padding: 8px 24px;
//   border: 2px solid #00a19d;
//   margin-right: 0.75rem;
// `

const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_3__.default, {
    delay: 0.1,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      flexGrow: 1,
      mt: 4,
      maxWidth: "25rem",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        as: "h4",
        variant: "section-subtitle",
        children: "frontend web developer"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        as: "h2",
        variant: "section-title",
        pb: "2rem",
        margin: 0,
        children: "Hello, my name is Salah Eddine"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Paragraph, {
        variant: "section-p",
        children: "I am a front end developer based in Rabat, Morocco. I studied programming for two years then specialized in web development, I use React, NextJs and familiar with vuejs."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "base",
        children: "Projects"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        variant: "teal-outlined",
        children: "Reach out"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
      src: "/images/me.png",
      position: "absolute",
      zIndex: -1,
      top: 0,
      right: 0,
      maxWidth: "50%",
      alt: "Profile image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);

/***/ }),

/***/ "./components/sections/projects.js":
/*!*****************************************!*\
  !*** ./components/sections/projects.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _projectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projectCard */ "./components/projectCard.js");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../section */ "./components/section.js");
/* harmony import */ var _lib_projects_yaml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/projects.yaml */ "./lib/projects.yaml");
/* harmony import */ var _lib_projects_yaml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_lib_projects_yaml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Levi\\Desktop\\ab-salah\\components\\sections\\projects.js";

 // import styled from '@emotion/styled'






const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_section__WEBPACK_IMPORTED_MODULE_3__.default, {
    delay: 0.1,
    flexDirection: "column",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      as: "h2",
      variant: "section-subtitle",
      textAlign: "center",
      fontSize: "3rem",
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      display: "flex",
      flexDirection: "column",
      children: _lib_projects_yaml__WEBPACK_IMPORTED_MODULE_4__.projects.map((project, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_projectCard__WEBPACK_IMPORTED_MODULE_2__.default, {
          data: project
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 18
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sections_intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/sections/intro */ "./components/sections/intro.js");
/* harmony import */ var _components_sections_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/projects */ "./components/sections/projects.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Levi\\Desktop\\ab-salah\\pages\\index.js";





const Index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_sections_intro__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_sections_projects__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxlQURGO0FBTUQsQ0FQRDs7QUFTQSxpRUFBZUEsS0FBZjs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FiLXNhbGFoLy4vbGliL3Byb2plY3RzLnlhbWwiLCJ3ZWJwYWNrOi8vYWItc2FsYWgvLi9jb21wb25lbnRzL3Byb2plY3RDYXJkLmpzIiwid2VicGFjazovL2FiLXNhbGFoLy4vY29tcG9uZW50cy9zZWN0aW9uLmpzIiwid2VicGFjazovL2FiLXNhbGFoLy4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRyby5qcyIsIndlYnBhY2s6Ly9hYi1zYWxhaC8uL2NvbXBvbmVudHMvc2VjdGlvbnMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vYWItc2FsYWgvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hYi1zYWxhaC9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly9hYi1zYWxhaC9leHRlcm5hbCBcIkBlbW90aW9uL3N0eWxlZFwiIiwid2VicGFjazovL2FiLXNhbGFoL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL2FiLXNhbGFoL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9hYi1zYWxhaC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRvYyA9IFsoe1wicHJvamVjdHNcIjpbKHtcIm5hbWVcIjpcIldlYXRoZXJseVwiLCBcImNvZGVfdXJsXCI6XCJodHRwczovL2dpdGh1Yi5jb20vU2FsYWhlZGRpbjEyL1dlYXRoZXJseVwiLCBcImltYWdlXCI6XCJ3ZWF0aGVybHkucG5nXCJ9KSwgKHtcIm5hbWVcIjpcIm1pY2hsaWZlbi1yZXNvcnRcIiwgXCJjb2RlX3VybFwiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NhbGFoZWRkaW4xMi9taWNobGlmZW4tcmVzb3J0XCIsIFwiaW1hZ2VcIjpcIm1pY2hsaWZlbl9yZXNvcnQucG5nXCJ9KSwgKHtcIm5hbWVcIjpcIkNvdmlkLTE5LVN0YXRpc3RpY3NcIiwgXCJjb2RlX3VybFwiOlwiaHR0cHM6Ly9naXRodWIuY29tL1NhbGFoZWRkaW4xMi9taWNobGlmZW4tcmVzb3J0XCIsIFwiaW1hZ2VcIjpcImNvdmlkLTE5LXN0YXRpc3RpY3MucG5nXCJ9KV19KV07XG5tb2R1bGUuZXhwb3J0cyA9IGRvYy5sZW5ndGggPD0gMSA/IGRvY1swXSA6IGRvYzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkaW5nLCBCb3gsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuLy8gaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbi8vIGNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxuLy8gICBjb2xvcjogIzMzMztcbi8vICAgZm9udC1zaXplOiAwLjc1cmVtO1xuLy8gICBmb250LWZhbWlseTogJ05VTklUTyc7XG4vLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xuLy8gICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbi8vICAgY29sb3I6ICM4MjgyODI7XG4vLyAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuLy8gYFxuXG5jb25zdCBpbmRleCA9ICh7IG9yZGVyID0gMCwgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2UgfSA9IGRhdGFcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBtYXhXaWR0aD17OTkyfVxuICAgICAgYm9yZGVyUmFkaXVzPVwiMjRweFwiXG4gICAgICBteD17MTAwfVxuICAgICAgYmc9XCIjRkZGRkZGXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICBtdD1cIjgwcHhcIlxuICAgICAgZmlsdGVyPVwiZHJvcC1zaGFkb3coNHB4IDRweCAxNXB4ICNFOEVDRjQpXCJcbiAgICA+XG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBvcmRlcj17b3JkZXJ9XG4gICAgICA+XG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiB2YXJpYW50PVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAgIHtuYW1lfVxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIHsvKiA8UGFyYWdyYXBoIHZhcmlhbnQ9XCJzZWN0aW9uLXBcIj5cbiAgICAgICAgICBJIGNyZWF0ZWQgdGhpcyBwZXJzb25hbCBwcm9qZWN0IGluIG9yZGVyIHRvIHNob3cgaG93IHRvIGNyZWF0ZSBhblxuICAgICAgICAgIGludGVyZmFjZSBpbiBGaWdtYSB1c2luZyBhIHBvcnRmb2xpbyBhcyBhbiBleGFtcGxlLlxuICAgICAgICA8L1BhcmFncmFwaD4gKi99XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInllbGxvdy1vdXRsaW5lZFwiPlZpZXcgUHJvamVjdDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtgL2ltYWdlcy8ke2ltYWdlfWB9XG4gICAgICAgIG1heFdpZHRoPVwiNTAlXCJcbiAgICAgICAgYWx0PVwiUHJvZmlsZSBpbWFnZVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz1cIjAgMjRweCAyNHB4IDBcIlxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIiwiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IHsgY2hha3JhLCBzaG91bGRGb3J3YXJkUHJvcCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcblxyXG5jb25zdCBTdHlsZWREaXYgPSBjaGFrcmEobW90aW9uLmRpdiwge1xyXG4gIHNob3VsZEZvcndhcmRQcm9wOiBwcm9wID0+IHtcclxuICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAndHJhbnNpdGlvbidcclxuICB9XHJcbn0pXHJcblxyXG5jb25zdCBTZWN0aW9uID0gKHsgY2hpbGRyZW4sIGRlbGF5ID0gMCwgZmxleERpcmVjdGlvbiA9ICdyb3cnIH0pID0+IChcclxuICA8U3R5bGVkRGl2XHJcbiAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XHJcbiAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cclxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZGVsYXkgfX1cclxuICAgIG1iPVwiOXJlbVwiXHJcbiAgICBkaXNwbGF5PXsnZmxleCd9XHJcbiAgICBmbGV4RGlyZWN0aW9uPXtmbGV4RGlyZWN0aW9ufVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L1N0eWxlZERpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkaW5nLCBCb3gsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9uJ1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC1mYW1pbHk6ICdOVU5JVE8nO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbmBcbi8vIGNvbnN0IEJ1dHRvblRlYWwgPSBzdHlsZWQuYnV0dG9uYFxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhMTlkO1xuLy8gICBjb2xvcjogI2Y5ZmFmZjtcbi8vICAgYm9yZGVyLXJhZGl1czogOHB4O1xuLy8gICBwYWRkaW5nOiA4cHggMjRweDtcbi8vICAgYm9yZGVyOiAycHggc29saWQgIzAwYTE5ZDtcbi8vICAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xuLy8gYFxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0+XG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSBtdD17NH0gbWF4V2lkdGg9XCIyNXJlbVwiPlxuICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgdmFyaWFudD1cInNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgICBmcm9udGVuZCB3ZWIgZGV2ZWxvcGVyXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiIHZhcmlhbnQ9XCJzZWN0aW9uLXRpdGxlXCIgcGI9XCIycmVtXCIgbWFyZ2luPXswfT5cbiAgICAgICAgICBIZWxsbywgbXkgbmFtZSBpcyBTYWxhaCBFZGRpbmVcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8UGFyYWdyYXBoIHZhcmlhbnQ9XCJzZWN0aW9uLXBcIj5cbiAgICAgICAgICBJIGFtIGEgZnJvbnQgZW5kIGRldmVsb3BlciBiYXNlZCBpbiBSYWJhdCwgTW9yb2Njby4gSSBzdHVkaWVkXG4gICAgICAgICAgcHJvZ3JhbW1pbmcgZm9yIHR3byB5ZWFycyB0aGVuIHNwZWNpYWxpemVkIGluIHdlYiBkZXZlbG9wbWVudCwgSSB1c2VcbiAgICAgICAgICBSZWFjdCwgTmV4dEpzIGFuZCBmYW1pbGlhciB3aXRoIHZ1ZWpzLlxuICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiYmFzZVwiPlByb2plY3RzPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRlYWwtb3V0bGluZWRcIj5SZWFjaCBvdXQ8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz1cIi9pbWFnZXMvbWUucG5nXCJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHpJbmRleD17LTF9XG4gICAgICAgIHRvcD17MH1cbiAgICAgICAgcmlnaHQ9ezB9XG4gICAgICAgIG1heFdpZHRoPVwiNTAlXCJcbiAgICAgICAgYWx0PVwiUHJvZmlsZSBpbWFnZVwiXG4gICAgICAvPlxuICAgIDwvU2VjdGlvbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbi8vIGltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vcHJvamVjdENhcmQnXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9zZWN0aW9uJ1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9saWIvcHJvamVjdHMueWFtbCdcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFNlY3Rpb24gZGVsYXk9ezAuMX0gZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgPEhlYWRpbmdcbiAgICAgICAgYXM9XCJoMlwiXG4gICAgICAgIHZhcmlhbnQ9XCJzZWN0aW9uLXN1YnRpdGxlXCJcbiAgICAgICAgdGV4dEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgZm9udFNpemU9XCIzcmVtXCJcbiAgICAgID5cbiAgICAgICAgUHJvamVjdHNcbiAgICAgIDwvSGVhZGluZz5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQcm9qZWN0IGtleT17aW5kZXh9IGRhdGE9e3Byb2plY3R9IC8+XG4gICAgICAgIH0pfVxuICAgICAgPC9Cb3g+XG4gICAgPC9TZWN0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9pbnRybydcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3Byb2plY3RzJ1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SW50cm8gLz5cbiAgICAgIDxQcm9qZWN0cyAvPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vc3R5bGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRpbmciLCJCb3giLCJJbWFnZSIsIkJ1dHRvbiIsImluZGV4Iiwib3JkZXIiLCJkYXRhIiwibmFtZSIsImltYWdlIiwibW90aW9uIiwiY2hha3JhIiwic2hvdWxkRm9yd2FyZFByb3AiLCJTdHlsZWREaXYiLCJkaXYiLCJwcm9wIiwiU2VjdGlvbiIsImNoaWxkcmVuIiwiZGVsYXkiLCJmbGV4RGlyZWN0aW9uIiwieSIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsInN0eWxlZCIsIlBhcmFncmFwaCIsInAiLCJQcm9qZWN0IiwicHJvamVjdHMiLCJJbmRleCIsIm1hcCIsInByb2plY3QiLCJJbnRybyIsIlByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==