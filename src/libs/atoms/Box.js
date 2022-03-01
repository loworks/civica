import React from "react";
import { css } from "@emotion/react";

export const Box = (props) => {
	const { width = "100%", height = "100px", color = "#000", ...rest } = props;
	const styleCss = () =>
		css`
			width: ${width};
			height: ${height};
			background-color: ${color};
		`;
	return <div css={styleCss} {...rest} />;
};
