"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serif = exports.Bold = exports.Italic = exports.SanSerif = void 0;

var _react = require("@emotion/react");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SanSerif = function SanSerif(props) {
  return (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tfont-family: Messina, \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3\", \"Hiragino Kaku Gothic ProN\",\n\t\t\t\"\u30E1\u30A4\u30EA\u30AA\", Meiryo, sans-serif;\n\t"])));
};

exports.SanSerif = SanSerif;

var Italic = function Italic(props) {
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tfont-family: HowltItalic, Domaine, \"\u6E38\u660E\u671D\", YuMincho,\n\t\t\t\"\u30D2\u30E9\u30AE\u30CE\u660E\u671D ProN W3\", \"Hiragino Mincho ProN\", \"HG\u660E\u671DE\", \"\uFF2D\uFF33 \uFF30\u660E\u671D\",\n\t\t\t\"\uFF2D\uFF33 \u660E\u671D\", serif;\n\t\tfont-style: italic;\n\t"])));
};

exports.Italic = Italic;

var Bold = function Bold(props) {
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\tfont-family: Twm, Messina, \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3\",\n\t\t\t\"Hiragino Kaku Gothic ProN\", \"\u30E1\u30A4\u30EA\u30AA\", Meiryo, sans-serif;\n\t\tfont-weight: 500;\n\t"])));
};

exports.Bold = Bold;

var Serif = function Serif(props) {
  return (0, _react.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\tfont-family: Domaine, \"\u6E38\u660E\u671D\", YuMincho, \"\u30D2\u30E9\u30AE\u30CE\u660E\u671D ProN W3\",\n\t\t\t\"Hiragino Mincho ProN\", \"HG\u660E\u671DE\", \"\uFF2D\uFF33 \uFF30\u660E\u671D\", \"\uFF2D\uFF33 \u660E\u671D\", serif;\n\t"])));
};

exports.Serif = Serif;

//# sourceMappingURL=fontface.js.map