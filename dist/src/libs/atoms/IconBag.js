"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconBag = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _reactRedux = require("react-redux");

var _action = require("../redux/action");

var _StoreContext = _interopRequireDefault(require("../context/StoreContext"));

var _reduce = _interopRequireDefault(require("lodash/reduce"));

var Store = _interopRequireWildcard(require("../store"));

var LibsAtoms = _interopRequireWildcard(require("./"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

var _excluded = ["type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var IconBag = function IconBag(props) {
  var type = props.type,
      rest = _objectWithoutProperties(props, _excluded);

  var dispatch = (0, _reactRedux.useDispatch)();

  var useQuantity = function useQuantity() {
    var _useContext = (0, _react.useContext)(_StoreContext["default"]),
        checkout = _useContext.store.checkout;

    var items = checkout ? checkout.lineItems : [];
    var total = (0, _reduce["default"])(items, function (acc, item) {
      return acc + item.quantity;
    }, 0);
    return [total !== 0, total];
  };

  var onBag = function onBag() {
    dispatch((0, _action.OverlayOpen)({
      element: Store.Bag,
      props: _objectSpread({}, rest)
    }));
  };

  var bacCss = function bacCss() {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t"])));
  };

  var bagUnitCont = function bagUnitCont() {
    return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbackground-color: #000;\n\t\twidth: 1rem;\n\t\theight: 1rem;\n\t\tborder-radius: 50%;\n\t\tcolor: #fff;\n\t\tfont-size: 0.625rem;\n\t\tline-height: 1;\n\t\ttransform: translate(50%, -50%);\n\t\tdisplay: -webkit-flex;\n\t\tdisplay: -ms-flexbox;\n\t\tdisplay: flex;\n\t\t-ms-flex-align: center;\n\t\t-webkit-align-items: center;\n\t\t-moz-align-items: center;\n\t\t-ms-align-items: center;\n\t\t-o-align-items: center;\n\t\talign-items: center;\n\t\t-webkit-justify-content: center;\n\t\t-ms-justify-content: center;\n\t\tjustify-content: center;\n\t"])));
  };

  var _useQuantity = useQuantity(),
      _useQuantity2 = _slicedToArray(_useQuantity, 2),
      hasItems = _useQuantity2[0],
      quantity = _useQuantity2[1];

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", _objectSpread(_objectSpread({}, rest), {}, {
    css: bacCss,
    onClick: function onClick() {
      onBag();
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Icon, {
      type: "bag"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      css: bagUnitCont,
      children: quantity
    })]
  }));
};

exports.IconBag = IconBag;

//# sourceMappingURL=IconBag.js.map