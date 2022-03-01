import React from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
import * as Atoms from "../atoms";
import * as Common from "../../common";
import * as Libs from "libs";
export default (props) => {
	const { ...rest } = props;
	const contCss = () => css`
		display: flex;
		align-items: center;
		background: none;
	`;
	const iconCss = () => css`
		width: 100px;
		height: 100px;
		background-color: ${Common.Config.keyColor};
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
						fontSize: 28,
						lineHeight: 30,
						fontFace: "sansserif",
						textAlign: "right",
					},
				}}
			>
				Register For
				<br />
				Preview Opportunity
			</Libs.Atoms.P>
			<div css={iconCss}>
				<Atoms.IconArrow></Atoms.IconArrow>
			</div>
		</button>
	);
};
