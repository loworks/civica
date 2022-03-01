import React, { forwardRef, PureComponent } from "react";
import { css } from "@emotion/react";
import { WindowResize } from "libs/redux/event/WindowResize";
import Img from "gatsby-image";
import * as Libs from "libs";
export function layoutCardHoc(WrappedComponent) {
	class LayoutCardHoc extends PureComponent {
		//--------------------------------------
		//  Scripts
		//--------------------------------------
		constructor(props) {
			super(props);
			this.container = React.createRef();
			this.imgCont = React.createRef();
			this.sentenceCont = React.createRef();
			this.imgElem = React.createRef();
			this.headLineCont = React.createRef();
			this.state = { imgContHeight: 0, sentenceHeight: 0 };
			const { info } = this.props;
			this.imgSrc = WindowResize.currentType(WindowResize.lessPab)
				? info.image.imageSp
					? info.image.imageSp
					: info.image.image
				: info.image.image;

			this.ratio = this.imgSrc.sizes.aspectRatio;
		}
		getStyle(cssProps, instance, addCss) {
			const styles = instance.info;
			if (styles) {
				for (let key in styles) {
					if (styles[key] === null) {
						delete styles[key];
					}
				}
			}
			cssProps = { ...cssProps, ...styles };
			const {
				widthPc = null,
				widthSp = null,
				width_pc = null,
				width_sp = null,
				positionPc = null,
				positionSp = null,
				spacingPc = null,
				spacingSp = null,
				display = "inline",
			} = cssProps;

			const widthPcObj =
				widthPc || width_pc
					? widthPc
						? `width: ${widthPc}vw;`
						: `width: ${width_pc}vw;`
					: null;
			const widthSpObj =
				widthSp || width_sp
					? widthSp
						? `width: ${widthSp}vw;`
						: `width: ${width_sp}vw;`
					: null;
			const spacingPcObj = Libs.Common.Func.getSpacingCss(spacingPc);
			const spacingSpObj = Libs.Common.Func.getSpacingCss(
				spacingSp,
				false,
				"sp"
			);
			const positionPcObj = Libs.Common.Func.getPositionCss(positionPc);
			const positionSpObj = Libs.Common.Func.getPositionCss(
				positionSp,
				false,
				"sp"
			);

			const styleCss = (props) => css`
				display: ${display};
				${addCss ? addCss() : ""};
				${Libs.Styles.Mq.moreTab} {
					${widthPcObj};
					${positionPcObj}

					${spacingPcObj.top};
					${spacingPcObj.bottom};
					${spacingPcObj.left};
					${spacingPcObj.right};
				}
				${Libs.Styles.Mq.lessPab} {
					${widthSpObj};
					${positionSpObj}

					${spacingSpObj.top};
					${spacingSpObj.bottom};
					${spacingSpObj.left};
					${spacingSpObj.right};
				}
			`;
			return styleCss;
		}

		getElementStyle(cssProps, instance) {
			const styles = instance.info;
			if (styles) {
				for (let key in styles) {
					if (styles[key] === null) {
						delete styles[key];
					}
				}
			}
			//cssProps = { ...cssProps, ...styles }
			const {
				descItem = () => {
					return css`
						position: relative;
						overflow: hidden;
						flex-basis: 53%;

						${Libs.Styles.Mq.lessPab} {
							width: 100vw;
						}
					`;
				},
				descCont = () => {
					return css`
						${Libs.Styles.Mq.moreTab} {
							${Libs.Styles.Position.CenterH()}

							height: 100%;
						}
					`;
				},
				descInner = () =>
					css`
						position: relative;
						width: 100%;

						box-sizing: border-box;

						${Libs.Styles.Mq.moreTab} {
							width: 64%;
							margin-left: auto;
							margin-right: auto;
						}
						${Libs.Styles.Mq.lessPab} {
							position: relative;
							margin-top: ${instance.state.imgContHeight}px;
							padding-top: ${Libs.Common.Func.getVwValue(15)}vw;

							padding-bottom: ${Libs.Common.Func.getVwValue(18)}vw;
						}
					`,
				caption01Css = () => css`
					position: absolute;
					width: 100%;
					top: 0px;
					left: 2vw;
					${Libs.Styles.Mq.lessPab} {
						display: none;
					}
				`,
				headlineContCss = () => {
					return css`
						box-sizing: border-box;
					`;
				},
				headLineCss = (headline) => {
					return css``;
				},

				sentenceCss = () => css`
					${Libs.Common.Func.getMqVwValue("padding-top", 40)};
					${Libs.Styles.Mq.lessPab} {
						margin-left: 0;
						width: auto;
						left: 0px;
					}
				`,
				linkCss = () =>
					css`
						position: absolute;
						left: 50%;
						transform: translateX(-50%);
						bottom: ${Libs.Common.Func.getVwValue(2)}vw;
						a {
							display: inline-block;
							${Libs.Styles.Mixin.textAncher()}
							margin-left: 10px;
							margin-right: 10px;
							line-height: 2;
							font-size: 12px;
							&:before,
							&:after {
								bottom: 0;
							}
						}
					`,

				imgItem = () => {
					const heightValue = instance.state.imgContHeight;

					return css`
						position: relative;

						flex-basis: 47%;
						${Libs.Styles.Mq.lessPab} {
							position: absolute;
							width: 100%;

							top: 0px;
						}
					`;
				},
				imgCaption = () =>
					css`
						position: absolute;
						bottom: 0px;
						${instance.props.reverse
							? { left: " -24px" }
							: { right: " -24px" }};
						${Libs.Common.Func.getMqVwValue("font-size", 12)}
						writing-mode: vertical-rl;
					`,
			} = cssProps;

			return {
				descItem,
				descCont,
				descInner,
				caption01Css,
				headlineContCss,
				headLineCss,
				sentenceCss,
				linkCss,
				imgItem,
				imgCaption,
			};
		}
		getHtml(cssProps, instance) {
			const website_url = "https://";
			const localhost = "http://";

			const newStyle = instance.getElementStyle(cssProps, instance);

			const info = instance.info;
			if (info.caption == "Products") {
			}
			const htmls = {
				fixedContent: (
					<>
						<div
							className={"text-element"}
							css={newStyle.headlineContCss}
							ref={(el) => {
								instance.headLineCont = el;
							}}
						>
							{info.headLine
								? info.headLine.map((header) => {
										const elementType = Libs.Common.Func.getTextType(
											header.type
										);
										return (
											<elementType.element
												styles={header}
												css={newStyle.headLineCss(header ? header : null)}
											>
												{Libs.Common.Func.parseHtml(header.text)}
											</elementType.element>
										);
								  })
								: ""}
						</div>
						<div
							className={"text-element"}
							css={newStyle.sentenceCss}
							ref={(el) => {
								instance.sentenceCont = el;
							}}
						>
							<Libs.Atoms.RichText styles={info.textField}>
								{info.textField ? info.textField.field : ""}
							</Libs.Atoms.RichText>
						</div>
					</>
				),
				absoluteContent: (
					<>
						<div className={"text-element"} css={newStyle.caption01Css}>
							<Libs.Atoms.P
								styles={{
									pcFontSize: 11,
									spFontSize: 11,
									pcLineHeight: 11,
									spLineHeight: 11,
									fontFace: "sansserif",
								}}
							>
								{info.caption}
							</Libs.Atoms.P>
						</div>
						<div className={"text-element"} css={newStyle.linkCss}>
							{info.links
								? info.links.map((item, i) => {
										return item.url.startsWith(website_url) ||
											item.url.startsWith(localhost) ? (
											<a
												href={item.url}
												target="_blank"
												rel="noopener noreferrer"
											>
												{item.label}
											</a>
										) : (
											<Libs.Atoms.TriggerLink
												to={`/${info.node_locale}/${item.url}/`}
											>
												{item.label}
											</Libs.Atoms.TriggerLink>
										);
								  })
								: ""}
						</div>
					</>
				),
			};
			const newhtmlProps = { ...htmls };
			const onLoadType = Libs.Common.Func.getLoadTypeFunction(info.onLoadType);
			return (
				<>
					<div className={"flex-item"} css={newStyle.descItem}>
						<div css={newStyle.descCont}>
							<div css={newStyle.descInner}>{newhtmlProps.fixedContent}</div>
						</div>
						<div>{newhtmlProps.absoluteContent}</div>
					</div>
					<div css={newStyle.imgItem} className={"flex-item img-element"}>
						<div
							ref={(el) => {
								instance.imgCont = el;
							}}
						>
							<Img
								ref={(el) => {
									instance.imgElem = el;
								}}
								fluid={instance.imgSrc.fluid}
								onLoad={onLoadType}
							/>
						</div>
						<Libs.Atoms.P css={newStyle.imgCaption}>
							{info.imageCaption}
						</Libs.Atoms.P>
					</div>
				</>
			);
		}
		componentDidMount() {
			this.setState({
				imgContHeight: this.imgCont.firstElementChild.clientHeight,
				sentenceHeight: this.sentenceCont.clientHeight,
			});
		}

		render() {
			const { info, ...rest } = this.props;
			this.info = info;

			return (
				<WrappedComponent
					data={{ func: this.getStyle, htmlFunc: this.getHtml, instance: this }}
					{...rest}
				></WrappedComponent>
			);
		}
	}

	return forwardRef((props, ref) => {
		return <LayoutCardHoc {...props} forwardedRef={ref} />;
	});
}
