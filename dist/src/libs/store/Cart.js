"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _StoreContext = _interopRequireDefault(require("../context/StoreContext"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var Func = _interopRequireWildcard(require("../common/func"));

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var Common = _interopRequireWildcard(require("../common"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cart = function Cart() {
  var itemContCss = function itemContCss(props) {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding: 10px 0;\n\t\t\tborder-top: 1px solid #efefef;\n\t\t\t> * {\n\t\t\t\tline-height: 0;\n\t\t\t\talign-self: center;\n\t\t\t}\n\t\t"])));
  };

  var buttonCss = function buttonCss(props) {
    return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\twidth: 100%;\n\t\t\t", ";\n\t\t"])), Func.getPcSpVwValue("margin-top", 30, 30));
  };

  var _useContext = (0, _react.useContext)(_StoreContext["default"]),
      checkout = _useContext.store.checkout;

  var handleCheckout = function handleCheckout() {
    var locale = checkout.currencyCode == "USD" ? "en" : "ja";
    var url = "".concat(checkout.webUrl, "&locale=").concat(locale);
    window.open(url);
  };

  var lineItems = checkout.lineItems.map(function (item) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ListItem["default"], {
      item: item
    }, item.id.toString());
  });

  if (checkout.lineItems.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.P, {
      styles: {
        spacePc: "0 0 50 0",
        fontPc: {
          fontSize: 26,
          fontFace: "sansserif",
          bold: true,
          textAlign: "center"
        },
        fontSp: {
          fontSize: 28,
          fontFace: "sansserif",
          bold: true,
          textAlign: "center"
        }
      },
      children: "Your bag is empty."
    });
  } else {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [lineItems, /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        css: itemContCss,
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H4, {
          styles: {
            fontFace: "sansself",
            pcFontSize: 14,
            spFontSize: 14
          },
          children: "Subtotal"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Span, {
          styles: {
            fontFace: "sansself"
          },
          children: Common.StoreFunc.changeFormatToPrice(checkout.subtotalPriceV2.amount, checkout.currencyCode)
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ButtonElement, {
        css: buttonCss,
        disabled: checkout.lineItems.length === 0,
        onClick: handleCheckout,
        spanStyles: {
          fontPc: {
            fontSize: 20,
            fontFace: "sansserif",
            bold: true,
            letterSpacing: ".5"
          },
          fontSp: {
            fontSize: 20,
            fontFace: "sansserif",
            bold: true,
            letterSpacing: ".5"
          }
        },
        children: "Check out"
      })]
    });
  }
};

var _default = Cart;
exports["default"] = _default;

//# sourceMappingURL=Cart.js.map