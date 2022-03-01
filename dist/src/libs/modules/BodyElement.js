"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BodyElement = void 0;

var _react = _interopRequireWildcard(require("react"));

var Common = _interopRequireWildcard(require("../common"));

var _react2 = require("@emotion/react");

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _WindowResize = require("../redux/event/WindowResize");

var _reactGoogleMaps = require("react-google-maps");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject, _templateObject2;

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

var BodyElement = /*#__PURE__*/function (_PureComponent) {
  _inherits(BodyElement, _PureComponent);

  var _super = _createSuper(BodyElement);

  function BodyElement(props) {
    var _this;

    _classCallCheck(this, BodyElement);

    _this = _super.call(this, props);
    _this.itemNum = 0;
    _this.counter = 0;
    return _this;
  }

  _createClass(BodyElement, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          body = _this$props.body,
          layoutTypeFunc = _this$props.layoutTypeFunc,
          elementTypeFunc = _this$props.elementTypeFunc;
      console.log("children -- ", body);

      var bodyItemCss = function bodyItemCss(props) {
        return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t", ";\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin-top: 0px;\n\t\t\t\t}\n\t\t\t"])), Common.Func.getPcSpVwValue("margin-top", 120, 70));
      };

      var BlockItem = function BlockItem() {
        var childMargin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
        var childMarginSp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 40;
        return (0, _react2.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t", ";\n\t\t\t\t&:first-child {\n\t\t\t\t\tmargin-top: 0px;\n\t\t\t\t}\n\t\t\t"])), Common.Func.getPcSpVwValue("margin-top", childMargin, childMarginSp));
      };

      var getElementWidth = function getElementWidth(props, type, parent) {
        var keys = type == "pc" ? ["widthPc", "width_pc"] : ["widthSp", "width_sp"];
        return props[keys[0]] || props[keys[1]] ? props[keys[0]] ? props[keys[0]] : props[keys[1]] : parent && (parent[keys[0]] || parent[keys[1]]) ? parent[keys[0]] ? parent[keys[0]] : parent[keys[1]] : 88;
      };

      var getElementImage = function getElementImage(content, css, inner) {
        var imgSrc = _WindowResize.WindowResize.currentType(_WindowResize.WindowResize.lessPab) ? content.imageSp ? content.imageSp : content.image : content.image;
        _this2.ratio = imgSrc ? imgSrc.sizes.aspectRatio : 1;

        if (!inner) {
          content.widthPc = getElementWidth(content, "pc");
          content.widthSp = getElementWidth(content, "sp");
        }

        if (!content.image) {
          return "";
        } else {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            css: css,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ImageElement, {
              styles: content
            })
          });
        }
      };

      var getElementLayoutCard = function getElementLayoutCard(content, css, inner) {
        var cardType = {
          layout: layoutTypeFunc ? layoutTypeFunc(content.layoutRef) : null
        };

        if (cardType) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(cardType.layout, {
            css: css,
            info: content,
            styles: content
          });
        } else {
          return null;
        }
      };

      var getElementEmbed = function getElementEmbed(content, css, inner) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.EmbedElement, {
          css: css,
          styles: content
        });
      };

      var getElementSwipe = function getElementSwipe(content, css, inner) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.SwipeElement, {
          css: css,
          styles: content,
          getElementImage: getElementImage
        });
      };

      var getElementText = function getElementText(content, css, inner) {
        var elementType = Common.Func.getTextType(content.type);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(elementType.element, {
          css: css,
          styles: content,
          children: content.text
        });
      };

      var getElementLink = function getElementLink(content, css, inner) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.LinkElement, {
          css: css,
          styles: Object.assign(content, {
            italic: true,
            text_align: "center",
            pcFontSize: 20,
            pcLineHeight: 20,
            spFontSize: 20,
            spLineHeight: 20,
            fontFace: "serif",
            letterSpacing: 1
          }),
          children: content.label
        });
      };

      var getBlockElement = function getBlockElement(content, isInner) {
        var contCss = isInner ? "" : bodyItemCss;
        var childMargin = content.childMargin !== null ? content.childMargin : undefined;
        var childMarginSp = content.childMarginSp ? content.childMarginSp : undefined;
        var bodyContent = content.body.map(function (bodyItem) {
          if (bodyItem.internal.type === "ContentfulElementImage") {
            return getElementImage(bodyItem, BlockItem(childMargin, childMarginSp), true);
          }

          if (bodyItem.internal.type === "ContentfulElementText") {
            return getElementText(bodyItem, BlockItem(childMargin, childMarginSp));
          } else if (bodyItem.internal.type === "ContentfulElementTextField") {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.RichText, {
              css: BlockItem(childMargin, childMarginSp),
              styles: bodyItem,
              children: bodyItem.field
            });
          } else if (bodyItem.internal.type === "ContentfulElementLink") {
            return getElementLink(bodyItem, BlockItem(childMargin, childMarginSp));
          } else if (bodyItem.internal.type === "ContentfulElementMap") {
            return getMapElement(bodyItem, BlockItem(childMargin, childMarginSp), true);
          } else if (bodyItem.internal.type === "ContentfulElementEmbed") {
            console.log("ContentfulElementEmbed -- ", bodyItem);
            return getElementEmbed(bodyItem, BlockItem(childMargin, childMarginSp));
          } else if (bodyItem.internal.type === "ContentfulElementFlexColumn") {
            return getFlexColumnElement(bodyItem, BlockItem(childMargin, childMarginSp), content);
          } else if (bodyItem.internal.type === "ContentfulElementReference") {
            var elementType = elementTypeFunc ? elementTypeFunc(bodyItem.name) : null;

            if (elementType) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(elementType.element, {
                css: BlockItem(childMargin, childMarginSp),
                styles: bodyItem
              });
            } else {
              return false;
            }
          } else if (bodyItem.internal.type === "ContentfulElementBlock") {
            return getBlockElement(bodyItem, true);
          } else if (bodyItem.internal.type === "ContentfulElementLayoutCard") {
            return getElementLayoutCard(bodyItem, BlockItem(childMargin, childMarginSp));
          } else if (bodyItem.internal.type === "ContentfulElementSwipe") {
            return getElementSwipe(bodyItem, BlockItem(childMargin, childMarginSp), true);
          }
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.BlockElement, {
          css: contCss,
          styles: content,
          className: content["class"],
          children: bodyContent
        });
      };

      var getMapElement = function getMapElement(content, css, isInner) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.BlockElement, {
          css: css,
          styles: content,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MapWithAMarker, {
            lat: content.locationVisualizer.lat,
            lon: content.locationVisualizer.lon,
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAmczi6YU4TZ7V9oOL8TFEybQ3uzutnea8&v=3.exp&libraries=geometry,drawing,places",
            loadingElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                height: "100%"
              }
            }),
            containerElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                height: "400px"
              }
            }),
            mapElement: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              style: {
                height: "100%"
              }
            })
          })
        });
      };

      var getFlexColumnElement = function getFlexColumnElement(content, css, block) {
        var length = content.columnItem.length;
        var columnMargin = 6;
        var columnMarginSp = 4;
        var elementWithPc = getElementWidth(content, "pc", block);
        var elementWithSp = getElementWidth(content, "sp", block);

        if (!block) {
          content.widthPc = elementWithPc;
          content.widthSp = elementWithSp;
        }

        var setSizeProp = function setSizeProp(stylesObj) {
          if (!stylesObj.widthPc && !stylesObj.width_pc) {
            /*stylesObj.widthPc =
            	(elementWithPc - columnMargin * (length - 1)) / length;*/
          }

          if (!stylesObj.widthSp && !stylesObj.width_pc) {
            /*stylesObj.widthSp =
            	(elementWithSp - columnMarginSp * (length - 1)) / length;*/
          }
        };

        var columnItem = content.columnItem.map(function (citerm) {
          if (citerm.internal.type === "ContentfulElementImage" && citerm.image) {
            setSizeProp(citerm);
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.ImageElement, {
              src: citerm.image.fluid,
              styles: citerm,
              caption: citerm.caption
            });
          }

          if (citerm.internal.type === "ContentfulElementTextField") {
            setSizeProp(citerm);
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.RichText, {
              styles: citerm,
              children: citerm.field
            });
          } else if (citerm.internal.type === "ContentfulElementBlock") {
            return getBlockElement(citerm, true);
          } else if (citerm.internal.type === "ContentfulElementFlexColumn") {
            return getFlexColumnElement(citerm, true);
          } else if (citerm.internal.type === "ContentfulElementMap") {
            return getMapElement(citerm, "", true);
          } else if (citerm.internal.type === "ContentfulElementEmbed") {
            return getElementEmbed(citerm, "", true);
          } else if (citerm.internal.type === "ContentfulElementSwipe") {
            return getElementSwipe(citerm, "", true);
          }

          if (citerm.internal.type === "ContentfulElementLayoutCard") {
            setSizeProp(citerm);
            return getElementLayoutCard(citerm, "", true);
          }
        });
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          css: css,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.FlexElement, {
            styles: content,
            children: columnItem
          })
        });
      };

      var MapWithAMarker = (0, _reactGoogleMaps.withScriptjs)((0, _reactGoogleMaps.withGoogleMap)(function (props) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGoogleMaps.GoogleMap, {
          defaultZoom: 15,
          defaultCenter: {
            lat: props.lat,
            lng: props.lon
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactGoogleMaps.Marker, {
            position: {
              lat: props.lat,
              lng: props.lon
            }
          })
        });
      }));
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "body-container",
        children: body && body.map(function (content, i) {
          if (content.internal.type === "ContentfulElementImage") {
            return getElementImage(content, bodyItemCss);
          }

          if (content.internal.type === "ContentfulElementTextField") {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              css: bodyItemCss,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LibsAtoms.RichText, {
                styles: content,
                children: content.field
              })
            });
          } else if (content.internal.type === "ContentfulElementReference") {
            var elementType = elementTypeFunc ? elementTypeFunc(content.name) : null;

            if (elementType) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(elementType.element, {
                styles: content
              });
            } else {
              return null;
            }
          } else if (content.internal.type === "ContentfulElementLayoutCard") {
            return getElementLayoutCard(content, bodyItemCss);
          } else if (content.internal.type === "ContentfulElementFlexColumn") {
            return getFlexColumnElement(content, bodyItemCss);
          } else if (content.internal.type === "ContentfulElementBlock") {
            return getBlockElement(content);
          } else if (content.internal.type === "ContentfulElementMap") {
            return getMapElement(content, bodyItemCss);
          }
        })
      });
    }
  }]);

  return BodyElement;
}(_react.PureComponent);

exports.BodyElement = BodyElement;
var _default = BodyElement;
exports["default"] = _default;

//# sourceMappingURL=BodyElement.js.map