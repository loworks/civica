import React, { PureComponent } from "react";

import { css } from "@emotion/react";

import * as Libs from "libs";

export class ImageList extends PureComponent {
	//--------------------------------------
	//  Libs.Styless
	//--------------------------------------
	containerCss = () =>
		css`
			margin-right: auto;

			position: relative;
			${Libs.Common.Func.getPcSpVwValue("margin-top", 70, 70)};
			${Libs.Styles.Mq.moreTab} {
				${Libs.Styles.Flex.flexList({ lessPab: 100, moreTab: 100 })}
			}

			${Libs.Styles.Mq.lessPab} {
				width: 88vw;
				margin-left: auto;
				margin-right: auto;
			}
		`;
	H2Css = () => {
		if (!this.state.mount) return;
		return css`
			font-size: 26px;
			position: absolute;
			left: 12vw;
			line-height: normal !important;
		`;
	};
	itemContCss = ({ type, scale, left, top }) => {
		if (!this.state.mount) return;
		return css`
      ${Libs.Styles.Mq.moreTab} {
        ${type === "rows" || type === "rows-reverse" ? { display: "flex" } : ""}
        ${type === "rows-reverse" ? { "flex-direction": "row-reverse" } : ""}
        width: ${scale}vw;
        margin-left: ${left}vw;
        margin-top: ${top}vw;
      }
      ${Libs.Styles.Mq.lessPab} {
        margin-top: 20.9375vw;
      }
    `;
	};
	imgContCss = ({ type }) => {
		if (!this.state.mount) return;
		let colsStyle = {};
		if (type === "rows") {
			colsStyle = {
				width: `100%`,
				"padding-right": "5vw",
			};
		} else if (type === "rows-reverse") {
			colsStyle = {
				width: `100%`,
				"padding-left": "5vw",
			};
		}
		return css`
			${Libs.Styles.Mq.moreTab} {
				${type === "rows" || type === "rows-reverse" ? colsStyle : ""}
			}
		`;
	};
	descCont = ({ type }) => {
		if (!this.state.mount) return;
		return css`
			${type === "rows" || type === "rows-reverse"
				? { "margin-top": "10vw" }
				: { "margin-top": "2vw" }};
		`;
	};
	itemH2Css = () => {
		if (!this.state.mount) return;
		return css`
			font-size: 2vw;
			line-height: 2vw;
			white-space: pre-line;
			${Libs.Styles.Mq.lessPab} {
				font-size: 6.25vw;
				line-height: 6.25vw;
			}
		`;
	};
	captionCont = () => {
		if (!this.state.mount) return;
		return css`
			display: flex;

			margin-bottom: 30px;
			p {
				font-size: 1vw;
				${Libs.Styles.Mq.lessPab} {
					font-size: 3.125vw;
				}
			}
		`;
	};
	flexCont = () => {
		if (!this.state.mount) return;
		return css`
			display: flex;
			p {
				font-size: 1vw;
			}
		`;
	};

	yearCss = () => {
		if (!this.state.mount) return;
		return css`
			width: 9vw;

			${Libs.Styles.Mq.lessPab} {
				width: 28.125vw;
			}
		`;
	};
	//--------------------------------------
	//  Scripts
	//--------------------------------------
	constructor(props) {
		super(props);
		this.container = React.createRef();
		this.imgCont = React.createRef();
		this.distHeight = { portrait: 45, landscape: 40 };
		this.state = {
			mount: false,
			imgsData: [
				{
					src: "web_thumb_1400.jpg",
					header: "Branding/Web/\nProducts",
					year: "17.Dec",
					caption: "Creation",
					type: "rows-reverse",
					scale: 76,
					left: 12,
					top: 0,
				},
				{
					src: "usn.jpg",
					header: "Exhibition/\nPopup\nCoffeeStand",
					year: "18.NOV\nTOKYO",
					caption: "Activity",
					type: "cols",
					scale: 46,
					left: 10,
					top: 10,
				},
				{
					src: "about-magazine.jpg",
					header: `Exhibition\nPopup\nCoffeeStand`,
					year: "19.MAR\nKYOTO",
					caption: "Activity",
					type: "cols",
					scale: 20,
					left: 70,
					top: -20,
				},
			],
		};

		this.imgItemRefs = [];
	}
	componentDidMount() {
		const data = this.state.imgsData;
		const screenW = window.innerWidth;
		this.imgItemRefs.forEach((item, index) => {
			let dataItem = data[index];
			let w = item.clientWidth;
			let h = item.clientHeight;

			const ratio = w / h;
			if (ratio > 1) {
				h = (screenW * this.distHeight.landscape) / 100;
			} else {
				h = (screenW * this.distHeight.portrait) / 100;
			}
			w = h * ratio;

			dataItem.width = w;
			dataItem.height = h;
		});

		this.setState({
			mount: true,
			imgsData: data,
		});
	}

	render() {
		const data = this.state.imgsData;
		return (
			<div css={this.containerCss}>
				<Libs.Atoms.H2 css={this.H2Css}>Story</Libs.Atoms.H2>
				<div>
					{data.map((item, i) => (
						<div key={`imgsData${i}`} css={this.itemContCss(item)}>
							<div
								css={this.imgContCss(item)}
								ref={(el) => {
									if (el) this.imgItemRefs.push(el);
								}}
							>
								<Libs.Atoms.Image src={item.src} />
							</div>
							<div css={this.descCont(item)}>
								<div css={this.captionCont}>
									<Libs.Atoms.P css={this.yearCss}>
										Date
										<br />
										Place
									</Libs.Atoms.P>
									<Libs.Atoms.P>{item.caption}</Libs.Atoms.P>
								</div>
								<div css={this.flexCont}>
									<Libs.Atoms.H2
										styles={{
											pcFontSize: 28,
											spFontSize: 26,
											pcLineHeight: 28,
											spLineHeight: 26,
										}}
										css={this.yearCss}
									>
										{item.year}
									</Libs.Atoms.H2>
									<Libs.Atoms.H2
										styles={{
											pcFontSize: 28,
											spFontSize: 26,
											pcLineHeight: 28,
											spLineHeight: 26,
										}}
									>
										{item.header}
									</Libs.Atoms.H2>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default ImageList;
