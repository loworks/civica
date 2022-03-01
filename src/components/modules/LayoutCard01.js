import React, { PureComponent } from "react";

import { css } from "@emotion/react";
import * as Style from "../../libs/styles";

import { layoutCardHoc } from "./LayoutCardHoc";

export class LayoutCard01 extends PureComponent {
	//--------------------------------------
	//  Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------

	render() {
		const { forwardedref, data, ...rest } = this.props;
		const stylesObj = {};
		const cssProps = (instance) => {
			return {};
		};
		const flexContCss = () => {
			const { reverse } = this.props;

			return css`
				${reverse ? { "flex-direction": "row-reverse" } : ""};
				${Style.Flex.flexList({
					lessPab: 100,
					moreTab: 50,
				})};
			`;
		};
		return (
			<div
				ref={forwardedref}
				css={data.func(stylesObj, data.instance, flexContCss)}
				{...rest}
			>
				{data.htmlFunc(cssProps(data.instance), data.instance)}
			</div>
		);
	}
}

export default layoutCardHoc(LayoutCard01);
