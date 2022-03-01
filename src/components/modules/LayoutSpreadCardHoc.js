import React, { forwardRef, PureComponent } from "react";
import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";
import Img from "gatsby-image";
import * as Libs from "libs";
export function layoutSpreadCardHoc(WrappedComponent, cssProps, htmlProps) {
	class LayoutSpreadCardHoc extends PureComponent {
		//--------------------------------------
		//  Libs.Styless
		//--------------------------------------
		styles = {
			sentenceContCss: () => css`
				margin-top: 40px;
				margin-left: auto;
				margin-right: auto;
				${Libs.Styles.Mq.moreTab} {
					${Libs.Styles.Flex.flexList({ pc: 50 })}
					width: 96%;
				}
				${Libs.Styles.Mq.lessPab} {
					${Libs.Styles.Flex.flexLine({ between: true })}
				}
			`,
			sentenceLeftContCss: () => css`
				${Libs.Styles.Mq.moreTab} {
					flex-basis: 40%;
				}
				${Libs.Styles.Mq.lessPab} {
					padding-bottom: ${Libs.Common.Func.getVwValue(10)}vw;
				}
			`,
			sentenceRightContCss: () => css`
				${Libs.Styles.Mq.moreTab} {
					flex-basis: 60%;
				}
			`,
			sentenceH1Css: () => css`
				letter-spacing: -0.3px;
				line-height: 1;
			`,
			sentenceCss: () => {
				return css`
					width: 100%;
					text-align: justify;
					text-align-last: left;
					${Libs.Styles.Mq.moreTab} {
						columns: 2;
						column-gap: 4em;
					}
				`;
			},
			imgItem: () => {
				const heightValue = this.state.imgContHeight;

				return css`
					position: relative;
					overflow: visible !important;

					${Libs.Styles.Mq.lessPab} {
						height: ${heightValue}px;
					}
				`;
			},
			imgCaption: () =>
				css`
					position: absolute;
					bottom: 0px;
					right: -22px;
					font-size: 12px;
					writing-mode: vertical-rl;
				`,
		};
		//--------------------------------------
		//  Scripts
		//--------------------------------------
		constructor(props) {
			super(props);
			this.container = React.createRef();
			this.imgCont = React.createRef();
			this.sentenceCont = React.createRef();
			this.sentenceLeft = React.createRef();
			this.imgElem = React.createRef();
			this.spImgRef = React.createRef();
			this.state = { imgContHeight: 0 };
			const { info } = this.props;
			this.imgSrc = WindowResize.currentType(WindowResize.lessPab)
				? info.image.imageSp
					? info.image.imageSp
					: info.image.image
				: info.image.image;

			this.ratio = this.imgSrc.sizes.aspectRatio;
		}
		componentDidMount() {
			this.setState({
				imgContHeight: this.imgCont.clientWidth / this.ratio,
				sentenceHeight: this.sentenceCont.clientHeight,
				sentenceLeftHeight: this.sentenceLeft.clientHeight,
			});
		}

		render() {
			const { info, ...rest } = this.props;
			const newStyle = cssProps
				? { ...this.styles, ...cssProps(this) }
				: { ...this.styles };

			const htmls = {
				leftinner: (
					<div className={"text-element"}>
						{info.headLine ? (
							info.headLine.map((header) => {
								return (
									<Libs.Atoms.H1 styles={header} css={newStyle.sentenceH1Css}>
										{Libs.Common.Func.parseHtml(header.text)}
									</Libs.Atoms.H1>
								);
							})
						) : (
							<Libs.Atoms.H1 css={newStyle.sentenceH1Css}>
								{Libs.Common.Func.parseHtml(info.header)}
							</Libs.Atoms.H1>
						)}
					</div>
				),
				rightinner: (
					<>
						<Libs.Atoms.RichText
							css={newStyle.sentenceCss}
							styles={info.textField}
						>
							{info.textField ? info.textField.field : ""}
						</Libs.Atoms.RichText>
					</>
				),
			};
			const newhtmlProps = htmlProps
				? { ...htmls, ...htmlProps(info, newStyle) }
				: { ...htmls };

			return (
				<WrappedComponent {...rest}>
					<div css={newStyle.imgItem}>
						<div
							ref={(el) => {
								this.imgCont = el;
							}}
							className={"img-element"}
						>
							<div>
								<Img
									ref={(el) => {
										this.imgElem = el;
									}}
									fluid={this.imgSrc.fluid}
								/>
							</div>
						</div>
						<Libs.Atoms.P css={newStyle.imgCaption}>
							{info.caption}
						</Libs.Atoms.P>
					</div>

					<div
						ref={(el) => {
							this.sentenceCont = el;
						}}
						css={newStyle.sentenceContCss}
					>
						<div
							ref={(el) => {
								this.sentenceLeft = el;
							}}
							css={newStyle.sentenceLeftContCss}
						>
							{newhtmlProps.leftinner}
						</div>
						<div css={newStyle.sentenceRightContCss} className={"text-element"}>
							{newhtmlProps.rightinner}
						</div>
					</div>
				</WrappedComponent>
			);
		}
	}

	return forwardRef((props, ref) => {
		return <LayoutSpreadCardHoc {...props} forwardedRef={ref} />;
	});
}
