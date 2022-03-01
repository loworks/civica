import React from "react";
import { css } from "@emotion/react";

import * as LibsAtoms from ".";
export default (props) => {
	const {
		to,
		children,
		styles = {
			fontPc: {
				fontSize: 13,
				fontFace: "serif",
				letterSpacing: 0.43,
				italic: true,
			},
			fontSp: {
				fontSize: 13,
				fontFace: "serif",
				letterSpacing: 0.43,
				italic: true,
			},
		},
		...rest
	} = props;
	const contCss = () => {
		return css`
			border: 1px solid;
			display: inline-block;
			border-radius: 20px;
			padding: 0.4em 10px;
		`;
	};
	return (
		<a css={contCss} href={to} target="_new" {...rest}>
			<LibsAtoms.P styles={styles}>{children}</LibsAtoms.P>
		</a>
	);
};
