"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EmbedElement = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ElementHoc = require("./ElementHoc");

var _react2 = require("@emotion/react");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var _excluded = ["className", "onload", "src", "forwardedRef", "children", "data", "caption"];

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

var EmbedElement = /*#__PURE__*/function (_PureComponent) {
  _inherits(EmbedElement, _PureComponent);

  var _super = _createSuper(EmbedElement);

  function EmbedElement() {
    _classCallCheck(this, EmbedElement);

    return _super.apply(this, arguments);
  }

  _createClass(EmbedElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          onload = _this$props.onload,
          src = _this$props.src,
          forwardedRef = _this$props.forwardedRef,
          children = _this$props.children,
          data = _this$props.data,
          _this$props$caption = _this$props.caption,
          caption = _this$props$caption === void 0 ? null : _this$props$caption,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var videoCss = function videoCss() {
        return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\tposition: relative;\n\t\t\t\theight: 0;\n\t\t\t\tpadding: 0 0 56.25%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tiframe {\n\t\t\t\t\tposition: absolute;\n\n\t\t\t\t\tleft: 0;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t}\n\t\t\t"])));
      };

      var stylesObj = {
        display: "block"
      };
      var type = data.instance.styles.type;

      var getEmbedElement = function getEmbedElement() {
        if (type === "Giphy") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
            src: "https://giphy.com/embed/".concat(data.instance.styles.embedId),
            width: "100%",
            height: "100%",
            frameBorder: "0",
            "class": "giphy-embed",
            allowFullScreen: true
          });
        } else if (type === "Vimeo2") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
            className: "bg-video",
            muted: "",
            autoplay: "",
            loop: "",
            playsinline: "",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
              src: "https://player.vimeo.com/external/453763810.hd.mp4?s=2f1533511bd577f1196b4f9a2e74e5afa6e9cb57&profile_id=175",
              type: "video/mp4"
            })
          });
        } else if (type === "Vimeo") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
            src: "http://player.vimeo.com/video/".concat(data.instance.styles.embedId),
            width: "100%",
            height: "100%",
            frameborder: "0",
            autoplay: "1"
          });
        } else if (type === "Youtube") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
            src: "https://www.youtube.com/embed/".concat(data.instance.styles.embedId),
            width: "100%",
            height: "100%",
            frameborder: "0",
            autoplay: "1"
          });
        }
      };

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        ref: forwardedRef,
        css: [videoCss(), data.func(stylesObj, data.instance)],
        className: "".concat(className ? className : "giphy-item", " embed-cont ").concat(onload ? "img-element" : "")
      }, rest), {}, {
        children: getEmbedElement()
      }));
    }
  }]);

  return EmbedElement;
}(_react.PureComponent);

exports.EmbedElement = EmbedElement;

var _default = (0, _ElementHoc.elementHoc)(EmbedElement);

exports["default"] = _default;

//# sourceMappingURL=EmbedElement.js.map