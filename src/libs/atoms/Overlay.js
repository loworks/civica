import React, { Component } from "react";
import { css } from "@emotion/react";
import { OverlayClose } from "../redux/action";
import * as Style from "../styles";
import { connect } from "react-redux";
import { TimelineMax, Power2 } from "gsap";
class OverLay extends Component {
	contCss = () => {
		return css`
			width: 100vw;
			height: 100vh;
			position: fixed;
			z-index: 10000;
			top: 0px;
			left: 0px;
			pointer-events: none;
			opacity: 0;
			.on-overlay & {
				opacity: 1;
				pointer-events: auto;
			}
		`;
	};

	bgCss = () => {
		return css`
			width: 100%;
			height: 100%;
			color: #000;
			position: absolute;
			z-index: 0;
			top: 0px;
			left: 0px;
			background-color: #000;
			opacity: 0.65;
		`;
	};
	closeHandler = () => {
		const { dispatch } = this.props;
		const cont = document.getElementsByTagName("html")[0];
		cont.classList.remove("on-overlay");
		this.hide();
		dispatch(OverlayClose());
	};
	constructor(props) {
		super(props);
		this.content = null;
		this.container = React.createRef();
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.content !== this.content) {
			if (nextProps.content !== null) {
				this.content = nextProps.content;
				const className = "on-overlay";
				const cont = document.getElementsByTagName("html")[0];
				cont.classList.add(className);

				this.appear();
			} else {
				this.content = null;
				this.closeHandler();
			}
			return true;
		}
		return false;
	}
	appear = () => {
		const tl = new TimelineMax();
		const container = this.container;

		tl.set(container, { opacity: 0 });
		tl.to(container, 0.5, { opacity: 1, ease: Power2.easeOut });
	};
	hide = () => {
		const tl = new TimelineMax();
		const container = this.container;

		tl.to(container, 0.5, { opacity: 0, ease: Power2.easeOut });
	};
	render() {
		const contentType = this.content;

		return (
			<div
				className="overlay"
				css={this.contCss}
				ref={(el) => {
					this.container = el;
				}}
			>
				{contentType ? <contentType.element {...this.content.props} /> : ""}

				<Style.Shape.Rect
					css={this.bgCss}
					onClick={() => {
						this.closeHandler();
					}}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, filter) => {
	return {
		content: state.OverlayReducer.content,
		overlayState: state.OverlayReducer.state,
	};
};
export default connect(mapStateToProps, null, null, { forwardRef: true })(
	OverLay
);
