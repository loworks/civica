import React, { forwardRef } from "react";
import { css } from "@emotion/react";

import * as Style from "../styles";
import * as Common from "../common";
export function textHoc(WrappedComponent) {
	class TextHoc extends React.PureComponent {
		getStyle(cssProps, instance) {
			const styles = instance.styles;
			if (styles) {
				for (let key in styles) {
					if (styles[key] === null) {
						delete styles[key];
					}
				}
			}

			cssProps = { ...cssProps, ...styles };

			const {
				widthPc = null,
				widthSp = null,
				width_pc = null,
				width_sp = null,
				pcFontSize = null,
				spFontSize = null,
				pcLineHeight = null,
				spLineHeight = null,
				fontFace = "sansserif",
				bold = false,
				italic = false,
				textIndent = 0,
				text_align = null,
				textAlign = null,
				letterSpacing = 0,
				position = "",
				hPositionSp = null,
				hPositionPc = null,
				vPositionSp = null,
				vPositionPc = null,
				positionPc = null,
				positionSp = null,
				spacePc = null,
				spaceSp = null,
				spacingPc = null,
				spacingSp = null,
				display = "inline",
				color = "inherit",
				whiteSpace = "normal",
			} = cssProps;

			const widthPcObj =
				widthPc || width_pc
					? widthPc
						? `width: ${widthPc}vw;`
						: `width: ${width_pc}vw;`
					: null;
			const widthSpObj =
				widthSp || width_sp
					? widthSp
						? `width: ${widthSp}vw;`
						: `width: ${width_sp}vw;`
					: null;
			const cpropsPositionPc = cssProps.positionPc;
			const cpropsPositionSp = cssProps.positionSp;
			const cpropsFontPc = cssProps.fontPc;
			const cpropsFontSp = cssProps.fontSp;
			const jsonPositionPc = cssProps.stylesJson
				? cssProps.stylesJson.positionPc
				: null;

			const jsonPositionSp = cssProps.stylesJson
				? cssProps.stylesJson.positionSp
				: null;
			const jsonFontPc = cssProps.stylesJson
				? cssProps.stylesJson.fontPc
				: null;
			const jsonFontSp = cssProps.stylesJson
				? cssProps.stylesJson.fontSp
				: null;

			const spacingPcObj = jsonPositionPc
				? Common.Func.getSpacingCss(
						jsonPositionPc.space,
						jsonPositionPc.position === "absolute" ||
							jsonPositionPc.position === "relative"
							? true
							: false
				  )
				: cpropsPositionPc
				? Common.Func.getSpacingCss(
						cpropsPositionPc.space,
						cpropsPositionPc.position === "absolute" ||
							cpropsPositionPc.position === "relative"
							? true
							: false
				  )
				: Common.Func.getSpacingCss(
						spacePc ? spacePc : spacingPc,
						position === "absolute" || position === "relative" ? true : false
				  );
			const spacingSpObj = jsonPositionSp
				? Common.Func.getSpacingCss(
						jsonPositionSp.space,
						jsonPositionSp.position === "absolute" ||
							jsonPositionSp.position === "relative"
							? true
							: false,
						"sp",
						"",
						true
				  )
				: cpropsPositionSp
				? Common.Func.getSpacingCss(
						cpropsPositionSp.space,
						cpropsPositionSp.position === "absolute" ||
							cpropsPositionSp.position === "relative"
							? true
							: false,
						"sp"
				  )
				: Common.Func.getSpacingCss(
						spaceSp ? spaceSp : spacingSp,
						position === "absolute" || position === "relative" ? true : false,
						"sp"
				  );

			const positionPcObj = cpropsPositionPc
				? Common.Func.getPositionCss(
						cpropsPositionPc.hPosition,
						cpropsPositionPc.position === "absolute" ||
							cpropsPositionPc.position === "relative"
							? true
							: false,
						cpropsPositionPc.vPosition
				  )
				: Common.Func.getPositionCss(
						hPositionPc ? hPositionPc : positionPc,
						position === "absolute" || position === "relative" ? true : false,
						vPositionPc
				  );
			const positionSpObj = cpropsPositionSp
				? Common.Func.getPositionCss(
						cpropsPositionSp.hPosition,
						cpropsPositionSp.position === "absolute" ||
							cpropsPositionSp.position === "relative"
							? true
							: false,
						cpropsPositionSp.vPosition
				  )
				: Common.Func.getPositionCss(
						hPositionSp ? hPositionSp : positionSp,
						position === "absolute" || position === "relative" ? true : false,
						vPositionSp
				  );

			const fontFamily =
				jsonFontPc && jsonFontPc.fontFace
					? jsonFontPc.fontFace
					: cpropsFontPc
					? Common.Func.isObject(cpropsFontPc.fontFace)
						? cpropsFontPc.fontFace.slug
						: cpropsFontPc.fontFace
					: Common.Func.isObject(fontFace)
					? fontFace.slug
					: fontFace;
			const textAlignPcObj =
				jsonFontPc && jsonFontPc.textAlign
					? `text-align : ${jsonFontPc.textAlign};`
					: cpropsFontPc && cpropsFontPc.textAlign
					? `text-align : ${cpropsFontPc.textAlign};`
					: null;

			const textAlignSpObj =
				jsonFontSp && jsonFontSp.textAlign
					? `text-align : ${jsonFontSp.textAlign};`
					: cpropsFontSp && cpropsFontSp.textAlign
					? `text-align : ${cpropsFontSp.textAlign};`
					: null;

			const setVwFunc = (key, name, pastValue, type, isMax) => {
				const styleObj = {
					pc: [jsonFontPc, cpropsFontPc, Common.Func.setPcVwValues],
					sp: [jsonFontSp, cpropsFontSp, Common.Func.setSpVwValues],
				};

				return css`
					${styleObj[type][0] && styleObj[type][0][name]
						? styleObj[type][2](key, styleObj[type][0][name], isMax)
						: styleObj[type][1] && styleObj[type][1][name]
						? styleObj[type][2](key, styleObj[type][1][name], isMax)
						: pastValue
						? styleObj[type][2](key, pastValue, isMax)
						: ""};
				`;
			};

			const styleCss = (props) => css`
        ${
					fontFamily && fontFamily !== "serif"
						? Style.Font.SanSerif()
						: Style.Font.Serif()
				}



		${setVwFunc("font-size", "fontSize", pcFontSize, "pc", true)};
        ${setVwFunc("font-size", "fontSize", spFontSize, "sp")};
        ${setVwFunc("line-height", "lineHeight", pcLineHeight, "pc", true)};
        ${setVwFunc("line-height", "lineHeight", spLineHeight, "sp", true)};

        display: ${display};

        text-indent: ${textIndent}px;

        ${Style.Mq.moreTab} {
          position: ${
						jsonPositionPc && jsonPositionPc.position
							? jsonPositionPc.position
							: cpropsPositionPc && cpropsPositionPc.position
							? cpropsPositionPc.position
							: position
					};


          color: ${
						jsonFontPc && jsonFontPc.color
							? jsonFontPc.color
							: cpropsFontPc && cpropsFontPc.color
							? cpropsFontPc.color
							: color
					};
          letter-spacing: ${
						jsonFontPc && jsonFontPc.letterSpacing
							? jsonFontPc.letterSpacing + "px"
							: cpropsFontPc && cpropsFontPc.letterSpacing
							? cpropsFontPc.letterSpacing + "px"
							: letterSpacing + "px"
					};
          ${
						jsonFontPc
							? jsonFontPc.italic === true
								? Style.Font.Italic()
								: ""
							: cpropsFontPc
							? cpropsFontPc.italic === true
								? Style.Font.Italic()
								: ""
							: italic === true
							? Style.Font.Italic()
							: ""
					}
            ${
							jsonFontPc
								? jsonFontPc.bold === true
									? Style.Font.Bold()
									: ""
								: cpropsFontPc
								? cpropsFontPc.bold === true
									? Style.Font.Bold()
									: ""
								: bold === true
								? Style.Font.Bold()
								: ""
						}
${textAlignPcObj};
          ${widthPcObj};
          ${positionPcObj}
          ${spacingPcObj.top};
          ${spacingPcObj.bottom};
          ${spacingPcObj.left};
          ${spacingPcObj.right};
        }
        ${Style.Mq.lessPab} {
          position: ${
						jsonPositionSp && jsonPositionSp.position
							? jsonPositionSp.position
							: cpropsPositionSp && cpropsPositionSp.position
							? cpropsPositionSp.position
							: position
					};

          text-align: ${
						jsonFontSp && jsonFontSp.textAlign
							? jsonFontSp.textAlign
							: cpropsFontSp && cpropsFontSp.textAlign
							? cpropsFontSp.textAlign
							: text_align
							? text_align
							: Common.Func.isObject(textAlign)
							? textAlign.slug
							: textAlign
					};
          color: ${
						jsonFontSp && jsonFontSp.color
							? jsonFontSp.color
							: cpropsFontSp && cpropsFontSp.color
							? cpropsFontSp.color
							: color
					};
          letter-spacing: ${
						jsonFontSp && jsonFontSp.letterSpacing
							? jsonFontSp.letterSpacing + "px"
							: cpropsFontSp && cpropsFontSp.letterSpacing
							? cpropsFontSp.letterSpacing + "px"
							: letterSpacing + "px"
					};
          ${
						jsonFontSp
							? jsonFontSp.italic === true
								? Style.Font.Italic()
								: ""
							: cpropsFontSp
							? cpropsFontSp.italic === true
								? Style.Font.Italic()
								: ""
							: italic === true
							? Style.Font.Italic()
							: ""
					}
          ${
						jsonFontSp
							? jsonFontSp.bold === true
								? Style.Font.Bold()
								: ""
							: cpropsFontSp
							? cpropsFontSp.bold === true
								? Style.Font.Bold()
								: ""
							: bold === true
							? Style.Font.Bold()
							: ""
					}
          ${widthSpObj};
          ${positionSpObj}
${textAlignSpObj};
          ${spacingSpObj.top};
          ${spacingSpObj.bottom};
          ${spacingSpObj.left};
          ${spacingSpObj.right};
        }

        white-space: ${
					jsonFontSp && jsonFontSp.whiteSpace
						? jsonFontSp.whiteSpace
						: cpropsFontSp && cpropsFontSp.whiteSpace
						? cpropsFontSp.whiteSpace
						: whiteSpace
				};
      `;
			return styleCss;
		}
		render() {
			let { children, styles, ...rest } = this.props;
			this.styles = styles;
			this.children = children;
			this.className = this.props.className;
			this.rest = rest;
			return (
				<WrappedComponent
					{...this.rest}
					data={{ func: this.getStyle, instance: this }}
				>
					{this.children}
				</WrappedComponent>
			);
		}
	}
	return forwardRef((props, ref) => {
		return <TextHoc {...props} forwardedref={ref} />;
	});
}
