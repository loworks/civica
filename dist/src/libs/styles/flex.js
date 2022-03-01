"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flexList = exports.flexLine = void 0;

var _react = require("@emotion/react");

var _mq = _interopRequireDefault(require("./mq"));

var _templateObject, _templateObject2, _templateObject3;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var flexContainer = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tdisplay: flex;\n\talign-items: top;\n\tflex-wrap: wrap;\n\tposition: relative;\n"])));

var flexLine = function flexLine() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return (0, _react.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n"])), flexContainer, props.between ? {
    "justify-content": "space-between"
  } : "", props.around ? {
    "justify-content": "space-around"
  } : "");
};

exports.flexLine = flexLine;

var flexList = function flexList() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = ["sp", "pab", "tb", "pc", "large", "lessPab", "lessTab", "moreTab", "morePc"];
  return (0, _react.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t", "\n\t\t", "\n\n    & > * {\n\t\t\tdisplay: flex;\n\t\t\toverflow: hidden;\n\t\t\tflex-direction: column;\n\t\t\t", "\n\t\t}\n\t"])), flexLine(props), keys.map(function (key) {
    var value = props[key];

    if (value) {
      return " ".concat(_mq["default"][key], " {\n          ").concat(getLastLineCss(value), "\n        }");
    }
  }), keys.map(function (key) {
    var value = props[key];

    if (value) {
      return " ".concat(_mq["default"][key], " {\n            flex-basis:").concat(value, "%;\n            ").concat(getMargin(value), "\n          }");
    }
  }));
};

exports.flexList = flexList;

var getLastLineCss = function getLastLineCss(percent) {
  var column = Math.floor(100 / percent);

  if (column === 3) {
    return "\n     &:after{\n      content:\"\";\n      display: block;\n      width:".concat(percent, "%;\n    }\n  ");
  }

  if (column === 4) {
    return "\n      &:before {\n        content: \"\";\n        display: block;\n        width:".concat(percent, "%;\n        order: 1;\n      }\n      &:after {\n        content: \"\";\n        display: block;\n        width: ").concat(percent, "%;\n      }\n  ");
  }
};

var getMargin = function getMargin(percent) {
  var column = Math.floor(100 / percent);
  return "\n       &:nth-last-child(-n + ".concat(column, ") {\n          margin-bottom: 0 !important;\n        }\n  ");
};

//# sourceMappingURL=flex.js.map