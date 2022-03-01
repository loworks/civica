import React, { PureComponent } from "react";
import { textHoc } from "./TextHoc";

export class P extends PureComponent {
	render() {
		let { forwardedRef, children, data, ...rest } = this.props;
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
			display: "block",
		};
		return (
			<p ref={forwardedRef} css={data.func(stylesObj, data.instance)} {...rest}>
				{this.props.children}
			</p>
		);
	}
}

export default textHoc(P);
