import { Power3, TimelineMax } from "gsap";
import * as Action from "libs/redux/action";
import * as Libs from "libs";
let init = true;

export const InitIndexTransition = () => {
	if (!init) {
		//Organisms.IndexFeature.start()
		return;
	}
	const tl = new TimelineMax({
		onComplete: function() {
			init = false;
			//Organisms.IndexFeature.start()
		},
	});

	basicTransition(tl);
};
export const InitTransition = (dispatch) => {
	if (!init) {
		return;
	}

	const tl = new TimelineMax({
		onComplete: function() {
			init = false;
		},
	});

	basicTransition(tl, dispatch);
};

const basicTransition = (tl, dispatch) => {
	Libs.Common.Func.setType();
	const imageTarget = document.querySelectorAll(
		".init-animat-cont  .img-element > *"
	);

	const initalLoaderBg = document.querySelectorAll(".initioal-loader");
	if (imageTarget.length > 0) {
		tl.set(imageTarget, {
			y: "80vh",
			opacity: 1,
		});
	}
	tl.add("elem");
	tl.add("bg");
	tl.to(initalLoaderBg, 0.5, { opacity: 0 }, "bg").call(
		function() {
			const cont = document.querySelector("html");
			cont.classList.remove("init-load");

			const onStory =
				(cont.classList.contains("category-works") ||
					cont.classList.contains("category-journal") ||
					cont.classList.contains("category-shop")) &&
				cont.classList.contains("type-post")
					? ""
					: null;
			cont.classList.add(onStory);
		},
		null,
		this,
		0.5,
		"elem"
	);
	if (imageTarget.length > 0) {
		tl.to(
			imageTarget,
			1.5,
			{
				y: "0",
				ease: Power3.easeInOut,
			},
			0.5,
			"elem"
		);
	}

	tl.call(
		function() {
			const cont = document.querySelector("html");
			cont.classList.add("init-loaded");
			if (dispatch) {
				const node = document.querySelector(".tl-wrapper--mount");
				const section = node.querySelectorAll("section:first-child");
				const dataset = section[0] ? section[0].dataset : null;
				if (!dataset) return;
				let current = dataset.currentname
					? { name: dataset.currentname, slug: dataset.current }
					: null;
				dispatch(
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
			}
		},
		null,
		this,
		"elem"
	);
};
