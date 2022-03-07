import React from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
export default (props) => {
	const { ...rest } = props;
	const style = () => css`
		width: 100%;
		height: auto;

		fill: #000;
	`;
	return (
		<svg
			css={style}
			{...rest}
			viewBox="0 0 800 42"
			preserveAspectRatio="xMinYMin meet"
		>
			<use xlinkHref="#header-know-your" x="0" y="0" />
		</svg>
	);
};
