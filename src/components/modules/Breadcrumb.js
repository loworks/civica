import React, { PureComponent } from "react";
import { css } from "@emotion/react";

import * as Transition from "../Transition";
import { connect } from "react-redux";
import * as Libs from "libs";

class Breadcrumb extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			ready: false,
		};
	}
	componentDidMount() {
		let { current } = this.props;
		this.init = false;
		const section = document.querySelectorAll("section:first-child");
		this.dataset = section[0] ? section[0].dataset : null;
		this.setState({ ready: true });
	}

	render() {
		if (!this.state.ready || !this.dataset) return null;
		let count = 1;
		let { current, prev, next, category, pageType } = this.props;

		if (!current) {
			let locationHref = window.location.href;

			var pos = locationHref.indexOf("?");
			if (pos < 0) {
			} else {
				locationHref = locationHref.substring(0, pos);
			}

			const filename = Libs.Common.Func.getFileName(locationHref);

			prev = this.dataset.prev;
			next = this.dataset.next;

			current = this.dataset.currentname
				? { name: this.dataset.currentname, slug: this.dataset.current }
				: { name: Libs.Common.Func.toUpperCaseFiest(filename), slug: filename };
			category = this.dataset.categoryname
				? {
						name: this.dataset.categoryname,
						slug: this.dataset.categoryslug,
				  }
				: null;
		}

		let langKey = Libs.Common.Func.getLangKey();
		const list = [];

		list.push(current);
		const contCss = css`
			${Libs.Styles.Font.Serif()};
			position: relative;
			${Libs.Common.Func.getPcSpVwTransform("translateY", 146, 126, true)};
			text-align: center;
			width: 70vw;
			margin-left: auto;
			margin-right: auto;

			a {
				span {
					.on-story & {
						color: #fff;
					}
				}
			}

			transition: transform 1s,
				opacity 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);

			.now-transition & {
				transition: opacity 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
				opacity: 0;
			}
			.on-scrollinit & {
				${Libs.Styles.Mq.moreTab} {
					transform: translateY(120px);
				}

				${Libs.Styles.Mq.lessPab} {
					transform: translateY(102px);
				}
			}
			.on-pause & {
				opacity: 0;
			}
			${Libs.Styles.Mq.moreTab} {
				.on-story & {
					transform: translateY(112px);
				}
			}
			${Libs.Styles.Mq.lessPab} {
				.on-story & {
					transform: translateY(130px);

					text-align: left;
					width: 60vw;
					margin-left: 25px;
				}
			}
		`;
		const prevCss = css`
			margin-right: ${Libs.Common.Func.getVwValue(2)}vw;
			display: inline-block;
			.on-story & {
				${Libs.Styles.Mq.lessPab} {
					display: none;
				}
			}
			&:after {
				content: "|";
				color: #fff;
				margin-left: ${Libs.Common.Func.getVwValue(1)}vw;
			}
		`;
		const nextCss = css`
			margin-left: ${Libs.Common.Func.getVwValue(2)}vw;
			display: inline-block;
			.on-story & {
				${Libs.Styles.Mq.lessPab} {
					display: none;
				}
			}
			&:before {
				content: "|";
				color: #fff;
				margin-right: ${Libs.Common.Func.getVwValue(1)}vw;
			}
		`;
		const ulCss = css`
			display: inline-block;
			li {
				${Libs.Styles.Mq.lessTab} {
					margin-right: ${Libs.Common.Func.getVwValue(1)}vw;
				}
				:not(&:first-child, &:last-child) {
					margin-left: ${Libs.Common.Func.getVwValue(1)}vw;
				}
				display: inline-block;
				&:after {
					.on-story & {
						color: #fff;
					}
					content: ">";
					margin-left: ${Libs.Common.Func.getVwValue(1)}vw;
				}

				.type-category &:last-child {
					transition: all 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
					display: block;
					span {
						transition: all 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
						pointer-events: none;
						${Libs.Common.Func.getPcSpVwValue("margin-top", 7, 5)};
						${Libs.Common.Func.getPcSpVwValue("font-size", 54, 42, true)};
						${Libs.Common.Func.getPcSpVwValue("line-height", 54, 42, true)};
					}
				}
				.on-story &:last-child {
					display: block;
					margin-top: 5px;
					pointer-events: none;
					span {
						font-size: 20px;
						line-height: 20px;
					}
				}
				.on-scrollinit.type-category &:last-child {
				}
				.on-scroll.type-category &:last-child {
					opacity: 1;
					display: inline-block;
					margin-left: ${Libs.Common.Func.getVwValue(1)}vw;
					span {
						font-size: 15px;
						line-height: 15px;
					}
				}
				&:last-child {
					margin-left: 0;

					&:after {
						content: "";
						margin-left: 0;
					}
				}
			}
		`;
		const getStyleObject = (props) => {
			return {
				pcFontSize: 15,
				spFontSize: 15,
				pcLineHeight: 15,
				spLineHeight: 15,
				fontFace: "serif",
				letterSpacing: 0,
				display: "inline-block",
			};
		};
		const getCagegory = (props) => {
			if (category != null && pageType === "post") {
				count++;
				return (
					<>
						<li
							itemprop="itemListElement"
							itemscope
							itemtype="http://schema.org/ListItem"
						>
							<Libs.Atoms.TriggerLink
								transition={
									Libs.Transition.TrigerPageTransition.TrigerPageTransition
								}
								to={`/${langKey}/${category.slug}/`}
							>
								<Libs.Atoms.Span
									className={"bc-button"}
									itemProp="name"
									styles={getStyleObject()}
								>
									{category.name}
								</Libs.Atoms.Span>
							</Libs.Atoms.TriggerLink>
						</li>
						<meta itemprop="position" content={count} />
					</>
				);
			}
		};
		const getPrevElement = (props) => {
			if (prev != null) {
				return (
					<div css={prevCss}>
						<Libs.Atoms.TriggerLink
							transition={
								Libs.Transition.TrigerPageTransition.TrigerPageTransition
							}
							to={`/${langKey}/${category.slug}/${prev}/`}
							onClick={function(event) {
								Transition.TrigerSlideTransition.TrigerSlideTransition(
									`/${langKey}/${category.slug}/${prev}/`,
									"prev",
									event.dispatch
								);
								return false;
							}}
						>
							<Libs.Atoms.Span
								className={"bc-button"}
								styles={getStyleObject()}
							>
								PREV{" "}
							</Libs.Atoms.Span>
						</Libs.Atoms.TriggerLink>
					</div>
				);
			}
		};
		const getNextElement = (props) => {
			if (next != null) {
				return (
					<div css={nextCss}>
						<Libs.Atoms.TriggerLink
							transition={
								Libs.Transition.TrigerPageTransition.TrigerPageTransition
							}
							to={`/${langKey}/${category.slug}/${next}/`}
							onClick={function(event) {
								Transition.TrigerSlideTransition.TrigerSlideTransition(
									`/${langKey}/${category.slug}/${next}/`,
									"next",
									event.dispatch
								);
								return false;
							}}
						>
							<Libs.Atoms.Span
								className={"bc-button"}
								styles={getStyleObject()}
							>
								NEXT
							</Libs.Atoms.Span>
						</Libs.Atoms.TriggerLink>
					</div>
				);
			}
		};

		if (
			current.slug == "index" ||
			current.slug === "ja" ||
			current.slug === "en"
		) {
			return <></>;
		}

		return (
			<div css={contCss}>
				{getPrevElement()}

				<ol itemscope itemtype="http://schema.org/BreadcrumbList" css={ulCss}>
					<li
						itemprop="itemListElement"
						itemscope
						itemtype="http://schema.org/ListItem"
					>
						<Libs.Atoms.TriggerLink
							transition={
								Libs.Transition.TrigerPageTransition.TrigerPageTransition
							}
							to={`/${langKey}`}
						>
							<Libs.Atoms.Span
								className={"bc-button"}
								itemProp="name"
								styles={getStyleObject()}
							>
								Home
							</Libs.Atoms.Span>
						</Libs.Atoms.TriggerLink>
						<meta itemprop="position" content={count} />
					</li>
					{getCagegory()}
					{list.map((item, i) => {
						return (
							<li
								itemprop="itemListElement"
								itemscope
								itemtype="http://schema.org/ListItem"
								key={`breadcrumbItem${i}`}
							>
								<Libs.Atoms.TriggerLink
									transition={
										Libs.Transition.TrigerPageTransition.TrigerPageTransition
									}
									to={`/${langKey}/${category ? category.slug + "/" : ""}${
										item.slug
									} `}
								>
									<Libs.Atoms.Span
										className={"bc-button"}
										itemProp="name"
										styles={getStyleObject()}
									>
										{item.name}
									</Libs.Atoms.Span>
								</Libs.Atoms.TriggerLink>
								<meta itemprop="position" content={i + 1 + count} />
							</li>
						);
					})}
				</ol>
				{getNextElement()}
			</div>
		);
	}
}

export default connect((state) => ({
	current: state.TransitionReducer.current,
	pageType: state.TransitionReducer.pageType,
	category: state.TransitionReducer.category,
	prev: state.TransitionReducer.prev,
	next: state.TransitionReducer.next,
}))(Breadcrumb);
