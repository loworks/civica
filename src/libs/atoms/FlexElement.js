import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";
import { css } from "@emotion/react";
import * as Styles from "../styles";
export class FlexElement extends PureComponent {
	render() {
		let {
			className,
			forwardedref,
			children,
			data,

			...rest
		} = this.props;

		const stylesObj = {
			display: "flex",
		};

		const justifyContent = this.props.data.instance.styles.spaceAround
			? `justify-content: space-around;`
			: `justify-content: space-between;`;
		const flexDirectionPc = this.props.data.instance.styles.flexDirectionPc
			? `flex-direction: ${this.props.data.instance.styles.flexDirectionPc}`
			: ``;

		const flexDirectionSp = this.props.data.instance.styles.flexDirectionSp
			? `flex-direction: ${this.props.data.instance.styles.flexDirectionSp}`
			: ``;
		let alignItem = this.props.data.instance.styles.alignItems;

		alignItem = alignItem
			? `align-items: ${this.props.data.instance.styles.alignItems};`
			: "";
		const alignItemSp = this.props.data.instance.styles.alignItemsSp
			? `align-items: ${this.props.data.instance.styles.alignItemsSp};`
			: "";

		const flexCss = () => css`
			flex-wrap: wrap;
			${justifyContent}

			${Styles.Mq.moreTab} {
				${flexDirectionPc};
				${alignItem}
			}
			${Styles.Mq.lessPab} {
				${flexDirectionSp};
				${alignItemSp}
			}
		`;

		return (
			<div
				ref={forwardedref}
				css={data.func(stylesObj, data.instance, flexCss)}
				className={`${className ? className : ""} flex-cont`}
				{...rest}
			>
				{children}
			</div>
		);
	}
}

export default elementHoc(FlexElement);
