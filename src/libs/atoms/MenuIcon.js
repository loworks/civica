import React from "react";
import { css } from "@emotion/react";
import * as Styles from "../styles";

const menuicon = (
	width,
	height,
	iconWidth,
	iconHeight,
	bgColor = "transparent",
	type = "rect"
) => {
	const iconW = parseFloat(iconWidth);
	const iconH = parseFloat(iconHeight);
	const initTop = (parseFloat(height) - iconH) / 2;

	const heightMargin = iconH / 2;
	const radius = type === "rect" ? 0 : width;
	return css`
		position: relative;
		width: ${width}px;
		height: ${height}px;
		cursor: pointer;
		background-color: ${bgColor};
		border-radius: ${radius}px;
		> * {
			display: block;
			position: absolute;
			left: ${(width - iconW) / 2}px;
			z-index: 1;

			&:nth-child(1) {
				top: ${initTop + heightMargin * 0}px;
			}
			&:nth-child(2) {
				top: ${initTop + heightMargin * 1}px;
			}
			&:nth-child(3) {
				top: ${initTop + heightMargin * 2}px;
			}
		}
	`;
};
export const MenuIcon = (props) => {
	const barHeight = props.barHeight ? props.barHeight : "2px";
	const color = props.color ? props.color : "#000";
	const width = props.width ? props.width : 48;
	const height = props.height ? props.height : 48;
	const iconW = props.iconW ? props.iconW : "18px";
	const iconH = props.iconH ? props.iconH : "10px";
	return (
		<div css={menuicon(width, height, iconW, iconH, props.bgColor, props.type)}>
			<Styles.Shape.Rect widh={iconW} height={barHeight} color={color} />
			<Styles.Shape.Rect widh={iconW} height={barHeight} color={color} />
			<Styles.Shape.Rect widh={iconW} height={barHeight} color={color} />
		</div>
	);
};
