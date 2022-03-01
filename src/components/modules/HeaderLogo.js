import React, { Component } from "react";
import { connect } from "react-redux";

import * as Atomos from "../atoms";

import * as Libs from "libs";

class HeaderLogo extends Component {
	constructor(props) {
		super(props);
		this.langKey = Libs.Common.Func.getLangKey();
		this.logo = React.createRef();
		this.mount = false;
	}

	componentDidMount() {}
	shouldComponentUpdate(nextProps, nextState) {
		//console.log("HeaderLogo - shouldComponentUpdate", nextProps, nextState)
		if (this.langKey !== nextProps.lang) {
			this.langKey = nextProps.lang;
			return true;
		}
	}

	render() {
		//console.log("HeaderLogo - render")
		return (
			<Libs.Atoms.TriggerLink
				transition={Libs.Transition.TrigerPageTransition.TrigerPageTransition}
				to={`/${this.langKey}/`}
			>
				<div ref={this.logo}>
					<Atomos.Logo />
				</div>
			</Libs.Atoms.TriggerLink>
		);
	}
}

export default connect(
	(state) => ({
		lang: state.ClickReducer.lang,
	}),
	null
)(HeaderLogo);
