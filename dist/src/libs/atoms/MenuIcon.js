"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var Styles = _interopRequireWildcard(require("../styles"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var menuicon = function menuicon(width, height, iconWidth, iconHeight) {
  var bgColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "transparent";
  var type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "rect";
  var iconW = parseFloat(iconWidth);
  var iconH = parseFloat(iconHeight);
  var initTop = (parseFloat(height) - iconH) / 2;
  var heightMargin = iconH / 2;
  var radius = type === "rect" ? 0 : width;
  return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tposition: relative;\n\t\twidth: ", "px;\n\t\theight: ", "px;\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t\tborder-radius: ", "px;\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\tposition: absolute;\n\t\t\tleft: ", "px;\n\t\t\tz-index: 1;\n\n\t\t\t&:nth-child(1) {\n\t\t\t\ttop: ", "px;\n\t\t\t}\n\t\t\t&:nth-child(2) {\n\t\t\t\ttop: ", "px;\n\t\t\t}\n\t\t\t&:nth-child(3) {\n\t\t\t\ttop: ", "px;\n\t\t\t}\n\t\t}\n\t"])), width, height, bgColor, radius, (width - iconW) / 2, initTop + heightMargin * 0, initTop + heightMargin * 1, initTop + heightMargin * 2);
};

var MenuIcon = function MenuIcon(props) {
  var barHeight = props.barHeight ? props.barHeight : "2px";
  var color = props.color ? props.color : "#000";
  var width = props.width ? props.width : 48;
  var height = props.height ? props.height : 48;
  var iconW = props.iconW ? props.iconW : "18px";
  var iconH = props.iconH ? props.iconH : "10px";
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    css: menuicon(width, height, iconW, iconH, props.bgColor, props.type),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Styles.Shape.Rect, {
      widh: iconW,
      height: barHeight,
      color: color
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Styles.Shape.Rect, {
      widh: iconW,
      height: barHeight,
      color: color
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Styles.Shape.Rect, {
      widh: iconW,
      height: barHeight,
      color: color
    })]
  });
};

exports.MenuIcon = MenuIcon;

//# sourceMappingURL=MenuIcon.js.map