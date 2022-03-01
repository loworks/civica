"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;
exports.mapToObject = exports.toUpperCaseFiest = exports.getPrevDirName = exports.getDirName = exports.getDir = exports.getIsUriName = exports.getFileName = exports.parseHtml = exports.getPcVwValue = exports.getSpVwValue = exports.setVwValueByMq = exports.setSpVwValues = exports.setPcVwValues = exports.getPcSpVwTransform = exports.get_vw = exports.getSectionMarginCss = exports.getVwValue = exports.htmlToNode = exports.getLangInfo = exports.getLangKey = exports.getTextType = exports.getPcSpVwValue = exports.getMqVwValue = exports.getSpacingCss = exports.getPositionCss = exports.getBarHeight = exports.getTopMargin = exports.setType = void 0;

var _react = _interopRequireDefault(require("react"));

var _htmlReactParser = _interopRequireDefault(require("html-react-parser"));

var Config = _interopRequireWildcard(require("./config"));

var Func = _interopRequireWildcard(require("./"));

var Styles = _interopRequireWildcard(require("../styles"));

var LibsAtoms = _interopRequireWildcard(require("../atoms"));

var _ptzI18n = require("ptz-i18n");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setType = function setType(element) {
  var node = element ? element : document.querySelector(".project-container");
  var dataset = node.dataset;
  var categoryClass = dataset.categoryslug ? "category-" + dataset.categoryslug : "category-index";
  var cont = document.querySelector("html");
  cont.classList.remove("type-category", "type-page", "type-post", "category-works", "category-shop", "category-index", "category-journal", "category-about", "category-contact", "category-howltcoffee");
  cont.classList.add("type-".concat(dataset.type), "".concat(categoryClass)); // const section = node.querySelectorAll("section:first-child")

  return;
};

exports.setType = setType;

var getTopMargin = function getTopMargin() {
  return {
    pc: 200,
    sp: 160
  };
};

exports.getTopMargin = getTopMargin;
var barHeight = null;

var getBarHeight = function getBarHeight() {
  if (typeof window !== "undefined") {
    var contH = document.getElementsByTagName("body")[0].clientHeight;

    if (contH !== 0) {
      return contH - window.innerHeight;
    }

    return 0;

    if (barHeight === null && contH !== 0) {
      var cont2 = document.getElementsByTagName("html")[0];
      barHeight = contH - window.innerHeight;
    }

    return barHeight;
  } else {
    barHeight = null;
    return 0;
  }
};

exports.getBarHeight = getBarHeight;

var getPositionCss = function getPositionCss(hPosition, isAbsolute, vPosition) {
  var positionObj = "";

  if (hPosition) {
    var hPositionSlug = typeof hPosition == "string" || hPosition instanceof String ? hPosition : hPosition.slug;

    if (isAbsolute) {
      if (hPositionSlug === "center" && vPosition === "middle") {
        positionObj = "transform:translate(-50%, -50%); top:50%; left:50%; display: inline-block;";
      } else if (hPositionSlug === "center" && (vPosition === "top" || !vPosition)) {
        positionObj = "left: 50%; transform: translateX(-50%) ; display: inline-block;";
      } else if (hPositionSlug === "center" && (vPosition === "bottom" || !vPosition)) {
        positionObj = "left: 50%; transform: translateX(-50%); bottom:0; display: inline-block;";
      } else if (hPositionSlug === "right" && (vPosition === "top" || !vPosition)) {
        positionObj = "right: 0;";
      } else if (hPositionSlug === "right" && vPosition === "middle") {
        positionObj = "transform:translateY(-50%); top:50%; right:0;";
      } else if (hPositionSlug === "right" && vPosition === "bottom") {
        positionObj = "right:0;bottom:0;";
      } else if (hPositionSlug === "left" && (vPosition === "top" || !vPosition)) {
        positionObj = "left: 0;";
      } else if (hPositionSlug === "left" && vPosition === "middle") {
        positionObj = "left:0;transform:translateY(-50%); top:50%;";
      } else if (hPositionSlug === "left" && vPosition === "bottom") {
        positionObj = "left:0;bottom:0;";
      }
    } else {
      if (hPositionSlug === "center") {
        positionObj = "margin-left: auto; margin-right: auto;";
      }

      if (hPositionSlug === "right") {
        positionObj = "margin-left: auto;";
      }
    }
    /*
      if (!isAbsolute && hPositionSlug === "center") {
        positionObj.left = `margin-left: auto;`
        positionObj.right = `margin-right: auto;`
      } else if (isAbsolute && hPositionSlug === "center") {
        positionObj.left = `left: 50%;`
        positionObj.right = `transform: translateX(-50%);`
      }
      if (hPositionSlug === "right") {
        positionObj.left = `margin-left: auto;`
      }*/

  }

  return positionObj;
};

