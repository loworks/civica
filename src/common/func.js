import * as Transition from "../components/Transition";
import * as Modules from "../components/modules";
import React from "react";
import * as Styles from "../libs/styles";

export const getLoadTypeFunction = (loadTypeString) => {
	if (loadTypeString) {
		const tmpTyp = loadTypeString;
		if (tmpTyp === "InitIndexTransition") {
			return Transition.InitTransition.InitIndexTransition;
		} else {
			return "";
		}
	}
};
export const getFeatureLayoutCard = (props) => {
	if (props) {
		return props.map((card, i) => {
			const cardType = {
				layout: getCardType(card.layoutRef),
			};
			card.onLoadType = "InitIndexTransition";
			return (
				<cardType.layout
					className={card.onLoadType ? "init-animat-cont" : ""}
					info={card}
				/>
			);
		});
	} else {
		return "";
	}
};
export const getBodyLayoutCard = (props) => {
	if (props) {
		return props.map((card, i) => {
			const cardType = {
				layout: getCardType(card.layoutRef),
			};
			return (
				<section css={Styles.Mixin.containerCss}>
					<cardType.layout info={card} />
				</section>
			);
		});
	} else {
		return "";
	}
};
export const getCardType = (cardTypeString) => {
	if (cardTypeString === "layout-card01") {
		return Modules.LayoutCard01;
	} else if (cardTypeString === "layout-card02") {
		return Modules.LayoutCard02;
	} else if (cardTypeString === "layout-card03") {
		return Modules.LayoutCard03;
	} else if (cardTypeString === "layout-card04") {
		return Modules.LayoutCard04;
	} else if (cardTypeString === "layout-card05") {
		return Modules.LayoutCard05;
	} else if (cardTypeString === "layout-card06") {
		return Modules.LayoutCard06;
	} else if (cardTypeString === "layout-spread-card01") {
		return Modules.LayoutSpreadCard01;
	} else {
		return Modules.LayoutCard02;
	}
};
export const getElementType = (key) => {
	let element = "";
	if (key === "ProductList") {
		element = Modules.ProductList;
	} else if (key === "ImageList") {
		element = Modules.ImageList;
	} else if (key === "RecentPost") {
		element = Modules.RecentPost;
	} else if (key === "SnsList") {
		element = Modules.SnsList;
	} else {
		return false;
	}
	return {
		element: element,
	};
};
export const setType = (element) => {
	const node = element ? element : document.querySelector(".project-container");
	const dataset = node.dataset;
	const categoryClass = dataset.categoryslug
		? "category-" + dataset.categoryslug
		: "category-index";
	const cont = document.querySelector("html");
	cont.classList.remove(
		"type-category",
		"type-page",
		"type-post",
		"category-works",
		"category-shop",
		"category-index",
		"category-journal",
		"category-about",
		"category-contact",
		"category-howltcoffee"
	);
	cont.classList.add(`type-${dataset.type}`, `${categoryClass}`);
	// const section = node.querySelectorAll("section:first-child")
	return;
};
