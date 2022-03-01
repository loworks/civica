"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rect = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Rect = function Rect(props) {
  var newprops = _objectSpread(_objectSpread({}, props), {}, {
    children: null,
    className: null
  });

  var width = newprops.width,
      height = newprops.height,
      color = newprops.color,
      border = newprops.border;
  var style = (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\twidth: ", ";\n\t\theight: ", ";\n\t\tbackground-color: ", ";\n\t\tborder: ", ";\n\n\t\t", "\n\t"])), width, height, color, border, _objectSpread({}, newprops));

  if (props.className) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
      css: style
    }, props));
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      css: style
    });
  }
};

exports.Rect = Rect;
Rect.propTypes = {
  width: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  height: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string.isRequired,
  border: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number])
};
Rect.defaultProps = {
  width: "18px",
  height: "2px",
  color: "#000",
  border: "0px"
};

//# sourceMappingURL=shape.js.map