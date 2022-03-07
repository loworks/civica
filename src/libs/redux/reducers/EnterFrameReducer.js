import * as Common from "../../common";
export const EnterFrameReducer = (
	state = {
		currentScrollState: null,
		scrollX: 0,
		scrollY: 0,
		frame: 0,
		seconds: 0,
		seconds2: 0,
		seconds3: 0,
	},
	action
) => {
	switch (action.type) {
		case "ENTERFRAME":
			return Object.assign({}, state, {
				currentScrollState: getCurrentScrollState(
					action.scrollX,
					action.scrollY,
					action.container
				),
				scrollX: action.scrollX,
				scrollY: action.scrollY,
			});
		case "SCROLLEASE":
			return Object.assign({}, state, {
				frame: action.frame,
			});
		case "ENTERSECONDS":
			return Object.assign({}, state, {
				frame: ++state.seconds,
			});
		case "ENTER2SECONDS":
			return Object.assign({}, state, {
				frame: (state.seconds2 += 2),
			});

		default:
			return state;
	}
};
let positionY = 0;
let _prevScrollValue = 0;
const getCurrentScrollState = (scrollX, scrollY, container) => {
	const scrollTop = scrollY;

	const margin =
		Common.Func.getMarginForEnterFrame() - Common.Config.headerDefaultHeight;
	const headerH = Common.Config.headerDefaultHeight; //this._scrollPoint;
	const cont = container;

	const contClassList = cont.classList;
	if (scrollTop <= margin) {
		if (contClassList.contains("on-scroll")) {
			contClassList.remove("on-scroll");
		}
		if (contClassList.contains("on-scrollinit")) {
			contClassList.remove("on-scrollinit");
		}
		if (contClassList.contains("on-scrolldown")) {
			contClassList.remove("on-scrolldown");
		}
		if (contClassList.contains("on-scrollup")) {
			contClassList.remove("on-scrollup");
		}
	} else if (scrollTop <= margin) {
		if (contClassList.contains("on-scrollinit")) {
			contClassList.remove("on-scrollinit");
		}
	} else if (scrollTop > margin && scrollTop <= headerH + margin) {
		if (!contClassList.contains("on-scrollinit")) {
			contClassList.add("on-scrollinit");
		}
	} else if (scrollTop > headerH + margin) {
		if (!contClassList.contains("on-scroll")) {
			contClassList.add("on-scroll");
		}
		if (!contClassList.contains("on-scrollinit")) {
			contClassList.add("on-scrollinit");
		}
		if (_prevScrollValue) {
			if (scrollTop - _prevScrollValue > 10) {
				if (!contClassList.contains("on-scrolldown")) {
					contClassList.remove("on-scrollup");
					contClassList.add("on-scrolldown");
				}
			} else if (_prevScrollValue - scrollTop > 10) {
				if (!contClassList.contains("on-scrollup")) {
					contClassList.remove("on-scrolldown");
					contClassList.add("on-scrollup");
				}
			} else {
			}
		}
		_prevScrollValue = scrollTop;
	} else {
		if (contClassList.contains("on-scroll")) {
			contClassList.remove("on-scroll");
			contClassList.remove("on-menu");
		}
		if (
			contClassList.contains("on-scrollup") ||
			contClassList.contains("on-scrolldown")
		) {
			contClassList.remove("on-scrollup");
			contClassList.remove("on-scrolldown");
		}
	}
	positionY += (scrollTop - positionY) / 5;

	const n = 2;

	return Math.round(positionY * Math.pow(10, n)) / Math.pow(10, n);
};
export default EnterFrameReducer;