exports.getPositionCss = getPositionCss;

var getSpacingCss = function getSpacingCss(spacing, isAbsolute) {
  var dvKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "pc";
  var _ref = "",
      marginTop = _ref.marginTop,
      marginBottom = _ref.marginBottom,
      paddingLeft = _ref.paddingLeft,
      paddingRight = _ref.paddingRight;
  var func = {
    pc: setPcVwValues,
    sp: setSpVwValues
  };
  var spacingObj = {};

  if (spacing) {
    if (typeof spacing == "string" || spacing instanceof String) {
      var spacingArr = spacing.split(" ");
      spacingObj.top = spacingArr[0];
      spacingObj.right = spacingArr[1];
      spacingObj.bottom = spacingArr[2];
      spacingObj.left = spacingArr[3];
    } else {
      spacingObj = spacing;
    }

    marginTop = spacingObj.top ? func[dvKey]("margin-top", spacingObj.top, true) : "";
    marginBottom = spacingObj.bottom ? func[dvKey]("margin-bottom", spacingObj.bottom, true) : "";
    paddingLeft = spacingObj.left && !isAbsolute ? func[dvKey]("padding-left", spacingObj.left, true) : spacingObj.left && isAbsolute ? func[dvKey]("margin-left", spacingObj.left, true) : "";
    paddingRight = spacingObj.right && !isAbsolute ? func[dvKey]("padding-right", spacingObj.right, true) : spacingObj.right && isAbsolute ? func[dvKey]("margin-right", spacingObj.right, true) : "";
    return {
      top: marginTop,
      right: paddingRight,
      bottom: marginBottom,
      left: paddingLeft
    };
  } else {
    return {
      top: "",
      right: "",
      bottom: "",
      left: ""
    };
  }
};

exports.getSpacingCss = getSpacingCss;

var getMqVwValue = function getMqVwValue(type, value) {
  var isMax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  //const breakPoints = Style.Mq.breakpoints
  var breakPoints = [413, 768, 960, 1280, 1280];
  var vwSizes = [];
  breakPoints.forEach(function (bq, index) {
    vwSizes.push(get_vw(value, bq));
  });
  var maxValue = isMax === true ? "".concat(type, ": ").concat(value, "px") : "".concat(type, ": ").concat(vwSizes[4], "vw");
  return "\n  ".concat(Styles.Mq.sp, " {\n    ").concat(type, ": ").concat(vwSizes[0], "vw;\n  }\n  ").concat(Styles.Mq.pab, " {\n    ").concat(type, ": ").concat(vwSizes[1], "vw;\n  }\n  ").concat(Styles.Mq.tb, " {\n    ").concat(type, ": ").concat(vwSizes[2], "vw;\n  }\n  ").concat(Styles.Mq.pc, " {\n    ").concat(type, ": ").concat(vwSizes[3], "vw;\n  }\n\n  ").concat(Styles.Mq.large, " {\n    ").concat(maxValue, "\n  }\n  ");
};

exports.getMqVwValue = getMqVwValue;

