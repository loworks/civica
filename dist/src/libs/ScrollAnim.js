"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollAnim = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

var _gsap = require("gsap");

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

var SCENE_STATE_BEFORE = "BEFORE";
var SCENE_STATE_DURING = "DURING";
var SCENE_STATE_AFTER = "AFTER";

var ScrollAnim = /*#__PURE__*/function (_Component) {
  _inherits(ScrollAnim, _Component);

  var _super = _createSuper(ScrollAnim);

  function ScrollAnim(props) {
    var _this;

    _classCallCheck(this, ScrollAnim);

    _this = _super.call(this, props);
    _this.triger = "";
    _this.elem = _this.props.elem;
    _this.offset = _this.props.offset ? _this.props.offset : 0;
    _this.progress = 0;
    _this._state = SCENE_STATE_BEFORE;
    _this.duration = _this.props.duration ? _this.props.duration : 0;
    _this.scrollOffset = {
      start: 0,
      end: 0
    };
    _this.mount = false;
    return _this;
  }

  _createClass(ScrollAnim, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mount = true;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop(elem) {
      return elem && typeof elem.scrollTop === "number" ? elem.scrollTop : window.pageYOffset || 0;
    } // get scroll left value

  }, {
    key: "_getScrollLeft",
    value: function _getScrollLeft(elem) {
      return elem && typeof elem.scrollLeft === "number" ? elem.scrollLeft : window.pageXOffset || 0;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset(elem, relativeToViewport) {
      var offset = {
        top: 0,
        left: 0
      };

      if (elem && elem.getBoundingClientRect) {
        // check if available
        var rect = elem.getBoundingClientRect();
        offset.top = rect.top;
        offset.left = rect.left;

        if (!relativeToViewport) {
          offset.top += this._getScrollTop();
          offset.left += this._getScrollLeft();
        }
      }

      return offset;
    }
  }, {
    key: "init",
    value: function init() {
      var elem = this.elem.current;
      this.updateScrollOffset(this.props.screenH);

      var TweenObject = _gsap.TweenMax.fromTo(elem, 1, {
        y: "1%",
        opacity: 0,
        scale: 0.5
      }, {
        y: "0%",
        opacity: 1,
        scale: 1
      });

      this.tween = new _gsap.TimelineMax({
        smoothChildTiming: true
      }).add(TweenObject);
      this.tween.pause();
      this.mount = true;
    }
  }, {
    key: "updateScrollOffset",
    value: function updateScrollOffset(screenH) {
      if (!this.mount) return;
      var elem = this.elem.current;
      this.scrollOffset = {
        start: this._getOffset(elem).top + this.offset
      }; // take away triggerHook portion to get relative to top

      this.scrollOffset.start -= screenH * 0.5;
      this.scrollOffset.end = this.scrollOffset.start + this.duration;
      /*console.log(
        "updateScrollOffset",
        screenH,
         this.elem,
        this.scrollOffset.start,
        this.scrollOffset.end
      )*/
    }
  }, {
    key: "getPosition",
    value: function getPosition(_ref) {
      var scrollY = _ref.scrollY;
      if (!this.mount) return;
      var progress = 0;
      var newProgress = 0;
      var doUpdate = false;

      if (this.duration > 0) {
        progress = (scrollY - this.scrollOffset.start) / (this.scrollOffset.end - this.scrollOffset.start);
      } else {
        progress = scrollY >= this.scrollOffset.start ? 1 : 0;
      }

      if (progress < 0 && this._state !== SCENE_STATE_BEFORE) {
        newProgress = 0;
        this._state = SCENE_STATE_BEFORE;
        doUpdate = true;
      } else if (progress >= 0 && progress < 1) {
        newProgress = progress;
        this._state = SCENE_STATE_DURING;
        doUpdate = true;
      } else if (progress >= 1 && this._state !== SCENE_STATE_AFTER) {
        newProgress = 1;
        this._state = SCENE_STATE_AFTER;
        doUpdate = true;
      }

      if (doUpdate) {
        this.tween.progress(newProgress).pause();
        /* console.log(
          "getPosition",
          newProgress,
          scrollY,
          this.scrollOffset.start,
          this.scrollOffset.end
        )*/
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.getPosition(this.props);
      this.updateScrollOffset(this.props.screenH);
      return null;
    }
  }]);

  return ScrollAnim;
}(_react.Component);

exports.ScrollAnim = ScrollAnim;

var _default = (0, _reactRedux.connect)(function (state) {
  return {
    scrollY: state.EnterFrameReducer.scrollY,
    screenW: state.ResizeReducer.screenWidth,
    screenH: state.ResizeReducer.screenHeight
  };
}, null, null, {
  forwardRef: true
})(ScrollAnim);

exports["default"] = _default;

//# sourceMappingURL=ScrollAnim.js.map