import React, { PureComponent } from "react";
import { OverlayOpen, OverlayClose } from "../redux/action";

import * as Modules from "./";
import { connect } from "react-redux";

import * as Atoms from "../atoms";

export class SelectHeader extends PureComponent {
	clickHandler = (e) => {
		const { dispatch, ...rest } = this.props;
		rest.currentValue = this.currentValue;

		dispatch(
			OverlayOpen({
				element: Modules.SelectList,
				props: {
					onClick: function(event) {
						dispatch(OverlayClose());
					},
					...rest,
				},
			})
		);
	};
	constructor(props) {
		super(props);

		this.currentValue = "all";
	}
	render() {
		const { header, values, current, headerStyle, spanStyle } = this.props;
		let name = "ALL";
		if (current) {
			this.currentValue = current;
			name = values.get(current).name;
		} else {
			this.currentValue = "all";
			name = "ALL";
		}

		return (
			<div
				onClick={(event) => {
					event.preventDefault();
					this.clickHandler(event);
				}}
			>
				<Atoms.H4
					styles={
						headerStyle
							? headerStyle
							: {
									italic: true,
									color: "#acacac",
									pcFontSize: 16,
									spFontSize: 16,
									letterSpacing: 0.43,
									fontFace: "serif",
									pcLineHeight: 16,
									spLineHeight: 16,
									display: "inline",
							  }
					}
				>
					{`${header} > `}
				</Atoms.H4>
				<Atoms.Span
					styles={
						spanStyle
							? spanStyle
							: {
									bold: true,
									italic: false,
									pcFontSize: 16,
									spFontSize: 16,
									letterSpacing: 0.43,
									fontFace: "serif",
									pcLineHeight: 16,
									spLineHeight: 16,
							  }
					}
				>
					{name}
				</Atoms.Span>
			</div>
		);
	}
}

const mapStateToProps = (state, filter) => {
	return {
		slug: state.SelectReducer.slug,
		value: state.SelectReducer.value,
		currentValue: state.SelectReducer.currentValue,
	};
};
export default connect(mapStateToProps, null, null, { forwardRef: true })(
	SelectHeader
);
