import { css } from "@emotion/react";
/*import regularFontEot from "../font/Apercu-Regular.eot"
import regularFontSvg from "../font/Apercu-Regular.svg"
import regularFontWoff from "../font/Apercu-Regular.woff"*/

import nbkItalicWoff from "../font/FeijoaWeb-MediumItalic.woff2";
import nbkItalicEot from "../font/FeijoaWeb-MediumItalic.eot";

import regularFontSansWoff from "../font/howlt-sans-reg.woff2";
import regularFontSansTtf from "../font/howlt-sans-reg.eot";
import nbkBold from "../font/Apercu-Bold.woff2";
import nbkBoldEot from "../font/Apercu-Bold.eot";

import nbkSerifEot from "../font/DomaineTextWeb-Regular.eot";

import nbkSerifWoff from "../font/DomaineTextWeb-Regular.woff";
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
		font-family: nbkBold, regularFont, "游ゴシック", "Yu Gothic", YuGothic,
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
			src: url(${nbkItalicWoff}) format("woff2"),
				url(${nbkItalicEot}) format("embedded-opentype");
			font-weight: 400;
			font-style: italic;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "nbkBold";
			src: url(${nbkBold}) format("woff2"),
				url(${nbkBoldEot}) format("embedded-opentype");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "regularFont";
			src: url(${regularFontSansWoff}) format("woff2"),
				url(${regularFontSansTtf}) format("embedded-opentype");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			unicode-range: U + 000d-FB04;
		}
		@font-face {
			font-family: "nbkSerif";
			src: url(${nbkSerifWoff}) format("woff2"),
				url(${nbkSerifEot}) format("embedded-opentype");
			font-style: normal;
			font-weight: 500;
		}
	`;
