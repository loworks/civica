import React from "react";
import { css } from "@emotion/react";
import Img from "gatsby-image";
import * as Hooks from "../../hooks";

import * as Libs from "libs";

export default () => {
	let edges = Hooks.AllInstaNode.AllInstaNode
		? Hooks.AllInstaNode.AllInstaNode()
		: null;

	//console.log("edges--", edges)

	const sectionCss = css`
		${Libs.Styles.Mixin.containerCss()}
		width: 88vw;
		margin-left: auto;
		margin-right: auto;
	`;
	const flexCont = (props) => {
		return css`
			${Libs.Styles.Flex.flexList({
				lessPab: 45,
				moreTab: 15,
				between: true,
				wrap: true,
			})}
			margin-left: auto;
			margin-right: auto;
			${Libs.Common.Func.getMqVwValue("margin-top", 40)};
			position: relative;
			.flex-item {
				${Libs.Styles.Spacer.Margin({ bottom: "60px" })}
			}
		`;
	};
	const headerContCss = css`
		text-align: center;

		> * {
			display: inline-block;
			vertical-align: middle;
			&:first-child {
				line-height: 0;
				padding-right: 6px;
			}
		}
	`;
	return (
		<>
			{edges ? (
				<section css={sectionCss}>
					<div css={headerContCss}>
						<Libs.Atoms.Icon type="insta" />
						<Libs.Atoms.H2
							styles={{
								spFontSize: 11,
								pcFontSize: 11,
								spLineHeight: 11,
								pcLineHeight: 11,
								letterSpacing: 2,
								text_align: "center",
								fontFace: "sansserif",
								display: "inline-block",
							}}
						>
							<span>Instagram</span>
						</Libs.Atoms.H2>
					</div>
					<div css={flexCont}>
						{edges.map(({ node }) => {
							return (
								<article className={"flex-item"}>
									<div className={"img-cont "}>
										<a
											href={`https://www.instagram.com/p/${node.id}/`}
											target="_new"
										>
											<Img fluid={node.localFile.childImageSharp.fluid} />
										</a>
									</div>
								</article>
							);
						})}
					</div>
				</section>
			) : (
				""
			)}
		</>
	);
};
