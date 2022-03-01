import React, { Component } from "react";
import { connect } from "react-redux";
import * as Action from "libs/redux/action";
import * as Libs from "libs";
class HamburgerMenu extends Component {
	constructor(props) {
		super(props);
		this.mount = false;
	}
	onMenu = false;
	className = "on-menu";
	cont = null;
	componentDidMount() {
		this.cont = document.getElementsByTagName("html")[0];
	}

	clickHandler = () => {
		if (!this.cont) return;
		const { dispatch } = this.props;

		this.onMenu = this.onMenu ? false : true;

		dispatch(Action.MenuClick(this));
	};
	render() {
		return (
			<div onClick={this.clickHandler}>
				<Libs.Atoms.MenuIcon
					bgColor="#f89eb0"
					width="40"
					height="40"
					type="circle"
				/>
			</div>
		);
	}
}

export default connect()(HamburgerMenu);
