import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import ScrollEase from "libs/ScrollEase";
import * as Libs from "libs";
import * as Common from "../../common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLogo from "./HeaderLogo";
import * as Atoms from "../atoms";
import Img from "gatsby-image";

export default (props) => {
	const { data, className, ...rest } = props;

	const outroRef = useRef();

	useEffect(() => {}, []);

	//--------------------------------------
	//  CSS
	//--------------------------------------
	const styleCss = () => css`
		width: 60vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 100;
		.thanks-h1 {
			text-align: center;
			margin-bottom: 20px;
		}
		.thanks-sentence {
			text-align: center;
			line-height: 150%;
		}
	`;

	//--------------------------------------
	//  Data
	//--------------------------------------
	const clickHandler = () => {};
	//--------------------------------------
	//  Output
	//--------------------------------------
	return (
		<div css={styleCss} className={"intro-cont"} onClick={clickHandler}>
			<Libs.Atoms.H1 className="thanks-h1">Thank you</Libs.Atoms.H1>
			<Libs.Atoms.P className="thanks-sentence">
				YOU’RE ONE STEP CLOSER TO BLAZING A NEW TRAIL AT CIVICA.
				<br />
				We’ve received your inquiry and will keep you updated about this
				exciting opportunity.
			</Libs.Atoms.P>
		</div>
	);
};
