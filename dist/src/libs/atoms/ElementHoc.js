"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.elementHoc = elementHoc;

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@emotion/react");

var Style = _interopRequireWildcard(require("../styles"));

var Common = _interopRequireWildcard(require("../common"));

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

var _excluded = ["widthPc", "widthSp", "width_pc", "width_sp", "positionPc", "positionSp", "spacePc", "spaceSp", "spacingPc", "spacingSp", "display", "position", "hPositionSp", "hPositionPc", "vPositionSp", "vPositionPc"],
    _excluded2 = ["children", "ref", "styles"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function elementHoc(WrappedComponent) {
  var ElementHoc = /*#__PURE__*/function (_React$PureComponent) {
    _inherits(ElementHoc, _React$PureComponent);

    var _super = _createSuper(ElementHoc);

    function ElementHoc(props) {
      _classCallCheck(this, ElementHoc);

      return _super.call(this, props);
    }

    _createClass(ElementHoc, [{
      key: "getStyle",
      value: function getStyle(cssProps, instance, addCss) {
        var styles = instance.styles;

        if (styles && styles.type && styles.type === "H1") {
          for (var key in styles) {
            if (styles[key] === null) {
              delete styles[key];
            }
          }
        }

        cssProps = _objectSpread(_objectSpread({}, cssProps), styles);

        var _cssProps = cssProps,
            _cssProps$widthPc = _cssProps.widthPc,
            widthPc = _cssProps$widthPc === void 0 ? null : _cssProps$widthPc,
            _cssProps$widthSp = _cssProps.widthSp,
            widthSp = _cssProps$widthSp === void 0 ? null : _cssProps$widthSp,
            _cssProps$width_pc = _cssProps.width_pc,
            width_pc = _cssProps$width_pc === void 0 ? null : _cssProps$width_pc,
            _cssProps$width_sp = _cssProps.width_sp,
            width_sp = _cssProps$width_sp === void 0 ? null : _cssProps$width_sp,
            _cssProps$positionPc = _cssProps.positionPc,
            positionPc = _cssProps$positionPc === void 0 ? null : _cssProps$positionPc,
            _cssProps$positionSp = _cssProps.positionSp,
            positionSp = _cssProps$positionSp === void 0 ? null : _cssProps$positionSp,
            _cssProps$spacePc = _cssProps.spacePc,
            spacePc = _cssProps$spacePc === void 0 ? null : _cssProps$spacePc,
            _cssProps$spaceSp = _cssProps.spaceSp,
            spaceSp = _cssProps$spaceSp === void 0 ? null : _cssProps$spaceSp,
            _cssProps$spacingPc = _cssProps.spacingPc,
            spacingPc = _cssProps$spacingPc === void 0 ? null : _cssProps$spacingPc,
            _cssProps$spacingSp = _cssProps.spacingSp,
            spacingSp = _cssProps$spacingSp === void 0 ? null : _cssProps$spacingSp,
            _cssProps$display = _cssProps.display,
            display = _cssProps$display === void 0 ? "inline" : _cssProps$display,
            _cssProps$position = _cssProps.position,
            position = _cssProps$position === void 0 ? "" : _cssProps$position,
            _cssProps$hPositionSp = _cssProps.hPositionSp,
            hPositionSp = _cssProps$hPositionSp === void 0 ? null : _cssProps$hPositionSp,
            _cssProps$hPositionPc = _cssProps.hPositionPc,
            hPositionPc = _cssProps$hPositionPc === void 0 ? null : _cssProps$hPositionPc,
            _cssProps$vPositionSp = _cssProps.vPositionSp,
            vPositionSp = _cssProps$vPositionSp === void 0 ? null : _cssProps$vPositionSp,
            _cssProps$vPositionPc = _cssProps.vPositionPc,
            vPositionPc = _cssProps$vPositionPc === void 0 ? null : _cssProps$vPositionPc,
            newprops = _objectWithoutProperties(_cssProps, _excluded);

        var widthPcObj = widthPc || width_pc ? widthPc ? "width: ".concat(widthPc, "vw;") : "width: ".concat(width_pc, "vw;") : null;
        var widthSpObj = widthSp || width_sp ? widthSp ? "width: ".concat(widthSp, "vw;") : "width: ".concat(width_sp, "vw;") : null;
        var cpropsPositionPc = cssProps.positionPc;
        var cpropsPositionSp = cssProps.positionSp;
        var cssPropsStylesPositionPc = cssProps.stylesJson ? cssProps.stylesJson.positionPc : null;
        var cssPropsStylesPositionSp = cssProps.stylesJson ? cssProps.stylesJson.positionSp : null;
        var spacingPcObj = cssPropsStylesPositionPc ? Common.Func.getSpacingCss(cssPropsStylesPositionPc.space, cssPropsStylesPositionPc.position === "absolute" || cssPropsStylesPositionPc.position === "relative" ? true : false) : cpropsPositionPc ? Common.Func.getSpacingCss(cpropsPositionPc.space, cpropsPositionPc.position === "absolute" || cpropsPositionPc.position === "relative" ? true : false) : Common.Func.getSpacingCss(spacePc ? spacePc : spacingPc, position === "absolute" || position === "relative" ? true : false);
        var spacingSpObj = cssPropsStylesPositionSp ? Common.Func.getSpacingCss(cssPropsStylesPositionSp.space, cssPropsStylesPositionSp.position === "absolute" || cssPropsStylesPositionSp.position === "relative" ? true : false, "sp") : cpropsPositionSp ? Common.Func.getSpacingCss(cpropsPositionSp.space, cpropsPositionSp.position === "absolute" || cpropsPositionSp.position === "relative" ? true : false, "sp") : Common.Func.getSpacingCss(spaceSp ? spaceSp : spacingSp, position === "absolute" || position === "relative" ? true : false, "sp");
        var positionPcObj = cpropsPositionPc ? Common.Func.getPositionCss(cpropsPositionPc.hPosition, cpropsPositionPc.position === "absolute" || cpropsPositionPc.position === "relative" ? true : false, cpropsPositionPc.vPosition) : Common.Func.getPositionCss(hPositionPc ? hPositionPc : positionPc, position === "absolute" || position === "relative" ? true : false, vPositionPc);
        var positionSpObj = cpropsPositionSp ? Common.Func.getPositionCss(cpropsPositionSp.hPosition, cpropsPositionSp.position === "absolute" || cpropsPositionSp.position === "relative" ? true : false, cpropsPositionSp.vPosition) : Common.Func.getPositionCss(hPositionSp ? hPositionSp : positionSp, position === "absolute" || position === "relative" ? true : false, vPositionSp);

        var styleCss = function styleCss(props) {
          return (0, _react2.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t", ";\n\t\t\t\tdisplay: ", ";\n\t\t\t\t", ";\n\t\t\t\t", " {\n\t\t\t\t\tposition: ", ";\n\n\t\t\t\t\t", ";\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t\t", " {\n\t\t\t\t\tposition: ", ";\n\n\t\t\t\t\t", ";\n\t\t\t\t\t", "\n\t\t\t\t}\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t\t", ";\n\t\t\t"])), position === "absolute" ? "z-index:9999" : "", display, addCss ? addCss() : "", Style.Mq.moreTab, cssPropsStylesPositionPc && cssPropsStylesPositionPc.position ? cssPropsStylesPositionPc.position : cpropsPositionPc && cpropsPositionPc.position ? cpropsPositionPc.position : position, widthPcObj, positionPcObj, spacingPcObj.top, spacingPcObj.bottom, spacingPcObj.left, spacingPcObj.right, Style.Mq.lessPab, cssPropsStylesPositionSp && cssPropsStylesPositionSp.position ? cssPropsStylesPositionSp.position : cpropsPositionSp && cpropsPositionSp.position ? cpropsPositionSp.position : position, widthSpObj, positionSpObj, spacingSpObj.top, spacingSpObj.bottom, spacingSpObj.left, spacingSpObj.right);
        };

        return styleCss;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            children = _this$props.children,
            ref = _this$props.ref,
            styles = _this$props.styles,
            rest = _objectWithoutProperties(_this$props, _excluded2);

        this.styles = styles;
        this.children = children;
        this.className = this.props.className;
        this.rest = rest;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, _objectSpread(_objectSpread({
          data: {
            func: this.getStyle,
            instance: this
          }
        }, this.rest), {}, {
          children: this.children
        }));
      }
    }]);

    return ElementHoc;
  }(_react["default"].PureComponent);

  return /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementHoc, _objectSpread(_objectSpread({}, props), {}, {
      forwardedRef: ref
    }));
  });
}

//# sourceMappingURL=ElementHoc.js.map