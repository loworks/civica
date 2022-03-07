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
			margin-top: -1px;
			height: 200px;
			width: 100%;
			background-color: ${Common.Config.keyColor2};
			position: relative;

			.sns-list {
				margin-top: 25px;
				margin-bottom: 8px;
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

			.left-cont {
				> * {
					margin-top: 8px;
					&:first-child {
						margin-top: 0px;
					}
				}
				.civica-logo svg {
					width: 160px;
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
				.copyright {
					margin-top: 10px;
				}
			}
		`;
	};

	const pStyles = {
		fontPc: {
			fontFace: "sansserif",
			fontSize: 16,
			lineHeight: 16,
			letterSpacing: 0,
		},
		fontSp: {
			fontFace: "sansserif",
			fontSize: 16,
			lineHeight: 16,
			letterSpacing: 0,
		},
	};

	return (
		<footer css={contCss} className="footer">
			<div className="logo-cont"></div>
			<nav css={creditCont}>
				<div className="left-cont">
					<h1 className="civica-logo">
						<HeaderLogo />
					</h1>
					<div className="sns-list">
						<SnsList styles={{ width_pc: 7, width_sp: 7 }} />
					</div>
					<Libs.Atoms.P className="footer-menu" styles={pStyles}>
						LEGAL
					</Libs.Atoms.P>
				</div>
				<div className="right-cont">
					<div>
						<Atoms.Logo03></Atoms.Logo03>
					</div>
					<Atoms.Logo02></Atoms.Logo02>
					<Libs.Atoms.P className={"copyright"} styles={pStyles}>
						© 2022 Bosa Properties
					</Libs.Atoms.P>

					{/*<div className="link-inner">
						<Libs.Atoms.TriggerLink>
							<Libs.Atoms.Span styles={pStyles}>Privacy Policy</Libs.Atoms.Span>
						</Libs.Atoms.TriggerLink>
						<Libs.Atoms.P styles={pStyles}>NY Fair Housing Notice</Libs.Atoms.P>
					</div>*/}
				</div>
			</nav>
		</footer>
	);
};
