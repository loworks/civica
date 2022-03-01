import React, { PureComponent } from "react";

import * as Common from "../common";
import { css } from "@emotion/react";
import * as LibsAtoms from "../atoms";
import { WindowResize } from "../redux/event/WindowResize";
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker,
} from "react-google-maps";

export class BodyElement extends PureComponent {
	constructor(props) {
		super(props);
		this.itemNum = 0;
		this.counter = 0;
	}

	render() {
		const { body, layoutTypeFunc, elementTypeFunc } = this.props;

		const bodyItemCss = (props) => {
			return css`
				${Common.Func.getPcSpVwValue("margin-top", 120, 70)};
				&:first-child {
					margin-top: 0px;
				}
			`;
		};
		const BlockItem = (childMargin = 100, childMarginSp = 70) => {
			return css`
				${Common.Func.getPcSpVwValue("margin-top", childMargin, childMarginSp)};
				&:first-child {
					margin-top: 0px;
				}
			`;
		};
		const getElementWidth = (props, type, parent) => {
			const keys =
				type == "pc" ? ["widthPc", "width_pc"] : ["widthSp", "width_sp"];
			return props[keys[0]] || props[keys[1]]
				? props[keys[0]]
					? props[keys[0]]
					: props[keys[1]]
				: parent && (parent[keys[0]] || parent[keys[1]])
				? parent[keys[0]]
					? parent[keys[0]]
					: parent[keys[1]]
				: 88;
		};
		const getElementImage = (content, css, inner, num, classNameStr) => {
			const imgSrc = WindowResize.currentType(WindowResize.lessPab)
				? content.imageSp
					? content.imageSp
					: content.image
				: content.image;

			this.ratio = imgSrc ? imgSrc.sizes.aspectRatio : 1;
			if (!inner) {
				content.widthPc = getElementWidth(content, "pc");
				content.widthSp = getElementWidth(content, "sp");
			}
			if (!content.image) {
				return "";
			} else {
				return (
					<div css={css}>
						<LibsAtoms.ImageElement
							className={`story-item ${num === 0 ? classNameStr : ""}`}
							styles={content}
						/>
					</div>
				);
			}
		};
		const getElementLayoutCard = (content, css, inner) => {
			const cardType = {
				layout: layoutTypeFunc ? layoutTypeFunc(content.layoutRef) : null,
			};

			if (cardType && cardType.layout) {
				return <cardType.layout css={css} info={content} styles={content} />;
			} else {
				return <></>;
			}
		};
		const getElementEmbed = (content, css, inner) => {
			return (
				<LibsAtoms.EmbedElement
					css={css}
					styles={content}
				></LibsAtoms.EmbedElement>
			);
		};
		const getElementSwipe = (content, css, inner) => {
			return (
				<LibsAtoms.SwipeElement
					css={css}
					styles={content}
					getElementImage={getElementImage}
				></LibsAtoms.SwipeElement>
			);
		};
		const getElementText = (content, css, inner) => {
			const elementType = Common.Func.getTextType(content.type);
			return (
				<elementType.element css={css} styles={content}>
					{content.text}
				</elementType.element>
			);
		};
		const getElementLink = (content, css, inner) => {
			return (
				<LibsAtoms.LinkElement
					css={css}
					className={content.class}
					styles={content}
				>
					{content.label}
				</LibsAtoms.LinkElement>
			);
		};
		const getBlockElement = (content, isInner) => {
			const contCss = isInner ? "" : bodyItemCss;
			const childMargin =
				content.childMargin !== null ? content.childMargin : undefined;
			const childMarginSp = content.childMarginSp
				? content.childMarginSp
				: undefined;

			const bodyContent = content.body.map((bodyItem) => {
				if (!bodyItem.internal) {
					console.log("bodyItem -- ", bodyItem);
					return null;
				}
				if (bodyItem.internal.type === "ContentfulElementImage") {
					return getElementImage(
						bodyItem,
						BlockItem(childMargin, childMarginSp),
						true
					);
				}
				if (bodyItem.internal.type === "ContentfulElementText") {
					return getElementText(
						bodyItem,
						BlockItem(childMargin, childMarginSp)
					);
				} else if (bodyItem.internal.type === "ContentfulElementTextField") {
					return (
						<LibsAtoms.RichText
							css={BlockItem(childMargin, childMarginSp)}
							styles={bodyItem}
							className={`${bodyItem.class ? bodyItem.class : ""} rt-cont`}
						>
							{bodyItem.field}
						</LibsAtoms.RichText>
					);
				} else if (bodyItem.internal.type === "ContentfulElementLink") {
					return getElementLink(
						bodyItem,
						BlockItem(childMargin, childMarginSp)
					);
				} else if (bodyItem.internal.type === "ContentfulElementMap") {
					return getMapElement(
						bodyItem,
						BlockItem(childMargin, childMarginSp),
						true
					);
				} else if (bodyItem.internal.type === "ContentfulElementEmbed") {
					return getElementEmbed(
						bodyItem,
						BlockItem(childMargin, childMarginSp)
					);
				} else if (bodyItem.internal.type === "ContentfulElementFlexColumn") {
					console.log("bodyItem -- 1", bodyItem);
					return getFlexColumnElement(
						bodyItem,
						BlockItem(childMargin, childMarginSp),
						content
					);
				} else if (bodyItem.internal.type === "ContentfulElementReference") {
					const elementType = elementTypeFunc
						? elementTypeFunc(bodyItem.name)
						: null;
					if (elementType) {
						return (
							<elementType.element
								css={BlockItem(childMargin, childMarginSp)}
								styles={bodyItem}
							/>
						);
					} else {
						return false;
					}
				} else if (bodyItem.internal.type === "ContentfulElementBlock") {
					return getBlockElement(bodyItem, true);
				} else if (bodyItem.internal.type === "ContentfulElementLayoutCard") {
					return getElementLayoutCard(
						bodyItem,
						BlockItem(childMargin, childMarginSp)
					);
				} else if (bodyItem.internal.type === "ContentfulElementSwipe") {
					return getElementSwipe(
						bodyItem,
						BlockItem(childMargin, childMarginSp),
						true
					);
				}
			});

			return (
				<LibsAtoms.BlockElement
					styles={content}
					css={contCss}
					className={
						content.class
							? content.class
							: content.stylesJson && content.stylesJson.class
							? content.stylesJson.class
							: ""
					}
				>
					{bodyContent}
				</LibsAtoms.BlockElement>
			);
		};
		const getMapElement = (content, css, isInner) => {
			return (
				<LibsAtoms.BlockElement css={css} styles={content}>
					<MapWithAMarker
						lat={content.locationVisualizer.lat}
						lon={content.locationVisualizer.lon}
						googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmczi6YU4TZ7V9oOL8TFEybQ3uzutnea8&v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `400px` }} />}
						mapElement={<div style={{ height: `100%` }} />}
					/>
				</LibsAtoms.BlockElement>
			);
		};
		const getFlexColumnElement = (content, css, block) => {
			const length = content.columnItem.length;
			const columnMargin = 6;
			const columnMarginSp = 4;
			const elementWithPc = getElementWidth(content, "pc", block);
			const elementWithSp = getElementWidth(content, "sp", block);

			if (!block) {
				content.widthPc = elementWithPc;
				content.widthSp = elementWithSp;
			}
			const setSizeProp = (stylesObj) => {
				if (!stylesObj.widthPc && !stylesObj.width_pc) {
					/*stylesObj.widthPc =
						(elementWithPc - columnMargin * (length - 1)) / length;*/
				}
				if (!stylesObj.widthSp && !stylesObj.width_pc) {
					/*stylesObj.widthSp =
						(elementWithSp - columnMarginSp * (length - 1)) / length;*/
				}
			};
			const columnItem = content.columnItem.map((citerm) => {
				if (citerm.internal.type === "ContentfulElementImage" && citerm.image) {
					setSizeProp(citerm);
					return (
						<LibsAtoms.ImageElement
							src={citerm.image.fluid}
							styles={citerm}
							caption={citerm.caption}
						/>
					);
				}
				if (citerm.internal.type === "ContentfulElementTextField") {
					setSizeProp(citerm);

					return (
						<LibsAtoms.RichText
							className={`${citerm.class ? citerm.class : ""} rt-cont`}
							styles={citerm}
						>
							{citerm.field}
						</LibsAtoms.RichText>
					);
				} else if (citerm.internal.type === "ContentfulElementBlock") {
					return getBlockElement(citerm, true);
				} else if (citerm.internal.type === "ContentfulElementFlexColumn") {
					return getFlexColumnElement(citerm, true);
				} else if (citerm.internal.type === "ContentfulElementMap") {
					return getMapElement(citerm, "", true);
				} else if (citerm.internal.type === "ContentfulElementEmbed") {
					return getElementEmbed(citerm, "", true);
				} else if (citerm.internal.type === "ContentfulElementSwipe") {
					return getElementSwipe(citerm, "", true);
				} else if (citerm.internal.type === "ContentfulElementLink") {
					return getElementLink(citerm, "", true);
				} else if (citerm.internal.type === "ContentfulElementLayoutCard") {
					setSizeProp(citerm);

					return getElementLayoutCard(citerm, "", true);
				} else {
					return <></>;
				}
			});

			return (
				<LibsAtoms.FlexElement
					css={css}
					className={content.class}
					styles={content}
				>
					{columnItem}
				</LibsAtoms.FlexElement>
			);
		};
		const MapWithAMarker = withScriptjs(
			withGoogleMap((props) => {
				return (
					<GoogleMap
						defaultZoom={15}
						defaultCenter={{ lat: props.lat, lng: props.lon }}
					>
						<Marker position={{ lat: props.lat, lng: props.lon }} />
					</GoogleMap>
				);
			})
		);

		return (
			<div className={"body-container"}>
				{body &&
					body.map((content, i) => {
						if (content.internal.type === "ContentfulElementImage") {
							return getElementImage(content, bodyItemCss);
						}
						if (content.internal.type === "ContentfulElementTextField") {
							return (
								<div css={bodyItemCss}>
									<LibsAtoms.RichText
										className={`${content.class ? content.class : ""} rt-cont`}
										styles={content}
									>
										{content.field}
									</LibsAtoms.RichText>
								</div>
							);
						} else if (content.internal.type === "ContentfulElementReference") {
							const elementType = elementTypeFunc
								? elementTypeFunc(content.name)
								: null;
							if (elementType) {
								return <elementType.element styles={content} />;
							} else {
								return null;
							}
						} else if (
							content.internal.type === "ContentfulElementLayoutCard"
						) {
							return getElementLayoutCard(content, bodyItemCss);
						} else if (
							content.internal.type === "ContentfulElementFlexColumn"
						) {
							return getFlexColumnElement(content, bodyItemCss);
						} else if (content.internal.type === "ContentfulElementBlock") {
							return getBlockElement(content);
						} else if (content.internal.type === "ContentfulElementMap") {
							return getMapElement(content, bodyItemCss);
						}
					})}
			</div>
		);
	}
}

export default BodyElement;
