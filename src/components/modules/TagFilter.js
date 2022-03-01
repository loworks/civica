import React from "react";
import { css } from "@emotion/react";
import * as Hooks from "../../hooks";
import * as Func from "../../libs/common/func";

import * as Styles from "../../libs/styles";
import { connect } from "react-redux";
import * as Libs from "libs";
export const TagFilter = (props) => {
	const flexContCss = () =>
		css`
			position: absolute;
			display: flex;

			justify-content: center;
			z-index: 100;
			width: 100vw;
			transition: all 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);
			${Func.getPcSpVwTransform("translateY", 162, 132, true)};
			/*  .init-loaded & {
      }*/
			.on-scrollinit & {
				${Styles.Mq.moreTab} {
					transform: translateY(120px);
				}

				${Styles.Mq.lessPab} {
					transform: translateY(100px);
				}
			}
			.now-transition &,
			.on-story & {
				transition: opacity 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
				opacity: 0;
				pointer-events: none;
			}

			.on-scroll.on-scrolldown & {
				${Styles.Mq.lessPab} {
					opacity: 0;
				}
			}

			> div {
				&:not(:first-child) {
					margin-left: 4vw;
				}
			}
		`;
	const {
		children,
		className,
		forwardedref,
		current,

		...rest
	} = props;

	const category = props.category ? props.category.slug : null;

	let data =
		category == "works"
			? Hooks.WorksCategoryTagData.WorksCategoryTagData()
			: Hooks.JournalCategoryTagData.JournalCategoryTagData();

	const items = data ? data["content___" + category] : null;
	const tagsMap = new Map();
	if (items) {
		items.map((item, i) => {
			if (item.tags) {
				item.tags.map((tag) => {
					if (!tagsMap.has(tag.group)) {
						const newMap = new Map();
						newMap.set(tag.slug, tag, category);
						tag.category = category;
						tagsMap.set(tag.group, newMap);
					} else {
						const tmp = tagsMap.get(tag.group);
						tag.category = category;
						//console.log("tagsMap---", tag, tmp.has(tag.slug))

						tmp.set(tag.slug, tag);
					}
				});
			}
		});
	}
	return (
		<div css={flexContCss} className="tag-filter">
			{items
				? Object.entries(Func.mapToObject(tagsMap)).map((item, i) => {
						const currentMap = item[1].get(current.slug);

						return (
							<div>
								<Libs.Modules.SelectHeader
									header={item[0]}
									values={item[1]}
									category={category}
									current={currentMap ? currentMap.slug : null}
								/>
							</div>
						);
				  })
				: ""}
		</div>
	);
};
export default connect((state) => ({
	current: state.TransitionReducer.current,
	category: state.TransitionReducer.category,
	prev: state.TransitionReducer.prev,
	next: state.TransitionReducer.next,
}))(TagFilter);
