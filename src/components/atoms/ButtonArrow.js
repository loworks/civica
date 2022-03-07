import React from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
import * as Atoms from "../atoms";
import * as Common from "../../common";
import * as Libs from "libs";
export default (props) => {
	const { children, ...rest } = props;
	const contCss = () => css`
		display: inline-flex;
		align-items: center;
		background: none;
	`;
	const iconCss = () => css`
		width: 60px;
		height: 60px;

		position: relative;
		.icon-arrow {
			position: relative;
			top: 50%;
			transform: translateY(-50%);
		}
	`;
	const pCss = () => css`
		white-space: nowrap;
		margin-right: 20px;
	`;
	return (
		<button css={contCss} {...rest}>
			<Libs.Atoms.P
				css={pCss}
				className={"label"}
				styles={{
					fontPc: {
						fontSize: 24,
						lineHeight: 32,
						fontFace: "sansserif",
						textAlign: "right",
					},
				}}
			>
				{children}
			</Libs.Atoms.P>
			<div css={iconCss}>
				<Atoms.IconArrow></Atoms.IconArrow>
			</div>
		</button>
	);
};
