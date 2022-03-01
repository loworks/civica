import React, { PureComponent } from "react";

import { elementHoc } from "libs/atoms/ElementHoc";

import { css } from "@emotion/react";
import * as Common from "../../common";

import { WindowResize } from "libs/redux/event/WindowResize";

import Img from "gatsby-image";
import * as Libs from "libs";
class LayoutCard05 extends PureComponent {
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
				margin-left: 6vw;
				margin-right: 6vw;
			`;
		const headerCss = () =>
			css`
				${Libs.Common.Func.getPcSpVwValue("margin-bottom", 0, 30)};
				${Libs.Styles.Mq.moreTab} {
					position: sticky;
					z-index: 2;
					margin-bottom: 250px;
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
					width: 45vw;
					margin-right: 0vw;
				}
				${Libs.Styles.Mq.lessPab} {
					position: relative;
					overflow: visible !important;

					width: 88vw;
					margin-left: 6vw;
					margin-right: 6vw;
					margin-top: 30px;
				}
				.gatsby-image-wrapper {
				}
			`;
		};
		const TextCss = () => {
			return css`
				${Libs.Styles.Mq.moreTab} {
					width: 40vw;
					position: absolute;
					bottom: 0px;
				}
			`;
		};
		const LinkCss = () => {
			return css`
				display: block;
				${Libs.Styles.Mq.moreTab} {
					text-align: left !important;
					&:last-child {
						margin-top: 16px;
					}
				}
				${Libs.Styles.Mq.lessPab} {
					text-align: center;
					&:last-child {
						margin-top: 16px;
					}
				}
			`;
		};
		const descCss = () => {
			return css`
				${Libs.Styles.Mq.moreTab} {
					margin-top: 30px;
				}
				${Libs.Styles.Mq.lessPab} {
					margin-top: 40px;
				}
			`;
		};

		const SvgCss = (props) => {
			return css`
				${Libs.Styles.Mq.moreTab} {
					width: 24vw;
				}
				${Libs.Styles.Mq.lessPab} {
					width: 65vw;
				}

				height: auto;
				margin-top: 0%;
				fill: #000;
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
				<div css={leftContCss}>
					<div css={headerCss}>
						{info.headLine
							? info.headLine.map((header) => {
									if (header.internal.type === "ContentfulElementReference") {
										const elementType = Common.Func.getElementType(header.name);
										return <elementType.element css={SvgCss} styles={header} />;
									} else {
										const elementType = Libs.Common.Func.getTextType(
											header.type
										);
										return (
											<elementType.element styles={header}>
												{Libs.Common.Func.parseHtml(header.text)}
											</elementType.element>
										);
									}
							  })
							: ""}
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
												styles={Object.assign(linkitem)}
											>
												{linkitem.label}
											</Libs.Atoms.LinkElement>
										);
								  })
								: ""}
						</div>
						<Libs.Atoms.RichText css={descCss} styles={info.textField}>
							{info.textField ? info.textField.field : ""}
						</Libs.Atoms.RichText>
					</div>
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

export default elementHoc(LayoutCard05);
