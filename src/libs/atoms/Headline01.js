import React, { PureComponent } from "react";
import { textHoc } from "./TextHoc";

export class H1 extends PureComponent {
	render() {
		let { forwardedRef, children, data, ...rest } = this.props;
		const stylesObj = {
			pcFontSize: 50,
			spFontSize: 46,
			pcLineHeight: 50,
			spLineHeight: 46,
			display: "block",
		};

		return (
			<h1
				ref={forwardedRef}
				css={data.func(stylesObj, data.instance)}
				{...rest}
			>
				{this.props.children}
			</h1>
		);
	}
}

export default textHoc(H1);
