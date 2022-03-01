import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/react";

import * as Common from "../../common";

import * as Libs from "libs";

class GlobalNavigation extends Component {
	//--------------------------------------
	//  Styles
	//--------------------------------------
	contCss = () => {
		return css`
			overflow: hidden;
			height: 3em;

			position: absolute;
			transition: transform 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);

			${Libs.Styles.Mq.moreTab} {
				left: 50%;

				transform: translate(-50%, 100px);
			}
			${Libs.Styles.Mq.lessPab} {
				width: 100%;
				transform: translateY(57px);
			}
			.on-story & {
				transition: opacity 1s cubic-bezier(0.71, 0.01, 0.45, 1.01);
				${Libs.Styles.Mq.lessPab} {
					opacity: 0;
				}
			}
			.on-scrollinit:not(.on-story) & {
				${Libs.Styles.Mq.moreTab} {
					transform: translate(-50%, 82px);
				}
			}
		`;
	};
	navCss = () => {
		return css`
			height: 5em;
			width: 100%;
			overflow-x: auto;
			a-webkit-overflow-scrolling: touch;
		`;
	};
	navListCss = () => {
		return css`
			display: inline-table;
			margin: 0 auto;
			max-width: 100%;

			li {
				display: table-cell;
				&:first-child {
					a {
						${Libs.Styles.Mq.moreTab} {
							margin-left: 0;
						}
						${Libs.Styles.Mq.lessPab} {
							margin-left: 25px;
						}
					}
				}
			}

			a {
				position: relative;
				text-decoration: none;
				color: #000;
				height: 3em;
				line-height: 3;
				${Libs.Common.Func.setVwValueByMq("margin-left", 50, "large", true)};

				${Libs.Common.Func.setVwValueByMq("margin-left", 50, "pc")};
				${Libs.Common.Func.setVwValueByMq("margin-left", 30, "tb")};
				${Libs.Common.Func.setVwValueByMq("margin-left", 40, "pab")};
				${Libs.Common.Func.setVwValueByMq("margin-left", 50, "sp")};
				cursor: pointer;
				&:after {
					content: " ";
					position: absolute;
					left: 0;
					width: 100%;
					bottom: -10px;
					border-bottom: 3px solid #ececec;
					transform: scaleY(0);
					transform-origin: 0 100%;
					transition: all 0.9s cubic-bezier(0.19, 1, 0.22, 1);
				}
			}
			.active a {
				pointer-events: none;
			}
			.active a:after {
				transform: scaleY(1);
				border-bottom: 3px solid #000;
			}
		`;
	};

	menuItemCss = () => {
		return css`
			display: inline-block;
		`;
	};

	clickHandler = (e) => {
		for (let ref in this.navItemRefs) {
			if (!ref) return;
			this.navItemRefs[ref].classList.remove("active");
		}
		e.currentTarget.parentNode.classList.add("active");
	};
	//--------------------------------------
	//  Scripts
	//--------------------------------------
	constructor(props) {
		super(props);
		this.container = React.createRef();
		this.mount = false;
		const { dispatch } = this.props;
		this.dispatch = dispatch;
		this.langKey = Libs.Common.Func.getLangKey();
		this.current = null;
	}
	mount = false;
	componentDidMount() {
		this.mount = true;
		/*
    const dataset = document
      .querySelector(".tl-wrapper")
      .querySelectorAll("section:first-child")[0].dataset
      */
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.lang && this.langKey !== nextProps.lang) {
			this.langKey = nextProps.lang;
			return true;
		}

		const category = nextProps.category.slug;

		if (this.navItemRefs[category] || category === "index") {
			for (let ref in this.navItemRefs) {
				if (!ref) return;
				this.navItemRefs[ref].classList.remove("active");
			}
			if (category !== "index")
				this.navItemRefs[category].classList.add("active");
			return false;
		}
	}
	render() {
		this.navItemRefs = {};
		const navItems = Common.Config.getNavItems();

		return (
			<div css={this.contCss}>
				<nav css={this.navCss} className="global-nav" ref={this.container}>
					<ul
						css={this.navListCss}
						ref={(el) => {
							this.navItems = el;
						}}
					>
						{navItems.map((item, i) => (
							<li
								key={`navItem${i}`}
								css={this.menuItemCss}
								/* onClick={props => this.clickHandler(props)}*/
								ref={(el) => {
									if (el) this.navItemRefs[item.slug] = el;
								}}
							>
								<Libs.Atoms.TriggerLink
									transition={
										Libs.Transition.TrigerPageTransition.TrigerPageTransition
									}
									to={`/${this.langKey}${item.to}/`}
									onClick={this.clickHandler}
								>
									<Libs.Atoms.Span
										styles={{
											pcFontSize: 20,
											spFontSize: 20,
											pcLineHeight: 20,
											spLineHeight: 20,
											fontFace: "serif",
											bold: true,
											letterSpacing: 0,
											display: "inline-block",
											whiteSpace: "nowrap",
										}}
										data-hover={item.label}
									>
										<em>{item.label}</em>
									</Libs.Atoms.Span>
								</Libs.Atoms.TriggerLink>
							</li>
						))}
					</ul>
				</nav>
			</div>
		);
	}
}
export default connect((state) => ({
	category: state.TransitionReducer.category,
	lang: state.ClickReducer.lang,
}))(GlobalNavigation);
