"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WindowResize = void 0;

var _reactRedux = require("react-redux");

var _react = require("react");

var _action = require("../action");

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

var singleton = Symbol();
var singletonEnforcer = Symbol();

var WindowResize = /*#__PURE__*/function (_Component) {
  _inherits(WindowResize, _Component);

  var _super = _createSuper(WindowResize);

  function WindowResize(props, enforcer) {
    var _this;

    _classCallCheck(this, WindowResize);

    _this = _super.call(this, props);
    _this._breakpoints = [480, 768, 960, 1280];
    _this.currentSize = {};
    return _this;
  }

  _createClass(WindowResize, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;
      var instance = WindowResize.instance;
      window.addEventListener("resize", function () {
        instance.setSize();
        dispatch((0, _action.Resize)(instance.currentSize.w, instance.currentSize.h));
      });
    }
  }, {
    key: "setSize",
    value: function setSize() {
      if (typeof window !== "undefined") {
        var instance = WindowResize.instance;
        var screenW = window.innerWidth;
        var screenH = window.innerHeight;
        WindowResize.current = instance.getCurrentSize(screenW);
        instance.currentSize = {
          w: screenW,
          h: screenH
        };
      }
    }
  }, {
    key: "getCurrentSize",
    value: function getCurrentSize(size) {
      if (size < this._breakpoints[0]) {
        return WindowResize.sp;
      } else if (this._breakpoints[0] <= size && size < this._breakpoints[1]) {
        return WindowResize.pab;
      } else if (this._breakpoints[1] <= size && size < this._breakpoints[2]) {
        return WindowResize.tab;
      } else if (this._breakpoints[2] <= size && size < this._breakpoints[3]) {
        return WindowResize.pc;
      } else if (this._breakpoints[3] <= size) {
        return WindowResize.large;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "instance",
    get: function get() {
      if (!this[singleton]) {
        this[singleton] = new WindowResize(this.props, singletonEnforcer);
      }

      return this[singleton];
    }
  }]);

  return WindowResize;
}(_react.Component);

exports.WindowResize = WindowResize;

_defineProperty(WindowResize, "current", null);

_defineProperty(WindowResize, "sp", "sp");

_defineProperty(WindowResize, "pab", "pab");

_defineProperty(WindowResize, "tb", "tab");

_defineProperty(WindowResize, "pc", "pc");

_defineProperty(WindowResize, "large", "large");

_defineProperty(WindowResize, "moreTab", "moretab");

_defineProperty(WindowResize, "morePc", "morePc");

_defineProperty(WindowResize, "lessPab", "lessPab");

_defineProperty(WindowResize, "lessTab", "lessTab");

_defineProperty(WindowResize, "currentType", function (props) {
  var instance = WindowResize.instance;
  var breakPoints = instance._breakpoints;

  if (!instance.currentSize.w) {
    instance.setSize();
  }

  var screenW = instance.currentSize.w;

  if (props === WindowResize.morePc) {
    if (screenW > breakPoints[2]) {
      return true;
    } else {
      return false;
    }
  }

  if (props === WindowResize.lessPab) {
    if (screenW < breakPoints[1]) {
      return true;
    } else {
      return false;
    }
  }

  if (props === WindowResize.lessTab) {
    if (screenW < breakPoints[2]) {
      return true;
    } else {
      return false;
    }
  }
});

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    width: state.screenWidth,
    height: state.screenHeight
  };
}, null, null, {
  forwardRef: true
})(WindowResize);

exports["default"] = _default;

//# sourceMappingURL=WindowResize.js.map