"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = void 0;

var _react = require("@emotion/react");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var transition = function transition(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\ttransform: props;\n"])));
};

exports.transition = transition;

//# sourceMappingURL=animation.js.map