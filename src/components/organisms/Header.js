import React, { useEffect, useRef } from "react";
import HeaderLogo from "../../components/modules/HeaderLogo";
import { css } from "@emotion/react";
import SnsList from "../../components/modules/SnsList";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Libs from "libs";

export default (props) => {
	const container = useRef();
	useEffect(() => {
		gsap.fromTo(
			container.current,
			{
				x: "0",
			},
			{
				x: "500",
				scrollTrigger: {
					scroller: window.scroller,
					start: "top center",
					scrub: true,
					markers: false,
				},
				ease: "none",
			}
		);
	}, []);
	//--------------------------------------
	//  CSS
	//--------------------------------------
	const headerCss = () => css``;

	const h1Css = () => css`
		position: absolute;

		${Libs.Styles.Mq.large} {
			top: 40px;
			left: 2vw;
		}
		${Libs.Styles.Mq.pc} {
			top: 40px;
		}
		${Libs.Styles.Mq.tb} {
			top: 46px;
		}
		${Libs.Styles.Mq.lessPab} {
			top: 26px;
			left: 25px;
		}
	`;
	const snslistCss = () => css`
		position: absolute;
		right: 50px;
		top: 40px;
		${Libs.Styles.Mq.lessPab} {
			display: none;
		}
	`;
	//--------------------------------------
	//  Tags
	//--------------------------------------
	return (
		<header css={headerCss} ref={container}>
			{/*<h1 css={h1Css}>
				<HeaderLogo />
			</h1>
			<Modules.GlobalNavigation />
				<div css={menuiconCss}>
          <HamburgerMenu />
        </div>
				<Modules.Breadcrumb></Modules.Breadcrumb>
				<Modules.TagFilter />

				<div css={snslistCss}>
					<SnsList styles={{ width_pc: 7, width_sp: 7 }} />
				</div>*/}
		</header>
	);
};
