import { css } from "@emotion/react";
import * as Style from "./index";
import * as Common from "../common";
export const textAncher = () => {
	return css`
		position: relative;
		&:before {
			content: " ";
			position: absolute;
			left: 0;
			bottom: -3px;
			width: 100%;
			border-bottom: 2px solid #000;
		}
		&:after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: $bottom;
			width: 100%;
			bottom: -3px;
			border-bottom: 2px solid #fcfcf9;
			transform: scaleX(0);
			transform-origin: 0 50%;
			transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
		}
		&:hover:after {
			transform: scaleX(1);
		}
	`;
};
export const textAncherLen = () => {
	return css`
		position: relative;

		&:after {
			content: " ";
			position: absolute;
			left: 0;
			bottom: $bottom;
			width: 100%;
			bottom: -6px;
			border-bottom: 3px solid #ececec;
			transform: scaleY(0);
			transform-origin: 0 100%;
			transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
		}
		&.active:after {
			transform: scaleY(1);
			border-bottom: 3px solid #252525;
		}
		&:hover:after {
			transform: scaleY(1);
		}
	`;
};
export const containerCss = (first) =>
	css`
		margin-left: auto;
		margin-right: auto;
		width: calc(100vw - ${Common.Config.siteMargin}vw);
		position: relative;
		${first === true
			? Common.Func.getPcSpVwValue("margin-top", 200, 170)
			: Common.Func.getPcSpVwValue("margin-top", 170, 100)};
	`;
