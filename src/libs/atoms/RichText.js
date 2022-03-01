import React, { PureComponent } from "react";
import * as Common from "../common";
import * as LibsAtoms from "./";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { css } from "@emotion/react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import * as Styles from "../styles";
import { textHoc } from "./TextHoc";
import Img from "gatsby-image";
export class RichText extends PureComponent {
	render() {
		let { forwardedref, children, data, ...rest } = this.props;
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

		const embededCss = (props) => {
			const defaultPositionPc = "40 0 40 0";
			const defaultPositionSp = "30 0 30 0";
			const spacingPcObj = Common.Func.getSpacingCss(
				props.stylesJson && props.stylesJson.positionPc
					? props.stylesJson.positionPc.space
					: defaultPositionPc,
				false,
				"pc"
			);
			const spacingSpObj = Common.Func.getSpacingCss(
				props.stylesJson && props.stylesJson.positionSp
					? props.stylesJson.positionSp.space
					: defaultPositionSp,
				false,
				"sp"
			);
			return css`
				${Styles.Mq.moreTab} {
					${spacingPcObj.top};
					${spacingPcObj.bottom};
					${spacingPcObj.left};
					${spacingPcObj.right};
				}
				${Styles.Mq.lessPab} {
					${spacingSpObj.top};
					${spacingSpObj.bottom};
					${spacingSpObj.left};
					${spacingSpObj.right};
				}
			`;
		};

		const getImageElement = (content, css, block) => {
			return (
				<LibsAtoms.ImageElement
					src={content.image.fluid}
					styles={content}
					caption={content.caption}
				/>
			);
		};
		const getButtonElement = (content, css, block) => {
			const fontObj = content.stylesJson
				? {
						fontPc: content.stylesJson.fontPc,
						fontSp: content.stylesJson.fontSp,
				  }
				: null;

			content.stylesJson = content.stylesJson
				? {
						positionPc: Object.assign(
							content.stylesJson.positionPc
								? content.stylesJson.positionPc
								: {},
							{
								spacingType: "margin",
							}
						),
						positionSp: Object.assign(
							content.stylesJson.positionSp
								? content.stylesJson.positionSp
								: {},
							{
								spacingType: "margin",
							}
						),
				  }
				: null;

			return (
				<LibsAtoms.ButtonElement
					styles={content}
					className={`${
						content.class ? content.class : ""
					} rt-content rt-button`}
					css={css}
					spanStyles={fontObj}
				>
					{content.name}
				</LibsAtoms.ButtonElement>
			);
		};
		const getLinkElement = (content, css, block) => {
			return (
				<LibsAtoms.LinkElement
					css={css ? css : ""}
					icon={content.icon}
					className={`rt-content rt-link ${content.class}`}
					styles={content}
				>
					{content.label}
				</LibsAtoms.LinkElement>
			);
		};
		const getRtTextField = (content, css, block) => {
			return (
				<LibsAtoms.RichText
					styles={content}
					className={`${content.class ? content.class : ""} rt-cont`}
				>
					{content.field}
				</LibsAtoms.RichText>
			);
		};
		const getFlexColumnElement = (content, css, block) => {
			const elementWithPc = getElementWidth(content, "pc", block);
			const elementWithSp = getElementWidth(content, "sp", block);
			if (!block) {
				content.widthPc = elementWithPc;
				content.widthSp = elementWithSp;
			}

			const columnItem = content.columnItem.map((citerm) => {
				if (citerm.internal.type === "ContentfulElementImage" && citerm.image) {
					return (
						<LibsAtoms.ImageElement
							src={citerm.image.fluid}
							styles={citerm}
							caption={citerm.caption}
						/>
					);
				} else if (citerm.internal.type === "ContentfulRtTextField") {
					return getRtTextField(citerm);
				} else if (citerm.internal.type === "ContentfulElementButton") {
					return getButtonElement(citerm);
				}
			});

			return (
				<LibsAtoms.FlexElement
					css={embededCss(content)}
					className={content.class}
					styles={content}
				>
					{columnItem}
				</LibsAtoms.FlexElement>
			);
		};
		const getElementEmbed = (content, css, inner) => {
			return (
				<LibsAtoms.EmbedElement
					css={embededCss(content)}
					styles={content}
				></LibsAtoms.EmbedElement>
			);
		};
		const Bold = ({ children }) => (
			<LibsAtoms.Span
				className="rt-content"
				styles={{
					fontPc: { bold: true },
					fontSp: { bold: true },
					display: "inline-block",
				}}
			>
				{children}
			</LibsAtoms.Span>
		);
		let pcFontSize = data.instance.styles
			? data.instance.styles.pcFontSize
			: null;
		let spFontSize = data.instance.styles
			? data.instance.styles.spFontSize
			: null;
		pcFontSize = pcFontSize ? pcFontSize : null;
		spFontSize = spFontSize ? spFontSize : null;
		const style = {
			fontPc: {
				fontFace: "sansserif",
			},
			fontSp: {
				fontFace: "sansserif",
			},
		};

		let fontPc = Object.assign(
			style.fontPc,
			data.instance.styles ? data.instance.styles.fontPc : null
		);
		let fontSp = Object.assign(
			style.fontSp,
			data.instance.styles ? data.instance.styles.fontSp : null
		);

		if (data.instance.styles && data.instance.styles.stylesJson) {
			fontPc = Object.assign(fontPc, data.instance.styles.stylesJson.fontPc);
			fontSp = Object.assign(fontSp, data.instance.styles.stylesJson.fontSp);
		}

		let headerMarginPc =
			data.instance.styles && data.instance.styles.headerMarginPc !== null
				? data.instance.styles.headerMarginPc
				: null;
		let headerMarginSp =
			data.instance.styles && data.instance.styles.headerMarginSp !== null
				? data.instance.styles.headerMarginSp
				: null;
		let paragraphMarginPc =
			data.instance.styles && data.instance.styles.paragraphMarginPc !== null
				? data.instance.styles.paragraphMarginPc
				: null;
		let paragraphMarginSp =
			data.instance.styles && data.instance.styles.paragraphMarginSp !== null
				? data.instance.styles.paragraphMarginSp
				: null;

		const headerMarginCss = () => {
			return css`
				${Styles.Mq.moreTab} {
					${headerMarginPc !== null
						? `margin-top: ${headerMarginPc}px !important;`
						: ``}
					&:first-child {
						margin-top: 0px !important;
					}
				}
				${Styles.Mq.lessPab} {
					${headerMarginPc !== null
						? `margin-top: ${headerMarginSp}px !important;`
						: ``}
				}
			`;
		};
		const paragraphMarginCss = () => {
			return css`
				${Styles.Mq.moreTab} {
					${paragraphMarginPc !== null
						? `margin-top: ${paragraphMarginPc}px !important;`
						: ``}
				}
				${Styles.Mq.lessPab} {
					${paragraphMarginPc !== null
						? `margin-top: ${paragraphMarginSp}px !important;`
						: ``}
				}
			`;
		};
		const Text = ({ children }) => {
			const style = {
				fontPc: {
					fontFace: "sansserif",
					fontSize: 18,
					lineHeight: 26,
				},
				fontSp: {
					fontFace: "sansserif",
					fontSize: 18,
					lineHeight: 26,
				},
			};
			if (data.instance.styles) {
				fontPc = Object.assign(style.fontPc, data.instance.styles.fontPc);
				fontSp = Object.assign(style.fontSp, data.instance.styles.fontSp);
			}

			if (data.instance.styles && data.instance.styles.stylesJson) {
				fontPc = Object.assign(fontPc, data.instance.styles.stylesJson.fontPc);
				fontSp = Object.assign(fontSp, data.instance.styles.stylesJson.fontSp);
			}

			if (
				(children.length === 1 && children[0][1] === "") ||
				(children[0] &&
					children[0].props &&
					children[0].props.children &&
					children[0].props.children[1] === "")
			) {
				return "";
			} else {
				return (
					<LibsAtoms.P
						css={paragraphMarginCss}
						className="rt-content rt-textfield default-text"
						styles={{ fontPc, fontSp }}
					>
						{children}
					</LibsAtoms.P>
				);
			}
		};
		const website_url = Common.Config.websiteUrl;
		const localhost = Common.Config.localUrl;
		const stylesObj = {
			pcLineHeight: pcFontSize * 1.7,
			spLineHeight: spFontSize * 1.7,
			fontFace: "serif",
			display: "block",
		};

		if (pcFontSize) stylesObj.pcFontSize = pcFontSize;
		const options = {
			renderMark: {
				[MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
			},
			renderText: (text) => {
				return text.split("\n").flatMap((text, i) => {
					return [i > 0 && <br />, text];
				});
			},
			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, next) => {
					return next(node.content).replace("\n", "<br/>");
				},
			},

			renderNode: {
				[BLOCKS.PARAGRAPH]: (node, children) => {
					return <Text>{children}</Text>;
				},
				[BLOCKS.EMBEDDED_ASSET]: (node) => {
					return (
						<div className="rt-content img-cont rt-asset">
							<Img fluid={node.data.target.fluid} />
						</div>
					);
				},
				[BLOCKS.EMBEDDED_ENTRY]: (node) => {
					if (!node.data.target || !node.data.target.internal) {
						return null;
					}
					if (node.data.target.internal.type === "ContentfulElementButton") {
						return getButtonElement(node.data.target);
					} else if (
						node.data.target.internal.type === "ContentfulElementImage"
					) {
						return (
							<LibsAtoms.ImageElement
								className={"rt-embeded"}
								css={embededCss(node.data.target)}
								styles={node.data.target}
							/>
						);
					} else if (
						node.data.target.internal.type === "ContentfulElementLink"
					) {
						return getLinkElement(node.data.target);
					} else if (
						node.data.target.internal.type === "ContentfulElementEmbed"
					) {
						return getElementEmbed(node.data.target);
					} else if (
						node.data.target.internal.type === "ContentfulRtFlexColumn"
					) {
						return getFlexColumnElement(node.data.target);
					} else if (
						node.data.target.internal.type === "ContentfulRtTextField"
					) {
						return getRtTextField(node.data.target);
					}
				},
				[BLOCKS.HEADING_1]: (node, children) => {
					return (
						<LibsAtoms.H1
							className="rt-content rt-header"
							css={headerMarginCss}
							styles={Object.assign({ fontPc, fontSp })}
						>
							{children}
						</LibsAtoms.H1>
					);
				},
				[BLOCKS.HEADING_2]: (node, children) => {
					return (
						<LibsAtoms.H2
							css={headerMarginCss}
							className="rt-content rt-header"
						>
							{children}
						</LibsAtoms.H2>
					);
				},
				[BLOCKS.HEADING_3]: (node, children) => {
					return (
						<LibsAtoms.H3
							css={headerMarginCss}
							className="rt-content rt-header"
						>
							{children}
						</LibsAtoms.H3>
					);
				},
				[BLOCKS.HEADING_4]: (node, children) => {
					return (
						<LibsAtoms.H4
							css={headerMarginCss}
							className="rt-content rt-header"
							styles={{
								fontPc: {
									fontSize: 18,
									lineHeight: 18,
									fontFace: "sansserif",
									bold: true,
								},

								fontSp: {
									fontSize: 18,
									lineHeight: 18,
									fontFace: "sansserif",
									bold: true,
								},
							}}
						>
							{children}
						</LibsAtoms.H4>
					);
				},
				[BLOCKS.HEADING_5]: (node, children) => {
					return (
						<LibsAtoms.P className="rt-content medium-text">
							{children}
						</LibsAtoms.P>
					);
				},
				[BLOCKS.HEADING_6]: (node, children) => {
					return (
						<LibsAtoms.P
							css={paragraphMarginCss}
							className="rt-content small-text"
						>
							{children}
						</LibsAtoms.P>
					);
				},
				[INLINES.EMBEDDED_ENTRY]: (node) => {
					//console.log("node --- 1", node);
				},
				[INLINES.ENTRY_HYPERLINK]: (node) => {
					//console.log("node --- 2", node);
				},
				[INLINES.ASSET_HYPERLINK]: (node) => {
					//console.log("node --- 3", node);
				},
				[INLINES.EMBEDDED_ENTRY]: (node) => {
					//console.log("node --- 4", node);
					const inlineCss = () => {
						return css`
							display: inline-block !important;
						`;
					};
					if (!node.data.target.internal) {
						return null;
					}
					if (node.data.target.internal.type === "ContentfulElementLink") {
						return getLinkElement(node.data.target, inlineCss);
					} else if (
						node.data.target.internal.type === "ContentfulElementButton"
					) {
						return getButtonElement(node.data.target, inlineCss);
					} else if (
						node.data.target.internal.type === "ContentfulElementImage"
					) {
						return getImageElement(node.data.target, inlineCss);
					}
				},
				[INLINES.HYPERLINK]: (node) => {
					if (
						node.data.uri.startsWith(website_url) ||
						node.data.uri.startsWith(localhost)
					) {
						return (
							<a
								href={node.data.uri}
								className={"textAnchor"}
								target={`_self`}
								rel={`${
									node.data.uri.startsWith(website_url)
										? ""
										: "noopener noreferrer"
								}`}
							>
								{node.content[0].value}
							</a>
						);
					} else {
						return (
							<a
								href={node.data.uri}
								className={"textAnchor"}
								target={`${
									node.data.uri.startsWith(website_url) ? "_self" : "_blank"
								}`}
								rel={`${
									node.data.uri.startsWith(website_url)
										? ""
										: "noopener noreferrer"
								}`}
							>
								{node.content[0].value}
							</a>
						);
					}
				},
			},
		};

		return (
			<div
				ref={forwardedref}
				css={data.func(stylesObj, data.instance)}
				{...rest}
			>
				<div className="rt-inner">{renderRichText(children, options)}</div>
			</div>
		);
	}
}

export default textHoc(RichText);
