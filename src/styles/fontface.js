import { css } from "@emotion/react";
/*import regularFontEot from "../font/Apercu-Regular.eot"
import regularFontSvg from "../font/Apercu-Regular.svg"
import regularFontWoff from "../font/Apercu-Regular.woff"*/

import nbkItalicWoff from "../font/Origin-Bold.woff";
import nbkItalicEot from "../font/Origin-Bold.eot";

import regularFontSansWoff from "../font/Origin-Regular.woff";
import regularFontSansTtf from "../font/Origin-Regular.eot";
import boldFont from "../font/ingo.woff2";
import boldFontwoff from "../font/ingo.woff";

import nbkSerifEot from "../font/Origin-Light.eot";

import nbkSerifWoff from "../font/Origin-Light.woff";
export const SanSerif = (props) =>
	css`
		font-family: regularFont, "游ゴシック", "Yu Gothic", YuGothic, Hiragino Sans,
			"ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W1",
			a "Hiragino Kaku Gothic ProN W1", "Hiragino Kaku Gothic Pro", "メイリオ",
			Meiryo, Osaka, sans-serif;
	`;
export const Italic = (props) =>
	css`
		font-family: nbkItalic, nbkSerif, "游明朝", YuMincho, "ヒラギノ明朝 ProN W3",
			"Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
		font-style: italic;
	`;
export const Bold = (props) =>
	css`
		font-family: boldFont, regularFont, "游ゴシック", "Yu Gothic", YuGothic,
			Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN,
			"ヒラギノ角ゴ ProN W1", "Hiragino Kaku Gothic ProN W1",
			"Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, sans-serif;
		font-weight: 500;
	`;
export const Serif = (props) =>
	css`
		font-family: nbkSerif, "游明朝", YuMincho, "ヒラギノ明朝 ProN W3",
			"Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
	`;
export const FontFace = (props) =>
	css`
		@font-face {
			font-family: "nbkItalic";
			src: url(${nbkItalicWoff}) format("woff"),
				url(${nbkItalicEot}) format("embedded-opentype");
			font-weight: 400;
			font-style: italic;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "boldFont";
			src: url(${boldFont}) format("woff2"), url(${boldFontwoff}) format("woff");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "regularFont";
			src: url(${regularFontSansWoff}) format("woff"),
				url(${regularFontSansTtf}) format("embedded-opentype");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "nbkSerif";
			src: url(${nbkSerifWoff}) format("woff"),
				url(${nbkSerifEot}) format("embedded-opentype");
			font-style: normal;
			font-weight: 500;
		}
	`;
