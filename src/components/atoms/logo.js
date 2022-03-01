import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
class Logo extends Component {
	render() {
		return (
			<svg css={style} viewBox="0 0 254 45" preserveAspectRatio="xMinYMin meet">
				<use xlinkHref="#logo" x="0" y="0" />
			</svg>
		);
	}
}
const style = () => css`
	width: 46vw;
	height: auto;
	fill: #000;
	${Style.Mq.sp} {
		height: 43px;
	}
`;
export default Logo;
