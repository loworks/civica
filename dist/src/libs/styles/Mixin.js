"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerCss = exports.textAncherLen = exports.textAncher = void 0;

var _react = require("@emotion/react");

var Style = _interopRequireWildcard(require("./index"));

var Common = _interopRequireWildcard(require("../common"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textAncher = function textAncher() {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tposition: relative;\n\t\t&:before {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: -3px;\n\t\t\twidth: 100%;\n\t\t\tborder-bottom: 2px solid #000;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: $bottom;\n\t\t\twidth: 100%;\n\t\t\tbottom: -3px;\n\t\t\tborder-bottom: 2px solid #fcfcf9;\n\t\t\ttransform: scaleX(0);\n\t\t\ttransform-origin: 0 50%;\n\t\t\ttransition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);\n\t\t}\n\t\t&:hover:after {\n\t\t\ttransform: scaleX(1);\n\t\t}\n\t"])));
};

exports.textAncher = textAncher;

var textAncherLen = function textAncherLen() {
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tposition: relative;\n\n\t\t&:after {\n\t\t\tcontent: \" \";\n\t\t\tposition: absolute;\n\t\t\tleft: 0;\n\t\t\tbottom: $bottom;\n\t\t\twidth: 100%;\n\t\t\tbottom: -6px;\n\t\t\tborder-bottom: 3px solid #ececec;\n\t\t\ttransform: scaleY(0);\n\t\t\ttransform-origin: 0 100%;\n\t\t\ttransition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);\n\t\t}\n\t\t&.active:after {\n\t\t\ttransform: scaleY(1);\n\t\t\tborder-bottom: 3px solid #252525;\n\t\t}\n\t\t&:hover:after {\n\t\t\ttransform: scaleY(1);\n\t\t}\n\t"])));
};

exports.textAncherLen = textAncherLen;

var containerCss = function containerCss(first) {
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\tmargin-left: auto;\n\t\tmargin-right: auto;\n\t\twidth: calc(100vw - ", "vw);\n\t\tposition: relative;\n\t\t", ";\n\t"])), Common.Config.siteMargin, first === true ? Common.Func.getPcSpVwValue("margin-top", 200, 170) : Common.Func.getPcSpVwValue("margin-top", 170, 100));
};

exports.containerCss = containerCss;

//# sourceMappingURL=Mixin.js.map