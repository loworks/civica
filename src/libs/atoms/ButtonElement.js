import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";
import * as LibsAtoms from "./";
import { css } from "@emotion/react";
import * as Common from "../common";
import * as Styles from "../styles";
import * as Transition from "../Transition";
export class ButtonElement extends PureComponent {
	render() {
		let {
			className,
			forwardedref,
			children,
			data,
			onClick,
			spanStyles,
			disabled,
			...rest
		} = this.props;

		const stylesObj = { display: "block", text_align: "center" };
		const ancherCss = () => css`
			cursor: ${disabled ? "default" : "pointer"};
			display: inline-block;
		`;
		const buttonCss = () => css`
			background-color: ${disabled ? "#ccc" : "#000"};
			cursor: ${disabled ? "default" : "pointer"};
			border: none;
			outline: none;
			color: #fff;
			width: 100%;
			border-radius: 30px;
			padding: 1.0605rem 4.04202rem;
			position: relative;
			z-index: 0;
			pointer-events: ${disabled ? "none" : "auto"};

			span {
				white-space: nowrap;
			}
		`;
		const spanCss = () => css`
			pointer-events: none;
		`;

		const styles = data.instance.props.styles;

		let link = styles ? styles.link : "#";

		let target = styles ? "_new" : "_self";
		let languages = Common.Config.languages;

		const lang =
			languages.langs.length > 1
				? styles
					? `/${styles.node_locale}`
					: `/Common.Func.getLangKey()`
				: "";
		const website_url = Common.Config.websiteUrl;
		const localhost = Common.Config.localUrl;
		const testUrl = Common.Config.testUrl;
		if (link) {
			if (link.startsWith("mailto")) {
			} else if (
				link.startsWith(website_url) ||
				link.startsWith(localhost) ||
				link.startsWith(testUrl)
			) {
				const url = link.startsWith(website_url)
					? website_url
					: link.startsWith(localhost)
					? localhost
					: testUrl;
				link = link.slice(link.indexOf(url) + url.length);
				link = link === "" ? "/" : link;
				target = "_self";
			} else if (
				styles &&
				!link.startsWith("https://") &&
				!link.startsWith("http://")
			) {
				link = `${lang}${link}`;
				target = "_self";
			}
		}

		if (!link) return <></>;
		return (
			<>
				{link === "#" ||
				(link.startsWith("https://") &&
					link.startsWith("http://") &&
					!link.startsWith(website_url) &&
					!link.startsWith(localhost)) ? (
					<a
						href={link}
						css={ancherCss}
						target={target}
						className={`${className ? className : ""}`}
						css={data.func(stylesObj, data.instance)}
					>
						<button
							ref={forwardedref}
							css={buttonCss}
							onClick={(event) => {
								if (onClick) {
									const returnBool = onClick(event);
									if (returnBool === false) return false;
								}
								return false;
							}}
							{...rest}
						>
							<LibsAtoms.Span
								dangerouslySetInnerHTML={{ __html: children }}
								css={spanCss}
								styles={spanStyles}
							></LibsAtoms.Span>
						</button>
					</a>
				) : (
					<LibsAtoms.TriggerLink
						transition={Transition.TrigerPageTransition.TrigerPageTransition}
						to={`${link}/`}
						css={data.func(stylesObj, data.instance)}
						className={`${className ? className : ""}`}
					>
						<button ref={forwardedref} css={buttonCss} {...rest}>
							<LibsAtoms.Span
								dangerouslySetInnerHTML={{ __html: children }}
								css={spanCss}
								styles={spanStyles}
							></LibsAtoms.Span>
						</button>
					</LibsAtoms.TriggerLink>
				)}
			</>
		);
	}
}

export default elementHoc(ButtonElement);
