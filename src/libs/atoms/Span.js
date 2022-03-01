import React, { PureComponent } from "react";
import { textHoc } from "./TextHoc";

export class Span extends PureComponent {
	render() {
		let { forwardedRef, children, itemProp, data, ...rest } = this.props;
		let pcFontSize = data.instance.styles
			? data.instance.styles.pcFontSize
			: null;
		let spFontSize = data.instance.styles
			? data.instance.styles.spFontSize
			: null;
		pcFontSize = pcFontSize ? pcFontSize : null;
		spFontSize = spFontSize ? spFontSize : null;
		const stylesObj = {
			pcFontSize: pcFontSize,
			spFontSize: spFontSize,
			pcLineHeight: pcFontSize * 1.75,
			spLineHeight: spFontSize * 1.75,
		};

		if (itemProp) {
			return (
				<span
					itemprop={itemProp}
					ref={forwardedRef}
					css={data.func(stylesObj, data.instance)}
					{...rest}
				>
					{this.props.children}
				</span>
			);
		} else {
			return (
				<span
					ref={forwardedRef}
					css={data.func(stylesObj, data.instance)}
					{...rest}
				>
					{this.props.children}
				</span>
			);
		}
	}
}

export default textHoc(Span);
