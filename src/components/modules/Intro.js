import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import ScrollEase from "libs/ScrollEase";
import * as Libs from "libs";
import * as Common from "../../common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLogo from "./HeaderLogo";
import { Power3 } from "gsap";
import * as Atoms from "../atoms";
import Img from "gatsby-image";

export default (props) => {
	const { data, className, ...rest } = props;

	const outroRef = useRef();

	useEffect(() => {}, []);

	//--------------------------------------
	//  CSS
	//--------------------------------------
	const styleCss = () => {
		return css`
			position: fixed;
			z-index: 100;
			width: 100vw;
			height: 100vh;
			background-color: #fff;
			.img-last & {
				pointer-events: none;
			}
			.img-cont {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				height: 80vh;
				img {
					object-fit: contain !important;
				}
			}

			.img-area {
				position: absolute;
				overflow: hidden;
				top: 50%;
				right: 50%;
				transform: translate(50%, -50%);
				height: 90vh;
				z-index: 10;
				width: calc(100vh * 0.6);
				max-width: 50vw;
				min-width: 35vw;
				 {
					/*transition: all 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);*/
				}
				.img-last & {
					height: 100vh;
					z-index: 10;
					top: 0;
					transform: translate(0);

					right: 0px;
					width: calc(100vh * 0.6);
					max-width: 50vw;
					min-width: 35vw;
					.hero-img {
						width: 100%;
						height: 100%;
					}
				}
				.civica01 {
					z-index: 1;

					visibility: visible !important;
				}
				.civica02 {
					.display-02 & {
						visibility: visible;
					}
					z-index: 2;
				}
				.civica03 {
					.display-03 & {
						visibility: visible;
					}
					z-index: 3;
				}
				.civica04 {
					.display-04 & {
						visibility: visible;
					}
					z-index: 4;
				}
				.civica05 {
					.display-05 & {
						visibility: visible;
					}
					z-index: 5;
				}
				.civica06 {
					.display-06 & {
						visibility: visible;
					}
					z-index: 6;
				}
				.civica07 {
					.display-07 & {
						visibility: visible;
					}
					z-index: 7;
				}
				.civica08 {
					.display-08 & {
						visibility: visible;
					}
					z-index: 8;
				}
				.civica09 {
					.display-09 & {
						visibility: visible;
					}
					z-index: 9;
				}
				.civica10 {
					.display-10 & {
						visibility: visible;
					}
					z-index: 10;
				}
				.civica11 {
					.display-11 & {
						visibility: visible;
					}
					z-index: 11;
				}
				.civica12 {
					.display-12 & {
						visibility: visible;
					}
					z-index: 12;
				}
				.civica07-2 {
					visibility: visible !important;
					z-index: 7;
					.letter {
						position: absolute;
						z-index: 100;
						font-size: 60vw;
						left: 50%;
						bottom: 0px;
						transform: translateX(-50%);
					}
				}
				.hero-img {
					.display-hero & {
						visibility: visible;
					}
					filter: grayscale(100%);
					z-index: 100;
				}
				.civica01,
				.civica02,
				.civica03,
				.civica04,
				.civica05,
				.civica06,
				.civica07,
				.civica08,
				.civica09,
				.civica10,
				.civica11,
				.civica12,
				.hero-img {
					visibility: hidden;
					position: absolute !important;
					top: 0px;
					width: 100%;
					height: 100%;
				}
			}
			.img-last & .civica01,
			.img-last & .civica02,
			.img-last & .civica03,
			.img-last & .civica04,
			.img-last & .civica05,
			.img-last & .civica06,
			.img-last & .civica07,
			.img-last & .civica08,
			.img-last & .civica09,
			.img-last & .civica10,
			.img-last & .civica11,
			.img-last & .civica12 {
				display: none;
			}
			.intro-logo-cont {
				visibility: hidden;
				.display-hero & {
					visibility: visible;
				}
				position: relative;
				margin: 6vh 0 0px 0;
				width: calc(100vh * 0.58);
				max-width: 48vw;
				min-width: 33vw;
				left: 50%;
				transform: translateX(-50%);
				z-index: 100;
				 {
					/*transition: all 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);*/
				}
				.civica-logo {
					svg {
						transition: all 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);
						width: auto;
						fill: #000;
					}
				}
				.img-last & {
					left: 0%;
					transform: translateX(0%);
					margin: 25px 0 0px 25px;
					width: max(50vw * 0.95, calc((100vw - 100vh * 0.6) * 0.95));
				}
			}
		`;
	};

	//--------------------------------------
	//  Data
	//--------------------------------------
	useEffect(() => {
		const cont = document.querySelector("html");
		const tl = gsap.timeline();
		tl /*.call(
			function() {
				cont.classList.add("display-02");
			},
			null,
			1
		)
			.call(
				function() {
					cont.classList.add("display-03");
				},
				null,
				">0.2"
			)
			.call(
				function() {
					cont.classList.add("display-04");
				},
				null,
				">0.2"
			)
			.call(
				function() {
					cont.classList.add("display-05");
				},
				null,
				">0.2"
			)
			.call(
				function() {
					cont.classList.add("display-06");
				},
				null,
				">0.2"
			)
			.call(
				function() {
					cont.classList.add("display-07");
				},
				null,
				">.2"
			)
			.call(
				function() {
					cont.classList.add("display-08");
				},
				null,
				">.3"
			)
			.call(
				function() {
					cont.classList.add("display-09");
				},
				null,
				">.3"
			)
			.call(
				function() {
					cont.classList.add("display-10");
				},
				null,
				">.3"
			)
			.call(
				function() {
					cont.classList.add("display-11");
				},
				null,
				">.3"
			)
			.call(
				function() {
					cont.classList.add("display-12");
				},
				null,
				">.3"
			)*/.call(
			function() {
				cont.classList.add("display-hero");
			},
			null,
			">.6"
		)
			.add("end", 2)
			.to(
				".intro-logo-cont",
				1,
				{
					xPercent: 0,
					marginLeft: "25px",
					left: 0,
					ease: Power3.easeInOut,
				},
				"end"
			)
			.to(
				".img-area",
				1,
				{
					xPercent: 0,
					right: 0,
					ease: Power3.easeInOut,
				},
				"end"
			)
			/*.call(
				function() {
					cont.classList.add("img-last");
				},
				null,
				">100"
			)*/
			.to(".intro-cont", { opacity: 0 }, ">1");
	}, []);
	//--------------------------------------
	//  Output
	//--------------------------------------
	return (
		<div css={styleCss} className={"intro-cont"}>
			<div className="intro-logo-cont">
				<h1 className="civica-logo">
					<HeaderLogo />
				</h1>
			</div>
			<div className="img-area">
				{/*<div className={"civica07"}>
					<Libs.Atoms.P className="letter" styles={{ fontPc: { bold: true } }}>
						C
					</Libs.Atoms.P>
					<Libs.Atoms.Image src={"civica1.jpg"} />
				</div>*/}
				<Libs.Atoms.Image className={"civica01"} src={"civica1.jpg"} />
				<Libs.Atoms.Image className={"civica02"} src={"civica2.jpg"} />
				<Libs.Atoms.Image className={"civica03"} src={"civica3.jpg"} />
				<Libs.Atoms.Image className={"civica04"} src={"civica4.jpg"} />
				<Libs.Atoms.Image className={"civica05"} src={"civica5.jpg"} />
				<Libs.Atoms.Image className={"civica06"} src={"civica6.jpg"} />
				<Libs.Atoms.Image className={"civica07"} src={"civica7.jpg"} />
				<Libs.Atoms.Image className={"civica08"} src={"civica8.jpg"} />
				<Libs.Atoms.Image className={"civica09"} src={"civica9.jpg"} />
				<Libs.Atoms.Image className={"civica10"} src={"civica10.jpg"} />
				<Libs.Atoms.Image className={"civica11"} src={"civica11.jpg"} />
				<Libs.Atoms.Image className={"civica12"} src={"civica12.jpg"} />
				<Libs.Atoms.Image className={"hero-img"} src={"hero.jpg"} />
			</div>
		</div>
	);
};
