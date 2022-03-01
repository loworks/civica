import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import ScrollEase from "libs/ScrollEase";
import * as Libs from "libs";
import * as Common from "../../common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLogo from "../../components/modules/HeaderLogo";
import * as Atoms from "../atoms";
import SnsList from "../../components/modules/SnsList";

export default (props) => {
	//--------------------------------------
	//  Libs.Styless
	//--------------------------------------
	useEffect(() => {
		ScrollTrigger.create({
			trigger: ".footer",
			start: "top bottom",

			toggleClass: {
				targets: "body",
				className: "isfooter",
			},
		});
	}, []);
	//--------------------------------------
	//  Scripts
	//--------------------------------------

	const contCss = () => {
		return css`
			height: 100vh;
			width: 100vw;

			width: 100%;
			background-color: ${Common.Config.keyColor2};
			position: relative;
			.logo-cont {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				.button-cont {
					margin: 25px auto 0 auto;
				}
			}
			.sns-list {
				margin-top: 25px;
				ul {
					margin: 0 auto;
				}
			}
		`;
	};

	const creditCont = () => {
		return css`
			position: absolute;
			bottom: 40px;
			display: grid;
			--grid-gap: 2rem;
			--grid-margin: 4rem;
			grid-template-columns: 1fr auto;
			align-items: end;
			margin-top: 0px;
			justify-items: start;
			padding-right: calc(1 * var(--grid-margin));
			padding-left: calc(1 * var(--grid-margin));
			margin-top: 0px;
			margin-left: auto;
			margin-right: auto;
			width: 100%;
			max-width: 1600px;
			.left-cont {
				> * {
					margin-top: 8px;
					&:first-child {
						margin-top: 0px;
					}
				}
			}
			.right-cont {
				text-align: right;
				> * {
					margin-top: 5px;
					&:first-child {
						margin-top: 0px;
					}
				}
				div {
					> * {
						margin-top: 4px;
						&:first-child {
							margin-top: 0px;
						}
					}
				}
			}
		`;
	};

	const pStyles = {
		fontPc: {
			fontFace: "sansserif",
			fontSize: 14,
			lineHeight: 14,
			letterSpacing: -0.4,
		},
		fontSp: {
			fontFace: "sansserif",
			fontSize: 14,
			lineHeight: 14,
			letterSpacing: -0.4,
		},
	};

	return (
		<footer css={contCss} className="footer">
			<div className="logo-cont">
				<h1 className="civica-logo">
					<HeaderLogo />
				</h1>
				<div className="sns-list">
					<SnsList styles={{ width_pc: 7, width_sp: 7 }} />
				</div>
				<Atoms.ButtonArrow className="button-cont" />
			</div>
			<nav css={creditCont}>
				<div className="left-cont">
					<Atoms.Logo02></Atoms.Logo02>
					<Libs.Atoms.P styles={pStyles}>
						©2022 Bosa. All rights reserved.
					</Libs.Atoms.P>
				</div>
				<div className="right-cont">
					<Atoms.Logo03></Atoms.Logo03>
					<div className="link-inner">
						<Libs.Atoms.TriggerLink>
							<Libs.Atoms.Span styles={pStyles}>Privacy Policy</Libs.Atoms.Span>
						</Libs.Atoms.TriggerLink>
						<Libs.Atoms.P styles={pStyles}>NY Fair Housing Notice</Libs.Atoms.P>
					</div>
				</div>
			</nav>
		</footer>
	);
};
