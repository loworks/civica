"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwipeElement = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ElementHoc = require("./ElementHoc");

var _swiper = _interopRequireWildcard(require("swiper"));

require("swiper/swiper.min.css");

var _react2 = require("@emotion/react");

var _react3 = require("swiper/react");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2, _templateObject3;

var _excluded = ["className", "onload", "src", "forwardedRef", "children", "data", "caption", "getBlockElement", "getElementImage"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SwipeElement = /*#__PURE__*/function (_PureComponent) {
  _inherits(SwipeElement, _PureComponent);

  var _super = _createSuper(SwipeElement);

  function SwipeElement() {
    _classCallCheck(this, SwipeElement);

    return _super.apply(this, arguments);
  }

  _createClass(SwipeElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      _swiper["default"].use([_swiper.Navigation, _swiper.Pagination, _swiper.Scrollbar, _swiper.Autoplay]);

      var _this$props = this.props,
          className = _this$props.className,
          onload = _this$props.onload,
          src = _this$props.src,
          forwardedRef = _this$props.forwardedRef,
          children = _this$props.children,
          data = _this$props.data,
          _this$props$caption = _this$props.caption,
          caption = _this$props$caption === void 0 ? null : _this$props$caption,
          getBlockElement = _this$props.getBlockElement,
          getElementImage = _this$props.getElementImage,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var stylesObj = {
        display: "block"
      };

      var swipeNavigationCss = function swipeNavigationCss(props) {
        var swiperSize = 300;
        return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t.swiper-button-prev,\n\t\t\t\t.swiper-button-next {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 50%;\n\t\t\t\t\twidth: calc(44 / 44 * 27) px;\n\t\t\t\t\theight: 44px;\n\t\t\t\t\tmargin-top: calc(-1 * 44 / 2) px;\n\t\t\t\t\tz-index: 10;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tjustify-content: center;\n\t\t\t\t\tcolor: #fff;\n\t\t\t\t\t&.swiper-button-disabled {\n\t\t\t\t\t\topacity: 0.35;\n\t\t\t\t\t\tcursor: auto;\n\t\t\t\t\t\tpointer-events: none;\n\t\t\t\t\t}\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tfont-family: swiper-icons;\n\t\t\t\t\t\tfont-size: 44px;\n\t\t\t\t\t\ttext-transform: none !important;\n\t\t\t\t\t\tletter-spacing: 0;\n\t\t\t\t\t\ttext-transform: none;\n\t\t\t\t\t\tfont-variant: initial;\n\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.swiper-button-prev,\n\t\t\t\t.swiper-container-rtl .swiper-button-next {\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tcontent: \"prev\";\n\t\t\t\t\t}\n\t\t\t\t\tleft: 20px;\n\t\t\t\t\tright: auto;\n\t\t\t\t}\n\t\t\t\t.swiper-button-next,\n\t\t\t\t.swiper-container-rtl .swiper-button-prev {\n\t\t\t\t\t&:after {\n\t\t\t\t\t\tcontent: \"next\";\n\t\t\t\t\t}\n\t\t\t\t\tright: 20px;\n\t\t\t\t\tleft: auto;\n\t\t\t\t}\n\n\t\t\t\t@each $navColorName, $navColorValue in $colors {\n\t\t\t\t\t.swiper-button-prev,\n\t\t\t\t\t.swiper-button-next {\n\t\t\t\t\t\tcolor: #fff !important;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.swiper-button-lock {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"])));
      };

      var swipePageNationCss = function swipePageNationCss(props) {
        return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t.swiper-pagination {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\ttransition: 300ms opacity;\n\t\t\t\t\ttransform: translate3d(0, 0, 0);\n\t\t\t\t\tz-index: 10;\n\t\t\t\t\t&.swiper-pagination-hidden {\n\t\t\t\t\t\topacity: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t/* Common Styles */\n\t\t\t\t.swiper-pagination-fraction,\n\t\t\t\t.swiper-pagination-custom,\n\t\t\t\t.swiper-container-horizontal > .swiper-pagination-bullets {\n\t\t\t\t\tbottom: 10px;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\t\t\t\t/* Bullets */\n\t\t\t\t.swiper-pagination-bullets-dynamic {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tfont-size: 0;\n\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\ttransform: scale(0.33);\n\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active {\n\t\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active-main {\n\t\t\t\t\t\ttransform: scale(1);\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active-prev {\n\t\t\t\t\t\ttransform: scale(0.66);\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active-prev-prev {\n\t\t\t\t\t\ttransform: scale(0.33);\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active-next {\n\t\t\t\t\t\ttransform: scale(0.66);\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-pagination-bullet-active-next-next {\n\t\t\t\t\t\ttransform: scale(0.33);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\twidth: 11px;\n\t\t\t\t\theight: 11px;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\tborder-radius: 50%;\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t\topacity: 0.4;\n\n\t\t\t\t\t.swiper-pagination-clickable & {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.swiper-pagination-bullet-active {\n\t\t\t\t\topacity: 1;\n\t\t\t\t\tbackground: #fff;\n\t\t\t\t}\n\n\t\t\t\t.swiper-container-vertical {\n\t\t\t\t\t> .swiper-pagination-bullets {\n\t\t\t\t\t\tright: 10px;\n\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\ttransform: translate3d(0px, -50%, 0);\n\t\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\t\tmargin: 6px 0;\n\t\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t&.swiper-pagination-bullets-dynamic {\n\t\t\t\t\t\t\ttop: 50%;\n\t\t\t\t\t\t\ttransform: translateY(-50%);\n\t\t\t\t\t\t\twidth: 8px;\n\t\t\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\t\ttransition: 200ms transform, 200ms top;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.swiper-container-horizontal {\n\t\t\t\t\t> .swiper-pagination-bullets {\n\t\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\t\tmargin: 0 4px;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t&.swiper-pagination-bullets-dynamic {\n\t\t\t\t\t\t\tleft: 50%;\n\t\t\t\t\t\t\ttransform: translateX(-50%);\n\t\t\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\t\t\ttransition: 200ms transform, 200ms left;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t&.swiper-container-rtl\n\t\t\t\t\t\t> .swiper-pagination-bullets-dynamic\n\t\t\t\t\t\t.swiper-pagination-bullet {\n\t\t\t\t\t\ttransition: 200ms transform, 200ms right;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t/* Progress */\n\t\t\t\t.swiper-pagination-progressbar {\n\t\t\t\t\tbackground: rgba(0, 0, 0, 0.25);\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\t.swiper-pagination-progressbar-fill {\n\t\t\t\t\t\tbackground: #007aff;\n\n\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\ttransform: scale(0);\n\t\t\t\t\t\ttransform-origin: left top;\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-container-rtl & .swiper-pagination-progressbar-fill {\n\t\t\t\t\t\ttransform-origin: right top;\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-container-horizontal > &,\n\t\t\t\t\t.swiper-container-vertical\n\t\t\t\t\t\t> &.swiper-pagination-progressbar-opposite {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 4px;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t}\n\t\t\t\t\t.swiper-container-vertical > &,\n\t\t\t\t\t.swiper-container-horizontal\n\t\t\t\t\t\t> &.swiper-pagination-progressbar-opposite {\n\t\t\t\t\t\twidth: 4px;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t.swiper-pagination-lock {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t"])));
      };

      var swipeCss = function swipeCss(props) {
        return (0, _react2.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n\t\t\t\toverflow: hidden;\n\t\t\t\t.swiper-container {\n\t\t\t\t\theight: auto;\n\t\t\t\t\t.img-cont {\n\t\t\t\t\t\theight: auto;\n\t\t\t\t\t\twidth: auto;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t"])));
      };

      console.log("embed --- ", data.instance.styles);
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        ref: forwardedRef,
        css: [swipeCss(), swipeNavigationCss(), swipePageNationCss(), data.func(stylesObj, data.instance)()],
        className: "".concat(className ? className : "giphy-item", " embed-cont ").concat(onload ? "img-element" : "")
      }, rest), {}, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react3.Swiper, {
          spaceBetween: 100,
          slidesPerView: 1,
          navigation: true,
          autoplay: {
            delay: 3000
          },
          centeredSlides: true,
          pagination: {
            clickable: true
          },
          grabCursor: true,
          loop: true,
          speed: 600,
          children: data.instance.styles.items && data.instance.styles.items.map(function (item, i) {
            if (item.internal.type === "ContentfulElementBlock") {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react3.SwiperSlide, {
                children: getBlockElement(item, false, i)
              });
            } else if (item.internal.type === "ContentfulElementImage") {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react3.SwiperSlide, {
                children: getElementImage(item, null, false, i)
              });
            }
          })
        })
      }));
    }
  }]);

  return SwipeElement;
}(_react.PureComponent);

exports.SwipeElement = SwipeElement;

var _default = (0, _ElementHoc.elementHoc)(SwipeElement);

exports["default"] = _default;

//# sourceMappingURL=SwipeElement.js.map