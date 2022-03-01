import React from "react";
import parse from "html-react-parser";
import * as Config from "./config";

import * as Styles from "../styles";
import * as LibsAtoms from "../atoms";
import {
	getUserLangKey,
	getCurrentLangKey,
	getLangs,
	getUrlForLang,
} from "ptz-i18n";

export let getMarginForEnterFrameFunc = null;
export const setGetMarginForEnterFrameFunc = (func) => {
	getMarginForEnterFrameFunc = func;
};
export const getMarginForEnterFrame = () => {
	return getMarginForEnterFrameFunc
		? getMarginForEnterFrameFunc()
		: Config.headerDefaultHeight + 50;
};

export const getDeviceSize = () => {
	const breakpoints = [415, 768, 960, 1280];
	if (typeof window !== `undefined`) {
		const screenW = window.innerWidth;
		let type;
		if (screenW < breakpoints[1]) {
			type = "lessPab";
		} else {
			type = "moreTab";
		}
		return type;
	}
};
export const setType = (element) => {
	const node = element ? element : document.querySelector(".project-container");
	const dataset = node.dataset;
	const categoryslug = dataset.categoryslug ? dataset.categoryslug : "index";
	const categoryClass = "category-" + categoryslug;
	Config.setCurrentPage(categoryslug);
	const classList = Config.classList;

	const cont = document.querySelector("html");
	cont.classList.remove(...classList);
	cont.classList.add(`type-${dataset.type}`, `${categoryClass}`);
	// const section = node.querySelectorAll("section:first-child")
	return;
};

export const getTopMargin = () => {
	return { pc: 200, sp: 160 };
};

let barHeight = null;

export const getBarHeight = () => {
	if (typeof window !== `undefined`) {
		const contH = document.getElementsByTagName("body")[0].clientHeight;
		if (contH !== 0) {
			return contH - window.innerHeight;
		}
		return 0;
		if (barHeight === null && contH !== 0) {
			const cont2 = document.getElementsByTagName("html")[0];

			barHeight = contH - window.innerHeight;
		}

		return barHeight;
	} else {
		barHeight = null;
		return 0;
	}
};

