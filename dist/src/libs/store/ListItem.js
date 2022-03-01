"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsby = require("gatsby");

var _react2 = require("@emotion/react");

var _StoreContext = _interopRequireDefault(require("../context/StoreContext"));

var Common = _interopRequireWildcard(require("../common"));

var Styles = _interopRequireWildcard(require("../styles"));

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LineItem = function LineItem(props) {
  var item = props.item;

  var _useContext = (0, _react.useContext)(_StoreContext["default"]),
      removeLineItem = _useContext.removeLineItem,
      _useContext$store = _useContext.store,
      client = _useContext$store.client,
      checkout = _useContext$store.checkout;

  var contCss = function contCss(props) {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tdisplay: flex;\n\t\t\tpadding: 20px 0;\n\t\t\tjustify-content: space-between;\n\t\t\t&:not(&:first-child) {\n\t\t\t\tborder-top: 1px solid #efefef;\n\t\t\t}\n\t\t"])));
  };

  var leftCont = function leftCont(props) {
    return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\tdisplay: flex;\n\t\t\t> * {\n\t\t\t\t&:not(&:first-child) {\n\t\t\t\t\talign-self: center;\n\t\t\t\t\t", " {\n\t\t\t\t\t\tmargin-left: 5%;\n\t\t\t\t\t}\n\t\t\t\t\t", " {\n\t\t\t\t\t\tmargin-left: 3%;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t"])), Styles.Mq.moreTab, Styles.Mq.lessPab);
  };

  var detailCont = function detailCont(props) {
    return (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\tline-height: 0;\n\t\t"])));
  };

  var imgContCss = function imgContCss(props) {
    return (0, _react2.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\t\tdisplay: inline-block;\n\t\t\theight: 60px;\n\t\t\twidth: 65px;\n\n\t\t\toverflow: hidden;\n\t\t\tposition: relative;\n\t\t\timg {\n\t\t\t\ttransform: translateX(-50%);\n\t\t\t\tleft: 50%;\n\t\t\t\tposition: absolute;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t"])));
  };

  var variantImage = item.variant.image ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    src: item.variant.image.src,
    alt: "".concat(item.title, " product shot")
  }) : null;
  var selectedOptions = item.variant.selectedOptions ? item.variant.selectedOptions.map(function (option) {
    return "".concat(option.name, ": ").concat(option.value, " ");
  }) : null;

  var handleRemove = function handleRemove() {
    removeLineItem(client, checkout.id, item.id);
  };

  var price = Common.StoreFunc.getPrice(item.variant.presentmentPrices);
  price = price.replace("$", "").replace("¥", "").replace(",", "");
  var currencyLetter = Common.Func.getLangKey() == "en" ? "$" : "¥";
  console.log("item.variant --", parseFloat(price), price);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    css: contCss,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      css: leftCont,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_gatsby.Link, {
        css: imgContCss,
        to: "/shop/".concat(item.variant.product.handle, "/"),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Image, {
          src: item.variant.image.src,
          alt: "".concat(item.title, " product shot")
        }), variantImage]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H4, {
          styles: {
            pcLineHeight: 16,
            spacePc: "0 0 8 0",
            spaceSp: "0 0 8 0"
          },
          children: item.title
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          css: detailCont,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(LibsAtoms.Span, {
            styles: {
              fontFace: "sansself"
            },
            children: [item.variant.title === !"Default Title" ? item.variant.title : "", selectedOptions, " ", " | ", "x ".concat(item.quantity), " | ", " "]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            onClick: handleRemove,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Span, {
              styles: {
                fontFace: "sansself"
              },
              children: "Remove"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Span, {
        styles: {
          fontFace: "sansself"
        },
        children: currencyLetter + price * item.quantity
      })
    })]
  });
};

var _default = LineItem;
exports["default"] = _default;

//# sourceMappingURL=ListItem.js.map