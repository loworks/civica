import React, { PureComponent } from "react";

import { elementHoc } from "libs/atoms/ElementHoc";
import { css } from "@emotion/react";

import * as Common from "../../common";
import { WindowResize } from "libs/redux/event/WindowResize";
import Img from "gatsby-image";

import * as Libs from "libs";
import * as Transition from "../Transition";
class LayoutCard04 extends PureComponent {
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

		this.margintopBaseValue = {
			pc: Libs.Common.Func.getTopMargin().pc,
			sp: Libs.Common.Func.getTopMargin().sp,
		};
	}
	componentDidMount() {
		this.setState({
			imgContHeight: this.imgCont.clientWidth / this.ratio,
		});
	}

	render() {
		const { info } = this.props;
		let {
			className,
			src,
			forwardedRef,
			children,
			data,
			caption = null,

			...rest
		} = this.props;

		const headerCss = () =>
			css`
				margin-left: 6vw;
				${Libs.Common.Func.getPcSpVwValue("margin-bottom", 0, 30)};
				position: sticky;
				margin-top: 6vh;
				z-index: 2;
				margin-left: auto;
				bottom: 18vh;
			`;
		const imageCss = () => {
			const heightValue = this.state.imgContHeight;
			return css`
        z-index: 0;

        max-height: 66vw;
        margin-left: auto;
        display: block;
        ${Libs.Styles.Mq.moreTab} {
          width: 100%;
          height: calc(100vh - ${this.margintopBaseValue.pc}px);

        }
        ${Libs.Styles.Mq.lessPab} {
          height: calc(100vh - ${this.margintopBaseValue.sp}px);
          max-height: 66vh;
          position: relative;
          overflow: visible !important;
         /* height: ${heightValue}px;*/
          width: 100%;
        }
        .gatsby-image-wrapper {
          height: 100%;/*${heightValue}px;*/
        }
      `;
		};
		const TextCss = () => {
			return css`
				${Libs.Common.Func.getPcSpVwValue("margin-top", 30, 30)};
				max-width: 600px;
				width: 75%;
				margin-left: auto;
				margin-right: auto;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			`;
		};
		const stylesObj = {
			display: "block",
		};
		const contCss = () => {
			return css`
				&:not(:first-child) {
					${Libs.Common.Func.getPcSpVwValue("margin-top", 0, 100)};
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

		const to = `/${info.node_locale}/${link.url}/`;
		const imgTo = info.image.link
			? `/${info.node_locale}/${info.image.link}/`
			: "";
		return (
			<div
				ref={forwardedRef}
				css={[data.func(stylesObj, data.instance)(), contCss()]}
				className={`${className ? className : ""}`}
			>
				<Libs.Atoms.TriggerLink
					ref={(el) => {
						this.imgCont = el;
					}}
					css={imageCss}
					transition={Transition.TrigerZoomTransition.TrigerZoomTransition}
					to={imgTo}
				>
					<Img fluid={imgSrc.fluid} />
				</Libs.Atoms.TriggerLink>

				<div css={headerCss}>
					<Libs.Atoms.TriggerLink
						transition={
							Libs.Transition.TrigerPageTransition.TrigerPageTransition
						}
						to={to}
					>
						<Libs.Atoms.P
							styles={{
								text_align: "center",
								pcFontSize: 14,
								pcLineHeight: 14,
								spFontSize: 14,
								spLineHeight: 14,
								bold: true,
								fontFace: "sansserif",
								letterSpacing: 1,
								spacingPc: { bottom: 20 },
								spacingSp: { bottom: 20 },
							}}
						>
							{link.label}
						</Libs.Atoms.P>
					</Libs.Atoms.TriggerLink>
					{info.headLine
						? info.headLine.map((header) => {
								if (header.internal.type === "ContentfulElementReference") {
									const elementType = Common.Func.getElementType(header.name);
									return <elementType.element styles={header} />;
								} else {
									const elementType = Libs.Common.Func.getTextType(header.type);
									return (
										<elementType.element styles={header}>
											{Libs.Common.Func.parseHtml(header.text)}
										</elementType.element>
									);
								}
						  })
						: ""}
				</div>
			</div>
		);
	}
}
/*
const enhance = compose(
  // These are both single-argument HOCs
  elementHoc,
  connect(state => {
    return {
      screenW: state.ResizeReducer.screenWidth,
      screenH: state.ResizeReducer.screenHeight,
    }
  })
)*/
export default elementHoc(LayoutCard04);
