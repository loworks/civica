import React, { Component } from "react";
import { css } from "@emotion/react";

class InitialLoader extends Component {
	constructor(props) {
		super(props);

		this.container = React.createRef();
	}

	componentDidMount() {}

	render() {
		return <div>LOADING</div>;
	}
}

export default InitialLoader;
