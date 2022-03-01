import * as Atoms from "../components/atoms";
import React from "react";
import * as Transition from "../components/Transition";
export const websiteUrl = `https://howlt.com`;
export const testUrl = `https://howlt-test.netlify.app`;
export const localUrl = "http://localhost:8000";
export const vwValue = 0.78125;
export const bgColor = "#fff";
export const black = "#000";
export const gray = "#b9b9b9";
export const siteMargin = 0;
export const keyColor = "#e0a525";
export const keyColor2 = "#d5d1cb";
export const sansserifFont = "regularFont";
export const boldFont = "nbkbold";
export const serifFont = "nbkSerif";

export const languages = { langs: ["ja", "en"], defaultLangKey: "ja" };
export let currentLang;
export let currentLangInfo;
export let currentTransition = null;
let dispatcher = null;

export const setDispatcher = (dispatch) => {
	dispatcher = dispatch;
};
export const getDispatcher = () => {
	return dispatcher;
};
export const setTransition = (transition) => {
	currentTransition = transition;
};
export const excuteTransition = () => {
	if (currentTransition) {
		currentTransition();
		currentTransition = null;
	} else {
		Transition.InitTransition.InitTransition(dispatcher);
	}
};
export const deviceType =
	typeof window !== `undefined` &&
	window.navigator.userAgent.search(
		/iPhone|iPod|iPad|Android/i.test(navigator.userAgent) ||
			(navigator.userAgent.includes("Macintosh") && "ontouchend" in document)
	) !== -1
		? "sp"
		: "pc";
export const isMobile = () => {
	var a = navigator.userAgent || navigator.vendor || window.opera;
	return (
		/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
			a
		) ||
		/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
			a.substr(0, 4)
		)
	);
};
export const isTouchDevice = () => {
	if (typeof window !== `undefined`) {
		return (
			isMobile &&
			("createTouch" in document || "ontouchstart" in document) &&
			"orientation" in window
		);
	}
};
export const setCurrentLang = (lang) => {
	currentLang = lang;
};

export const getHelpText = () => {
	return [
		{
			en: "Tap the left side on your screen",
			ja:
				"画面左側をタップ（クリック）すると前の画像もしくは動画へ移動します。",
		},
		{
			en: "Long Press on your screen",
			ja: "画面を長押しすると停止します。",
		},
		{
			en: "Tap the right side on your screen",
			ja:
				"画面右側をタップ（クリック）すると次の画像もしくは動画へ移動します。",
		},
		{
			en: "Swipe left or right to go to the previous or next page.",
			ja: "画面を左右にスワイプ（ドラッグ）すると前後のページに移動します。",
		},
	];
};
export const getNavItems = () => {
	return [
		{
			to: "/works",
			label: "Food & Drink",
			slug: "about",
		},
		{
			to: "/journal",
			label: "Kids",
			slug: "journal",
		},
		{
			to: "/journal",
			label: "Arts & Culture",
			slug: "journal",
		},
		{
			to: "/journal",
			label: "Sports",
			slug: "journal",
		},
		{
			to: "/shop",
			label: "Features",
			slug: "shop",
		},
		{
			to: "/shop",
			label: "Shop",
			slug: "shop",
		},
		{
			to: "/about",
			label: "About",
			slug: "about",
		},
	];
};

export const getLikItems = () => {
	return [
		{
			to: "https://howlt.com",
			label: <Atoms.LogoHowlt></Atoms.LogoHowlt>,
		},
		{
			to: "http://www.loworks.co.jp",
			label: <Atoms.LogoLoworks></Atoms.LogoLoworks>,
		},

		/*

    {
      to: "/products",
      label: "Contact",
    },*/
	];
};
export const getProductList = () => {
	return [
		{
			to: "hhttp://howlt.com/contents/raindrop2-day",
			label: "iPhone case Rain Drop #2 Day",
			price: "¥4,515",
			src: "products/h_ipn_rain_se02_1400.jpg",
		},
		{
			to: "http://howlt.com/contents/raindrop2-night",
			label: "iPhone case Rain Drop #2 Night",
			price: "¥4,515",
			src: "products/h_ipn_rain_se_bk02_1400.jpg",
		},
		{
			to: "http://howlt.com/contents/between-sky-and-ground",
			label: "BETWEEN SKY AND GROUND",
			price: "¥21,600",
			src: "products/between_sky_ground01_1400.jpg",
		},
	];
};
