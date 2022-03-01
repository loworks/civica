import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
class Logo02 extends Component {
	render() {
		return (
			<svg css={style} viewBox="0 0 393 78" preserveAspectRatio="xMinYMin meet">
				<use xlinkHref="#bosa-logo" x="0" y="0" />
			</svg>
		);
	}
}
const style = () => css`
	height: 16px;
	fill: #000;
	${Style.Mq.sp} {
		height: 16px;
	}
`;
export default Logo02;
