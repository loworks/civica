import React, { PureComponent } from "react";
import * as Modules from "../modules";

import * as Transition from "../Transition";
import Img from "gatsby-image";
import { css } from "@emotion/react";

import { WindowResize } from "libs/redux/event/WindowResize";

import * as Libs from "libs";
export class ProductCategory extends PureComponent {
	comingsoonCss = (props) => {
		return css`
			position: relative;
			margin-bottom: 50px;
			left: 50%;
			z-index: 10;
			transform: translateX(-50%);
			background-color: #fff;
		`;
	};
	descCont = (props) => {
		return css`
			${Libs.Common.Func.getMqVwValue("margin-top", 12)};
		`;
	};
	h4Cont = (props) => {
		return css`
			${Libs.Common.Func.getMqVwValue("margin-top", 12)};
			${Libs.Common.Func.getMqVwValue("margin-bottom", 6)};
		`;
	};
	imgLinkCss = (props) => {
		return css`
			/*pointer-events: none;*/

			${Libs.Styles.Mq.moreTab} {
				height: 25vw;
			}

			${Libs.Styles.Mq.large} {
				height: 25vw;
			}
			${Libs.Styles.Mq.lessPab} {
				height: 48vw;
			}
			${Libs.Styles.Mq.sp} {
				height: 125%;
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
		const { items, lang, variants, type, description } = this.props;
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
			return css`
				${Libs.Styles.Flex.flexList({
					sp: 100,
					pab: 44,
					tb: 22.4,
					pc: 22.4,
					large: 22.4,
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
		const priceMap = new Map();
		const avalableMap = new Map();
		variants.forEach((variant, index) => {
			const id = variant.node.id.replace("Shopify__ProductVariant__", "");
			const map = new Map();
			const avalable = variant.node.product.availableForSale;
			variant.node.presentmentPrices.edges.forEach(
				(presentmentPrice, index) => {
					map.set(
						presentmentPrice.node.price.currencyCode,
						presentmentPrice.node.price.amount
					);
				}
			);
			avalableMap.set(id, avalable);
			priceMap.set(id, map);
		});

		return (
			<>
				{/*
        <Libs.Atoms.P
          styles={{
            fontFace: "sansserif",
            bold: true,
            text_align: "center",
            pcFontSize: 18,
            spFontSize: 18,
            pcLineHeight: 18,
            spLineHeight: 18,
          }}
          css={this.comingsoonCss}
        >
          THE WEB SHIP IS
          <br />
          <Libs.Atoms.Span
            styles={{
              text_align: "center",
              pcFontSize: 48,
              spFontSize: 36,
              pcLineHeight: 48,
              spLineHeight: 36,
            }}
          >
            COMING SOON
          </Libs.Atoms.Span>
        </Libs.Atoms.P>*/}
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

								const currencyCode = lang === "en" ? "USD" : "JPY";
								const priceMapObj = priceMap.get(item.shopifyId);
								if (!priceMapObj) {
								} else {
									//console.log("item -- 2", item)
								}
								const price = priceMapObj
									? Libs.Common.StoreFunc.changeFormatToPrice(
											priceMap.get(item.shopifyId).get(currencyCode),
											currencyCode
									  )
									: "";
								const avalable = avalableMap.get(item.shopifyId)
									? price
									: "SOLD OUT";

								return (
									<article className={"flex-item"}>
										<Libs.Atoms.TriggerLink
											to={`/${item.node_locale}/${item.category.slug}/${item.slug}/`}
											transition={
												Transition.TrigerZoomTransition.TrigerZoomTransition
											}
											css={this.imgLinkCss}
										>
											<div css={this.imgCss} className={"img-cont img-element"}>
												<Img css={this.imgCss} fluid={imgSrc.fluid} />
											</div>
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
											<Libs.Atoms.P
												styles={{
													fontPc: {
														fontSize: 14,
														fontFace: "sansserif",
														bold: true,
														letterSpacing: ".5",
													},
													fontSp: {
														fontSize: 14,
														fontFace: "sansserif",
														bold: true,
														letterSpacing: ".5",
													},
												}}
											>
												{avalable}
											</Libs.Atoms.P>
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

export default ProductCategory;
