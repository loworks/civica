"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var _excluded = ["width", "height", "color"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Box = function Box(props) {
  var _props$width = props.width,
      width = _props$width === void 0 ? "100%" : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? "100px" : _props$height,
      _props$color = props.color,
      color = _props$color === void 0 ? "#000" : _props$color,
      rest = _objectWithoutProperties(props, _excluded);

  var styleCss = function styleCss() {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\twidth: ", ";\n\t\t\theight: ", ";\n\t\t\tbackground-color: ", ";\n\t\t"])), width, height, color);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    css: styleCss
  }, rest));
};

exports.Box = Box;

//# sourceMappingURL=Box.js.map