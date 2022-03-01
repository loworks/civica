"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.VideoElement = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ElementHoc = require("./ElementHoc");

var _WindowResize = require("../redux/event/WindowResize");

var _react2 = require("@emotion/react");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["className", "onload", "src", "forwardedRef", "children", "data", "caption"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var VideoElement = /*#__PURE__*/function (_PureComponent) {
  _inherits(VideoElement, _PureComponent);

  var _super = _createSuper(VideoElement);

  function VideoElement(props) {
    var _this;

    _classCallCheck(this, VideoElement);

    _this = _super.call(this, props);
    _this.videoCont = /*#__PURE__*/_react["default"].createRef();
    _this.videoElement = null;
    return _this;
  }

  _createClass(VideoElement, [{
    key: "play",
    value: function play() {
      var promise = this.videoElement.play();

      if (promise !== undefined) {
        promise["catch"](function (error) {// Show a UI element to let the user manually start playback
        }).then(function () {// Auto-play started
        });
      }
    }
  }, {
    key: "pause",
    value: function pause() {
      var promise = this.videoElement.pause();
      this.videoElement.currentTime = 0;

      if (promise !== undefined) {
        promise["catch"](function (error) {// Auto-play was prevented
          // Show a UI element to let the user manually start playback
        }).then(function () {// Auto-play started
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          onload = _this$props.onload,
          onloadmetadata = _this$props.onloadmetadata,
          ontimeupdate = _this$props.ontimeupdate;
      this.videoElement = this.videoCont.getElementsByTagName("video")[0];
      this.videoElement.addEventListener("error", function (event) {//  console.log("state -- videoElement -- error", event)
      });
      this.videoElement.addEventListener("timeupdate", function (event) {
        if (ontimeupdate) ontimeupdate(_this2, event);
      });
      this.videoElement.addEventListener("loadedmetadata", function (event) {
        if (onloadmetadata) onloadmetadata(_this2, event.target.duration);
      });

      if (this.videoElement) {
        this.videoElement.onloadeddata = function (event) {
          event.target.classList.add("loaded");
          if (onload) onload(_this2);
        };
      }

      this.videoElement.load();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          onload = _this$props2.onload,
          src = _this$props2.src,
          forwardedRef = _this$props2.forwardedRef,
          children = _this$props2.children,
          data = _this$props2.data,
          _this$props2$caption = _this$props2.caption,
          caption = _this$props2$caption === void 0 ? null : _this$props2$caption,
          rest = _objectWithoutProperties(_this$props2, _excluded);

      var getElementWidth = function getElementWidth(props, type, parent) {
        var keys = type == "pc" ? ["widthPc", "width_pc"] : ["widthSp", "width_sp"];
        return props[keys[0]] || props[keys[1]] ? props[keys[0]] ? props[keys[0]] : props[keys[1]] : parent && (parent[keys[0]] || parent[keys[1]]) ? parent[keys[0]] ? parent[keys[0]] : parent[keys[1]] : 100;
      };

      var stylesObj = {
        display: "block"
      };
      var styles = data.instance.styles; //const videoSrc = styles.image.fluid.src ? null : styles.image.file.url

      var videoSrc = _WindowResize.WindowResize.currentType(_WindowResize.WindowResize.lessPab) ? styles.imageSp ? styles.imageSp : styles.image : styles.image;
      styles.widthPc = getElementWidth(styles, "pc");
      styles.widthSp = getElementWidth(styles, "sp");
      var classStr = data.instance.styles["class"];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        ref: forwardedRef,
        css: data.func(stylesObj, data.instance),
        className: "".concat(className ? className : "", " img-cont ").concat(onload ? "img-element" : "", " ").concat(classStr ? classStr : "", " video-cont")
      }, rest), {}, {
        ref: function ref(el) {
          _this3.videoCont = el;
        },
        dangerouslySetInnerHTML: {
          __html: "\n        <video\n\n          muted\n          playsinline\n        >\n        <source src=\"".concat(videoSrc.file.url, "\" type=\"video/mp4\" />\n        </video>")
        }
      }));
    }
  }]);

  return VideoElement;
}(_react.PureComponent);

exports.VideoElement = VideoElement;

var _default = (0, _ElementHoc.elementHoc)(VideoElement);

exports["default"] = _default;

//# sourceMappingURL=VideoElement.js.map