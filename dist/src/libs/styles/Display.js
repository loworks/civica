"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = require("@emotion/react");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = function Text(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    white-space: pre-line;\n    font-size: ", ";\n    ", "\n    ", "\n    ", "\n  "])), props.size ? props.size + "px" : "14px", props.lineHeight ? {
    "line-height": props.lineHeight
  } : "", props.letterSpacing ? {
    "letter-spacing": props.letterSpacing
  } : "", props.marginTop ? {
    "margin-top": props.marginTop + "px"
  } : "");
};

exports.Text = Text;

//# sourceMappingURL=Display.js.map