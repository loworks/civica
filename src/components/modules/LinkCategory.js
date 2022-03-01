import React, { PureComponent } from "react";
import * as Libs from "libs";
export class LinkCategory extends PureComponent {
	render() {
		const {
			to,
			children,
			className,
			forwardedref,
			styles = {
				italic: true,
				pcFontSize: 13,
				spFontSize: 13,
				letterSpacing: 0.43,
				fontFace: "serif",
			},
			...rest
		} = this.props;
		return (
			<Libs.Atoms.TriggerLink
				transition={Libs.Transition.TrigerPageTransition.TrigerPageTransition}
				to={to}
				ref={forwardedref}
				{...rest}
			>
				<div>
					<Libs.Atoms.P styles={styles}>{children}</Libs.Atoms.P>
				</div>
			</Libs.Atoms.TriggerLink>
		);
	}
}

export default LinkCategory;
