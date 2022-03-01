import React, { PureComponent } from "react";
import { graphql } from "gatsby";
import * as Common from "../common";
import * as Func from "../libs/common/func";
import * as Organisms from "../components/organisms";
import { css } from "@emotion/react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as Libs from "libs";

export class Tag extends PureComponent {
	contCss = () => css`
		${Func.getPcSpVwValue("margin-top", 350, 275, true)};
	`;

	constructor(props) {
		super(props);

		this.counter = 0;
	}
	componentDidMount() {
		Libs.Common.Config.excuteTransition();
	}
	render() {
		const { data, pageContext } = this.props;

		return <></>;
	}
}

export default Tag;
