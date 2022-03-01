import React from "react";
import { css } from "@emotion/react";
import * as Common from "../../common";
export default (props) => {
	const { ...rest } = props;
	const style = () => css`
		width: auto;
		height: auto;
		fill: ${Common.Config.keyColor};
		transform: transformOrigin;
	`;
	return (
		<svg
			css={style}
			{...rest}
			viewBox="0 0 62 58"
			preserveAspectRatio="xMinYMin meet"
		>
			<use xlinkHref="#icon-quote" x="0" y="0" />
		</svg>
	);
};
