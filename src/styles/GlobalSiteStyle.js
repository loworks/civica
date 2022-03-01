import React from "react";
import { Global, css } from "@emotion/react";
import * as LibFont from "libs/styles/fontface";
import * as Font from "./fontface";
import * as Common from "../common";

export const StoryStyle = (props) => {
	LibFont.setSanSerifFont(Common.Config.sansserifFont);
	LibFont.setBoldFont(Common.Config.boldFont);
	LibFont.setSerifFont(Common.Config.serifFont);
	const gradientStanp = (props) => {
		return css`
			position: relative;
			display: block !important;
			svg {
				margin-top: 0px;
			}
			a {
				position: relative;
				white-space: nowrap !important;
				display: inline-flex !important;
				align-items: center;
				padding: 5px 13px 7px 8px;
				span {
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					position: relative;
					z-index: 100;
					line-height: normal !important;
				}
				&:before {
					content: " ";
					position: absolute;
					background-color: #fff;
					border-radius: 10px;
					width: 100%;
					height: 100%;
					left: 0px;
					z-index: 0;
				}
			}
		`;
	};

	return (
		<Global
			styles={css`
				${Font.FontFace()}
				html {
					scroll-behavior: smooth;
				}
				body {
					background-color: #fff;
					height: auto;
				}
				.scroll-content {
					height: 100vh;
				}
				.round-background-white {
					background-color: #fff;
					color: #000;
					border-radius: 10px;
					padding: 10px;
					white-space: nowrap;
					display: inline-block !important;
				}
				.link-icon-element {
					svg {
						vertical-align: middle;
						margin-right: 5px;
						margin-top: -3px;
					}
				}
				.round-background-gray {
					background-color: #cccccc;
					color: #fff;
					border-radius: 10px;
					padding: 10px;
					white-space: nowrap;
					display: inline-block !important;
				}
				.red-yelow-whitebg-stamp {
					${gradientStanp()}
					svg {
						fill: #e21000;
					}
					span {
						background-image: linear-gradient(to left, #f5c31c, orange, red);
					}
				}
				.violet-blue-whitebg-stamp {
					${gradientStanp()}
					svg {
						fill: violet;
					}
					span {
						background-image: linear-gradient(to left, blue, indigo, violet);
					}
				}
				.rainbow-whitebg-stamp {
					${gradientStanp()}
					span {
						background-image: linear-gradient(
							to left,
							violet,
							indigo,
							blue,
							green,
							yellow,
							orange,
							red
						);
					}
				}
				.block-bg-white {
					background-color: #fff;
					padding-top: 8px;
					padding-bottom: 10px;
					padding-left: 8px !important;
					padding-right: 8px !important;
				}
				.inline-bg-white {
					padding-left: 10px !important;
					padding-right: 10px !important;

					p {
						display: inline;
						background-color: #fff;
						box-shadow: 10px 0 0px 0px #fff, -10px 0 0px 0px #fff;
						padding-top: 1px;
						padding-bottom: 1px;
						color: black;
					}
				}
				.inline-bg-black {
					padding-left: 10px !important;
					padding-right: 10px !important;
					p {
						display: inline;
						background-color: #000;
						box-shadow: 10px 0 0px 0px #000, -10px 0 0px 0px #000;
						padding-top: 1px;
						padding-bottom: 1px;
						color: white;
					}
				}
				:root {
					--primary: #22d2a0;
					--secondary: #fff;
					--background: #fff;
					--green: #1fc11b;
					--yellow: #000;
					--orange: #ff9c55;
					--red: #ff5555;
				}
				.cards {
					background-color: var(--background);
					display: block;
					width: 300px;
					min-height: 90px;
					cursor: pointer;
					padding: 15px;
					margin: calc(50vh - 30px) auto 0 auto;
					border: 3px solid var(--primary);
					box-shadow: 10px -10px 0 -3px var(--yellow), 10px -10px var(--yellow),
						20px -20px 0 -3px var(--yellow), 20px -20px var(--yellow);
				}
				.video-cont {
					video {
						object-fit: cover;
						position: absolute;
						height: 100%;
						width: 100%;
						top: 0;
						left: 0;
					}
				}
			`}
		/>
	);
};
