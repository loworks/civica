import React, { PureComponent } from "react";

import * as Common from "../../common";

import { css } from "@emotion/react";
import * as Libs from "libs";

class Help extends PureComponent {
	helpCont = () => {
		return css`
			position: absolute;
			z-index: 100;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		`;
	};
	flexCont = () => {
		return css`
			display: flex;
			justify-content: space-between;
			width: 88vw;

			> div {
				width: 25vw;
			}
		`;
	};
	swipeCss = () => {
		return css`
			${Libs.Common.Func.getPcSpVwValue("margin-top", 80, 50)}
		`;
	};
	iconCss = () => {
		return css`
			fill: #fff;
			height: 40px;
			position: relative;
			left: 50%;
			transform: translateX(-50%);
			${Libs.Common.Func.getPcSpVwValue("margin-top", 8, 8)}
		`;
	};
	iconContCss = () => {
		return css`
			position: relative;
		`;
	};
	icon2Css = () => {
		return css`
			${this.iconCss()}
			height: 80px;
			${Libs.Styles.Mq.lessPab} {
				height: 50px;
			}
		`;
	};
	icon3Css = () => {
		return css`
      fill: #fff;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      height: 50px;
      ${Libs.Common.Func.getPcSpVwValue("margin-top", 10, 10)}
      ${Libs.Common.Func.getPcSpVwValue("margin-bottom", 12, 12)}
      ${Libs.Styles.Mq.lessPab} {
        height: 40px;
      }
    `;
	};
	iconHandCss = () => {
		return css`
			${this.iconCss()}
			position: absolute;
			height: 80px;
			${Libs.Styles.Mq.lessPab} {
				height: 50px;
			}
		`;
	};
	pCss = () => {
		return css`
			text-transform: uppercase;
		`;
	};
	constructor(props) {
		super(props);
	}
	getH4Element = (children) => {
		return (
			<Libs.Atoms.H4
				styles={{
					fontPc: {
						color: "#fff",
						fontSize: 42,
						lineHeight: 42,
						textAlign: "center",
						bold: true,
					},
					fontSp: {
						color: "#fff",
						fontSize: 28,
						lineHeight: 28,
						textAlign: "center",
						bold: true,
					},
				}}
			>
				{children}
			</Libs.Atoms.H4>
		);
	};
	getPElement = (children) => {
		return (
			<Libs.Atoms.P
				css={this.pCss}
				styles={{
					fontPc: {
						color: "#fff",
						textAlign: "center",
						fontSize: 16,
						bold: true,
					},
					fontSp: {
						color: "#fff",
						fontSize: 14,
						textAlign: "center",
						bold: true,
					},
				}}
			>
				{children}
			</Libs.Atoms.P>
		);
	};
	render() {
		const texts = Common.Config.getHelpText();
		const langKey = Libs.Common.Func.getLangKey();
		return (
			<div css={this.helpCont}>
				<div css={this.flexCont}>
					<div>
						{this.getH4Element("PREV")}
						<Libs.Atoms.Icon css={this.iconCss} type={"prev"} />
						{this.getPElement(texts[0][langKey])}
						<div css={this.iconContCss}>
							<Libs.Atoms.Icon css={this.icon2Css} type={"tap"} />
							<Libs.Atoms.Icon css={this.iconHandCss} type={"hand"} />
						</div>
					</div>
					<div>
						{this.getH4Element("STOP")}
						<Libs.Atoms.Icon css={this.iconCss} type={"stop"} />
						{this.getPElement(texts[1][langKey])}
						<div css={this.iconContCss}>
							<Libs.Atoms.Icon css={this.icon2Css} type={"press"} />
							<Libs.Atoms.Icon css={this.iconHandCss} type={"hand"} />
						</div>
					</div>
					<div>
						{this.getH4Element("NEXT")}
						<Libs.Atoms.Icon css={this.iconCss} type={"next"} />
						{this.getPElement(texts[2][langKey])}
						<div css={this.iconContCss}>
							<Libs.Atoms.Icon css={this.icon2Css} type={"tap"} />
							<Libs.Atoms.Icon css={this.iconHandCss} type={"hand"} />
						</div>
					</div>
				</div>
				<div css={this.swipeCss}>
					<div>
						{this.getH4Element("PAGE TRANSITION")}
						<Libs.Atoms.Icon css={this.icon3Css} type={"transition"} />
						{this.getPElement(texts[3][langKey])}
						<div css={this.iconContCss}>
							<Libs.Atoms.Icon css={this.icon2Css} type={"swipe"} />
							<Libs.Atoms.Icon css={this.iconHandCss} type={"hand"} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Help;
