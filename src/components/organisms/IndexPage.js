import React, { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import ScrollEase from "libs/ScrollEase";
import * as Libs from "libs";
import * as Common from "../../common";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLogo from "../../components/modules/HeaderLogo";
import * as Atoms from "../atoms";
import Img from "gatsby-image";

export default (props) => {
	const { data, className, ...rest } = props;

	const outroRef = useRef();
	const outroContentRef = useRef();
	const container = useRef();
	const logo = useRef();
	const heroImg = useRef();
	useEffect(() => {
		ScrollEase.WrappedComponent.container = container.current;
		gsap.registerPlugin(ScrollTrigger);
		const topTl = gsap.timeline({
			scrollTrigger: {
				trigger: logo.current,
				start: "top 30px",
				endTrigger: "footer",
				end: "-100px top",
				//markers: true,

				pin: true,
				pinSpacing: false,
				toggleClass: {
					targets: "body",
					className: "logo-small",
				},
			},
		});
		gsap.fromTo(
			".hero-img",
			{
				opacity: 1,
				scale: 1.5,
				transformOrigin: "center",
			},
			{
				opacity: 1,
				scale: 1,
				ease: "Power4.out",
				transformOrigin: "center",
				scrollTrigger: {
					scroller: window.scroller,
					trigger: ".hero-img",
					start: "top-=300px top",

					scrub: true,
				},
			}
		);
		/*
		topTl.fromTo(
			logo.current,
			{
				opacity: 1,
				scale: 1,
				transformOrigin: "left",
			},
			{
				opacity: 1,
				scale: 0.4,
				ease: "Power4.out",
				transformOrigin: "left",
			}
		);*/
		ScrollTrigger.create({
			trigger: ".header-bg",
			start: "top 0",
			endTrigger: "footer",
			end: "-100px top",
			pin: true,
			pinSpacing: false,
		});
		ScrollTrigger.create({
			trigger: ".button-cont",
			start: "top 0",
			endTrigger: "footer",
			end: "-100px top",
			pin: true,
			pinSpacing: false,
			toggleClass: {
				targets: "body",
				className: "button-small",
			},
		});
	}, []);

	//--------------------------------------
	//  CSS
	//--------------------------------------
	const style = () => css`
		.feature-cont {
			display: grid;
			--grid-gap: 2rem;
			--grid-margin: 4rem;
			grid-template-columns: repeat(6, 1fr) 100px repeat(6, 1fr);
			align-items: end;
		}

		.left-cont {
			grid-column: 1 / span 6;
			padding: 0 30px 120px 40px;
			z-index: 2;
			.civica-logo {
				transition: all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);
				.logo-small &,
				.isfooter & {
					transform: scale(0.3);
					transform-origin: left top;
				}
			}
			svg {
				width: auto;
			}
			.logo-cont {
				margin-bottom: 50px;
			}

			.never-settle-cont {
				margin-bottom: 80px;
				h2 {
					width: 50%;
					margin-bottom: 20px;
				}
			}
		}

		.bg-cont {
			grid-column: 7 / span 1;
			background-color: ${Common.Config.keyColor2};
			height: 100vh;
			display: grid;
			align-items: end;
			justify-content: right;
			z-index: 10;
			.pin-spacer {
				width: auto !important;
			}
			.button-cont {
				width: auto !important;
				.label {
					transition: all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);
					.button-small &,
					.isfooter & {
						transform: scale(0.6);
						transform-origin: right center;
					}
				}
			}
			.icon {
				height: 100px;
				width: 100%;
				background-color: ${Common.Config.keyColor};
			}
		}

		.img-grid {
			grid-column: 8 / span 6;
			overflow: hidden;
			height: 100vh;
			z-index: 10;
			.hero-img {
				width: 100%;
				height: 100%;
			}
		}
		.sentence-grid {
			padding: 200px 40px 200px 40px;
			position: relative;
			.quate01 {
				position: absolute;
				right: 40px;
				width: 12vw;

				transform: rotate(180deg);
			}
			.sentence-content {
				width: 62vw;
				margin: 180px auto 80px auto;
				.unknown {
				}
				.header-know-your {
				}
				.sentence-p {
					margin-top: 60px;
				}
			}

			.quate02 {
				grid-column: 1 / span 2;
				transform-origin: center;
				width: 12vw;
				text-align: right;
			}
		}
		.animation-test > * {
			margin: 100px 0;
			width: 300px;
			background-color: #fff;
		}

		.header-bg {
			position: absolute;
			z-index: 1;
			background-color: #fff;
			width: 100vw;
			height: 100px;
		}
	`;

	//--------------------------------------
	//  Data
	//--------------------------------------

	//--------------------------------------
	//  Output
	//--------------------------------------
	return (
		<>
			<section
				className={className}
				ref={container}
				{...rest}
				css={style}
				data-categoryname={"Index"}
				data-categoryslug={"index"}
				data-type={"page"}
			>
				<div className="header-bg"></div>
				<div className="feature-cont">
					<div className="left-cont">
						<div className="never-settle-cont">
							<h2>
								<Atoms.NeverSettle></Atoms.NeverSettle>
							</h2>
							<Libs.Atoms.P
								styles={{
									fontPc: {
										fontSize: 18,
										lineHeight: 26,
										fontFace: "sansserif",
									},
								}}
							>
								Discover a new kind of community at CIVICA
								<br />
								Previewing Fall 2022
							</Libs.Atoms.P>
						</div>
						<div className="logo-cont" ref={logo}>
							<h1 className="civica-logo">
								<HeaderLogo />
							</h1>
						</div>
					</div>
					<div className="bg-cont">
						<Atoms.ButtonArrow className="button-cont" />
					</div>
					<div className="img-grid">
						<Img
							className="hero-img"
							imgClassName={"photo"}
							ref={heroImg}
							fluid={data.acf.hero_rendering.localFile.childImageSharp.fluid}
						/>
					</div>
				</div>
				<div className="sentence-grid">
					<Atoms.IconQuate className={"quate01"} />
					<div class="sentence-content">
						<Atoms.HeaderKnowYour className={"header-know-your"} />
						<Libs.Atoms.P
							className={"unknown"}
							styles={{
								fontPc: {
									fontSize: 22,
									lineHeight: 22,
									fontFace: "sansserif",
								},
							}}
						>
							~Unknown
						</Libs.Atoms.P>
						<Libs.Atoms.P
							className="sentence-p"
							styles={{
								fontPc: {
									fontSize: 28,
									lineHeight: 40,
									fontFace: "sansserif",
								},
							}}
						>
							A bold addition to the Seattle skyline, CIVICA is a brand new
							57-story residential building in Downtown Seattle. In this tower
							of refined design, exceptional finishes and 360-degree views of
							sky, mountain, and water. Pioneering spirits have the inspiration
							and infrastructure to create refreshing connections. Indulge in
							elegantly conceived and functional amenity spaces built around
							your lifestyle, including an indoor pool, multiple relaxation
							lounges, and a resident fitness center—just to name a few.
						</Libs.Atoms.P>
					</div>
					<Atoms.IconQuate className={"quate02"} />
				</div>
			</section>
		</>
	);
};
