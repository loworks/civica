import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";
import ScrollEase from "libs/ScrollEase";
import * as Libs from "libs";
import * as Common from "../../common";
import { OverlayOpen } from "../../libs/redux/action";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderLogo from "../../components/modules/HeaderLogo";
import * as Atoms from "../atoms";
import * as Modules from "../modules";
import Img from "gatsby-image";
import { Power3, TweenMax, ScrollToPlugin } from "gsap/all";
export default (props) => {
	const { data, className, ...rest } = props;
	const dispatch = useDispatch();

	const container = useRef();
	const logo = useRef();
	const heroImg = useRef();
	useEffect(() => {
		ScrollEase.WrappedComponent.container = container.current;
		gsap.registerPlugin(ScrollTrigger);
		const topTl = gsap.timeline({
			scrollTrigger: {
				trigger: logo.current,
				start: "top-=25 0",
				endTrigger: ".form-cont",
				end: "-60px top",
				//markers: true,

				pin: true,
				pinSpacing: false,
				toggleClass: {
					targets: "body",
				},
			},
		});
		ScrollTrigger.create({
			trigger: ".never-settle-cont",
			start: "top-=180 0",
			endTrigger: ".form-cont",
			end: "-60px top",
			toggleClass: {
				targets: "body",
				className: "logo-small",
			},
		});

		gsap.fromTo(
			".hero-img",
			{
				opacity: 1,
				scale: 1.5,
				transformOrigin: "center bottom",
			},
			{
				opacity: 1,
				scale: 1,
				ease: "Power4.out",
				transformOrigin: "center bottom",
				scrollTrigger: {
					scroller: window.scroller,
					trigger: ".hero-img",
					start: "top-=300px top",

					scrub: true,
				},
			}
		);

		ScrollTrigger.create({
			trigger: ".header-bg",
			start: "top 0",
			endTrigger: ".form-cont",
			end: "-60px top",
			pin: true,
			pinSpacing: false,
		});
		ScrollTrigger.create({
			trigger: ".button-cont",
			start: "top 0",
			endTrigger: ".form-cont",
			end: "-60px top",
			pin: true,
			pinSpacing: false,
			toggleClass: {
				targets: "body",
				className: "button-small",
			},
		});
		ScrollTrigger.create({
			trigger: ".form-cont",
			start: "top bottom",

			toggleClass: {
				targets: "body",
				className: "isform",
			},
		});
	}, []);

	//--------------------------------------
	//  CSS
	//--------------------------------------
	const style = () => {
		const percent = !logo.current ? 0.2 : 130 / logo.current.clientWidth;

		return css`
			.feature-cont {
				display: flex;
				justify-content: space-between;
				align-items: top;
			}

			.left-cont {
				z-index: 2;
				width: calc(100vw - 100vh * 0.6);
				position: relative;
				min-width: 50vw;
				svg {
					width: auto;
				}
				.logo-cont {
					margin: 25px 0 50px 25px;

					width: 95%;
					.civica-logo {
						transition: all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);
						transform-origin: left top;
						.logo-small &,
						.isform & {
							margin-top: -5px !important;
							transform: scale(${percent});
						}
					}
				}

				.never-settle-cont {
					position: absolute;
					top: 50%;
					margin-left: 25px;
					transform: translateY(-50%);
					h2 {
						width: 25vw;
						max-width: 375px;
						margin-bottom: 20px;
					}
				}

				.button-cont {
					position: absolute;
					bottom: 25px;
					padding-right: 25px;
					width: 100%;
					text-align: right;

					.label {
						transition: all 0.7s cubic-bezier(0.71, 0.01, 0.45, 1.01);
						.button-small &,
						.isform & {
							transform: scale(0.6);
							transform-origin: right center;
						}
					}
				}
			}

			.img-area {
				overflow: hidden;
				height: 100vh;
				z-index: 10;
				width: calc(100vh * 0.6);
				max-width: 50vw;
				min-width: 35vw;
				.hero-img {
					width: 100%;
					height: 100%;
				}
			}
			.sentence-grid {
				padding: 180px 40px 180px 40px;
				position: relative;
				.quate01 {
					width: 12vw;
				}
				.sentence-content {
					width: 62vw;
					margin: 160px auto 80px auto;
					${Libs.Common.Func.getPcSpVwValue("margin-top", 50, true)}
					${Libs.Common.Func.getPcSpVwValue(
						"margin-bottom",
						30,
						true
					)}
					.unknown {
					}
					.header-know-your {
					}
					.sentence-p {
						margin-top: 60px;
					}
				}
				.quate02-cont {
					text-align: right;
				}
				.quate02 {
					transform-origin: center center;
					width: 12vw;

					transform: rotate(180deg);
				}
			}
			.form-cont {
				background-color: ${Common.Config.keyColor2};
				padding-top: 150px;
				.gatsby-image-wrapper {
					margin: 0 auto;
					width: 850px;
					max-width: 80vw;
				}
			}

			.header-bg {
				position: absolute;
				z-index: 1;
				background-color: #fff;
				width: 100vw;
				height: 60px;
			}
			.button-cont2 {
				margin-top: 30px;
				text-align: center;
				padding-bottom: 5px;
				button {
					background: none;
					border: 1px solid #000;
					cursor: pointer;
					padding: 12px 25px 10px 25px;
				}
			}
			.stripe-img {
			}
		`;
	};

	//--------------------------------------
	//  Data
	//--------------------------------------
	const toThankyou = () => {
		dispatch(OverlayOpen({ element: Modules.Thankyou, props: { ...rest } }));
	};
	const scrollToForm = () => {
		const scrollbar = window.Scrollbar;
		//scrollbar.scrollTo(0, 1000, 3);
		const target = document.querySelector(".form-cont");
		console.log(
			"top ---",
			target.getBoundingClientRect().top,
			scrollbar.scrollTop
		);
		/*var top =
			document
				.getElementsByClassName("body-container")[0]
				.children[e.currentTarget.id].getBoundingClientRect().top +
			window.pageYOffset;*/
		scrollbar.scrollTo(
			0,
			scrollbar.scrollTop + target.getBoundingClientRect().top,
			600,
			{
				callback: () => console.log("done!"),
			}
		);
		const plugins = [ScrollToPlugin];
		/*gsap.to(".scroll-content", 1, {
			y: 0,
			onComplete: function() {
				console.log("onComplete -- ", scrollbar);
				scrollbar.setPosition(0, 0);
			},
		});*/
	};
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
						<div className="logo-cont" ref={logo}>
							<h1 className="civica-logo">
								<HeaderLogo />
							</h1>
						</div>
						<div className="never-settle-cont">
							<h2>
								<Atoms.NeverSettle></Atoms.NeverSettle>
							</h2>
							<Libs.Atoms.P
								styles={{
									fontPc: {
										fontSize: 24,
										lineHeight: 32,
										fontFace: "sansserif",
									},
								}}
							>
								Discover a new kind of community at CIVICA
								<br />
								Previewing Fall 2022
							</Libs.Atoms.P>
						</div>
						<div
							className="button-cont"
							onClick={() => {
								scrollToForm();
							}}
						>
							<Atoms.ButtonArrow>
								Register For
								<br />
								Preview Opportunity{" "}
							</Atoms.ButtonArrow>
						</div>
					</div>

					<div className="img-area">
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
						{/*<Libs.Atoms.H2
							styles={{
								fontPc: {
									fontSize: 42,
									lineHeight: 60,
									fontFace: "sansserif",
								},
							}}
						>
							Know your limits but never accept them
						</Libs.Atoms.H2>*/}
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
							A bold addition to the Downtown Seattle skyline, CIVICA is a
							57-story tower of refined, trailblazing design. With exceptional
							finishes and 360-degree views of sky, mountain and water, the
							residences beckon pioneering spirits to create home on your own
							terms. Built around your lifestyle, the elegantly conceived and
							functional amenity spaces—complete with an indoor pool, multiple
							relaxation lounges, and a resident fitness center, just to name a
							few—are made for forging fresh connections, too. Stake your claim
							to better.
						</Libs.Atoms.P>
					</div>
					<div class="quate02-cont">
						<Atoms.IconQuate className={"quate02"} />
					</div>
				</div>
				<div className="stripe-img">
					<Libs.Atoms.Image src={"stripe.jpg"} />
				</div>
				<div id="form" className="form-cont">
					<Libs.Atoms.Image src={"form.jpg"} />
					<div className="button-cont2">
						<button
							onClick={() => {
								toThankyou();
							}}
						>
							<Libs.Atoms.P
								styles={{
									fontPc: {
										fontSize: 32,
										lineHeight: 32,
										fontFace: "sansserif",
									},
								}}
							>
								Submit
							</Libs.Atoms.P>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};
