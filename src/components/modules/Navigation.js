import React, { Component } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/react";

import * as Atoms from "../../components/atoms";

import { TimelineMax, Power2 } from "gsap";
import * as Action from "libs/redux/action";
import * as Modules from "../../components/modules";
import * as Common from "../../common";

import * as Libs from "libs";
class Navigation extends Component {
	//--------------------------------------
	//  Libs.Styless
	//--------------------------------------
	containerCss = () => {
		//background-color: #f0F;
		return css`
			background-color: #f89eb0;
			height: 0;
			pointer-events: none;
			width: 100vw;
			position: fixed;
			top: 0px;
			left: 0px;
			z-index: 101;
			.on-menu & {
				pointer-events: auto;
				overflow-y: scroll;
			}
		`;
	};
	navListCss = () => {
		return css`
			${Libs.Styles.Mq.moreTab} {
				padding-top: 20vw;
				text-align: center;
			}
			${Libs.Styles.Mq.lessPab} {
				padding-top: 40vw;
				padding-left: 10vw;
			}
		`;
	};
	subNavContCss = () => {
		return css`
			margin-top: ${Libs.Common.Func.getVwValue(16)}vw;
			opacity: 0;
			${Libs.Styles.Mq.moreTab} {
				${Libs.Styles.Flex.flexLine({ between: true })}
				width: 60vw;
				margin-left: auto;
				margin-right: auto;
			}
			${Libs.Styles.Mq.lessPab} {
				${Libs.Styles.Position.ChildSpacing("30px")}
				padding-left: 10vw;
				margin-bottom: 200px;
			}
		`;
	};

	menuItemCss = () => {
		return css`
			opacity: 0;
			a {
				${Libs.Styles.Font.Serif()}
				color: #000;
				font-size: ${Libs.Common.Func.getVwValue(5)}vw;
				letter-spacing: 0rem;
				line-height: 1;
				${Libs.Styles.Mq.lessPab} {
					font-size: ${Libs.Common.Func.getVwValue(16)}vw;
				}
			}
		`;
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
	}
	mount = false;
	componentDidMount() {
		this.mount = true;
	}

	onMenu = ({ target, onMenu }) => {
		if (!this.mount || !target) return;
		if (onMenu) {
			this.appear();
		} else {
			this.hide();
		}
	};

	appear = () => {
		const container = this.container.current;
		const tl = new TimelineMax();
		this.navItemRefs.forEach((item, index) => {
			if (!item) return;
			tl.set(item, { opacity: 0, y: "15%" });
		});
		tl.set(container, { height: "60vh" });
		tl.to(container, 0.5, { height: "100vh", ease: Power2.easeOut });
		this.navItemRefs.forEach((item, index) => {
			const delay = 0.3 + 0.03 * index;
			if (!item) return;
			tl.to(
				item,
				0.5,
				{
					opacity: "1",
					y: "0%",
					ease: Power2.easeInOut,
				},
				delay
			);
		});
	};
	hide = () => {
		const container = this.container.current;
		const tl = new TimelineMax();
		this.navItemRefs.forEach((item, index) => {
			const delay = 0 + 0.05 * index;
			if (!item) return;
			tl.to(
				item,
				0.3,
				{
					opacity: "0",
					y: "10%",
					ease: Power2.easeInOut,
				},
				delay
			);
		});
		tl.set(container, { height: "30vh" });
		tl.to(container, 0.3, { height: "0vh", ease: Power2.easeOut });

		this.dispatch(Action.MenuClick(null, false));
	};
	toggleMenu = () => {};
	shouldComponentUpdate(nextProps, nextState) {
		this.onMenu(nextProps);
		if (this.langKey !== nextProps.lang) {
			this.langKey = nextProps.lang;
			return true;
		}

		return false;
	}
	render() {
		this.navItemRefs = [];
		const navItems = Common.Config.getNavItems();
		const closeButtonCss = (props) => {
			return css`
				position: fixed;
				top: 50px;
				left: 50%;
				margin-left: -20px;
			`;
		};

		return (
			<nav css={this.containerCss} ref={this.container}>
				<ul
					css={this.navListCss}
					ref={(el) => {
						this.navItems = el;
					}}
				>
					{navItems.map((item, i) => (
						<li
							key={`navItem${i}`}
							ref={(el) => {
								if (el) this.navItemRefs.push(el);
							}}
							css={this.menuItemCss}
							onClick={this.hide}
						>
							<Libs.Atoms.TriggerLink
								transition={
									Libs.Transition.TrigerPageTransition.TrigerPageTransition
								}
								to={
									item.to !== "/contact"
										? `/${this.langKey}${item.to}/`
										: `${item.to}`
								}
							>
								<span data-hover={item.label}>
									<em>{item.label}</em>
								</span>
							</Libs.Atoms.TriggerLink>
						</li>
					))}
				</ul>
				<div
					css={this.subNavContCss}
					ref={(el) => {
						if (el) this.navItemRefs.push(el);
					}}
				>
					<div>
						<Modules.SnsList widthSp={200} heightSp={35}></Modules.SnsList>
					</div>
					<Atoms.InfoAbout></Atoms.InfoAbout>
					<Atoms.InfoHour></Atoms.InfoHour>
				</div>
				<Libs.Atoms.ButtonClose
					css={closeButtonCss}
					activeClass={"on-menu"}
					clickHandler={this.hide}
				/>
			</nav>
		);
	}
}
export default connect((state) => ({
	target: state.ClickReducer.target,
	onMenu: state.ClickReducer.onMenu,
	lang: state.ClickReducer.lang,
}))(Navigation);
