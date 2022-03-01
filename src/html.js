import React from "react";
import PropTypes from "prop-types";
import { css } from "@emotion/react";
import * as Modules from "./components/modules";
import * as Atoms from "./components/atoms";

import * as Common from "./common";

export default function HTML(props) {
	const initialLoaderCss = css`
		pointer-events: none;
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100vw;
		height: 100%;
		z-index: 10000;
		.page-load & {
			opacity: 1 !important;
		}
		.bg {
			background-color: ${Common.Config.bgColor};
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 0;
			top: 0px;
			.page-load & {
				background-color: transparent;
			}
		}
	`;

	return (
		<html className={"init-load"} {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />

				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}

				<div
					key={`body`}
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>

				{props.postBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<Atoms.Svg />
				<div css={initialLoaderCss} className="initioal-loader">
					<Modules.InitialLoader />
					<div className="bg" />
				</div>
			</body>
		</html>
	);
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
};