export const getPositionCss = (hPosition, isAbsolute, vPosition) => {
	let positionObj = ``;

	if (hPosition) {
		let hPositionSlug =
			typeof hPosition == "string" || hPosition instanceof String
				? hPosition
				: hPosition.slug;
		if (isAbsolute) {
			if (hPositionSlug === "center" && vPosition === "middle") {
				positionObj = `transform:translate(-50%, -50%); top:50%; left:50%; display: inline-block;`;
			} else if (
				hPositionSlug === "center" &&
				(vPosition === "top" || !vPosition)
			) {
				positionObj = `left: 50%; transform: translateX(-50%) ; display: inline-block;`;
			} else if (
				hPositionSlug === "center" &&
				(vPosition === "bottom" || !vPosition)
			) {
				positionObj = `left: 50%; transform: translateX(-50%); bottom:0; display: inline-block;`;
			} else if (
				hPositionSlug === "right" &&
				(vPosition === "top" || !vPosition)
			) {
				positionObj = `right: 0;`;
			} else if (hPositionSlug === "right" && vPosition === "middle") {
				positionObj = `transform:translateY(-50%); top:50%; right:0;`;
			} else if (hPositionSlug === "right" && vPosition === "bottom") {
				positionObj = `right:0;bottom:0;`;
			} else if (
				hPositionSlug === "left" &&
				(vPosition === "top" || !vPosition)
			) {
				positionObj = `left: 0;`;
			} else if (hPositionSlug === "left" && vPosition === "middle") {
				positionObj = `left:0;transform:translateY(-50%); top:50%;`;
			} else if (hPositionSlug === "left" && vPosition === "bottom") {
				positionObj = `left:0;bottom:0;`;
			}
		} else {
			if (hPositionSlug === "center") {
				positionObj = `margin-left: auto; margin-right: auto;`;
			}
			if (hPositionSlug === "right") {
				positionObj = `margin-left: auto;`;
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

export const getSpacingCss = (
	spacing,
	isAbsolute,
	dvKey = "pc",
	spacingType = "",
	important
) => {
	let { marginTop, marginBottom, paddingLeft, paddingRight } = ``;
	const func = { pc: setPcVwValues, sp: setSpVwValues };
	let spacingObj = {};
	if (spacing) {
		if (typeof spacing == "string" || spacing instanceof String) {
			const spacingArr = spacing.split(" ");

			spacingObj.top = spacingArr[0];
			spacingObj.right = spacingArr[1];
			spacingObj.bottom = spacingArr[2];
			spacingObj.left = spacingArr[3];
		} else {
			spacingObj = spacing;
		}

		marginTop =
			spacingObj.top && spacingType === "padding"
				? func[dvKey]("padding-top", spacingObj.top, true, important)
				: spacingObj.top
				? func[dvKey]("margin-block-start", spacingObj.top, true, important)
				: "";
		marginBottom =
			spacingObj.bottom && spacingType === "padding"
				? func[dvKey]("padding-bottom", spacingObj.bottom, true, important)
				: spacingObj.bottom
				? func[dvKey]("margin-block-end", spacingObj.bottom, true, important)
				: "";
		paddingLeft =
			spacingObj.left && !isAbsolute
				? func[dvKey]("padding-left", spacingObj.left, true, important)
				: spacingObj.left && isAbsolute
				? func[dvKey]("margin-left", spacingObj.left, true, important)
				: ``;
		paddingRight =
			spacingObj.right && !isAbsolute && spacingType !== "margin"
				? func[dvKey]("padding-right", spacingObj.right, true, important)
				: (spacingObj.right && isAbsolute) || spacingType === "margin"
				? func[dvKey]("margin-right", spacingObj.right, true, important)
				: ``;
		return {
			top: marginTop,
			right: paddingRight,
			bottom: marginBottom,
			left: paddingLeft,
		};
	} else {
		return {
			top: ``,
			right: ``,
			bottom: ``,
			left: ``,
		};
	}
};

export const getMqVwValue = (type, value, isMax = false) => {
	//const breakPoints = Style.Mq.breakpoints
	const breakPoints = [413, 768, 960, 1280, 1280];
	const vwSizes = [];
	breakPoints.forEach((bq, index) => {
		vwSizes.push(get_vw(value, bq));
	});
	const maxValue =
		isMax === true ? `${type}: ${value}px` : `${type}: ${vwSizes[4]}vw`;
	return `
  ${Styles.Mq.sp} {
    ${type}: ${vwSizes[0]}vw;
  }
  ${Styles.Mq.pab} {
    ${type}: ${vwSizes[1]}vw;
  }
  ${Styles.Mq.tb} {
    ${type}: ${vwSizes[2]}vw;
  }
  ${Styles.Mq.pc} {
    ${type}: ${vwSizes[3]}vw;
  }

  ${Styles.Mq.large} {
    ${maxValue}
  }
  `;
};

export const getPcSpVwValue = (type, pcValue, spValue, isMax = false) => {
	//const breakPoints = Styles.Mq.breakpoints
	const breakPoints = [413, 768, 960, 1280, 1280];
	const vwSizes = [];
	breakPoints.forEach((bq, index) => {
		if (index < 2) {
			vwSizes.push(get_vw(spValue, bq));
		} else {
			vwSizes.push(get_vw(pcValue, bq));
		}
	});
	const maxValue =
		isMax === true ? `${type}: ${pcValue}px` : `${type}: ${vwSizes[4]}vw`;
	return `
  ${Styles.Mq.sp} {
    ${type}: ${vwSizes[0]}vw;
  }
  ${Styles.Mq.pab} {
    ${type}: ${vwSizes[1]}vw;
  }
  ${Styles.Mq.tb} {
    ${type}: ${vwSizes[2]}vw;
  }
  ${Styles.Mq.pc} {
    ${type}: ${vwSizes[3]}vw;
  }

  ${Styles.Mq.large} {
    ${maxValue}
  }
  `;
};
export const getCurentURL = (props) => {
	if (typeof window !== `undefined`) {
		var hostname = window.location.hostname;
		var localhostStrArr = ["localhost", "127.0.0.1"];
		for (var i = 0; i < localhostStrArr.length; i++) {
			if (localhostStrArr[i] === hostname) {
				return Config.localUrl;
			}
		}
		return Config.websiteUrl;
	} else {
		return Config.websiteUrl;
	}
};
export const getTextType = (key) => {
	let element = "";
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
		element: element,
	};
};

export const getLangKey = (props) => {
	if (typeof window !== `undefined`) {
		if (!Config.currentLang) {
			const location = window.location;
			const url = location.pathname;
			const { langs, defaultLangKey } = Config.languages;
			Config.setCurrentLang(getCurrentLangKey(langs, defaultLangKey, url));

			return Config.currentLang;
		} else {
			return Config.currentLang;
		}
	} else {
		const langs = Config.languages.langs;
		const defaultLang = Config.languages.defaultLangKey;
		if (langs.length >= 1) {
			return defaultLang;
		} else {
			return "";
		}
	}
};
export const getLangInfo = (props) => {
	if (typeof window !== `undefined`) {
		const location = window.location;
		const url = location.pathname;
		const { langs, defaultLangKey } = Config.languages;
		const langKey = getCurrentLangKey(langs, defaultLangKey, url);
		const homeLink = `/${langKey}/`;
		if (url.indexOf("/ja/") !== -1 || url.indexOf("/en/") !== -1) {
			return getLangs(langs, langKey, getUrlForLang(homeLink, url));
		}
		return [{ link: url }];
	} else {
		const langs = Config.languages.langs;
		const defaultLang = Config.languages.defaultLangKey;
		if (langs.length >= 1) {
			return [{ link: "/" }];
		} else {
			return "";
		}
	}
};

export const htmlToNode = (htmlStr) => {
	if (!htmlStr || typeof htmlStr !== "string") return;
	var tmpElmt = document.createElement("div");

	tmpElmt.innerHTML = htmlStr;
	return tmpElmt.childNodes;
};

export const getVwValue = (value) => {
	return value * Config.vwValue;
};
export const getSectionMarginCss = (pc = 20, sp = 32) => {
	return `
    ${Styles.Mq.moreTab} {
      margin-top: ${getVwValue(pc)}vw;
    }
    ${Styles.Mq.lessPab} {
      margin-top: ${getVwValue(sp)}vw;
    }
  `;
};

export const get_vw = (value, viewport = 320) => {
	const rate = 100 / viewport;
	return rate * value * 1;
};

export const getPcSpVwTransform = (type, pcValue, spValue, isMax = false) => {
	//const breakPoints = Styles.Mq.breakpoints
	const breakPoints = [413, 768, 960, 1280, 1280];
	const vwSizes = [];
	breakPoints.forEach((bp, index) => {
		if (index < 2) {
			vwSizes.push(get_vw(spValue, bp));
		} else {
			vwSizes.push(get_vw(pcValue, bp));
		}
	});
	const maxValue =
		isMax === true
			? `transform: ${type}(${pcValue}px)`
			: `transform: ${type}(${vwSizes[4]}vw)`;
	return `
  ${Styles.Mq.sp} {
   transform:  ${type}(${vwSizes[0]}vw);
  }
  ${Styles.Mq.pab} {
   transform: ${type}(${vwSizes[1]}vw);
  }
  ${Styles.Mq.tb} {
   transform: ${type}(${vwSizes[2]}vw);
  }
  ${Styles.Mq.pc} {
   transform: ${type}(${vwSizes[3]}vw);
  }

  ${Styles.Mq.large} {
    ${maxValue}
  }
  `;
};

export const setPcVwValues = (type, pcValue, isMax = false) => {
	//const breakPoints = Styles.Mq.breakpoints
	const breakPoints = [960, 1280, 1280];
	const vwSizes = [];
	breakPoints.forEach((bq, index) => {
		vwSizes.push(get_vw(pcValue, bq));
	});
	const maxValue =
		isMax === true ? `${type}: ${pcValue}px` : `${type}: ${vwSizes[2]}vw`;
	return `
  ${Styles.Mq.tb} {
    ${type}: ${vwSizes[0]}vw;
  }
  ${Styles.Mq.pc} {
    ${type}: ${vwSizes[1]}vw;
  }
  ${Styles.Mq.large} {
    ${maxValue}
  }
  `;
};
export const setSpVwValues = (type, spValue, isMax = false, important) => {
	//const breakPoints = Styles.Mq.breakpoints
	const breakPoints = [413, 768];
	const vwSizes = [];
	breakPoints.forEach((bq, index) => {
		vwSizes.push(get_vw(spValue, bq));
	});
	const importantStr = important ? "!important" : "";
	return `
  ${Styles.Mq.sp} {
    ${type}: ${vwSizes[0]}vw ${importantStr};
  }
  ${Styles.Mq.pab} {
    ${type}: ${vwSizes[1]}vw ${importantStr};
  }
  `;
};
export const setVwValueByMq = (type, value, key, isMax) => {
	//const breakPoints = Styles.Mq.breakpoints
	const breakPoints = { sp: 413, pab: 768, tb: 960, pc: 1280, large: 1280 };
	const vwValue = get_vw(value, breakPoints[key]);
	if (key === "large") {
		const maxValue =
			isMax === true ? `${type}: ${value}px` : `${type}: ${vwValue}vw`;
		return `
  ${Styles.Mq[key]} {
    ${maxValue}
  }
  `;
	} else {
		return `
  ${Styles.Mq[key]} {
    ${type}: ${vwValue}vw;
  }
  `;
	}
};

export const getSpVwValue = (value = 10) => {
	return `
    ${get_vw(value, 415)}vw;
  `;
};
export const getPcVwValue = (font_size = 10) => {
	return `
    ${get_vw(font_size, 1280)}vw;
  `;
};
export const parseHtml = (elem) => {
	return parse(elem);
};

const rootRelative = (path) => {
	if (path === undefined) return false;
	const result = path.replace(/\\/g, "/").replace(/^[^/]*\/\/[^/]*/, "");
	return result;
};

const dirctryName = (path) => {
	let result = path.replace(/\\/g, "/").replace(/\/[^/]*$/, "");
	if (result.match("/^[^/]*.[^/.]*$/")) {
		result = "";
	}
	return result;
};

const fullBasename = (path) => {
	let result = "";
	if (path) {
		let paths = path.split("/");

		result = paths.pop();
	}
	return result;
};
const basename = (path) => {
	let result = fullBasename(path).replace("/[?#].*$/g", "");
	return result;
};

const extension = (path) => {
	let result = basename(path).match(/\.([^.]+)$/);
	if (result) {
		result = result[1];
	} else {
		result = "";
	}
	return result;
};
export const getFileName = (url) => {
	//if(!url) return;
	const path = rootRelative(url);
	if (!path) return "index";
	if (path.slice(-1) === "/") {
		url = path.slice(0, -1);
	}

	let extention = extension(url);

	if (extention) {
		url = dirctryName(url);
	}
	//var url = dirctryName(url);

	url = url.substring(url.lastIndexOf("/") + 1, url.length);
	if (url.indexOf(".") !== -1) url = url.substring(0, url.indexOf("."));
	if (url.indexOf("#") !== -1) url = url.replace("#", "");
	if (url.indexOf("?") !== -1) url = url.replace("?", "");
	return url ? url : "index";
};
export const getIsUriName = function(name) {
	let value = null;
	if (typeof window !== `undefined`) {
		value = window.location.href.indexOf(name);
	}
	return value !== -1 ? true : false;
};

export const getDir = function(place, n) {
	return place.pathname.replace(
		new RegExp("(?:\\/+[^\\/]*){0," + ((n || 0) + 1) + "}$"),
		"/"
	);
};
export const getDirName = function(place) {
	let dir = getDir(place);
	let dirlist = dir.split("/");
	return dirlist[dirlist.length - 2];
};
export const getPrevDirName = function(place) {
	let dir = getDir(place);
	let dirlist = dir.split("/");
	return dirlist[dirlist.length - 3];
};

export const toUpperCaseFiest = function(str) {
	if (!str || typeof str !== "string") return str;
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
export function isObject(obj) {
	return obj && Object.getPrototypeOf(obj) === Object.prototype;
}

export const mapToObject = (map) =>
	[...map].reduce((l, [k, v]) => Object.assign(l, { [k]: v }), {});