var getPcSpVwValue = function getPcSpVwValue(type, pcValue, spValue) {
  var isMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  //const breakPoints = Styles.Mq.breakpoints
  var breakPoints = [413, 768, 960, 1280, 1280];
  var vwSizes = [];
  breakPoints.forEach(function (bq, index) {
    if (index < 2) {
      vwSizes.push(get_vw(spValue, bq));
    } else {
      vwSizes.push(get_vw(pcValue, bq));
    }
  });
  var maxValue = isMax === true ? "".concat(type, ": ").concat(pcValue, "px") : "".concat(type, ": ").concat(vwSizes[4], "vw");
  return "\n  ".concat(Styles.Mq.sp, " {\n    ").concat(type, ": ").concat(vwSizes[0], "vw;\n  }\n  ").concat(Styles.Mq.pab, " {\n    ").concat(type, ": ").concat(vwSizes[1], "vw;\n  }\n  ").concat(Styles.Mq.tb, " {\n    ").concat(type, ": ").concat(vwSizes[2], "vw;\n  }\n  ").concat(Styles.Mq.pc, " {\n    ").concat(type, ": ").concat(vwSizes[3], "vw;\n  }\n\n  ").concat(Styles.Mq.large, " {\n    ").concat(maxValue, "\n  }\n  ");
};

exports.getPcSpVwValue = getPcSpVwValue;

var getTextType = function getTextType(key) {
  var element = "";

  if (key === "H1") {
    element = LibsAtoms.H1;
  } else if (key === "H2") {
    element = LibsAtoms.H2;
  } else if (key === "H3") {
    element = LibsAtoms.H3;
  } else if (key === "H4") {
    element = LibsAtoms.H4;
  } else {
    element = LibsAtoms.Span;
  }

  return {
    element: element
  };
};

exports.getTextType = getTextType;

var getLangKey = function getLangKey(props) {
  if (typeof window !== "undefined") {
    if (!Config.currentLang) {
      var location = window.location;
      var url = location.pathname;
      var _Config$languages = Config.languages,
          langs = _Config$languages.langs,
          defaultLangKey = _Config$languages.defaultLangKey;
      Config.setCurrentLang((0, _ptzI18n.getCurrentLangKey)(langs, defaultLangKey, url));
      return Config.currentLang;
    } else {
      return Config.currentLang;
    }
  } else {
    return "";
  }
};

exports.getLangKey = getLangKey;

var getLangInfo = function getLangInfo(props) {
  if (typeof window !== "undefined") {
    var location = window.location;
    var url = location.pathname;
    var _Config$languages2 = Config.languages,
        langs = _Config$languages2.langs,
        defaultLangKey = _Config$languages2.defaultLangKey;
    var langKey = (0, _ptzI18n.getCurrentLangKey)(langs, defaultLangKey, url);
    var homeLink = "/".concat(langKey, "/");

    if (url.indexOf("/ja/") !== -1 || url.indexOf("/en/") !== -1) {
      return (0, _ptzI18n.getLangs)(langs, langKey, (0, _ptzI18n.getUrlForLang)(homeLink, url));
    }

    return [{
      link: url
    }];
  } else {
    return "";
  }
};

exports.getLangInfo = getLangInfo;

var htmlToNode = function htmlToNode(htmlStr) {
  if (!htmlStr || typeof htmlStr !== "string") return;
  var tmpElmt = document.createElement("div");
  tmpElmt.innerHTML = htmlStr;
  return tmpElmt.childNodes;
};

exports.htmlToNode = htmlToNode;

var getVwValue = function getVwValue(value) {
  return value * Config.vwValue;
};

exports.getVwValue = getVwValue;

var getSectionMarginCss = function getSectionMarginCss() {
  var pc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
  var sp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 32;
  return "\n    ".concat(Styles.Mq.moreTab, " {\n      margin-top: ").concat(getVwValue(pc), "vw;\n    }\n    ").concat(Styles.Mq.lessPab, " {\n      margin-top: ").concat(getVwValue(sp), "vw;\n    }\n  ");
};

