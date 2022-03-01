import { css } from "@emotion/react";

export let SanSerifFont = "Messina";
export let SerifFont = "Domaine";
export let BoldFont = "Twm";
export let ItalicFont = "HowltItalic";
export const setSanSerifFont = (font) => {
	SanSerifFont = font;
};
export const setBoldFont = (font) => {
	BoldFont = font;
};

export const setSerifFont = (font) => {
	SerifFont = font;
};

export const setItalicFont = (font) => {
	ItalicFont = font;
};
export const SanSerif = (props) =>
	css`
		font-family: ${SanSerifFont}, "游ゴシック", "Yu Gothic", YuGothic,
			Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN,
			"ヒラギノ角ゴ ProN W1", "Hiragino Kaku Gothic ProN W1",
			"Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, sans-serif;
	`;
export const Italic = (props) =>
	css`
		font-family: ${ItalicFont}, ${SerifFont}, "游明朝", YuMincho,
			"ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝",
			"ＭＳ 明朝", serif;
		font-style: italic;
	`;
export const Bold = (props) =>
	css`
		font-family: ${BoldFont}, ${SanSerifFont}, "游ゴシック", "Yu Gothic",
			YuGothic, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN,
			"ヒラギノ角ゴ ProN W1", "Hiragino Kaku Gothic ProN W1",
			"Hiragino Kaku Gothic Pro", "メイリオ", Meiryo, Osaka, sans-serif;
	`;
export const Serif = (props) =>
	css`
		font-family: ${SerifFont}, "游明朝", YuMincho, "ヒラギノ明朝 ProN W3",
			"Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
	`;
