import React, { Component } from "react";
import * as Libs from "libs";

class HeaderAddLink extends Component {
	render() {
		const { lang, slug, children, className } = this.props;
		const getLink = () => {
			if (slug) {
				return (
					<Libs.Atoms.P
						styles={{
							fontPc: {
								fontSize: 13,
								lineHeight: 13,
								fontFace: "sansserif",
								letterSpacing: 1,
								italic: true,
								textAlign: "center",
							},
							fontSp: {
								fontSize: 13,
								lineHeight: 13,
								fontFace: "sansserif",
								letterSpacing: 1,
								italic: true,
								textAlign: "center",
							},
							positionPc: { space: "10 0 0 0" },
							positionSp: { space: "10 0 0 0" },
						}}
					>
						<Libs.Atoms.TriggerLink
							transition={
								Libs.Transition.TrigerPageTransition.TrigerPageTransition
							}
							to={`/${lang}/${slug}/`}
						>
							View More
						</Libs.Atoms.TriggerLink>
					</Libs.Atoms.P>
				);
			} else {
				return false;
			}
		};
		return (
			<div css={className}>
				<Libs.Atoms.H2
					styles={{
						fontPc: {
							fontSize: 20,
							lineHeight: 20,
							letterSpacing: 0.35,
							textAlign: "center",
						},
						fontSp: {
							fontSize: 20,
							lineHeight: 20,
							letterSpacing: 0.35,
							textAlign: "center",
						},
					}}
				>
					{children}
				</Libs.Atoms.H2>

				{getLink()}
			</div>
		);
	}
}
export default HeaderAddLink;
