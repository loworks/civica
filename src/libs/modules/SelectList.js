import React, { PureComponent } from "react";
import { css } from "@emotion/react";
import * as Styles from "../styles";
import * as Transition from "../Transition";

import * as Atoms from "../atoms";
import * as Common from "../common";

export class SelectList extends PureComponent {
	contCss = () =>
		css`
			z-index: 10;
			background-color: #fff;
			width: 20vw;

			padding: 20px;
			position: absolute;
			top: 40%;
			left: 50%;

			transform: translate(-50%, -50%);
			${Styles.Mq.lessPab} {
				width: 88vw;
			}
			h4 {
				${Common.Func.getMqVwValue("margin-bottom", 20)}
			}
			li {
				position: relative;
				&:not(:first-child) {
					${Common.Func.getMqVwValue("margin-top", 12)}
				}
				a {
					display: inline-block;
					position: relative;

					&.active:before {
						content: "";
						left: 0.05em;
						right: 0.05em;
						bottom: 0px;
						height: 2px;
						background: #000;
						z-index: -1;
						display: block;
						position: absolute;
					}
				}
			}
		`;

	render() {
		const {
			header,
			values,
			children,
			className,
			currentValue,
			forwardedref,
			category,
			styles,
			onClick,
			...rest
		} = this.props;
		const sortFunc = (a, b) => {
			a = a.toString().toLowerCase();
			b = b.toString().toLowerCase();
			if (a < b) return -1;
			else if (a > b) return 1;
			return 0;
		};
		const SpanObj = {
			bold: true,
			pcFontSize: 18,
			spFontSize: 18,
			letterSpacing: 0.43,
			fontFace: "serif",
			pcLineHeight: 18,
			spLineHeight: 18,
			display: "block",
		};

		let langKey = Common.Func.getLangKey();
		let languages = Common.Config.languages;
		langKey = languages.langs.length > 1 ? `/${langKey}` : ``;

		return (
			<nav
				css={this.contCss}
				className={className}
				ref={forwardedref}
				{...rest}
			>
				<Atoms.H4
					styles={{
						italic: true,
						pcFontSize: 20,
						spFontSize: 20,
						letterSpacing: 0.43,
						pcLineHeight: 20,
						spLineHeight: 20,
					}}
				>
					{`${header} >`}
				</Atoms.H4>
				<ul>
					<li>
						<Atoms.TriggerLink
							to={`${langKey}/${category}/`}
							transition={Transition.TrigerPageTransition.TrigerPageTransition}
							className={currentValue === "all" ? "active" : ""}
							onClick={onClick}
						>
							<Atoms.Span styles={SpanObj}>ALL</Atoms.Span>
						</Atoms.TriggerLink>
					</li>
					{Object.entries(Common.Func.mapToObject(values))
						.sort(sortFunc)
						.map((item, i) => {
							const to = `${langKey}/${category}/${item[1].slug}/`;
							const currentMap = values.get(currentValue);

							return (
								<li>
									<Atoms.TriggerLink
										to={to}
										onClick={onClick}
										transition={
											Transition.TrigerPageTransition.TrigerPageTransition
										}
										className={
											currentMap && currentMap.slug === item[1].slug
												? "active"
												: ""
										}
									>
										<Atoms.Span styles={SpanObj}>{item[1].name}</Atoms.Span>
									</Atoms.TriggerLink>
								</li>
							);
						})}
				</ul>
			</nav>
		);
	}
}

export default SelectList;