exports.getSectionMarginCss = getSectionMarginCss;

var get_vw = function get_vw(value) {
  var viewport = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 320;
  var rate = 100 / viewport;
  return rate * value * 1;
};

exports.get_vw = get_vw;

var getPcSpVwTransform = function getPcSpVwTransform(type, pcValue, spValue) {
  var isMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  //const breakPoints = Styles.Mq.breakpoints
  var breakPoints = [413, 768, 960, 1280, 1280];
  var vwSizes = [];
  breakPoints.forEach(function (bp, index) {
    if (index < 2) {
      vwSizes.push(get_vw(spValue, bp));
    } else {
      vwSizes.push(get_vw(pcValue, bp));
    }
  });
  var maxValue = isMax === true ? "transform: ".concat(type, "(").concat(pcValue, "px)") : "transform: ".concat(type, "(").concat(vwSizes[4], "vw)");
  return "\n  ".concat(Styles.Mq.sp, " {\n   transform:  ").concat(type, "(").concat(vwSizes[0], "vw);\n  }\n  ").concat(Styles.Mq.pab, " {\n   transform: ").concat(type, "(").concat(vwSizes[1], "vw);\n  }\n  ").concat(Styles.Mq.tb, " {\n   transform: ").concat(type, "(").concat(vwSizes[2], "vw);\n  }\n  ").concat(Styles.Mq.pc, " {\n   transform: ").concat(type, "(").concat(vwSizes[3], "vw);\n  }\n\n  ").concat(Styles.Mq.large, " {\n    ").concat(maxValue, "\n  }\n  ");
};

exports.getPcSpVwTransform = getPcSpVwTransform;

var setPcVwValues = function setPcVwValues(type, pcValue) {
  var isMax = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  //const breakPoints = Styles.Mq.breakpoints
  var breakPoints = [960, 1280, 1280];
  var vwSizes = [];
  breakPoints.forEach(function (bq, index) {
    vwSizes.push(get_vw(pcValue, bq));
  });
  var maxValue = isMax === true ? "".concat(type, ": ").concat(pcValue, "px") : "".concat(type, ": ").concat(vwSizes[2], "vw");
  return "\n  ".concat(Styles.Mq.tb, " {\n    ").concat(type, ": ").concat(vwSizes[0], "vw;\n  }\n  ").concat(Styles.Mq.pc, " {\n    ").concat(type, ": ").concat(vwSizes[1], "vw;\n  }\n  ").concat(Styles.Mq.large, " {\n    ").concat(maxValue, "\n  }\n  ");
};

exports.setPcVwValues = setPcVwValues;

var setSpVwValues = function setSpVwValues(type, spValue) {
  //const breakPoints = Styles.Mq.breakpoints
  var breakPoints = [413, 768];
  var vwSizes = [];
  breakPoints.forEach(function (bq, index) {
    vwSizes.push(get_vw(spValue, bq));
  });
  return "\n  ".concat(Styles.Mq.sp, " {\n    ").concat(type, ": ").concat(vwSizes[0], "vw;\n  }\n  ").concat(Styles.Mq.pab, " {\n    ").concat(type, ": ").concat(vwSizes[1], "vw;\n  }\n  ");
};

exports.setSpVwValues = setSpVwValues;

var setVwValueByMq = function setVwValueByMq(type, value, key, isMax) {
  //const breakPoints = Styles.Mq.breakpoints
  var breakPoints = {
    sp: 413,
    pab: 768,
    tb: 960,
    pc: 1280,
    large: 1280
  };
  var vwValue = get_vw(value, breakPoints[key]);

  if (key === "large") {
    var maxValue = isMax === true ? "".concat(type, ": ").concat(value, "px") : "".concat(type, ": ").concat(vwValue, "vw");
    return "\n  ".concat(Styles.Mq[key], " {\n    ").concat(maxValue, "\n  }\n  ");
  } else {
    return "\n  ".concat(Styles.Mq[key], " {\n    ").concat(type, ": ").concat(vwValue, "vw;\n  }\n  ");
  }
};

