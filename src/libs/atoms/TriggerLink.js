import React, { PureComponent } from "react";

import { connect } from "react-redux";
import { css } from "@emotion/react";
import * as Transition from "../Transition";

/**
 * Sets default entry and exit props for internal <Link>
 */

class TriggerLink extends PureComponent {
	linkCss = (props) => css`
		cursor: pointer;
	`;
	constructor(props) {
		super(props);
		this.transition = this.props.transition
			? this.props.transition
			: Transition.TrigerPageTransition.TrigerPageTransition;
	}

	navigate = (to, target) => {
		const { dispatch, props } = this.props;
		this.transition(to, dispatch, target, props);
	};
	render() {
		const {
			to,
			style,
			className,
			forwardedref,
			children,
			dispatch,
			onClick,

			...rest
		} = this.props;

		return (
			<a
				style={style}
				className={className}
				href={to}
				css={this.linkCss}
				onClick={(event) => {
					const cont = document.querySelector("html");
					if (to === window.location.pathname) {
						return;
					}
					if (
						cont.classList.contains("now-transition") ||
						!cont.classList.contains("init-loaded")
					) {
						return false;
					}

					event.dispatch = dispatch;
					if (onClick) {
						const returnBool = onClick(event);
						if (returnBool === false) return false;
					}

					this.navigate(to, event.currentTarget);
					event.stopPropagation();
					event.preventDefault();
				}}
				ref={forwardedref}
				{...rest}
			>
				{children}
			</a>
		);
	}
}

export default connect(null, null, null, { forwardRef: true })(TriggerLink);
