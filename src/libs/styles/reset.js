import React, { Component } from "react";
import { Global, css } from "@emotion/react";

class Reset extends Component {
	render() {
		return (
			<Global
				styles={css`
					html,
					body,
					div,
					span,
					applet,
					object,
					iframe,
					h1,
					h2,
					h3,
					h4,
					h5,
					h6,
					p,
					blockquote,
					pre,
					a,
					abbr,
					acronym,
					address,
					big,
					cite,
					code,
					del,
					dfn,
					em,
					img,
					button,
					ins,
					kbd,
					q,
					s,
					samp,
					small,
					strike,
					strong,
					sub,
					sup,
					tt,
					var,
					b,
					u,
					i,
					center,
					dl,
					dt,
					dd,
					ol,
					ul,
					li,
					fieldset,
					form,
					label,
					legend,
					table,
					caption,
					tbody,
					tfoot,
					thead,
					tr,
					th,
					td,
					article,
					aside,
					canvas,
					details,
					embed,
					figure,
					figcaption,
					footer,
					header,
					hgroup,
					menu,
					nav,
					output,
					ruby,
					section,
					summary,
					time,
					mark,
					audio,
					video {
						margin: 0;
						padding: 0;
						border: 0;
						font: inherit;
						font-size: 100%;
						vertical-align: baseline;
					}
					div {
						line-height: 1;
					}
					html {
						line-height: 1;
					}
					ol,
					ul {
						list-style: none;
					}
					table {
						border-collapse: collapse;
						border-spacing: 0;
					}
					caption,
					th,
					td {
						text-align: left;
						font-weight: normal;
						vertical-align: middle;
					}
					q,
					blockquote {
						quotes: none;
					}
					q:before,
					q:after,
					blockquote:before,
					blockquote:after {
						content: "";
						content: none;
					}
					a {
						text-decoration: none;
					}
					a img {
						border: none;
					}
					img {
						vertical-align: bottom;
					}
					article,
					aside,
					details,
					figcaption,
					figure,
					footer,
					header,
					hgroup,
					main,
					menu,
					nav,
					section,
					summary {
						display: block;
					}
				`}
			/>
		);
	}
}

export default Reset;
