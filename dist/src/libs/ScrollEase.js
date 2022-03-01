"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ScrollEase = void 0;

var _react = require("react");

var _reactRedux = require("react-redux");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var ScrollEase = /*#__PURE__*/function (_Component) {
  _inherits(ScrollEase, _Component);

  var _super = _createSuper(ScrollEase);

  function ScrollEase(props) {
    var _this;

    _classCallCheck(this, ScrollEase);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "stylefunc", function (target, scrollY, targetTop) {
      var elem = target.current;
      if (!scrollY) return;

      if (elem) {
        elem.setAttribute("style", "transform: translate3d(0px, " + -scrollY + "px, 0px); position: fixed; top: " + targetTop + "px; left: 0px; margin-top:auto");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getKey", function () {
      return _this.key;
    });

    _defineProperty(_assertThisInitialized(_this), "ready", function () {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (_this.sp) return;
      ScrollEase.readyList++;
      var target = _this.props.target;

      if (visible === false) {
        target.current.setAttribute("style", "visibility:hidden");
      }

      var len = ScrollEase.instances.length;

      if (ScrollEase.readyList === len) {
        ScrollEase.init();
      }
    });

    _this.targetInfo = null;
    _this.targetElem = null;
    _this.key = _this.props.id;
    _this.props = _objectSpread(_objectSpread({}, _this.props), {}, {
      instance: _assertThisInitialized(_this)
    });
    _this.initState = false;
    _this.appear = false;
    _this.sp = false;

    if (typeof window !== "undefined") {
      var regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

      if (window.navigator.userAgent.search(regexp) !== -1) {
        _this.sp = true;
      }

      _this.sp = true;
    }

    ScrollEase.instances.push(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollEase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var target = this.props.target;
      this.targetElem = target.current;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      ScrollEase.instances = [];
      ScrollEase.count = 0;
    }
  }, {
    key: "render",
    value: function render() {
      var scrollY = this.props.scrollY;
      var target = this.props.target;

      if (this.initState && this.targetInfo && !this.sp) {
        this.stylefunc(target, scrollY, this.targetInfo.targetTop);
      }

      return null;
    }
  }]);

  return ScrollEase;
}(_react.Component);

exports.ScrollEase = ScrollEase;

_defineProperty(ScrollEase, "count", 0);

_defineProperty(ScrollEase, "container", null);

_defineProperty(ScrollEase, "instances", []);

_defineProperty(ScrollEase, "readyList", 0);

_defineProperty(ScrollEase, "init", function () {
  if (this.sp) return;
  var instances = ScrollEase.instances;
  var container = ScrollEase.container;
  instances.map(function (instance) {
    var target = instance.props.target;
    instance.targetElem = target.current;
    var clientRect = instance.targetElem.getBoundingClientRect();
    var targetTop = window.pageYOffset + clientRect.y;
    var targetBtm = targetTop + instance.targetElem.clientHeight;
    instance.targetInfo = {
      targetTop: targetTop,
      targetBtm: targetBtm,
      width: clientRect.width,
      height: clientRect.height
    };
    instance.initState = true;
    return instance;
  });

  if (container) {
    container.setAttribute("style", "height:" + container.clientHeight + "px");
  }
});

var getScrollYbyTarget = function getScrollYbyTarget(scrollY, _ref) {
  var target = _ref.target,
      id = _ref.id;
  var targetE = target.current;
  var instance = ScrollEase.instances[id];

  if (instance && !instance.sp) {
    if (instance.initState) {
      if (typeof window !== "undefined") {
        var screenH = window.innerHeight;

        if (targetE) {
          var scrollTop = scrollY;
          var scrollBtm = scrollY + screenH;
          var targetInfo = instance.targetInfo;
          var targetTop = 0;
          var targetBtm = 0;

          if (targetInfo) {
            targetTop = targetInfo.targetTop;
            targetBtm = targetInfo.targetBtm;
          }

          if (scrollBtm > targetTop && scrollTop < targetBtm) {
            if (!instance.appear) instance.appear = true;
            return scrollY;
          } else {
            if (instance.appear) {
              instance.appear = false;
              targetE.removeAttribute("style");
              targetE.setAttribute("style", "visibility:hidden");
            }
          }
        }
      }
    }
  }
};

var _default = (0, _reactRedux.connect)(function (state, props) {
  return {
    scrollY: getScrollYbyTarget(state.EnterFrameReducer.currentScrollState, props)
  };
}, null, null, {
  forwardRef: true
})(ScrollEase);

exports["default"] = _default;

//# sourceMappingURL=ScrollEase.js.map