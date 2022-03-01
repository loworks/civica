import React, { PureComponent } from "react";
import { textHoc } from "./TextHoc";

export class H2 extends PureComponent {
	render() {
		let { forwardedRef, children, data, func, instance, ...rest } = this.props;
		const stylesObj = {
			pcFontSize: 36,
			spFontSize: 32,
			pcLineHeight: 36,
			spLineHeight: 32,
			display: "block",
		};

		return (
			<h2
				ref={forwardedRef}
				css={data.func(stylesObj, data.instance)}
				{...rest}
			>
				{this.props.children}
			</h2>
		);
	}
}

export default textHoc(H2);