exports.setVwValueByMq = setVwValueByMq;

var getSpVwValue = function getSpVwValue() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return "\n    ".concat(get_vw(value, 415), "vw;\n  ");
};

exports.getSpVwValue = getSpVwValue;

var getPcVwValue = function getPcVwValue() {
  var font_size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  return "\n    ".concat(get_vw(font_size, 1280), "vw;\n  ");
};

exports.getPcVwValue = getPcVwValue;

var parseHtml = function parseHtml(elem) {
  return (0, _htmlReactParser["default"])(elem);
};

exports.parseHtml = parseHtml;

var rootRelative = function rootRelative(path) {
  if (path === undefined) return false;
  var result = path.replace(/\\/g, "/").replace(/^[^/]*\/\/[^/]*/, "");
  return result;
};

var dirctryName = function dirctryName(path) {
  var result = path.replace(/\\/g, "/").replace(/\/[^/]*$/, "");

  if (result.match("/^[^/]*.[^/.]*$/")) {
    result = "";
  }

  return result;
};

var fullBasename = function fullBasename(path) {
  var result = "";

  if (path) {
    var paths = path.split("/");
    result = paths.pop();
  }

  return result;
};

var basename = function basename(path) {
  var result = fullBasename(path).replace("/[?#].*$/g", "");
  return result;
};

var extension = function extension(path) {
  var result = basename(path).match(/\.([^.]+)$/);

  if (result) {
    result = result[1];
  } else {
    result = "";
  }

  return result;
};

var getFileName = function getFileName(url) {
  //if(!url) return;
  var path = rootRelative(url);
  if (!path) return "index";

  if (path.slice(-1) === "/") {
    url = path.slice(0, -1);
  }

  var extention = extension(url);

  if (extention) {
    url = dirctryName(url);
  } //var url = dirctryName(url);


  url = url.substring(url.lastIndexOf("/") + 1, url.length);
  if (url.indexOf(".") !== -1) url = url.substring(0, url.indexOf("."));
  if (url.indexOf("#") !== -1) url = url.replace("#", "");
  if (url.indexOf("?") !== -1) url = url.replace("?", "");
  return url ? url : "index";
};

exports.getFileName = getFileName;

var getIsUriName = function getIsUriName(name) {
  var value = null;

  if (typeof window !== "undefined") {
    value = window.location.href.indexOf(name);
  }

  return value !== -1 ? true : false;
};

exports.getIsUriName = getIsUriName;

var getDir = function getDir(place, n) {
  return place.pathname.replace(new RegExp("(?:\\/+[^\\/]*){0," + ((n || 0) + 1) + "}$"), "/");
};

exports.getDir = getDir;

var getDirName = function getDirName(place) {
  var dir = getDir(place);
  var dirlist = dir.split("/");
  return dirlist[dirlist.length - 2];
};

exports.getDirName = getDirName;

var getPrevDirName = function getPrevDirName(place) {
  var dir = getDir(place);
  var dirlist = dir.split("/");
  return dirlist[dirlist.length - 3];
};

exports.getPrevDirName = getPrevDirName;

var toUpperCaseFiest = function toUpperCaseFiest(str) {
  if (!str || typeof str !== "string") return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

exports.toUpperCaseFiest = toUpperCaseFiest;

function isObject(obj) {
  return obj && Object.getPrototypeOf(obj) === Object.prototype;
}

var mapToObject = function mapToObject(map) {
  return _toConsumableArray(map).reduce(function (l, _ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        k = _ref3[0],
        v = _ref3[1];

    return Object.assign(l, _defineProperty({}, k, v));
  }, {});
};

exports.mapToObject = mapToObject;

//# sourceMappingURL=func.js.map