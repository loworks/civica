import React, { PureComponent } from "react";
import * as Modules from "../modules";
import * as Func from "../../libs/common/func";
import * as Transition from "../Transition";
import Img from "gatsby-image";
import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";
import * as Libs from "libs";

export class CategoryPage extends PureComponent {
	descCont = (props) => {
		return css`
			${Func.getMqVwValue("margin-top", 12)};
		`;
	};
	h4Cont = (props) => {
		return css`
			${Func.getMqVwValue("margin-top", 12)};
			${Func.getMqVwValue("margin-bottom", 6)};
		`;
	};
	imgLinkCss = (props) => {
		const { slug } = this.props;
		const spHeight = slug === "journal" ? 48 : 80;
		const pcHeight = slug === "journal" ? 20 : 25;
		const largeHeight = slug === "journal" ? 15 : 20;
		return css`
			${Libs.Styles.Mq.tb} {
				height: 25vw;
			}
			${Libs.Styles.Mq.pc} {
				height: ${pcHeight}vw;
			}
			${Libs.Styles.Mq.large} {
				height: ${largeHeight}vw;
			}
			${Libs.Styles.Mq.lessPab} {
				height: 48vw;
			}
			${Libs.Styles.Mq.sp} {
				height: ${spHeight}vw;
			}
		`;
	};
	imgCss = (props) => {
		return css`
			height: 100%;
		`;
	};
	descCss = (props) => {
		return css`
			position: relative;
			${Libs.Styles.Mq.moreTab} {
				top: -40px;
			}
			${Libs.Styles.Mq.lessPab} {
				top: -10px;
			}
		`;
	};
	imgLoaded = (props) => {
		this.counter++;

		if (this.counter === 1) {
			Transition.InitTransition.InitTransition();
		}
	};
	constructor(props) {
		super(props);

		this.itemNum = 0;
		this.counter = 0;
	}
	render() {
		const { items, slug, type, description } = this.props;
		const getListAjust = (props) => {
			if (type !== "category") {
				return css`
					&:last-child {
						display: none;
					}
				`;
			}
		};

		const flexCont = (props) => {
			const { slug } = this.props;
			const spWidth = slug === "journal" ? 44 : 100;
			const pcWidth = slug === "journal" ? 30.4 : 22.4;
			const largeWidth = slug === "journal" ? 22.4 : 17.5;
			return css`
				${Libs.Styles.Flex.flexList({
					sp: spWidth,
					pab: 44,
					tb: 22.4,
					pc: pcWidth,
					large: largeWidth,
					between: true,
					wrap: true,
				})}

				margin-left: auto;
				margin-right: auto;
				position: relative;
				${Libs.Styles.Mq.moreTab} {
					width: 88vw;
				}
				${Libs.Styles.Mq.lessPab} {
					width: 80vw;
				}
				.flex-item {
					${Libs.Styles.Spacer.Margin({ bottom: "120px" })}
					${Libs.Styles.Mq.lessPc} {
						${getListAjust()}
						${Libs.Styles.Spacer.Margin({ bottom: "60px" })}
					}
				}
			`;
		};
		const getLink = (item, key) => {
			if (key === "RootCategory") {
				return (
					<Modules.LinkCategory
						to={`/${item.node_locale}/${item.category.slug}/`}
					>
						{item.category.name}
					</Modules.LinkCategory>
				);
			} else {
				return item.tags
					? item.tags.map((props) => {
							if (key && props.group === key) {
								return (
									<Modules.LinkCategory
										to={`/${item.node_locale}/${item.category.slug}/${props.slug}/`}
									>
										{props.name}
									</Modules.LinkCategory>
								);
							}
					  })
					: "";
			}
		};

		if (!items) {
		} else {
			this.itemNum = items.length;
			items.sort(function(a, b) {
				a = new Date(a.date);
				b = new Date(b.date);
				return a > b ? -1 : a < b ? 1 : 0;
			});
		}
		if (WindowResize.currentType(WindowResize.morePc)) {
			const len = 5 - (items.length % 5);

			if (len < 5) {
				for (let i = 0; i < len; i++) {
					items.push({ name: "empty" });
				}
			}
		}

		return (
			<>
				{description ? (
					<div>
						<Libs.Atoms.RichText
							css={this.descCss}
							styles={{
								width_pc: 40,
								width_sp: 88,

								hPositionPc: "center",
								hPositionSp: "center",
								spacePc: "0 0 40 0",
								spaceSp: "0 0 40 0",
								text_align: "center",
								pcFontSize: 15,
								spFontSize: 14,

								spLineHeight: 20,
							}}
						>
							{description}
						</Libs.Atoms.RichText>{" "}
					</div>
				) : (
					""
				)}
				<div css={flexCont}>
					{items &&
						items.map((item, i) => {
							if (item.name === "empty") {
								return <div className="empty"></div>;
							} else {
								const imgSrc =
									WindowResize.currentType(WindowResize.lessPab) &&
									item.thumbnailSp
										? item.thumbnailSp
										: item.thumbnail;

								return (
									<article className={"flex-item"}>
										{/* <Libs.Atoms.TriggerLink
                      to={`/${item.node_locale}/${item.category.slug}/${item.slug}/`}
                      css={this.imgLinkCss}
                    >
                      <div css={this.imgCss} className={"img-cont img-element"}>
                        <Img css={this.imgCss} fluid={imgSrc.fluid} />
                      </div>
                    </Libs.Atoms.TriggerLink>*/}
										<Libs.Atoms.TriggerLink
											to={`/${item.node_locale}/${item.category.slug}/${item.slug}/`}
											transition={
												Transition.TrigerZoomTransition.TrigerZoomTransition
											}
											css={this.imgLinkCss}
										>
											{imgSrc ? (
												<div
													css={this.imgCss}
													className={"img-cont img-element"}
												>
													<Img
														loading="eager"
														css={this.imgCss}
														fluid={imgSrc.fluid}
													/>
												</div>
											) : (
												""
											)}
										</Libs.Atoms.TriggerLink>
										<div css={this.descCont} className={"text-element"}>
											<div>
												{getLink(
													item,
													type === "recentpost" ? "RootCategory" : "Category"
												)}
											</div>
											<Libs.Atoms.H4
												styles={{
													bold: true,
													pcFontSize: 20,
													spFontSize: 20,
													fontFace: "sansserif",
												}}
												css={this.h4Cont}
											>
												{item.headLine ? item.headLine[0].text : item.name}
											</Libs.Atoms.H4>
											<div>
												{getLink(
													item,
													type === "recentpost"
														? "Category"
														: slug == "works"
														? "Year"
														: "Area"
												)}
											</div>
										</div>
									</article>
								);
							}
						})}
				</div>
			</>
		);
	}
}

export default CategoryPage;
