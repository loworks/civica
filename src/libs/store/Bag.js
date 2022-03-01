import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as Store from "./";
import * as Atoms from "../atoms";
import { css } from "@emotion/react";
import { OverlayClose } from "../redux/action";
import * as Styles from "../styles";
import { TimelineMax, Power2 } from "gsap";

export default (props) => {
	let overlayState = useSelector((state) => state.OverlayReducer.state);

	const dispatch = useDispatch();
	const container = useRef();
	const inner = useRef();
	const contCss = (props) => {
		return css`
			position: fixed;
			opacity: 1;
			top: 0px;
			right: 0px;

			z-index: 102;
			background-color: #fff;
			transform: scaleY(0);

			${Styles.Mq.moreTab} {
				padding: 5.88235rem 2.94118rem 2.10084rem;
				width: 480px;
				transform-origin: top center;
			}
			${Styles.Mq.lessPab} {
				padding: 5.88235rem 6vw 25vh 6vw;
				width: 100vw;
				height: 100vh;
				overflow-y: scroll;
				transform-origin: top center;
				.on-story {
					transform-origin: bottom center;
				}
			}
			.on-bag & {
				opacity: 1;
				pointer-events: auto;
				overflow-y: scroll;
			}
		`;
	};

	const closeButtonCss = (props) => {
		return css`
			position: fixed;
			top: 30px;
			right: 30px;
			z-index: 3;
		`;
	};
	const clickHandler = () => {
		const cont = document.getElementsByTagName("html")[0];
		cont.classList.remove("on-bag");

		dispatch(OverlayClose());
	};
	/*
  const productEdges =
    langkey == "ja"
      ? Hooks.AllProductsJa.AllProductsJa()
      : Hooks.AllProductsJa.AllProductsJa()

  productEdges.map(({ node }, i) => {
    return products.set(node.stripeId, node)
  })*/
	useEffect(() => {
		const cont = document.getElementsByTagName("html")[0];

		const tl = new TimelineMax();
		const containerObj = container.current;

		const innerObj = inner.current;

		tl.set(containerObj, { scaleY: 0.4 });
		if (innerObj) tl.set(innerObj, { opacity: 0 });

		tl.to(containerObj, 0.5, {
			scaleY: 1,

			ease: Power2.easeOut,
		});
		if (innerObj) tl.to(innerObj, 0.5, { opacity: 1, ease: Power2.easeOut });
		if (overlayState) {
			cont.classList.add("on-bag");
		} else {
			cont.classList.remove("on-bag");
		}
	}, []);

	return (
		<section css={contCss} ref={container} className="bag">
			<Atoms.ButtonClose
				css={closeButtonCss}
				activeClass="on-bag"
				clickHandler={clickHandler}
			/>
			<Store.Cart forwardRef={inner} />
		</section>
	);
};
