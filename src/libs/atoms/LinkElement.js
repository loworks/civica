import React, { PureComponent } from "react";

import { css } from "@emotion/react";
import * as Transition from "../Transition";
import * as Styles from "../styles";
import { textHoc } from "./TextHoc";
import * as LibsAtoms from "./";

export class LinkElement extends PureComponent {
	render() {
		let {
			className,
			forwardedref,
			children,
			onClick,
			data,
			...rest
		} = this.props;
		const stylesObj = { display: "block" };

		let link = data.instance.props.styles.url
			? data.instance.props.styles.url
			: "javascript:void(0);";
		const lang = data.instance.props.styles.node_locale;
		const website_url = "https://";
		const localhost = "http://";
		/* if (link.startsWith(website_url) || link.startsWith(localhost)) {
      link = link.slice(link.indexOf(website_url) + website_url.length)
      link = link === "" ? "/" : link
    }*/
		const styles = data.instance.styles;
		const fontPc = styles.fontPc;
		const fontSp = styles.fontSp;
		const classStr =
			styles.stylesJson && styles.stylesJson.class
				? styles.stylesJson.class
				: styles.class;
		const spanStyles = { fontPc: fontPc, fontSp: fontSp };

		const icon = styles.icon;
		const iconCss = () => css`
			position: relative;
			z-index: 100;

			${Styles.Mq.moreTab} {
				height: ${fontPc.fontSize}px;
			}
			${Styles.Mq.lessPab} {
				height: ${fontSp.fontSize}px;
			}
		`;
		const display = "block";
		const getIconElement = (props) => {
			if (icon) {
				return <LibsAtoms.Icon css={iconCss} type={icon} />;
			} else {
				return "";
			}
		};
		if (icon) {
			return (
				<div
					ref={forwardedref}
					css={data.func(stylesObj, data.instance)}
					className={`${className ? className : ""} link-icon-element`}
					{...rest}
				>
					{link.startsWith(website_url) || link.startsWith(localhost) ? (
						<a href={link} target="_new">
							{getIconElement()}
							<LibsAtoms.Span styles={spanStyles}>{children}</LibsAtoms.Span>
						</a>
					) : (
						<LibsAtoms.TriggerLink
							transition={Transition.TrigerPageTransition.TrigerPageTransition}
							to={`/${lang}/${link}/`}
							ref={forwardedref}
							className={`${className ? className : ""}`}
							{...rest}
						>
							{getIconElement()}
							<LibsAtoms.Span styles={spanStyles}>{children}</LibsAtoms.Span>
						</LibsAtoms.TriggerLink>
					)}
				</div>
			);
		} else {
			return (
				<>
					{link.startsWith(website_url) ||
					link.startsWith(localhost) ||
					onClick ? (
						<a
							href={link}
							target="_new"
							ref={forwardedref}
							css={data.func(stylesObj, data.instance)}
							className={`${className ? className : ""}`}
							onClick={(event) => {
								if (onClick) {
									const returnBool = onClick(event);
									if (returnBool === false) return false;
								}
								return false;
							}}
							{...rest}
						>
							<LibsAtoms.Span styles={spanStyles}>{children}</LibsAtoms.Span>
						</a>
					) : (
						<LibsAtoms.TriggerLink
							transition={Transition.TrigerPageTransition.TrigerPageTransition}
							to={`/${lang}/${link}/`}
							ref={forwardedref}
							css={data.func(stylesObj, data.instance)}
							className={`${classStr ? classStr : ""}`}
							{...rest}
						>
							<LibsAtoms.Span styles={spanStyles}>{children}</LibsAtoms.Span>
						</LibsAtoms.TriggerLink>
					)}
				</>
			);
		}
	}
}

export default textHoc(LinkElement);
