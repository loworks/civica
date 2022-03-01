"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Padding = exports.Margin = exports.MarginLarge = exports.MarginPc = exports.MarginTb = exports.MarginSp = void 0;

var _react = require("@emotion/react");

var _mq = _interopRequireDefault(require("./mq"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MarginSp = function MarginSp(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t", " {\n\t\tmargin-top: ", ";\n\t\tmargin-bottom: ", ";\n\t\tmargin-left: ", ";\n\t\tmargin-right: ", ";\n\t}\n"])), _mq["default"].sp, props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.MarginSp = MarginSp;

var MarginTb = function MarginTb(props) {
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t", " {\n\t\tmargin-top: ", ";\n\t\tmargin-bottom: ", ";\n\t\tmargin-left: ", ";\n\t\tmargin-right: ", ";\n\t}\n"])), _mq["default"].tb, props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.MarginTb = MarginTb;

var MarginPc = function MarginPc(props) {
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t", " {\n\t\tmargin-top: ", ";\n\t\tmargin-bottom: ", ";\n\t\tmargin-left: ", ";\n\t\tmargin-right: ", ";\n\t}\n"])), _mq["default"].pc, props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.MarginPc = MarginPc;

var MarginLarge = function MarginLarge(props) {
  return (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t", " {\n\t\tmargin-top: ", ";\n\t\tmargin-bottom: ", ";\n\t\tmargin-left: ", ";\n\t\tmargin-right: ", ";\n\t}\n"])), _mq["default"].large, props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.MarginLarge = MarginLarge;

var Margin = function Margin(props) {
  return (0, _react.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\tmargin-top: ", ";\n\tmargin-bottom: ", ";\n\tmargin-left: ", ";\n\tmargin-right: ", ";\n"])), props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.Margin = Margin;

var Padding = function Padding(props) {
  return (0, _react.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n\tpadding-top: ", ";\n\tpadding-bottom: ", ";\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n"])), props.top ? props.top : 0, props.bottom ? props.bottom : 0, props.left ? props.left : 0, props.right ? props.right : 0);
};

exports.Padding = Padding;

//# sourceMappingURL=spacer.js.map