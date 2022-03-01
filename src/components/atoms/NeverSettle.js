import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Style from "../../libs/styles";
class NeverSettle extends Component {
	render() {
		return (
			<svg css={style} viewBox="0 0 294 96" preserveAspectRatio="xMinYMin meet">
				<use xlinkHref="#never-settle" x="0" y="0" />
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
export default NeverSettle;
