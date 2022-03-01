import React, { forwardRef, PureComponent } from "react";
import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";
import * as Libs from "libs";

export function cardSpreadHoc(WrappedComponent, cssProps, htmlProps) {
	class CardSpreadHoc extends PureComponent {
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
			this.imgRef = React.createRef();
			this.spImgRef = React.createRef();
			this.state = { imgContHeight: 0 };
		}
		componentDidMount() {
			this.setState({
				imgContHeight:
					(this.imgCont.clientWidth * this.imgRef.getRatio()) / 100,
				sentenceHeight: this.sentenceCont.clientHeight,
				sentenceLeftHeight: this.sentenceLeft.clientHeight,
			});
		}

		render() {
			const { info, ...rest } = this.props;
			const newStyl = cssProps
				? { ...this.styles, ...cssProps(this) }
				: { ...this.styles };
			const imgSrc = WindowResize.currentType(WindowResize.lessPab)
				? info.srcsp
				: info.src;

			const htmls = {
				leftinner: (
					<div className={"text-element"}>
						<Libs.Atoms.H1
							dangerouslySetInnerHTML={{ __html: info.h1 }}
							css={newStyl.sentenceH1Css}
						></Libs.Atoms.H1>
					</div>
				),
				rightinner: (
					<>
						<Libs.Atoms.P css={newStyl.sentenceCss}>
							{info.sentence}
						</Libs.Atoms.P>
					</>
				),
			};
			const newhtmlProps = htmlProps
				? { ...htmls, ...htmlProps(info, newStyl) }
				: { ...htmls };

			return (
				<WrappedComponent {...rest}>
					<div css={newStyl.imgItem}>
						<div
							ref={(el) => {
								this.imgCont = el;
							}}
							className={"img-element"}
						>
							<Libs.Atoms.Image
								src={imgSrc}
								ref={(el) => {
									this.imgRef = el;
								}}
								onload={info.onload}
							/>
						</div>
						<Libs.Atoms.P css={newStyl.imgCaption}>{info.caption}</Libs.Atoms.P>
					</div>

					<div
						ref={(el) => {
							this.sentenceCont = el;
						}}
						css={newStyl.sentenceContCss}
					>
						<div
							ref={(el) => {
								this.sentenceLeft = el;
							}}
							css={newStyl.sentenceLeftContCss}
						>
							{newhtmlProps.leftinner}
						</div>
						<div css={newStyl.sentenceRightContCss} className={"text-element"}>
							{newhtmlProps.rightinner}
						</div>
					</div>
				</WrappedComponent>
			);
		}
	}

	return forwardRef((props, ref) => {
		return <CardSpreadHoc {...props} forwardedRef={ref} />;
	});
}
