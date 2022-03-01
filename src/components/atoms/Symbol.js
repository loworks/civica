import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Styles from "../../libs/styles";
class Symbol extends Component {
	render() {
		return (
			<svg css={style} viewBox="0 0 62 22" preserveAspectRatio="xMinYMin meet">
				<use xlinkHref="#symbol" x="0" y="0" />
			</svg>
		);
	}
}
const style = () => css`
	height: 22px;
	position: absolute;
	z-index: 10000;
	fill: #e84273;
	top: 50%;
	left: 50vw;
	margin-top: -11px;
	margin-left: -31px;
	${Styles.Mq.sp} {
		height: 22px;
	}
`;
export default Symbol;
