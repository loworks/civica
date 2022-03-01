import { css } from "@emotion/react";
import * as Font from "./fontface";
import * as Common from "../common";
import * as Styles from "./";

export const RichTextCss = (props) =>
	css`
		.rt-cont.for-full-article3 {
			display: grid;
			--grid-gap: 2rem;
			--grid-margin: 4rem;
			grid-template-columns: repeat(12, 1fr);
			.rt-inner {
				grid-column: 2 / span 6;
				> h1.rt-content,
				> h2.rt-content,
				> h3.rt-content,
				> h4.rt-content,
				> p.rt-content,
				> .embed-cont,
				> .img-cont.rt-content {
					margin-left: auto;
					margin-right: auto;
					${Styles.Mq.moreTab} {
						width: 50vw;
					}
					${Styles.Mq.lessPab} {
						width: 88vw;
					}
				}
				> * :first-child {
					margin-top: 0;
				}
			}
		}
		.rt-cont.for-full-article {
			.rt-inner {
				> h1.rt-content,
				> h2.rt-content,
				> h3.rt-content,
				> h4.rt-content,
				> p.rt-content,
				> .embed-cont,
				> .img-cont.rt-content {
					margin-left: auto;
					margin-right: auto;
					${Styles.Mq.moreTab} {
						width: 50vw;
					}
					${Styles.Mq.lessPab} {
						width: 88vw;
					}
				}
				> * :first-child {
					margin-top: 0;
				}
			}
		}
		.rt-cont.for-full-article2 {
			> h1.rt-content,
			> h2.rt-content,
			> h3.rt-content,
			> h4.rt-content,
			> p.rt-content,
			> .embed-cont,
			> .img-cont.rt-content {
				margin-left: auto;
				margin-right: auto;
				${Styles.Mq.moreTab} {
					width: 60vw;
				}
				${Styles.Mq.lessPab} {
					width: 88vw;
				}
			}
			> * :first-child {
				margin-top: 0;
			}
		}
		.rt-cont {
			.rt-inner {
				> h1.rt-embeded,
				> h1.rt-content,
				> h2.rt-content,
				> h3.rt-content {
					${Font.Serif()};
				}
			}
		}
		.rt-cont {
			.rt-inner {
				> h1.rt-embeded,
				> h1.rt-content,
				> h2.rt-content,
				> h3.rt-content,
				> h4.rt-content {
					${Common.Func.setPcVwValues("margin-top", 40, true)};
					${Common.Func.setPcVwValues("margin-bottom", 20, true)};
					${Common.Func.setSpVwValues("margin-top", 40, true)};
				}
				> .rt-content {
					${Common.Func.setPcVwValues("margin-top", 20, true)};
					${Common.Func.setPcVwValues("margin-bottom", 20, true)};
					${Common.Func.setSpVwValues("margin-top", 30, true)};
				}
				> .img-cont {
					${Common.Func.setPcVwValues("margin-top", 40, true)};
					${Common.Func.setPcVwValues("margin-bottom", 40, true)};
				}
				> *:first-child {
					margin-top: 0;
				}
			}
		}
		.embed-Instagram,
		.embed-Twitter {
			width: 535px !important;
			margin-right: auto;
			margin-left: auto;
			> div {
				width: 535px;
			}
		}

		////////////////////////////////////////////////////////
		/*for-article, for-full-acricle*/
		////////////////////////////////////////////////////////
		html[lang="en"] {
			.rt-cont.for-article,
			.rt-cont.for-full-article {
				h1 {
					${Common.Func.setPcVwValues("font-size", 48, true)};
					${Common.Func.setPcVwValues("line-height", 50, true)};
					${Common.Func.setSpVwValues("font-size", 36, true)};
					${Common.Func.setSpVwValues("line-height", 42, true)};
				}
				h2 {
					${Common.Func.setPcVwValues("font-size", 36, true)};
					${Common.Func.setPcVwValues("line-height", 42, true)};
					${Common.Func.setSpVwValues("font-size", 32, true)};
					${Common.Func.setSpVwValues("line-height", 40, true)};
				}
				h3 {
					${Common.Func.setPcVwValues("font-size", 28, true)};
					${Common.Func.setPcVwValues("line-height", 38, true)};
					${Common.Func.setSpVwValues("font-size", 24, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				.small-text {
					${Common.Func.setPcVwValues("font-size", 16, true)};
					${Common.Func.setPcVwValues("line-height", 22, true)};
					${Common.Func.setSpVwValues("font-size", 14, true)};
					${Common.Func.setSpVwValues("line-height", 20, true)};
				}
				.medium-text {
					${Common.Func.setPcVwValues("font-size", 18, true)};
					${Common.Func.setPcVwValues("line-height", 26, true)};
					${Common.Func.setSpVwValues("font-size", 16, true)};
					${Common.Func.setSpVwValues("line-height", 22, true)};
				}
				.default-text {
					${Common.Func.setPcVwValues("font-size", 18, true)};
					${Common.Func.setPcVwValues("line-height", 30, true)};
					${Common.Func.setSpVwValues("font-size", 20, true)};
					${Common.Func.setSpVwValues("line-height", 32, true)};
				}
			}
		}
		html[lang="ja"] {
			.rt-cont.for-article,
			.rt-cont.for-full-article {
				h1 {
					${Common.Func.setPcVwValues("font-size", 38, true)};
					${Common.Func.setPcVwValues("line-height", 42, true)};
					${Common.Func.setSpVwValues("font-size", 28, true)};
					${Common.Func.setSpVwValues("line-height", 38, true)};
				}
				h2 {
					${Common.Func.setPcVwValues("font-size", 32, true)};
					${Common.Func.setPcVwValues("line-height", 38, true)};
					${Common.Func.setSpVwValues("font-size", 24, true)};
					${Common.Func.setSpVwValues("line-height", 36, true)};
				}
				h3 {
					${Common.Func.setPcVwValues("font-size", 24, true)};
					${Common.Func.setPcVwValues("line-height", 36, true)};
					${Common.Func.setSpVwValues("font-size", 20, true)};
					${Common.Func.setSpVwValues("line-height", 32, true)};
				}
				.small-text {
					${Common.Func.setPcVwValues("font-size", 14, true)};
					${Common.Func.setPcVwValues("line-height", 20, true)};
					${Common.Func.setSpVwValues("font-size", 14, true)};
					${Common.Func.setSpVwValues("line-height", 20, true)};
				}
				.default-text {
					${Common.Func.setPcVwValues("font-size", 18, true)};
					${Common.Func.setPcVwValues("line-height", 34, true)};
					${Common.Func.setSpVwValues("font-size", 16, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				.medium-text {
					${Common.Func.setPcVwValues("font-size", 17, true)};
					${Common.Func.setPcVwValues("line-height", 26, true)};
					${Common.Func.setSpVwValues("font-size", 15, true)};
					${Common.Func.setSpVwValues("line-height", 24, true)};
				}
			}
		}
		////////////////////////////////////////////////////////
		/*for-small-article*/
		////////////////////////////////////////////////////////
		.rt-cont.for-small-article {
			> h1.rt-embeded,
			> h1.rt-content,
			> h2.rt-content,
			> h3.rt-content,
			> h4.rt-content {
				${Common.Func.setPcVwValues("margin-top", 30, true)};
				${Common.Func.setSpVwValues("margin-top", 30, true)};
			}
			> .rt-content {
				${Common.Func.setPcVwValues("margin-top", 10, true)};
				${Common.Func.setSpVwValues("margin-top", 10, true)};
			}
		}
		html[lang="en"] {
			.rt-cont.for-small-article {
				h1 {
					${Common.Func.setPcVwValues("font-size", 36, true)};
					${Common.Func.setPcVwValues("line-height", 42, true)};
					${Common.Func.setSpVwValues("font-size", 32, true)};
					${Common.Func.setSpVwValues("line-height", 40, true)};
				}
				h2 {
					${Common.Func.setPcVwValues("font-size", 28, true)};
					${Common.Func.setPcVwValues("line-height", 38, true)};
					${Common.Func.setSpVwValues("font-size", 24, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				h3 {
					${Common.Func.setPcVwValues("font-size", 22, true)};
					${Common.Func.setPcVwValues("line-height", 28, true)};
					${Common.Func.setSpVwValues("font-size", 20, true)};
					${Common.Func.setSpVwValues("line-height", 30, true)};
				}
				.small-text {
					${Common.Func.setPcVwValues("font-size", 13, true)};
					${Common.Func.setPcVwValues("line-height", 20, true)};
					${Common.Func.setSpVwValues("font-size", 13, true)};
					${Common.Func.setSpVwValues("line-height", 20, true)};
				}
				.medium-text {
					${Common.Func.setPcVwValues("font-size", 20, true)};
					${Common.Func.setPcVwValues("line-height", 34, true)};
					${Common.Func.setSpVwValues("font-size", 19, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				.default-text {
					${Common.Func.setPcVwValues("font-size", 18, true)};
					${Common.Func.setPcVwValues("line-height", 26, true)};
					${Common.Func.setSpVwValues("font-size", 16, true)};
					${Common.Func.setSpVwValues("line-height", 22, true)};
				}
			}
		}
		html[lang="ja"] {
			.rt-cont.for-small-article {
				h1 {
					${Common.Func.setPcVwValues("font-size", 36, true)};
					${Common.Func.setPcVwValues("line-height", 42, true)};
					${Common.Func.setSpVwValues("font-size", 32, true)};
					${Common.Func.setSpVwValues("line-height", 40, true)};
				}
				h2 {
					${Common.Func.setPcVwValues("font-size", 28, true)};
					${Common.Func.setPcVwValues("line-height", 38, true)};
					${Common.Func.setSpVwValues("font-size", 24, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				h3 {
					${Common.Func.setPcVwValues("font-size", 22, true)};
					${Common.Func.setPcVwValues("line-height", 28, true)};
					${Common.Func.setSpVwValues("font-size", 20, true)};
					${Common.Func.setSpVwValues("line-height", 30, true)};
				}
				.small-text {
					${Common.Func.setPcVwValues("font-size", 13, true)};
					${Common.Func.setPcVwValues("line-height", 20, true)};
					${Common.Func.setSpVwValues("font-size", 13, true)};
					${Common.Func.setSpVwValues("line-height", 20, true)};
				}
				.medium-text {
					${Common.Func.setPcVwValues("font-size", 20, true)};
					${Common.Func.setPcVwValues("line-height", 34, true)};
					${Common.Func.setSpVwValues("font-size", 19, true)};
					${Common.Func.setSpVwValues("line-height", 28, true)};
				}
				.default-text {
					${Common.Func.setPcVwValues("font-size", 16, true)};
					${Common.Func.setPcVwValues("line-height", 28, true)};
					${Common.Func.setSpVwValues("font-size", 16, true)};
					${Common.Func.setSpVwValues("line-height", 24, true)};
				}
			}
		}
	`;
