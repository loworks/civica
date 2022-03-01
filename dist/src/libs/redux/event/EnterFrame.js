"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

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

/**
 * クラス		EnterFrame
 * 継承
 * サブクラス
 */
var EnterFrame = /*#__PURE__*/function (_Component) {
  _inherits(EnterFrame, _Component);

  var _super = _createSuper(EnterFrame);

  function EnterFrame(props) {
    var _this;

    _classCallCheck(this, EnterFrame);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "init", function (dispatch) {
      _this.dispatch = dispatch;
    });

    _this._framerate = 30;

    _this.init(_this.props.dispatch);

    _this.fps = 30.0;
    _this.frameLength = 30;
    _this.frame = 0;
    _this.ready = false;
    return _this;
  }

  _createClass(EnterFrame, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ready = true;
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.ready) return false;

      var requestAnimationFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
          window.setTimeout(callback, 2000.0);
        };
      }();

      var dispatch = this.props.dispatch;
      var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);

      var getTime = function getTime() {
        return now && now.call(performance) || new Date().getTime();
      };

      var startTime = getTime();
      var me = this;

      (function loop() {
        requestAnimationFrame(loop);
        var lastTime = getTime();
        var prevFrame = me.frame;
        me.frame = Math.floor((lastTime - startTime) / (1000.0 / me.fps) % me.frameLength);

        if (prevFrame !== me.frame) {
          (0, _action.EnterFrameHandler)(dispatch, me.frame, window.pageXOffset, window.pageYOffset, document.getElementsByTagName("html")[0]);
        }
      })();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }], [{
    key: "framerate",
    get: function get() {
      return this._framerate;
    }
  }]);

  return EnterFrame;
}(_react.Component);

var _default = (0, _reactRedux.connect)(null, {
  EnterFrameHandler: _action.EnterFrameHandler
}, null, {
  forwardRef: true
})(EnterFrame);

exports["default"] = _default;

//# sourceMappingURL=EnterFrame.js.map