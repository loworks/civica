import * as Common from "../../common";

const initialState = {
	target: null,
	onMenu: false,
	lang: null,
	sliderId: 0,
	type: "",
};
export const ClickReducer = (state = initialState, action) => {
	switch (action.type) {
		case "MENUCLICK":
			if (typeof window !== `undefined`) {
				const className = "on-menu";
				const cont = document.getElementsByTagName("html")[0];

				action.onMenu
					? cont.classList.add(className)
					: cont.classList.remove(className);
				return Object.assign({}, state, {
					target: action.target,
					onMenu: action.onMenu,
				});
			} else {
				return null;
			}

		case "LANG_CHANGED":
			if (typeof window !== `undefined`) {
				return Object.assign({}, state, {
					target: action.target,
					lang: action.lang,
				});
			} else {
				return false;
			}

		default:
			return state;
	}
};

export default ClickReducer;
