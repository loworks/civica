"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var Store = _interopRequireWildcard(require("./"));

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _react2 = require("@emotion/react");

var _action = require("../redux/action");

var Styles = _interopRequireWildcard(require("../styles"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = function _default() {
  var overlayState = (0, _reactRedux.useSelector)(function (state) {
    return state.OverlayReducer.state;
  });
  var dispatch = (0, _reactRedux.useDispatch)();

  var contCss = function contCss(props) {
    return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\tposition: fixed;\n\t\t\topacity: 1;\n\t\t\ttop: 0px;\n\t\t\tright: 0px;\n\n\t\t\tz-index: 102;\n\t\t\tbackground-color: #fff;\n\t\t\ttransform: scaleY(0);\n\t\t\ttransform-origin: top center;\n\t\t\t", " {\n\t\t\t\tpadding: 5.88235rem 2.94118rem 2.10084rem;\n\t\t\t\twidth: 480px;\n\t\t\t}\n\t\t\t", " {\n\t\t\t\tpadding: 5.88235rem 6vw 25vh 6vw;\n\t\t\t\twidth: 100vw;\n\t\t\t\theight: 100vh;\n\t\t\t\toverflow-y: scroll;\n\t\t\t}\n\t\t\t.on-bag & {\n\t\t\t\topacity: 1;\n\t\t\t\tpointer-events: auto;\n\t\t\t\toverflow-y: scroll;\n\t\t\t\ttransition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);\n\t\t\t\ttransform: scaleY(1);\n\t\t\t}\n\t\t"])), Styles.Mq.moreTab, Styles.Mq.lessPab);
  };

  var closeButtonCss = function closeButtonCss(props) {
    return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\tposition: fixed;\n\t\t\ttop: 30px;\n\t\t\tright: 30px;\n\t\t\tz-index: 3;\n\t\t"])));
  };

  var clickHandler = function clickHandler() {
    var cont = document.getElementsByTagName("html")[0];
    cont.classList.remove("on-bag");
    dispatch((0, _action.OverlayClose)());
  };

  (0, _react.useEffect)(function () {
    var cont = document.getElementsByTagName("html")[0];

    if (overlayState) {
      cont.classList.add("on-bag");
    } else {
      cont.classList.remove("on-bag");
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    css: contCss,
    className: "Bag",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ButtonClose, {
      css: closeButtonCss,
      activeClass: "on-bag",
      clickHandler: clickHandler
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Store.Cart, {})]
  });
};

exports["default"] = _default;

//# sourceMappingURL=Bag.js.map