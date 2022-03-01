import React from "react";
import { css } from "@emotion/react";
import * as Style from "../styles";
export const Icon = (props) => {
	let { type, heightPc = 25, heightSp = 25, ...rest } = props;
	type = `#icon-${props.type}`;

	const svg = (props) => (
		<svg
			css={css`
				height: ${heightPc}px;
				fill: #000;
				${Style.Mq.lessPab} {
					height: ${heightSp}px;
				}
			`}
			viewBox="0 0 20 20"
			preserveAspectRatio="xMinYMin meet"
			{...props}
		>
			<use xlinkHref={type} x="0" y="0" />
		</svg>
	);

	return props.url ? (
		<a href={`${props.url}`} target="_new" {...rest}>
			{svg()}
		</a>
	) : (
		<>{svg(props)}</>
	);
};
