import React, { PureComponent } from "react";
import { graphql } from "gatsby";

import * as Organisms from "../components/organisms";
import { css } from "@emotion/react";
import * as Libs from "libs";
export class Category extends PureComponent {
	contCss = () => css`
		${Libs.Common.Func.getPcSpVwValue("margin-top", 350, 275, true)};
	`;

	constructor(props) {
		super(props);
		this.itemNum = 0;
		this.counter = 0;
	}
	componentDidMount() {
		Libs.Common.Config.excuteTransition();
	}
	render() {
		const { data } = this.props;

		return <></>;
	}
}

export default Category;
