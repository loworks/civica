import React from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
export default (props) => {
	const style = () => css`
		width: auto;
		height: 40%;
		fill: #fff;
	`;
	return (
		<svg
			css={style}
			className={"icon-arrow"}
			viewBox="0 0 30 50"
			preserveAspectRatio="xMinYMin meet"
		>
			<use xlinkHref="#icon-arrow" x="0" y="0" />
		</svg>
	);
};
