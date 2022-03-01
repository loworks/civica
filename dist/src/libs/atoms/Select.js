"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _reactSelect = _interopRequireDefault(require("react-select"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["onChange", "options", "defaultValue"];

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Select = function Select(props) {
  var optionSelectCss = function optionSelectCss() {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t.option__control {\n\t\t\tborder-radius: 0;\n\t\t\tbox-shadow: none;\n\t\t\tfont-size: 14px;\n\t\t\t&:hover {\n\t\t\t\tborder: 1px solid lightgray;\n\t\t\t}\n\t\t\t&.option__control--is-focused {\n\t\t\t\tborder: 1px solid lightgray;\n\t\t\t}\n\t\t}\n\t\t.option__menu {\n\t\t\tfont-size: 13px;\n\t\t}\n\t\t.option__dropdown-indicator {\n\t\t\tcolor: #000;\n\t\t\tsvg {\n\t\t\t\twidth: 10px;\n\t\t\t}\n\t\t}\n\t\t.option__indicator-separator {\n\t\t\tbackground-color: transparent;\n\t\t}\n\t"])));
  };

  var onChange = props.onChange,
      options = props.options,
      defaultValue = props.defaultValue,
      rest = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSelect["default"], _objectSpread({
    width: "100px",
    className: "option",
    classNamePrefix: "option",
    menuColor: "red",
    isSearchable: false,
    css: optionSelectCss,
    options: options,
    onChange: onChange,
    defaultValue: defaultValue
  }, rest));
};

var _default = Select;
exports["default"] = _default;

//# sourceMappingURL=Select.js.map