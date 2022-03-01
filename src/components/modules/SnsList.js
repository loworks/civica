import React, { PureComponent } from "react";
import { elementHoc } from "../../libs/atoms/ElementHoc";
import { Icon } from "../../libs/atoms/icon";
import { css } from "@emotion/react";

export class SnsList extends PureComponent {
	render() {
		let {
			heightPc = 25,
			heightSp = 25,
			className,
			forwardedRef,
			children,
			data,
			caption = null,
			...rest
		} = this.props;

		const snslistCss = (props) => css`
			display: flex;
			justify-content: space-between;
			min-width: 94px;

			> * {
				&:first-child {
					margin-left: 0px;
				}
			}
		`;

		const stylesObj = {};

		return (
			<ul
				ref={forwardedRef}
				css={[data.func(stylesObj, data.instance)(), snslistCss()]}
				className={`${className ? className : ""} `}
				{...rest}
			>
				<li>
					<Icon
						type="insta"
						heightPc={heightPc}
						heightSp={heightSp}
						url="https://www.instagram.com/"
					/>
				</li>
				<li>
					<Icon
						type="fb"
						heightPc={heightPc}
						heightSp={heightSp}
						url="https://www.facebook.com/"
					/>
				</li>
				<li>
					<Icon
						type="tw"
						heightPc={heightPc}
						heightSp={heightSp}
						url="https://twitter.com/"
					/>
				</li>
			</ul>
		);
	}
}

export default elementHoc(SnsList);
