import React from "react";
import * as Hooks from "../../hooks";
import * as Func from "../../libs/common/func";
import * as Modules from "./";
import * as Atoms from "../../libs/atoms";
export default (props) => {
	const { styles, className } = props;

	const langkey = Func.getLangKey();
	let edges =
		langkey == "ja"
			? Hooks.AllProductsJa.AllProductsJa()
			: Hooks.AllProductsEn.AllProductsEn();

	const shuffle = ([...array], max) => {
		const len = max ? max : array.length - 1;
		for (let i = len; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	edges = shuffle(edges).slice(0, 3);
	edges = edges.map(({ node }) => {
		return node;
	});

	return (
		<Atoms.BlockElement className={className} styles={styles}>
			<Modules.ProductsCategory items={edges} slug={"products"} />
		</Atoms.BlockElement>
	);
};
