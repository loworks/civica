"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Reset = /*#__PURE__*/function (_Component) {
  _inherits(Reset, _Component);

  var _super = _createSuper(Reset);

  function Reset() {
    _classCallCheck(this, Reset);

    return _super.apply(this, arguments);
  }

  _createClass(Reset, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Global, {
        styles: (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t\thtml,\n\t\t\t\t\tbody,\n\t\t\t\t\tdiv,\n\t\t\t\t\tspan,\n\t\t\t\t\tapplet,\n\t\t\t\t\tobject,\n\t\t\t\t\tiframe,\n\t\t\t\t\th1,\n\t\t\t\t\th2,\n\t\t\t\t\th3,\n\t\t\t\t\th4,\n\t\t\t\t\th5,\n\t\t\t\t\th6,\n\t\t\t\t\tp,\n\t\t\t\t\tblockquote,\n\t\t\t\t\tpre,\n\t\t\t\t\ta,\n\t\t\t\t\tabbr,\n\t\t\t\t\tacronym,\n\t\t\t\t\taddress,\n\t\t\t\t\tbig,\n\t\t\t\t\tcite,\n\t\t\t\t\tcode,\n\t\t\t\t\tdel,\n\t\t\t\t\tdfn,\n\t\t\t\t\tem,\n\t\t\t\t\timg,\n\t\t\t\t\tins,\n\t\t\t\t\tkbd,\n\t\t\t\t\tq,\n\t\t\t\t\ts,\n\t\t\t\t\tsamp,\n\t\t\t\t\tsmall,\n\t\t\t\t\tstrike,\n\t\t\t\t\tstrong,\n\t\t\t\t\tsub,\n\t\t\t\t\tsup,\n\t\t\t\t\ttt,\n\t\t\t\t\tvar,\n\t\t\t\t\tb,\n\t\t\t\t\tu,\n\t\t\t\t\ti,\n\t\t\t\t\tcenter,\n\t\t\t\t\tdl,\n\t\t\t\t\tdt,\n\t\t\t\t\tdd,\n\t\t\t\t\tol,\n\t\t\t\t\tul,\n\t\t\t\t\tli,\n\t\t\t\t\tfieldset,\n\t\t\t\t\tform,\n\t\t\t\t\tlabel,\n\t\t\t\t\tlegend,\n\t\t\t\t\ttable,\n\t\t\t\t\tcaption,\n\t\t\t\t\ttbody,\n\t\t\t\t\ttfoot,\n\t\t\t\t\tthead,\n\t\t\t\t\ttr,\n\t\t\t\t\tth,\n\t\t\t\t\ttd,\n\t\t\t\t\tarticle,\n\t\t\t\t\taside,\n\t\t\t\t\tcanvas,\n\t\t\t\t\tdetails,\n\t\t\t\t\tembed,\n\t\t\t\t\tfigure,\n\t\t\t\t\tfigcaption,\n\t\t\t\t\tfooter,\n\t\t\t\t\theader,\n\t\t\t\t\thgroup,\n\t\t\t\t\tmenu,\n\t\t\t\t\tnav,\n\t\t\t\t\toutput,\n\t\t\t\t\truby,\n\t\t\t\t\tsection,\n\t\t\t\t\tsummary,\n\t\t\t\t\ttime,\n\t\t\t\t\tmark,\n\t\t\t\t\taudio,\n\t\t\t\t\tvideo {\n\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\tborder: 0;\n\t\t\t\t\t\tfont: inherit;\n\t\t\t\t\t\tfont-size: 100%;\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\thtml {\n\t\t\t\t\t\tline-height: 1;\n\t\t\t\t\t}\n\t\t\t\t\tol,\n\t\t\t\t\tul {\n\t\t\t\t\t\tlist-style: none;\n\t\t\t\t\t}\n\t\t\t\t\ttable {\n\t\t\t\t\t\tborder-collapse: collapse;\n\t\t\t\t\t\tborder-spacing: 0;\n\t\t\t\t\t}\n\t\t\t\t\tcaption,\n\t\t\t\t\tth,\n\t\t\t\t\ttd {\n\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\t\tvertical-align: middle;\n\t\t\t\t\t}\n\t\t\t\t\tq,\n\t\t\t\t\tblockquote {\n\t\t\t\t\t\tquotes: none;\n\t\t\t\t\t}\n\t\t\t\t\tq:before,\n\t\t\t\t\tq:after,\n\t\t\t\t\tblockquote:before,\n\t\t\t\t\tblockquote:after {\n\t\t\t\t\t\tcontent: \"\";\n\t\t\t\t\t\tcontent: none;\n\t\t\t\t\t}\n\t\t\t\t\ta {\n\t\t\t\t\t\ttext-decoration: none;\n\t\t\t\t\t}\n\t\t\t\t\ta img {\n\t\t\t\t\t\tborder: none;\n\t\t\t\t\t}\n\t\t\t\t\timg {\n\t\t\t\t\t\tvertical-align: bottom;\n\t\t\t\t\t}\n\t\t\t\t\tarticle,\n\t\t\t\t\taside,\n\t\t\t\t\tdetails,\n\t\t\t\t\tfigcaption,\n\t\t\t\t\tfigure,\n\t\t\t\t\tfooter,\n\t\t\t\t\theader,\n\t\t\t\t\thgroup,\n\t\t\t\t\tmain,\n\t\t\t\t\tmenu,\n\t\t\t\t\tnav,\n\t\t\t\t\tsection,\n\t\t\t\t\tsummary {\n\t\t\t\t\t\tdisplay: block;\n\t\t\t\t\t}\n\t\t\t\t"])))
      });
    }
  }]);

  return Reset;
}(_react.Component);

var _default = Reset;
exports["default"] = _default;

//# sourceMappingURL=reset.js.map