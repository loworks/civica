import React, { Component } from "react";
import { css } from "@emotion/react";
import * as LibsAtoms from "../atoms";

export class UnitCounter extends Component {
	totalQuantity = (skus) => {
		const skuValues = Array.from(skus.values());
		return skuValues.reduce((sum, currentValue, currentIndex, array) => {
			return sum + currentValue.quantity;
		}, 0);
	};
	render() {
		let { skus, ...rest } = this.props;
		let counter = 0;

		const contCss = () => css`
			position: absolute;
			bottom: 0;
			right: 0;
			width: 1.2em;
			height: 1.2em;
			display: inline-block;
			text-align: center;
			line-height: 1.2;
			&:after {
				right: -4px;
				content: "";
				background: #f89eb0;
				border-radius: 1.2em;
				display: block;
				height: 100%;
				width: 1.2em;
				position: absolute;
				top: 0;
			}
		`;
		const numberCss = () => css`
			position: relative;
			z-index: 2;
			right: -4px;
			top: 0px;
		`;
		return (
			<span css={contCss}>
				<LibsAtoms.Span
					css={numberCss}
					styles={{
						pcFontSize: 10,
						spFontSize: 10,
						fontFace: "sansserif",
						text_align: "center",
						bold: true,
					}}
					type="bag"
					{...rest}
				>
					{this.totalQuantity(skus)}
				</LibsAtoms.Span>
			</span>
		);
	}
}
export default UnitCounter;
