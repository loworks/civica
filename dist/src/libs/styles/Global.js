"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalStyle = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var Font = _interopRequireWildcard(require("./fontface"));

var Common = _interopRequireWildcard(require("../common"));

var Styles = _interopRequireWildcard(require("./"));

var Wp = _interopRequireWildcard(require("./Wp"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlobalStyle = function GlobalStyle(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Global, {
    styles: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\n       *,\n        ::after,\n        ::before {\n          -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n        }\n      html {\n        -webkit-font-smoothing: antialiased;\n\n      }\n      iframe{\n        .on-story & {\n          pointer-events:none;\n          a {\n            pointer-events:none;\n          }\n        }\n      }\n      .img-cont.fit-100vh {\n        height:100vh;\n         ", " {\n          height: 42vh;\n        }\n        .gatsby-image-wrapper {\n          height:100%;\n        }\n      }\n      body {\n        color: #000;\n        ", ";\n        height: 100vh;\n\n        line-height: 1.75;\n        background-color: ", ";\n        .on-menu & , .on-bag, .on-story &{\n          overflow: hidden;\n          height: 100%;\n        }\n      }\n      .initioal-loader {\n        .root & {\n          visibility:hidden;\n        }\n      }\n      .init-animat-cont {\n        .img-element {\n          overflow: hidden !important;\n          >* {\n\n          }\n        }\n        .text-element {\n        /*overflow: hidden;*/\n      }\n      }\n\na.textAnchor {\n  position: relative;\n\n    &:before {\n      content: \" \";\n      position: absolute;\n      left: 0;\n      bottom: 1px;\n      width: 100%;\n      border-bottom: 1.5px solid #000;\n    }\n    &:after {\n      content: \" \";\n      position: absolute;\n      left: 0;\n      bottom: $bottom;\n      width: 100%;\n      bottom: 1px;\n      border-bottom: 1.5px solid #fcfcf9;\n      transform: scaleX(0);\n      transform-origin: 0 50%;\n      transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);\n    }\n    &:hover:after {\n      transform: scaleX(1);\n    }\n}\n\n      a {\n        color:#121212;\n        &.bg {\n          background-color:#ff0;\n        }\n        &:hover {\n          color:#121212;\n        }\n        &:visited {\n          color:#121212;\n        }\n      }\n\n      .bold {\n        ", ";\n      }\n      .san-serif {\n        ", ";\n      }\n\n      .tl-edges {\n        overflow-x: visible;\n        &:after {\n          clear: both;\n          content: '';\n          display: block;\n        }\n      }\n      .rt-content {\n        &:last-child {\n          margin-bottom: 0px;\n        }\n      }\n      ::selection {\n        background: #121212;\n        color: #fff;\n      }\n    .tl-wrapper {\n      backface-visibility: hidden;\n\n    }\n.tl-wrapper {\n      >section {\n          &:first-child {\n            .transition-page & {\n              opacity: 0;\n              transform: translateY(50px);\n              position:relative\n            }\n          }\n      }\n}\n    .tl-wrapper--mount {\n      >section {\n          &:first-child {\n            .transition-page & {\n              opacity: 0;\n              transform: translateY(50px);\n              position:relative\n            }\n          }\n      }\n      .story-next & {\n          transform: translateX(100%);\n\n          opacity:.5;\n\n         }\n         .story-prev & {\n           transform: translateX(-100%);\n\n          opacity:.5;\n\n         }\n    }\n      .tl-wrapper + .tl-wrapper {\n\n        >section {\n          &:first-child {\n          .transition-fade-in & {\n            opacity: 0;\n\n            position:relative\n           }\n          }\n        }\n\n         .story-next & {\n          transform: translateX(100%);\n\n          opacity:.5;\n\n         }\n         .story-prev & {\n           transform: translateX(-100%);\n\n          opacity:.5;\n\n         }\n      }\n\n      .blocks {\n        ", "\n        ", "\n        ", "\n\n\n\n      }\n\n    "])), Styles.Mq.lessPab, Font.SanSerif(), Common.Config.bgColor, Font.Bold(), Font.SanSerif(), Wp.Blocks(), Wp.CommonCss(), Wp.Space())
  });
};

exports.GlobalStyle = GlobalStyle;

//# sourceMappingURL=Global.js.map