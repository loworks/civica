import React, { Component } from "react";
import { css } from "@emotion/react";
import * as Libs from "libs";
class InitialLoader extends Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.container = React.createRef();
	}

	componentDidMount() {}

	render() {
		const { ...rest } = this.props;
		return <div {...rest}></div>;
	}
}

export default InitialLoader;
