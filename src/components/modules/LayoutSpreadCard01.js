import React, { PureComponent } from "react";
import { css } from "@emotion/react";
import * as Styles from "../../libs/styles";
import * as Func from "../../libs/common/func";
import { layoutSpreadCardHoc } from "./LayoutSpreadCardHoc";

const cssProps = (instance) => {
	return {
		sentenceLeftContCss: () => css`
			${Styles.Mq.lessPab} {
				padding-bottom: ${Func.getVwValue(10)}vw;
			}
			${Styles.Mq.moreTab} {
				flex-basis: 40%;
			}
		`,
		sentenceRightContCss: () => {
			const heightValue = instance.state.imgContHeight;

			return css`
				${Styles.Mq.lessPab} {
					margin-top: ${heightValue}px;
					padding-top: ${Func.getVwValue(10)}vw;
				}
				${Styles.Mq.moreTab} {
					flex-basis: 60%;
				}
			`;
		},
		imgItem: () => {
			const heightValue = instance.state.imgContHeight;

			const sentenceLeftHeight = instance.state.sentenceLeftHeight;
			return css`
				position: relative;
				overflow: visible !important;

				${Styles.Mq.lessPab} {
					position: absolute;
					width: 100%;
					height: ${heightValue}px;
					top: ${sentenceLeftHeight}px;
					.gatsby-image-wrapper > div {
						padding-bottom: ${(1 / instance.ratio) * 100}% !important;
					}
				}
			`;
		},
	};
};
export class LayoutSpreadCard01 extends PureComponent {
	//--------------------------------------
	//  Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------

	render() {
		const { forwardedref, ...rest } = this.props;

		return <section ref={forwardedref} {...rest} />;
	}
}
export default layoutSpreadCardHoc(LayoutSpreadCard01, cssProps);
