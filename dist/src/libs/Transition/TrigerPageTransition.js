"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartPageTransition = exports.TrigerPageTransition = void 0;

var _gatsby = require("gatsby");

var _requestanimationframeTimer = require("requestanimationframe-timer");

var _gsap = require("gsap");

var Common = _interopRequireWildcard(require("../common"));

var Action = _interopRequireWildcard(require("../redux/action"));

var Transition = _interopRequireWildcard(require("./"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var href;
var cloneNode;
var dispatcher;

var TrigerPageTransition = function TrigerPageTransition(to, dispatch) {
  href = to;
  dispatcher = dispatch;
  var cont = document.querySelector("html");
  cont.classList.remove("on-story", "on-overlay");
  cont.classList.add("now-transition", "transition-fade-in", "page-load");
  var tlwrapper = document.querySelector(".tl-wrapper");
  cloneNode = tlwrapper.cloneNode(true);
  cloneNode.classList.remove("tl-wrapper", "tl-wrapper--mount", "tl-wrapper-status--entered");
  cloneNode.classList.add("tl-wrapper", "tl-wrapper--unmount");
  (0, _gatsby.navigate)(to);
  tlwrapper = document.querySelector(".tl-wrapper");
  tlwrapper.parentNode.insertBefore(cloneNode, tlwrapper);
  Common.Config.setTransition(Transition.TrigerPageTransition.StartPageTransition); //StartPageTransition()
};

exports.TrigerPageTransition = TrigerPageTransition;

var StartPageTransition = function StartPageTransition() {
  exitTransition(cloneNode);
};

exports.StartPageTransition = StartPageTransition;

var exitTransition = function exitTransition(node) {
  var tl = new _gsap.TimelineMax();
  var topvalue = window.scrollY + window.innerHeight / 2;
  tl.add("page");
  tl.to(node, 0.5, {
    opacity: 0,
    scale: 0.96,
    ease: _gsap.Power3.easeInOut,
    transformOrigin: "center ".concat(topvalue, "px")
  }, "page").call(function () {
    entryTransition();
  });
};

var entryTransition = function entryTransition(node) {
  var tl = new _gsap.TimelineMax({
    onComplete: function onComplete() {
      var cont = document.querySelector("html");
      cont.classList.remove("transition-fade-in", "page-load");
      cloneNode.remove();
    }
  });
  var entryCont = document.querySelector(".tl-wrapper--mount .project-container");
  Common.Func.setType(entryCont);
  var dataset = entryCont.dataset;
  var current = dataset.currentname ? {
    name: dataset.currentname,
    slug: dataset.current
  } : null;
  dispatcher(Action.TransitionComplete(current, dataset.prev, dataset.next, dataset.categoryname ? {
    name: dataset.categoryname,
    slug: dataset.categoryslug
  } : null, dataset.type));
  var cont = document.querySelector("html");
  cont.classList.remove("now-transition");

  if (typeof window !== "undefined") {
    window.scrollTo(0, 0);
  }

  tl.set(entryCont, {
    y: 50
  }, "page").to(entryCont, 1, {
    opacity: 1,
    y: 0,
    ease: _gsap.Power3.easeInOut
  }, "page");
};

//# sourceMappingURL=TrigerPageTransition.js.map