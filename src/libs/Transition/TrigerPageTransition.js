import { navigate } from "gatsby";

import { Power3 } from "gsap";
import * as Common from "../common";
import * as Action from "../redux/action";
import { TimelineMax } from "gsap";
import * as Transition from "./";
let href;
let cloneNode;
let dispatcher;

export const TrigerPageTransition = (to, dispatch) => {
	href = to;

	dispatcher = dispatch;
	const cont = document.querySelector("html");
	cont.classList.remove("on-story", "on-overlay");
	cont.classList.add("now-transition", "transition-fade-in", `page-load`);
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
	Common.Config.setTransition(
		Transition.TrigerPageTransition.StartPageTransition
	);

	//StartPageTransition()
};
export const StartPageTransition = () => {
	exitTransition(cloneNode);
};

const exitTransition = (node) => {
	const tl = new TimelineMax();

	const topvalue = window.scrollY + window.innerHeight / 2;
	tl.add("page");
	tl.to(
		node,
		0.5,
		{
			opacity: 0,
			scale: 0.96,
			ease: Power3.easeInOut,
			transformOrigin: `center ${topvalue}px`,
		},
		"page"
	).call(function() {
		entryTransition();
	});
};

const entryTransition = (node) => {
	const tl = new TimelineMax({
		onComplete: function() {
			const cont = document.querySelector("html");
			cont.classList.remove("transition-fade-in", `page-load`);
			cloneNode.remove();
		},
	});
	const entryCont = document.querySelector(
		".tl-wrapper--mount .project-container"
	);

	Common.Func.setType(entryCont);
	const dataset = entryCont.dataset;
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
	const cont = document.querySelector("html");
	cont.classList.remove("now-transition");
	if (typeof window !== `undefined`) {
		window.scrollTo(0, 0);
	}
	tl.set(entryCont, { y: 50 }, "page").to(
		entryCont,
		1,
		{ opacity: 1, y: 0, ease: Power3.easeInOut },
		"page"
	);
};
