"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonClose = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var Atoms = _interopRequireWildcard(require("./"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var _excluded = ["className"],
    _excluded2 = ["classStr", "iconSize", "rectSize", "color", "clickHandler", "activeClass"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonClose = function ButtonClose(props) {
  var className = props.className,
      rest = _objectWithoutProperties(props, _excluded);

  var _rest$classStr = rest.classStr,
      classStr = _rest$classStr === void 0 ? null : _rest$classStr,
      _rest$iconSize = rest.iconSize,
      iconSize = _rest$iconSize === void 0 ? "40px" : _rest$iconSize,
      _rest$rectSize = rest.rectSize,
      rectSize = _rest$rectSize === void 0 ? "3px" : _rest$rectSize,
      _rest$color = rest.color,
      color = _rest$color === void 0 ? "#000" : _rest$color,
      _rest$clickHandler = rest.clickHandler,
      clickHandler = _rest$clickHandler === void 0 ? null : _rest$clickHandler,
      _rest$activeClass = rest.activeClass,
      activeClass = _rest$activeClass === void 0 ? null : _rest$activeClass,
      newProps = _objectWithoutProperties(rest, _excluded2);

  var contCss = function contCss() {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tposition: relative;\n\t\twidth: ", ";\n\t\theight: ", ";\n\t\tcursor: pointer;\n\t\tborder: 0;\n\t\tbackground-color: transparent;\n\t\t& > div {\n\t\t\tpointer-events: none;\n\t\t}\n\t"])), iconSize, iconSize);
  };

  var activeCss1 = activeClass ? ".".concat(activeClass, " & {\n        transition: all 0.5s ease-out 0.4s;\n        transform: rotate(45deg) scale(1);\n        opacity: 1;\n      }") : "";
  var activeCss2 = activeClass ? ".".concat(activeClass, " & {\n         transition: all 0.5s ease-out 0.5s;\n        transform: rotate(45deg) scale(1);\n        opacity: 1;\n      }") : "";

  var animationCss = function animationCss() {
    if (activeClass) {
      return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\topacity: 0;\n\t\t\t\ttransform: rotate(-5deg) scale(1.2);\n\t\t\t"])));
    } else {
      return (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\t\ttransform: rotate(45deg);\n\t\t\t"])));
    }
  };

  var styleCss = function styleCss() {
    return (0, _react2.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\t\tposition: absolute;\n\t\t\ttop: ", "px;\n\t\t\tleft: 0;\n\t\t\ttransition: all 0.5s ease-out;\n\t\t\t", "\n\t\t\t", "\n\t\t"])), parseInt(iconSize) / 2 - parseInt(rectSize) / 2, animationCss(), activeCss1);
  };

  var style2Css = function style2Css() {
    return (0, _react2.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\t\t\tposition: absolute;\n\t\t\ttop: 0px;\n\t\t\tleft: ", "px;\n\t\t\t", "\n\t\t\t", "\n\t\t"])), parseInt(iconSize) / 2 - parseInt(rectSize) / 2, animationCss(), activeCss2);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _objectSpread(_objectSpread({
    css: contCss,
    onClick: function onClick() {
      if (clickHandler) clickHandler();
    },
    className: className
  }, newProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Atoms.Box, {
      width: iconSize,
      height: rectSize,
      color: color,
      css: styleCss
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Atoms.Box, {
      width: rectSize,
      height: iconSize,
      color: color,
      css: style2Css
    })]
  }));
};

exports.ButtonClose = ButtonClose;

//# sourceMappingURL=ButtonClose.js.map