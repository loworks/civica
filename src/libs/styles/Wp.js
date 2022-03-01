import { css } from "@emotion/react";
import * as Common from "../common";
import * as Libs from "libs";
export const CommonCss = (props) =>
	css`
		img {
			width: 100%;
			height: auto;
		}
		p {
			${Libs.Common.Func.getMqVwValue("font-size", 13, true)};
			${Libs.Common.Func.getMqVwValue("line-height", 13 * 1.7, true)};
		}
	`;
export const Space = (props) =>
	css`
		.child-mgn-l {
			> * {
				margin-top: 36px;
				&:first-child {
					margin-top: 0;
				}
			}
		}
		.child-mgn-s {
			> * {
				margin-top: 12px;
				&:first-child {
					margin-top: 0;
				}
			}
		}
		.child-mgn-xs {
			> * {
				margin-top: 12px;
				&:first-child {
					margin-top: 0;
				}
			}
		}
	`;

export const Blocks = (props) =>
	css`
		.flex-cont {
			display: flex;
			align-items: top;
			flex-wrap: wrap;
			position: relative;
			z-index: 1;
			> .flex-item {
				display: flex;
				flex-direction: column;
			}
			&.column-2 > .flex-item {
				flex-basis: 50%;
				margin-bottom: 48px;
			}
		}
	`;
