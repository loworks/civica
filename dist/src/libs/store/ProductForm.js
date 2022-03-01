"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _find = _interopRequireDefault(require("lodash/find"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@emotion/react");

var _StoreContext = _interopRequireDefault(require("../context/StoreContext"));

var _reactRedux = require("react-redux");

var _action = require("../redux/action");

var Styles = _interopRequireWildcard(require("../styles"));

var Store = _interopRequireWildcard(require("./"));

var Common = _interopRequireWildcard(require("../common"));

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductForm = function ProductForm(_ref) {
  var product = _ref.product,
      productInfo = _ref.productInfo;
  var dispatch = (0, _reactRedux.useDispatch)();

  var options = product.options,
      variants = product.variants,
      _product$variants = _slicedToArray(product.variants, 1),
      initialVariant = _product$variants[0],
      minVariantPrice = product.priceRange.minVariantPrice;

  var initialVariantId = 0;
  variants.some(function (variant, index) {
    var avalable = variant.availableForSale;

    if (avalable) {
      initialVariantId = index;
      return true;
    }
  });

  var _useState = (0, _react.useState)(_objectSpread({}, variants[initialVariantId])),
      _useState2 = _slicedToArray(_useState, 2),
      variant = _useState2[0],
      setVariant = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      quantity = _useState4[0],
      setQuantity = _useState4[1];

  var _useContext = (0, _react.useContext)(_StoreContext["default"]),
      addVariantToCart = _useContext.addVariantToCart,
      restoreCheckout = _useContext.restoreCheckout,
      _useContext$store = _useContext.store,
      client = _useContext$store.client,
      adding = _useContext$store.adding;

  var productVariant = client.product.helpers.variantForOptions(product, variant) || variant;

  var _useState5 = (0, _react.useState)(productVariant.availableForSale),
      _useState6 = _slicedToArray(_useState5, 2),
      available = _useState6[0],
      setAvailable = _useState6[1];

  var checkAvailability = (0, _react.useCallback)(function (productId) {
    client.product.fetch(productId).then(function (fetchedProduct) {
      // this checks the currently selected variant for availability
      var result = fetchedProduct.variants.filter(function (variant) {
        return variant.id === productVariant.shopifyId;
      });

      if (result.length > 0) {
        setAvailable(result[0].available);
      }
    });
  }, [client.product, productVariant.shopifyId, variants]);
  (0, _react.useEffect)(function () {
    checkAvailability(product.shopifyId);
  }, [productVariant, checkAvailability, product.shopifyId]);
  var selectOptions;
  options.map(function (_ref2, index) {
    var id = _ref2.id,
        name = _ref2.name,
        values = _ref2.values;
    selectOptions = values.map(function (value) {
      return {
        value: value,
        label: value
      };
    });
  });

  var handleQuantityChange = function handleQuantityChange(selected) {
    var label = selected.label,
        value = selected.value;
    setQuantity(value);
  };

  var handleOptionChange = function handleOptionChange(index) {
    return function (selected) {
      var label = selected.label,
          value = selected.value;

      var currentOptions = _toConsumableArray(variant.selectedOptions);

      currentOptions[index] = _objectSpread(_objectSpread({}, currentOptions[index]), {}, {
        value: value
      });
      var selectedVariant = (0, _find["default"])(variants, function (_ref3) {
        var selectedOptions = _ref3.selectedOptions;
        return (0, _isEqual["default"])(currentOptions, selectedOptions);
      });
      setAvailable(selectedVariant.availableForSale);
      setVariant(_objectSpread({}, selectedVariant));
    };
  };

  var handleAddToCart = function handleAddToCart() {
    addVariantToCart(productVariant.shopifyId, quantity);
    dispatch((0, _action.OverlayOpen)({
      element: Store.Bag
    }));
  };
  /*
   Using this in conjunction with a select input for variants
   can cause a bug where the buy button is disabled, this
   happens when only one variant is available and it's not the
   first one in the dropdown list. I didn't feel like putting
   in time to fix this since its an edge case and most people
   wouldn't want to use dropdown styled selector anyways -
   at least if the have a sense for good design lol.
   */


  var checkDisabled = function checkDisabled(name, value) {
    var match = (0, _find["default"])(variants, {
      selectedOptions: [{
        name: name,
        value: value
      }]
    });
    if (match === undefined) return true;
    if (match.availableForSale === true) return false;
    return true;
  };

  var price = Common.StoreFunc.getPrice(variant.presentmentPrices.edges);

  var contCss = function contCss(props) {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tposition: absolute;\n\t\t\tz-index: 1000;\n\n\t\t\tbackground-color: #fff;\n\n\t\t\ttransform: translateX(-50%);\n\t\t\tleft: 50%;\n\t\t\toverflow-y: scroll;\n\t\t\t", " {\n\t\t\t\twidth: 33vw;\n\t\t\t\tmin-width: 520px;\n\t\t\t\theight: 100vh;\n\t\t\t\tpadding: 5.88235rem 2.94118rem 2.10084rem;\n\t\t\t}\n\t\t\t", " {\n\t\t\t\twidth: 100vw;\n\t\t\t\theight: 80vh;\n\t\t\t\tpadding: 10vw 6vw 20vh 6vw;\n\t\t\t\tborder-radius: 20px 20px 0 0;\n\t\t\t\tbottom: 0px;\n\t\t\t}\n\t\t"])), Styles.Mq.moreTab, Styles.Mq.lessPab);
  };

  var selectContCss = function selectContCss(props) {
    return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t", ";\n\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t"])), Common.Func.getPcSpVwValue("margin-top", 30, 30));
  };

  var selectCss = function selectCss(props) {
    return (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\twidth: calc(100% - 65px);\n\t\t"])));
  };

  var selectQuantityCss = function selectQuantityCss(props) {
    return (0, _react2.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n\t\t\twidth: 50px;\n\t\t"])));
  };

  var buttonCss = function buttonCss(props) {
    return (0, _react2.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n\t\t\t", ";\n\t\t\t", ";\n\t\t\twidth: 100%;\n\t\t"])), Common.Func.getPcSpVwValue("margin-top", 30, 30), Common.Func.getPcSpVwValue("margin-bottom", 30, 30));
  };

  var quentities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var quantityOptions = quentities.map(function (value) {
    return {
      value: value,
      label: value
    };
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    css: contCss,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H1, {
      styles: {
        fontPc: {
          fontSize: 54,
          lineHeight: 54
        },
        fontSp: {
          fontSize: 48,
          lineHeight: 48
        }
      },
      children: productInfo.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.P, {
      styles: {
        fontPc: {
          fontSize: 36,
          lineHeight: 36
        },
        spacePc: "18 0 0 0",
        fontSp: {
          fontSize: 32,
          lineHeight: 32
        },
        spaceSp: "18 0 0 0"
      },
      children: price
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      css: selectContCss,
      children: [options.map(function (_ref4, index) {
        var id = _ref4.id,
            name = _ref4.name,
            values = _ref4.values;
        var selectOptions = values.map(function (value) {
          return {
            value: value,
            label: value
          };
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Select, {
            css: selectCss,
            options: selectOptions,
            onChange: handleOptionChange(index),
            defaultValue: selectOptions[initialVariantId]
          })
        }, id);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react["default"].Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.Select, {
          css: selectQuantityCss,
          options: quantityOptions,
          onChange: handleQuantityChange,
          defaultValue: quantityOptions[0]
        })
      }, "quantity")]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ButtonElement, {
      css: buttonCss,
      disabled: !available || adding,
      onClick: handleAddToCart,
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
      children: !available ? "SOLD OUT" : "Add To Cart"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.RichText, {
      styles: {
        fontPc: {
          fontSize: 14,
          fontFace: "sansserif",
          lineHeight: "24"
        },
        fontSp: {
          fontSize: 14,
          fontFace: "sansserif",
          lineHeight: "24"
        }
      },
      children: productInfo.description
    })]
  });
};

ProductForm.propTypes = {
  product: _propTypes["default"].shape({
    descriptionHtml: _propTypes["default"].string,
    handle: _propTypes["default"].string,
    id: _propTypes["default"].string,
    shopifyId: _propTypes["default"].string,
    images: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      id: _propTypes["default"].string,
      originalSrc: _propTypes["default"].string
    })),
    options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      id: _propTypes["default"].string,
      name: _propTypes["default"].string,
      values: _propTypes["default"].arrayOf(_propTypes["default"].string)
    })),
    productType: _propTypes["default"].string,
    title: _propTypes["default"].string,
    variants: _propTypes["default"].arrayOf(_propTypes["default"].shape({
      availableForSale: _propTypes["default"].bool,
      id: _propTypes["default"].string,
      price: _propTypes["default"].string,
      title: _propTypes["default"].string,
      shopifyId: _propTypes["default"].string,
      selectedOptions: _propTypes["default"].arrayOf(_propTypes["default"].shape({
        name: _propTypes["default"].string,
        value: _propTypes["default"].string
      }))
    }))
  }),
  addVariantToCart: _propTypes["default"].func
};
var _default = ProductForm;
exports["default"] = _default;

//# sourceMappingURL=ProductForm.js.map