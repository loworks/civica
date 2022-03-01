import React, { forwardRef } from "react";
import { css } from "@emotion/react";
import * as Style from "../styles";
import * as Common from "../common";
export function elementHoc(WrappedComponent) {
	class ElementHoc extends React.PureComponent {
		constructor(props) {
			super(props);
		}
		getStyle(cssProps, instance, addCss) {
			const styles = instance.styles;

			if (styles && styles.type && styles.type === "H1") {
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
				positionPc = null,
				positionSp = null,
				spacePc = null,
				spaceSp = null,
				spacingPc = null,
				spacingSp = null,
				display = "inline",
				position = "",
				hPositionSp = null,
				hPositionPc = null,
				vPositionSp = null,
				vPositionPc = null,
			} = cssProps;

			const widthPcObj =
				widthPc || width_pc
					? widthPc
						? `width: ${widthPc !== "auto" ? widthPc + "vw" : widthPc};`
						: `width: ${width_pc !== "auto" ? width_pc + "vw" : width_pc};`
					: null;
			const widthSpObj =
				widthSp || width_sp
					? widthSp
						? `width: ${widthSp !== "auto" ? widthSp + "vw" : widthSp};`
						: `width: ${width_sp !== "auto" ? width_sp + "vw" : width_sp};`
					: null;

			const cpropsPositionPc = cssProps.positionPc;
			const cpropsPositionSp = cssProps.positionSp;
			const cssPropsStylesPositionPc = cssProps.stylesJson
				? cssProps.stylesJson.positionPc
				: null;
			const cssPropsStylesPositionSp = cssProps.stylesJson
				? cssProps.stylesJson.positionSp
				: null;

			const spacingPcObj = cssPropsStylesPositionPc
				? Common.Func.getSpacingCss(
						cssPropsStylesPositionPc.space,
						cssPropsStylesPositionPc.position === "absolute" ||
							cssPropsStylesPositionPc.position === "relative"
							? true
							: false,
						"pc",
						cssPropsStylesPositionPc.spacingType
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

			const spacingSpObj = cssPropsStylesPositionSp
				? Common.Func.getSpacingCss(
						cssPropsStylesPositionSp.space,
						cssPropsStylesPositionSp.position === "absolute" ||
							cssPropsStylesPositionSp.position === "relative"
							? true
							: false,
						"sp",
						cssPropsStylesPositionSp.spacingType
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

			const styleCss = (props) => css`
				${position === "absolute" ? "z-index:9999" : ""};
				display: ${display};
				${addCss ? addCss() : ""};
				${Style.Mq.moreTab} {
					position: ${cssPropsStylesPositionPc &&
					cssPropsStylesPositionPc.position
						? cssPropsStylesPositionPc.position
						: cpropsPositionPc && cpropsPositionPc.position
						? cpropsPositionPc.position
						: position};

					${widthPcObj};
					${positionPcObj}
				}
				${spacingPcObj.top};
				${spacingPcObj.bottom};
				${spacingPcObj.left};
				${spacingPcObj.right};
				${Style.Mq.lessPab} {
					position: ${cssPropsStylesPositionSp &&
					cssPropsStylesPositionSp.position
						? cssPropsStylesPositionSp.position
						: cpropsPositionSp && cpropsPositionSp.position
						? cpropsPositionSp.position
						: position};

					${widthSpObj};
					${positionSpObj}
				}
				${spacingSpObj.top};
				${spacingSpObj.bottom};
				${spacingSpObj.left};
				${spacingSpObj.right};
			`;

			return styleCss;
		}
		render() {
			let { children, ref, styles, ...rest } = this.props;
			this.styles = styles;
			this.children = children;
			this.className = this.props.className;
			this.rest = rest;

			return (
				<WrappedComponent
					data={{ func: this.getStyle, instance: this }}
					{...this.rest}
				>
					{this.children}
				</WrappedComponent>
			);
		}
	}
	return forwardRef((props, ref) => {
		return <ElementHoc {...props} forwardedRef={ref} />;
	});
}
