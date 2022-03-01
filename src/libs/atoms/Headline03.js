import React, { PureComponent } from "react";
import { textHoc } from "./TextHoc";

export class H3 extends PureComponent {
	render() {
		let { forwardedRef, children, data, ...rest } = this.props;
		const stylesObj = {
			pcFontSize: 32,
			spFontSize: 28,
			pcLineHeight: 36,
			spLineHeight: 30,
			display: "block",
		};

		return (
			<h3
				ref={forwardedRef}
				css={data.func(stylesObj, data.instance)}
				{...rest}
			>
				{this.props.children}
			</h3>
		);
	}
}

export default textHoc(H3);
