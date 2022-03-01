"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChildSpacing = exports.CenterW = exports.CenterWH = exports.CenterH = void 0;

var _react = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CenterH = function CenterH(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tposition: relative;\n\t> * {\n\t\tposition: relative;\n\t\ttop: 50%;\n\t\ttransform: translateY(-50%);\n\t}\n"])));
};

exports.CenterH = CenterH;

var CenterWH = function CenterWH(props) {
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\tposition: relative;\n\t> * {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\n\t\ttransform: translate(-50%, -50%);\n\t}\n"])));
};

exports.CenterWH = CenterWH;

var CenterW = function CenterW(props) {
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\tposition: relative;\n\t> * {\n\t\tposition: absolute;\n\t\tleft: 50%;\n\t\ttransform: translateX(-50%);\n\t}\n"])));
};

exports.CenterW = CenterW;

var ChildSpacing = function ChildSpacing() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t> * {\n\t\t@content;\n\t\tmargin-top: ", ";\n\t\t&:first-child {\n\t\t\tmargin-top: 0;\n\t\t}\n\t}\n"])), value);
};

exports.ChildSpacing = ChildSpacing;

//# sourceMappingURL=position.js.map