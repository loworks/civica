import React from "react";
import { css } from "@emotion/react";
import * as Atoms from "./";
export const ButtonClose = (props) => {
	const { className, ...rest } = props;
	const {
		classStr = null,
		iconSize = "40px",
		rectSize = "3px",
		color = "#000",
		clickHandler = null,
		activeClass = null,
		...newProps
	} = rest;
	const contCss = () => css`
		position: relative;
		width: ${iconSize};
		height: ${iconSize};
		cursor: pointer;
		border: 0;
		background-color: transparent;
		& > div {
			pointer-events: none;
		}
	`;
	const activeCss1 = activeClass
		? `.${activeClass} & {
        transition: all 0.5s ease-out 0.4s;
        transform: rotate(45deg) scale(1);
        opacity: 1;
      }`
		: "";
	const activeCss2 = activeClass
		? `.${activeClass} & {
         transition: all 0.5s ease-out 0.5s;
        transform: rotate(45deg) scale(1);
        opacity: 1;
      }`
		: "";
	const animationCss = () => {
		if (activeClass) {
			return css`
				opacity: 0;
				transform: rotate(-5deg) scale(1.2);
			`;
		} else {
			return css`
				transform: rotate(45deg);
			`;
		}
	};
	const styleCss = () =>
		css`
			position: absolute;
			top: ${parseInt(iconSize) / 2 - parseInt(rectSize) / 2}px;
			left: 0;
			transition: all 0.5s ease-out;
			${animationCss()}
			${activeCss1}
		`;
	const style2Css = () =>
		css`
			position: absolute;
			top: 0px;
			left: ${parseInt(iconSize) / 2 - parseInt(rectSize) / 2}px;
			${animationCss()}
			${activeCss2}
		`;

	return (
		<button
			css={contCss}
			onClick={() => {
				if (clickHandler) clickHandler();
			}}
			className={className}
			{...newProps}
		>
			<Atoms.Box
				width={iconSize}
				height={rectSize}
				color={color}
				css={styleCss}
			/>
			<Atoms.Box
				width={rectSize}
				height={iconSize}
				color={color}
				css={style2Css}
			/>
		</button>
	);
};
