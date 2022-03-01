import React, { Component } from "react";
import { css } from "@emotion/react";
import { Power2 } from "gsap";

class Loader extends Component {
	containerCss = () => {
		return css`
			width: 100vw;

			position: fixed;
			pointer-events: none;
			height: 100vh;
			top: 0vh;
			transform: scaleY(0);
			background-color: #fcfcf9;
			z-index: 1000;
			transform-origin: bottom;
		`;
	};
	constructor(props) {
		super(props);

		Loader.__singletonRef = this;
		this.container = React.createRef();
	}

	static enter(tl) {
		Loader.__singletonRef._enter(tl);
	}

	static leave() {
		Loader.__singletonRef._leave();
	}

	componentDidMount() {}
	_enter = (tl) => {
		const target = this.container.current;
		// tl.set(target, { scaleY: 0.4 })

		tl.to(target, 0.7, { scaleY: 1, ease: Power2.easeOut }, 0.3, "exit");
		tl.to({}, 0.3, {});
		tl.set(target, { scaleY: 0 });
	};
	_leave = () => {};

	render() {
		return <div ref={this.container} css={this.containerCss}></div>;
	}
}

export default Loader;
