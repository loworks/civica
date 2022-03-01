"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var _gatsby = require("gatsby");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Image = /*#__PURE__*/function (_PureComponent) {
  _inherits(Image, _PureComponent);

  var _super = _createSuper(Image);

  function Image(props) {
    var _this;

    _classCallCheck(this, Image);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "imgCss", function () {
      var ratio = _this.state.ratio;
      return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t> div {\n\t\t\t\t", "\n\t\t\t}\n\t\t"])), ratio ? {
        "padding-bottom": ratio + "% !important"
      } : "");
    });

    _defineProperty(_assertThisInitialized(_this), "setRatio", function (value) {
      _this.setState({
        ratio: value
      });

      _this.setState({
        ratio: value
      }); // this.state.ratio = value

    });

    _defineProperty(_assertThisInitialized(_this), "getRatio", function () {
      return _this.state.ratio === 0 ? _this.ratio : _this.state.ratio;
    });

    _this.ratio = 0;
    _this.state = {
      ratio: 0
    };
    return _this;
  }

  _createClass(Image, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setRatio(this.ratio);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_gatsby.StaticQuery, {
        query: (0, _gatsby.graphql)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t\tquery {\n\t\t\t\t\t\timages: allFile {\n\t\t\t\t\t\t\tedges {\n\t\t\t\t\t\t\t\tnode {\n\t\t\t\t\t\t\t\t\trelativePath\n\t\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\t\tchildImageSharp {\n\t\t\t\t\t\t\t\t\t\tfluid(maxWidth: 1600, quality: 80) {\n\t\t\t\t\t\t\t\t\t\t\t...GatsbyImageSharpFluid\n\t\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t"]))),
        render: function render(data) {
          var image = data.images.edges.find(function (n) {
            return n.node.relativePath.includes(props.src);
          });

          if (!image) {
            return null;
          }

          var fluid = image.node.childImageSharp.fluid;
          _this2.ratio = 1 / fluid.aspectRatio * 100;

          _this2.setRatio(_this2.ratio);

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_gatsbyImage["default"], {
            css: _this2.imgCss,
            alt: props.alt,
            fluid: fluid,
            fadeIn: props.onload ? false : true,
            onLoad: props.onload ? props.onload : null
          });
        }
      });
    }
  }]);

  return Image;
}(_react.PureComponent);

var _default = Image;
exports["default"] = _default;

//# sourceMappingURL=image.js.map