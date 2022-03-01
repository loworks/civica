import { navigate } from "gatsby";
import { Power3 } from "gsap";
import * as Action from "libs/redux/action";
import { TimelineMax } from "gsap";
import * as Transition from "./";
import * as Libs from "libs";

let cloneNode;
let dispatcher;
let direction;
let tmpDirection;

export const TrigerSlideTransition = (to, nextdirection, dispatch) => {
	dispatcher = dispatch;
	const cont = document.querySelector("html");
	direction = nextdirection;
	tmpDirection = nextdirection ? nextdirection : "next";
	cont.classList.add(
		"now-transition",
		`transition-slide`,
		`story-${tmpDirection}`,
		`page-load`
	);
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
		Transition.TrigerSlideTransition.StartTransition
	);
	//StartTransition()
};
export const StartTransition = () => {
	exitTransition(cloneNode);
};

const exitTransition = (node) => {
	const tl = new TimelineMax({});

	tl.to(node, 0.5, { opacity: 0.5, scale: 0.9, ease: Power3.easeIn }).call(
		function() {
			entryTransition(node);
		}
	);
};

const entryTransition = (node) => {
	const entryNode = document.querySelector(".tl-wrapper + .tl-wrapper");

	const tl = new TimelineMax({
		onComplete: function() {
			const section = entryNode.querySelectorAll("section:first-child");
			const dataset = section[0].dataset;
			const cont = document.querySelector("html");

			cont.classList.remove(
				"now-transition",
				"transition-slide",
				"story-next",
				"story-prev",

				"page-load"
			);
			cloneNode.remove();
			let current = dataset.currentname
				? {
						name: dataset.currentname,
						slug: dataset.current,
				  }
				: null;

			dispatcher(
				Action.TransitionComplete(
					current,
					dataset.prev,
					dataset.next,
					dataset.categoryname
						? {
								name: dataset.categoryname,
								slug: dataset.categoryslug,
						  }
						: null,
					dataset.type
				)
			);
		},
	});
	if (direction) {
		const left = direction === "next" ? "-100%" : "100%";
		tl.set(entryNode, { scale: 0.9 })

			.add("entry")
			.to(node, 1, { x: left, ease: Power3.easeInOut }, "entry")
			.to(entryNode, 1, { x: "0%", ease: Power3.easeInOut }, "entry")

			.to(entryNode, 0.6, {
				scale: 1,
				ease: Power3.easeInOut,
			});
	} else {
		tl.set(entryNode, { scale: 0.9, opacity: 0, x: 0 })

			.add("entry")
			.to(node, 1, { opacity: 0, ease: Power3.easeInOut }, "entry")
			.to(entryNode, 1, { opacity: 1, ease: Power3.easeInOut }, "entry")

			.to(entryNode, 0.6, {
				scale: 1,
				ease: Power3.easeInOut,
			});
	}
};
