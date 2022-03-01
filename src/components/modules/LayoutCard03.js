import React, { PureComponent } from "react";

import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";
import Img from "gatsby-image";
import * as Libs from "libs";

class LayoutCard03 extends PureComponent {
	//--------------------------------------
	//  Libs.Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------
	constructor(props) {
		super(props);
		this.imgCont = React.createRef();

		this.state = { imgContHeight: 0 };
	}
	componentDidMount() {
		this.setState({
			imgContHeight: this.imgCont.clientWidth / this.ratio,
		});
	}
	render() {
		const { info } = this.props;
		const contCss = () =>
			css`
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				${Libs.Common.Func.getPcSpVwValue("margin-top", 150, 80)};
			`;
		const headerCss = () =>
			css`
				margin-left: 6vw;
				${Libs.Common.Func.getPcSpVwValue("margin-bottom", 0, 30)};
				${Libs.Styles.Mq.moreTab} {
					position: sticky;
					height: 50px;
					z-index: 2;

					margin-left: auto;
					top: 200px;
				}
			`;
		const imageCss = () => {
			const heightValue = this.state.imgContHeight;
			return css`
				z-index: 0;

				margin-left: auto;
				${Libs.Styles.Mq.moreTab} {
					width: 72vw;
					margin-right: 6vw;
				}
				${Libs.Styles.Mq.lessPab} {
					position: relative;
					overflow: visible !important;
					height: ${heightValue}px;
					width: 100vw;
				}
				.gatsby-image-wrapper {
					height: ${heightValue}px;
				}
			`;
		};
		const link = info.links ? info.links[0] : "";
		const imgSrc = WindowResize.currentType(WindowResize.lessPab)
			? info.image.imageSp
				? info.image.imageSp
				: info.image.image
			: info.image.image;

		this.ratio = imgSrc.sizes.aspectRatio;

		return (
			<div css={contCss}>
				<div css={headerCss}>
					{info.headLine
						? info.headLine.map((header) => {
								const elementType = Libs.Common.Func.getTextType(header.type);
								return (
									<elementType.element styles={header}>
										{Libs.Common.Func.parseHtml(header.text)}
									</elementType.element>
								);
						  })
						: ""}

					<Libs.Atoms.TriggerLink
						transition={
							Libs.Transition.TrigerPageTransition.TrigerPageTransition
						}
						to={`${info.node_locale}/${link.url}/`}
					>
						<Libs.Atoms.P
							styles={{
								pcFontSize: 11,
								pcLineHeight: 11,
								spFontSize: 11,
								spLineHeight: 11,
								fontFace: "sansserif",
								letterSpacing: 1,
								spacingPc: { top: 10 },
								spacingSp: { top: 10 },
							}}
						>
							{link.label}
						</Libs.Atoms.P>
					</Libs.Atoms.TriggerLink>
				</div>
				<div
					css={imageCss}
					ref={(el) => {
						this.imgCont = el;
					}}
				>
					<Libs.Atoms.TriggerLink
						transition={
							Libs.Transition.TrigerPageTransition.TrigerPageTransition
						}
						to={`${info.node_locale}/${link.url}/`}
					>
						<Img fluid={imgSrc.fluid} />
					</Libs.Atoms.TriggerLink>
				</div>
			</div>
		);
	}
}

export default LayoutCard03;
