"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTransition = exports.setCurrentLang = exports.currentTransition = exports.languages = exports.vwValue = exports.currentLangInfo = exports.currentLang = exports.localUrl = exports.testUrl = exports.websiteUrl = void 0;
var websiteUrl = "https://howlt.com";
exports.websiteUrl = websiteUrl;
var testUrl = "https://howlt-test.netlify.app";
exports.testUrl = testUrl;
var localUrl = "http://localhost:8000";
exports.localUrl = localUrl;
var currentLang;
exports.currentLang = currentLang;
var currentLangInfo;
exports.currentLangInfo = currentLangInfo;
var vwValue = 0.78125;
exports.vwValue = vwValue;
var languages = {
  langs: ["ja", "en"],
  defaultLangKey: "ja"
};
exports.languages = languages;
var currentTransition = null;
exports.currentTransition = currentTransition;

var setCurrentLang = function setCurrentLang(lang) {
  exports.currentLang = currentLang = lang;
};

exports.setCurrentLang = setCurrentLang;

var setTransition = function setTransition(transition) {
  exports.currentTransition = currentTransition = transition;
};

exports.setTransition = setTransition;

//# sourceMappingURL=config.js.map