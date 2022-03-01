"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RichText = void 0;

var _react = _interopRequireWildcard(require("react"));

var Common = _interopRequireWildcard(require("../common"));

var LibsAtoms = _interopRequireWildcard(require("./"));

var _richTextTypes = require("@contentful/rich-text-types");

var _richText = require("gatsby-source-contentful/rich-text");

var _TextHoc = require("./TextHoc");

var _gatsbyImage = _interopRequireDefault(require("gatsby-image"));

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["forwardedref", "children", "data"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var RichText = /*#__PURE__*/function (_PureComponent) {
  _inherits(RichText, _PureComponent);

  var _super = _createSuper(RichText);

  function RichText() {
    _classCallCheck(this, RichText);

    return _super.apply(this, arguments);
  }

  _createClass(RichText, [{
    key: "render",
    value: function render() {
      var _renderNode2;

      var _this$props = this.props,
          forwardedref = _this$props.forwardedref,
          children = _this$props.children,
          data = _this$props.data,
          rest = _objectWithoutProperties(_this$props, _excluded);

      var Bold = function Bold(_ref) {
        var children = _ref.children;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H3, {
          children: children
        });
      };

      var pcFontSize = data.instance.styles ? data.instance.styles.pcFontSize : null;
      var spFontSize = data.instance.styles ? data.instance.styles.spFontSize : null;
      pcFontSize = pcFontSize ? pcFontSize : null;
      spFontSize = spFontSize ? spFontSize : null;

      var Text = function Text(_ref2) {
        var children = _ref2.children;

        if (children[0][1] === "") {
          return "";
        } else {
          var style = {
            fontPc: {
              fontFace: "sansserif",
              fontSize: 18,
              lineHeight: 26
            },
            fontSp: {
              fontFace: "sansserif",
              fontSize: 16,
              lineHeight: 22
            }
          };
          var fontPc = Object.assign(style.fontPc, data.instance.styles.fontPc);
          var fontSp = Object.assign(style.fontSp, data.instance.styles.fontSp);
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.P, {
            className: "rt-content rt-textfield",
            styles: {
              fontPc: fontPc,
              fontSp: fontSp
            },
            children: children
          });
        }
      };

      var website_url = Common.Config.websiteUrl;
      var localhost = Common.Config.localUrl;
      var stylesObj = {
        pcLineHeight: pcFontSize * 1.7,
        spLineHeight: spFontSize * 1.7,
        fontFace: "serif",
        display: "block"
      };
      if (pcFontSize) stylesObj.pcFontSize = pcFontSize;

      var options = _defineProperty({
        renderMark: _defineProperty({}, _richTextTypes.MARKS.BOLD, function (text) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(Bold, {
            children: text
          });
        }),
        renderText: function renderText(text) {
          return text.split("\n").flatMap(function (text, i) {
            return [i > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), text];
          });
        },
        renderNode: _defineProperty({}, _richTextTypes.BLOCKS.PARAGRAPH, function (node, next) {
          return next(node.content).replace("\n", "<br/>");
        })
      }, "renderNode", (_renderNode2 = {}, _defineProperty(_renderNode2, _richTextTypes.BLOCKS.PARAGRAPH, function (node, children) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(Text, {
          children: children
        });
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.EMBEDDED_ASSET, function (node) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "rt-content img-cont rt-asset",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_gatsbyImage["default"], {
            fluid: node.data.target.fluid
          })
        });
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.EMBEDDED_ENTRY, function (node) {
        if (node.data.target.internal.type === "ContentfulElementButton") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ButtonElement, {
            className: "rt-content rt-button",
            styles: node.data.target,
            spanStyles: node.data.target.stylesJson,
            children: node.data.target.name
          });
        } else if (node.data.target.internal.type === "ContentfulElementImage") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ImageElement, {
            className: "rt-content",
            styles: node.data.target
          });
        } else if (node.data.target.internal.type === "ContentfulElementLink") {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.LinkElement, {
            icon: node.data.target.icon,
            className: "rt-content rt-link ".concat(node.data.target["class"]),
            styles: node.data.target,
            children: node.data.target.label
          });
        }
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.HEADING_1, function (node, children) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H1, {
          className: "rt-content rt-header",
          styles: {
            fontPc: {
              fontFace: "sansserif"
            },
            fontSp: {
              fontFace: "sansserif"
            }
          },
          children: children
        });
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.HEADING_2, function (node, children) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H2, {
          className: "rt-content rt-header",
          styles: {
            fontPc: {
              fontFace: "sansserif"
            },
            fontSp: {
              fontFace: "sansserif"
            }
          },
          children: children
        });
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.HEADING_3, function (node, children) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H3, {
          className: "rt-content rt-header",
          styles: {
            fontPc: {
              fontFace: "sansserif"
            },
            fontSp: {
              fontFace: "sansserif"
            }
          },
          children: children
        });
      }), _defineProperty(_renderNode2, _richTextTypes.BLOCKS.HEADING_4, function (node, children) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.H4, {
          className: "rt-content rt-header",
          styles: {
            fontPc: {
              fontSize: 18,
              lineHeight: 18,
              bold: true
            },
            fontSp: {
              fontSize: 18,
              lineHeight: 18,
              bold: true
            }
          },
          children: children
        });
      }), _defineProperty(_renderNode2, _richTextTypes.INLINES.HYPERLINK, function (node) {
        if (node.data.uri.startsWith(website_url) || node.data.uri.startsWith(localhost)) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: node.data.uri,
            className: "textAnchor",
            target: "_self",
            rel: "".concat(node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"),
            children: node.content[0].value
          })
          /*
                 <LibsAtoms.TriggerLink
                   transition={
                     Transition.TrigerPageTransition.TrigerPageTransition
                   }
                   to={node.data.uri.slice(
                     node.data.uri.indexOf(website_url) + website_url.length
                   )}
                   className={"textAnchor"}
                 >
                   {node.content[0].value}
                 </LibsAtoms.TriggerLink>*/
          ;
        } else {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
            href: node.data.uri,
            className: "textAnchor",
            target: "".concat(node.data.uri.startsWith(website_url) ? "_self" : "_blank"),
            rel: "".concat(node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"),
            children: node.content[0].value
          });
        }
      }), _renderNode2));

      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread(_objectSpread({
        ref: forwardedref,
        css: data.func(stylesObj, data.instance)
      }, rest), {}, {
        children: (0, _richText.renderRichText)(children, options)
      }));
    }
  }]);

  return RichText;
}(_react.PureComponent);

exports.RichText = RichText;

var _default = (0, _TextHoc.textHoc)(RichText);

exports["default"] = _default;

//# sourceMappingURL=RichText.js.map