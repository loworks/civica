import React, { PureComponent } from "react";

import { elementHoc } from "libs/atoms/ElementHoc";

import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";
import Img from "gatsby-image";

import * as Libs from "libs";
class LayoutCard02 extends PureComponent {
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
		const leftContCss = () =>
			css`
				position: relative;
				margin-left: 3vw;
				width: 35vw;
				margin-right: 6vw;
				${Libs.Common.Func.getPcSpVwValue("margin-top", 0, 50)};
				${Libs.Styles.Mq.lessPab} {
					width: 88vw;
					margin-left: auto;
					margin-right: auto;
				}
			`;
		const headerCss = () =>
			css`
				${Libs.Common.Func.getPcSpVwValue("margin-bottom", 0, 5)};
				${Libs.Styles.Mq.moreTab} {
					position: sticky;
					z-index: 2;

					margin-left: auto;
					top: 200px;
				}
			`;
		const imageCss = () => {
			const heightValue = this.state.imgContHeight;
			return css`
				z-index: 0;

				margin-left: 6vw;
				${Libs.Styles.Mq.moreTab} {
					width: 50vw;
					margin-right: 0vw;
				}
				${Libs.Styles.Mq.lessPab} {
					position: relative;
					overflow: visible !important;

					width: 100vw;
					margin-left: auto;
					margin-right: auto;
					margin-top: 30px;
				}
				.gatsby-image-wrapper {
				}
			`;
		};
		const TextCss = () => {
			return css`
				${Libs.Styles.Mq.moreTab} {
					width: 100%;
					position: absolute;
					bottom: 0px;
				}
			`;
		};
		const LinkCss = () => {
			return css`
				display: block;
				${Libs.Styles.Mq.lessPab} {
					display: inline-block;
					&:last-child {
						margin-left: 20px;
					}
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
				<div css={leftContCss}>
					<div css={headerCss}>
						<Libs.Atoms.RichText styles={info.textField}>
							{info.textField ? info.textField.field : ""}
						</Libs.Atoms.RichText>
					</div>
					<div css={TextCss}>
						<div>
							{info.links
								? info.links.map((linkitem) => {
										const elementType = Libs.Common.Func.getTextType(
											linkitem.type
										);

										return (
											<Libs.Atoms.LinkElement
												css={LinkCss}
												styles={Object.assign(linkitem, {
													italic: true,
													pcFontSize: 20,
													pcLineHeight: 20,
													spFontSize: 20,
													spLineHeight: 20,
													fontFace: "serif",
													letterSpacing: 1,
													spacingPc: { bottom: 20 },
													spacingSp: { bottom: 30 },
												})}
											>
												{linkitem.label}
											</Libs.Atoms.LinkElement>
										);
								  })
								: ""}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default elementHoc(LayoutCard02);
