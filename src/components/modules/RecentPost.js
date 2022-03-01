import React from "react";
import { css } from "@emotion/react";
import * as Hooks from "../../hooks";
import * as Func from "../../libs/common/func";
import * as Modules from "./";
import * as Organisms from "../organisms";
export default (props) => {
	const langkey = Func.getLangKey();
	let worksEdges =
		langkey == "ja"
			? Hooks.useWorksListData.useJaWorksData()
			: Hooks.useWorksListDataEn.useEnWorksData();

	let productEdges =
		langkey == "ja"
			? Hooks.AllProductsJa.AllProductsJa()
			: Hooks.AllProductsEn.AllProductsEn();
	let jouranlEdges =
		langkey == "ja"
			? Hooks.useJournalListData.useJaJournalData()
			: Hooks.useJournalListDataEn.useEnJournalData();

	let edges = worksEdges
		.concat(productEdges, jouranlEdges)
		.sort(function(a, b) {
			return new Date(b.node.updatedAt) - new Date(a.node.updatedAt);
			return a.updatedAt < b.updatedAt ? -1 : 1;
		});

	const shuffle = ([...array], max) => {
		const len = max ? max : array.length - 1;
		for (let i = len; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	edges = edges.slice(0, 5);
	//edges = shuffle(edges).slice(0, 4)
	edges = edges.map(({ node }) => {
		return node;
	});
	const sectionCss = css`
		${Func.getPcSpVwValue("margin-top", 120, 90)};
	`;
	const HeaderAddLinkCss = css`
		${Func.getPcSpVwValue("margin-bottom", 45, 35)};
	`;

	return (
		<section css={sectionCss}>
			<Modules.HeaderAddLink lang={langkey} css={HeaderAddLinkCss}>
				{props.children ? props.children : "Recent Post"}
			</Modules.HeaderAddLink>
			<Organisms.CategoryPage items={edges} type={"recentpost"} />
		</section>
	);
};
