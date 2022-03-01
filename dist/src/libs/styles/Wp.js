"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blocks = exports.Space = exports.CommonCss = void 0;

var _react = require("@emotion/react");

var Common = _interopRequireWildcard(require("../common"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CommonCss = function CommonCss(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: auto;\n\t\t}\n\t\tp {\n\t\t\t", ";\n\t\t\t", ";\n\t\t}\n\t"])), Common.Func.getMqVwValue("font-size", 13, true), Common.Func.getMqVwValue("line-height", 13 * 1.7, true));
};

exports.CommonCss = CommonCss;

var Space = function Space(props) {
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t.child-mgn-l {\n\t\t\t> * {\n\t\t\t\tmargin-top: 36px;\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.child-mgn-s {\n\t\t\t> * {\n\t\t\t\tmargin-top: 12px;\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.child-mgn-xs {\n\t\t\t> * {\n\t\t\t\tmargin-top: 12px;\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin-top: 0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"])));
};

exports.Space = Space;

var Blocks = function Blocks(props) {
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t.flex-cont {\n\t\t\tdisplay: flex;\n\t\t\talign-items: top;\n\t\t\tflex-wrap: wrap;\n\t\t\tposition: relative;\n\t\t\tz-index: 1;\n\t\t\t> .flex-item {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t}\n\t\t\t&.column-2 > .flex-item {\n\t\t\t\tflex-basis: 50%;\n\t\t\t\tmargin-bottom: 48px;\n\t\t\t}\n\t\t}\n\t"])));
};

exports.Blocks = Blocks;

//# sourceMappingURL=Wp.js.map