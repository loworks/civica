"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _action = require("../redux/action");

var Style = _interopRequireWildcard(require("../styles"));

var _reactRedux = require("react-redux");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var OverLay = /*#__PURE__*/function (_Component) {
  _inherits(OverLay, _Component);

  var _super = _createSuper(OverLay);

  function OverLay(props) {
    var _this;

    _classCallCheck(this, OverLay);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "contCss", function () {
      return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\twidth: 100vw;\n\t\t\theight: 100vh;\n\t\t\tposition: fixed;\n\t\t\tz-index: 10000;\n\t\t\ttop: 0px;\n\t\t\tleft: 0px;\n\t\t\tpointer-events: none;\n\t\t\topacity: 0;\n\t\t\t.on-overlay & {\n\t\t\t\topacity: 1;\n\t\t\t\tpointer-events: auto;\n\t\t\t}\n\t\t"])));
    });

    _defineProperty(_assertThisInitialized(_this), "bgCss", function () {
      return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tcolor: #000;\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0px;\n\t\t\tleft: 0px;\n\t\t\tbackground-color: #000;\n\t\t\topacity: 0.85;\n\t\t"])));
    });

    _defineProperty(_assertThisInitialized(_this), "closeHandler", function () {
      var dispatch = _this.props.dispatch;
      var cont = document.getElementsByTagName("html")[0];
      cont.classList.remove("on-overlay");
      dispatch((0, _action.OverlayClose)());
    });

    _this.content = null;
    return _this;
  }

  _createClass(OverLay, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.content !== this.content) {
        if (nextProps.content !== null) {
          this.content = nextProps.content;
          var className = "on-overlay";
          var cont = document.getElementsByTagName("html")[0];
          cont.classList.add(className);
        } else {
          this.content = null;
          this.closeHandler();
        }

        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var contentType = this.content;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "overlay",
        css: this.contCss,
        children: [contentType ? /*#__PURE__*/(0, _jsxRuntime.jsx)(contentType.element, _objectSpread({}, this.content.props)) : "", /*#__PURE__*/(0, _jsxRuntime.jsx)(Style.Shape.Rect, {
          css: this.bgCss,
          onClick: function onClick() {
            _this2.closeHandler();
          }
        })]
      });
    }
  }]);

  return OverLay;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, filter) {
  return {
    content: state.OverlayReducer.content,
    overlayState: state.OverlayReducer.state
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, null, null, {
  forwardRef: true
})(OverLay);

exports["default"] = _default;

//# sourceMappingURL=Overlay.js.map