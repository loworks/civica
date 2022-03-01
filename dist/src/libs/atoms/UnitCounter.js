"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UnitCounter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

var _excluded = ["skus"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UnitCounter = /*#__PURE__*/function (_Component) {
  _inherits(UnitCounter, _Component);

  var _super = _createSuper(UnitCounter);

  function UnitCounter() {
    var _this;

    _classCallCheck(this, UnitCounter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "totalQuantity", function (skus) {
      var skuValues = Array.from(skus.values());
      return skuValues.reduce(function (sum, currentValue, currentIndex, array) {
        return sum + currentValue.quantity;
      }, 0);
    });

    return _this;
  }

  _createClass(UnitCounter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          skus = _this$props.skus,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var counter = 0;

      var contCss = function contCss() {
        return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tposition: absolute;\n\t\t\tbottom: 0;\n\t\t\tright: 0;\n\t\t\twidth: 1.2em;\n\t\t\theight: 1.2em;\n\t\t\tdisplay: inline-block;\n\t\t\ttext-align: center;\n\t\t\tline-height: 1.2;\n\t\t\t&:after {\n\t\t\t\tright: -4px;\n\t\t\t\tcontent: \"\";\n\t\t\t\tbackground: #f89eb0;\n\t\t\t\tborder-radius: 1.2em;\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 100%;\n\t\t\t\twidth: 1.2em;\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t}\n\t\t"])));
      };

      var numberCss = function numberCss() {
        return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\tposition: relative;\n\t\t\tz-index: 2;\n\t\t\tright: -4px;\n\t\t\ttop: 0px;\n\t\t"])));
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        css: contCss,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Span, _objectSpread(_objectSpread({
          css: numberCss,
          styles: {
            pcFontSize: 10,
            spFontSize: 10,
            fontFace: "sansserif",
            text_align: "center",
            bold: true
          },
          type: "bag"
        }, rest), {}, {
          children: this.totalQuantity(skus)
        }))
      });
    }
  }]);

  return UnitCounter;
}(_react.Component);

exports.UnitCounter = UnitCounter;
var _default = UnitCounter;
exports["default"] = _default;

//# sourceMappingURL=UnitCounter.js.map