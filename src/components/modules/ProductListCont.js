import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Modules from "./";
import * as Func from "../../libs/common/func";
class ProductListCont extends Component {
	render() {
		const sectionCss = css`
			${Func.getPcSpVwValue("margin-top", 120, 90)};
		`;
		const HeaderAddLinkCss = css`
			${Func.getPcSpVwValue("margin-bottom", 45, 35)};
		`;
		return (
			<section css={sectionCss}>
				<Modules.HeaderAddLink
					lang={this.props.lang}
					slug={"products"}
					css={HeaderAddLinkCss}
				>
					{this.props.children}
				</Modules.HeaderAddLink>
				<Modules.ProductList />
			</section>
		);
	}
}
export default ProductListCont;
