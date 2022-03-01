import { navigate } from "gatsby";

import { Power3 } from "gsap";
import * as Common from "../../common";
import * as Action from "libs/redux/action";
import { TimelineMax } from "gsap";
import * as Transition from "./";
import * as Libs from "libs";
let cloneNode;
let dispatcher;

export const TrigerFadeTransition = (to, dispatch) => {
	dispatcher = dispatch;
	const cont = document.querySelector("html");
	cont.classList.remove("on-overlay");
	cont.classList.add("now-transition", "transition-fade-in");
	let tlwrapper = document.querySelector(".tl-wrapper");
	cloneNode = tlwrapper.cloneNode(true);
	cloneNode.classList.remove(
		"tl-wrapper",
		"tl-wrapper--mount",
		"tl-wrapper-status--entered"
	);
	cloneNode.classList.add("tl-wrapper", "tl-wrapper--unmount");
	navigate(to);
	tlwrapper = document.querySelector(".tl-wrapper");
	tlwrapper.parentNode.insertBefore(cloneNode, tlwrapper);
	Libs.Common.Config.setTransition(
		Transition.TrigerFadeTransition.StartFadeTransition
	);
};
export const StartFadeTransition = () => {
	exitTransition(cloneNode);
};

const exitTransition = (node) => {
	const tl = new TimelineMax();
	const topvalue = window.scrollY + window.innerHeight / 2;
	tl.to(node, 1, {
		opacity: 0,
		scale: 0.96,
		ease: Power3.easeInOut,
		transformOrigin: `center ${topvalue}px`,
	}).call(function() {
		const cont = document.querySelector("html");
		const entryProjectContainer = document.querySelector(
			".tl-wrapper--mount .project-container"
		);

		cont.classList.remove("on-story", "now-transition");
		Common.Func.setType(entryProjectContainer);
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
		entryTransition(entryProjectContainer);
	});
};
const entryTransition = (entryProjectContainer) => {
	const tl = new TimelineMax({
		onComplete: function() {
			const cont = document.querySelector("html");
			cont.classList.remove("now-transition", "transition-fade-in");
			cloneNode.remove();
		},
	});

	tl.to(entryProjectContainer, 0.6, {
		opacity: 1,
		scale: 1,
		ease: Power3.easeInOut,
	});
};
