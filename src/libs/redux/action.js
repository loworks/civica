let onMenu = false;

export const EnterFrameHandler = (
	dispatch,
	frame,
	scrollX,
	scrollY,
	container
) => {
	dispatch(EnterFrameAction(scrollX, scrollY, container));
	dispatch(ScrollEase(frame));
	if (frame === 0) {
		dispatch(EnterSeconds());
	}
};
export const OverlayOpen = (content) => {
	return { type: "OVERLAYOPEN", content };
};
export const OverlayClose = (props) => {
	return { type: "OVERLAYCLOSE" };
};
export const OverlayClosed = (props) => {
	return { type: "OVERLAYCLOSED" };
};
export const SelectOpen = (slug, value, currentValue) => {
	return { type: "SELECTOPEN", slug, value, currentValue };
};
export const SelectChange = (slug, value, currentValue) => {
	return { type: "SELECTCHANGE", slug, value, currentValue };
};
export const SliderClick = (target, sliderId) => {
	return { type: "SLIDERCLICK", target, sliderId };
};
export const SliderChange = (target, sliderId, set) => {
	return { type: "SLIDERCHANGE", target, sliderId, set };
};
export const EnterSeconds = (props) => {
	return { type: "ENTERSECONDS" };
};
export const TransitionComplete = (current, prev, next, category, pageType) => {
	return {
		type: "TRANSITION_COMPLETE",
		current,
		prev,
		next,
		category,
		pageType,
	};
};
export const LangChanged = (lang) => {
	return { type: "LANG_CHANGED", lang: lang };
};
export const ScrollEase = (frame) => {
	return { type: "SCROLLEASE", frame };
};
export const EnterFrameAction = (scrollX, scrollY, container) => {
	return { type: "ENTERFRAME", scrollX, scrollY, container };
};
export const Resize = (width, height) => {
	return { type: "RESIZE", screenWidth: width, screenHeight: height };
};
export const MenuClick = (targetObj, bool) => {
	if (bool == null) {
		onMenu = !onMenu;
	} else {
		onMenu = bool;
	}

	return { type: "MENUCLICK", target: targetObj, onMenu: onMenu };
};

export const AddBag = (sku, quantity = 1) => {
	return {
		type: "ADDBAG",
		sku: sku,
		quantity: quantity,
	};
};
export const RemoveBag = (sku) => {
	return {
		type: "REMOVEBAG",
		sku: sku,
	};
};
export const ChangeBag = (sku, count = 1) => {
	return {
		type: "CHANGEBAG",
		sku: sku,
	};
};
