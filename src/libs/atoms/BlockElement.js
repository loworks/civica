import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";
export class BlockElement extends PureComponent {
	render() {
		let {
			className,
			forwardedref,
			children,
			data,

			...rest
		} = this.props;

		const stylesObj = { display: "block" };

		return (
			<div
				ref={forwardedref}
				css={data.func(stylesObj, data.instance)}
				className={`${className ? className : ""}`}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default elementHoc(BlockElement);
