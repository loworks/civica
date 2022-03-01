import { navigate } from "gatsby";

import { Power3 } from "gsap";
import * as Common from "../../common";
import * as Action from "libs/redux/action";
import { TimelineMax } from "gsap";
import * as Transition from "./";
import * as Libs from "libs";

let cloneNode;
let dispatcher;
let cloneTarget;

let mh;
export const TrigerZoomTransition = (to, dispatch, currentTarget) => {
	dispatcher = dispatch;

	const cont = document.querySelector("html");
	cont.classList.remove("on-story", "on-overlay");
	cont.classList.add(
		"now-transition",
		"transition-zoom",
		"transition-fade-in",
		`page-load`
	);
	let tlwrapper = document.querySelector(".tl-wrapper");
	const bounds = currentTarget.getBoundingClientRect();

	const cssStyleDeclaration = getComputedStyle(currentTarget, null);

	mh = cssStyleDeclaration.getPropertyValue("max-height");

	cloneTarget = currentTarget.cloneNode(true);
	currentTarget.style.visibility = "hidden";
	cloneTarget.style.width = `${bounds.width}px`;
	cloneTarget.style.height = `${bounds.height}px`;
	cloneTarget.style.display = `block`;
	cloneTarget.style.position = `fixed`;
	cloneTarget.style.transform = `translate(${bounds.left}px, ${bounds.top}px)`;
	cloneTarget.style.backfaceVisibility = `false`;

	cloneNode = tlwrapper.cloneNode(true);

	cloneNode.classList.remove(
		"tl-wrapper",
		"tl-wrapper--mount",
		"tl-wrapper-status--entered"
	);
	cloneNode.classList.add("tl-wrapper", "tl-wrapper--unmount");

	navigate(to);
	tlwrapper = document.querySelector(".tl-wrapper");
	tlwrapper.parentNode.insertBefore(cloneTarget, tlwrapper);
	tlwrapper.parentNode.insertBefore(cloneNode, tlwrapper);
	Libs.Common.Config.setTransition(
		Transition.TrigerZoomTransition.StartZoomTransition
	);
	//cloneNode.style.top = `${-window.scrollY}px`
	// StartZoomTransition()
};
export const StartZoomTransition = () => {
	exitTransition(cloneNode);
};
const exitTransition = (node) => {
	const tl = new TimelineMax();
	//width: `${windowAspectRatio > 1 ? "100vw" : "auto"} `,
	//height: `${windowAspectRatio < 1 ? "100vh" : "auto"} `,
	const topvalue = window.scrollY + window.innerHeight / 2;
	const cont = document.querySelector("html");
	cont.classList.remove("page-load");
	const cloneTargetObj = {
		width: "100vw",
		height: `${window.innerHeight}px`,
		x: 0,
		y: 0,
		ease: Power3.easeIn,
	};
	if (mh && mh !== "none") {
		cloneTargetObj.maxHeight = "100%";
	}
	tl.to(node, 0.5, {
		opacity: 0,
		scale: 0.9,
		transformOrigin: `center ${topvalue}px`,
	})
		.call(function() {
			const cont = document.querySelector("html");
			cont.classList.add("init-loaded");
		})
		.to(cloneTarget, 1, cloneTargetObj)
		.call(function() {
			const entryProjectContainer = document.querySelector(
				".tl-wrapper--mount .project-container"
			);

			Common.Func.setType(entryProjectContainer);
			entryTransition();
		});
};
const entryTransition = () => {
	const tl = new TimelineMax({
		onComplete: function() {
			const cont = document.querySelector("html");
			cont.classList.remove(
				"now-transition",
				"transition-zoom",
				"transition-fade-in"
			);

			cloneTarget.remove();
			cloneNode.remove();
			const dataset = entryProjectContainer.dataset;

			let current = dataset.currentname
				? { name: dataset.currentname, slug: dataset.current }
				: null;
			dispatcher(
				Action.TransitionComplete(
					current,
					dataset.prev,
					dataset.next,
					dataset.categoryname
						? { name: dataset.categoryname, slug: dataset.categoryslug }
						: null,
					dataset.type
				)
			);
		},
	});
	const entryProjectContainer = document.querySelector(
		".tl-wrapper--mount .project-container"
	);
	window.scrollTo(0, 0);
	tl.to(entryProjectContainer, 1, { opacity: 1, ease: Power3.easeInOut });
};
