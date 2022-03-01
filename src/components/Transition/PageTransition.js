import { Power3 } from "gsap";
import * as Common from "../../common";
import * as Action from "libs/redux/action";
let dispatcher;
const PageTransition = (node, e, exit, entry, state, tl, dispatch) => {
	dispatcher = dispatch;
	const cont = document.querySelector("html");
	cont.classList.remove("on-story", "on-overlay");
	cont.classList.add("now-transition", "transition-fade-in", `page-load`);
	if (state === "exit") {
		tl.add("exit");
		tl.to(
			node.querySelectorAll("section"),
			1,
			{ opacity: 0, ease: Power3.easeInOut },
			"exit"
		);
	} else {
		const entryCont = node.querySelectorAll("section:first-child")[0];
		Common.Func.setType(entryCont);
		const dataset = entryCont.dataset;
		if (typeof window !== `undefined`) {
			window.scrollTo(0, 0);
		}
		tl.set(entryCont, { opacity: 0, y: 50 });
		tl.to({}, 0.2, {});
		tl.add("page")

			.to(entryCont, 1, { opacity: 1, y: 0, ease: Power3.easeInOut }, "page")
			.call(
				function() {
					const cont = document.querySelector("html");
					cont.classList.remove("now-transition");

					cont.classList.remove("transition-fade-in", `page-load`);

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
				null,
				this,
				1.3,
				"enter"
			);
	}
};

export default PageTransition;
