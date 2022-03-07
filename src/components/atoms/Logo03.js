import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
class Logo03 extends Component {
	render() {
		return (
			<svg css={style} viewBox="0 0 11 11" preserveAspectRatio="xMinYMin meet">
				<use xlinkHref="#eho-ada-logo" x="0" y="0" />
			</svg>
		);
	}
}
const style = () => css`
	height: 28px;
	fill: #000;
	${Style.Mq.sp} {
		height: 43px;
	}
`;
export default Logo03;
