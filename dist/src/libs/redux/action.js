"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeBag = exports.RemoveBag = exports.AddBag = exports.MenuClick = exports.Resize = exports.EnterFrameAction = exports.ScrollEase = exports.LangChanged = exports.TransitionComplete = exports.EnterSeconds = exports.SliderChange = exports.SliderClick = exports.SelectChange = exports.SelectOpen = exports.OverlayClosed = exports.OverlayClose = exports.OverlayOpen = exports.EnterFrameHandler = void 0;
var onMenu = false;

var EnterFrameHandler = function EnterFrameHandler(dispatch, frame, scrollX, scrollY, container) {
  dispatch(EnterFrameAction(scrollX, scrollY, container));
  dispatch(ScrollEase(frame));

  if (frame === 0) {
    dispatch(EnterSeconds());
  }
};

exports.EnterFrameHandler = EnterFrameHandler;

var OverlayOpen = function OverlayOpen(content) {
  return {
    type: "OVERLAYOPEN",
    content: content
  };
};

exports.OverlayOpen = OverlayOpen;

var OverlayClose = function OverlayClose(props) {
  return {
    type: "OVERLAYCLOSE"
  };
};

exports.OverlayClose = OverlayClose;

var OverlayClosed = function OverlayClosed(props) {
  return {
    type: "OVERLAYCLOSED"
  };
};

exports.OverlayClosed = OverlayClosed;

var SelectOpen = function SelectOpen(slug, value, currentValue) {
  return {
    type: "SELECTOPEN",
    slug: slug,
    value: value,
    currentValue: currentValue
  };
};

exports.SelectOpen = SelectOpen;

var SelectChange = function SelectChange(slug, value, currentValue) {
  return {
    type: "SELECTCHANGE",
    slug: slug,
    value: value,
    currentValue: currentValue
  };
};

exports.SelectChange = SelectChange;

var SliderClick = function SliderClick(target, sliderId) {
  return {
    type: "SLIDERCLICK",
    target: target,
    sliderId: sliderId
  };
};

exports.SliderClick = SliderClick;

var SliderChange = function SliderChange(target, sliderId, set) {
  return {
    type: "SLIDERCHANGE",
    target: target,
    sliderId: sliderId,
    set: set
  };
};

exports.SliderChange = SliderChange;

var EnterSeconds = function EnterSeconds(props) {
  return {
    type: "ENTERSECONDS"
  };
};

exports.EnterSeconds = EnterSeconds;

var TransitionComplete = function TransitionComplete(current, prev, next, category, pageType) {
  return {
    type: "TRANSITION_COMPLETE",
    current: current,
    prev: prev,
    next: next,
    category: category,
    pageType: pageType
  };
};

exports.TransitionComplete = TransitionComplete;

var LangChanged = function LangChanged(lang) {
  return {
    type: "LANG_CHANGED",
    lang: lang
  };
};

exports.LangChanged = LangChanged;

var ScrollEase = function ScrollEase(frame) {
  return {
    type: "SCROLLEASE",
    frame: frame
  };
};

exports.ScrollEase = ScrollEase;

var EnterFrameAction = function EnterFrameAction(scrollX, scrollY, container) {
  return {
    type: "ENTERFRAME",
    scrollX: scrollX,
    scrollY: scrollY,
    container: container
  };
};

exports.EnterFrameAction = EnterFrameAction;

var Resize = function Resize(width, height) {
  return {
    type: "RESIZE",
    screenWidth: width,
    screenHeight: height
  };
};

exports.Resize = Resize;

var MenuClick = function MenuClick(targetObj, bool) {
  if (bool == null) {
    onMenu = !onMenu;
  } else {
    onMenu = bool;
  }

  return {
    type: "MENUCLICK",
    target: targetObj,
    onMenu: onMenu
  };
};

exports.MenuClick = MenuClick;

var AddBag = function AddBag(sku) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    type: "ADDBAG",
    sku: sku,
    quantity: quantity
  };
};

exports.AddBag = AddBag;

var RemoveBag = function RemoveBag(sku) {
  return {
    type: "REMOVEBAG",
    sku: sku
  };
};

exports.RemoveBag = RemoveBag;

var ChangeBag = function ChangeBag(sku) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return {
    type: "CHANGEBAG",
    sku: sku
  };
};

exports.ChangeBag = ChangeBag;

//# sourceMappingURL=action.js.map