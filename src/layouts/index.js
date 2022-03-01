import React, { PureComponent } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import reducer from "libs/redux/reducers/index";
import { createStore } from "redux";
import { Provider } from "react-redux";
import * as Style from "../styles";
import * as Libs from "libs";
import ScrollEase from "libs/ScrollEase";
import * as Common from "../common";
import * as Func from "../libs/common/func";
import * as Modules from "../components/modules";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import * as Transition from "../components/Transition";
import WindowResize from "libs/redux/event/WindowResize";
import EnterFrame from "libs/redux/event/EnterFrame";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider, addLocaleData } from "react-intl";
import ContextProvider from "../provider/ContextProvider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
const Container = styled.div`
	align-items: center;
	justify-content: center;
`;

const store = createStore(reducer);
const style = () => {
	return css`
		opacity: 0;
	`;
};
let current = "Index";
class Layout extends PureComponent {
	static get current() {
		return current;
	}
	static set current(value) {
		current = value;
	}
	constructor(props) {
		super(props);
		this.scrollerRef = React.createRef();
		this.container = React.createRef();
		this.enterframe = React.createRef();
		if (typeof window !== `undefined`) {
			const location = window.location;
			const url = location.pathname;
			Libs.Common.Config.setLangInfo(["ja", "en"], "ja");
			const { langs, defaultLangKey } = Libs.Common.Config.languages;
			this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
			this.homeLink = `/${this.langKey}/`;

			this.langsMenu = Func.getLangInfo();

			Libs.Common.Config.setDispatcher(store.dispatch);
			Libs.Common.Config.setInitTransition(
				Transition.InitTransition.InitTransition
			);
		}
	}
	componentDidMount() {
		//ScrollEase.WrappedComponent.container = container;
		const target = document.querySelector(".tl-wrapper");

		gsap.registerPlugin(ScrollTrigger);
		const overscrollOptions = {
			enable: true,
			effect: "bounce",
			damping: 0.15,
			maxOverscroll: 150,
			glowColor: "#fff",
		};
		Scrollbar.use(OverscrollPlugin);

		const scrollbar = Scrollbar.init(this.scrollerRef.current, {
			damping: 0.08,
			delegateTo: document,
			continuousScrolling: false,
			alwaysShowTracks: false,
			plugins: {
				overscroll: { ...overscrollOptions },
			},
		});
		ScrollTrigger.scrollerProxy(this.scrollerRef.current, {
			scrollTop(value) {
				if (arguments.length) {
					scrollbar.scrollTop = value;
				}
				return scrollbar.scrollTop;
			},
		});
		scrollbar.addListener(ScrollTrigger.update);

		ScrollTrigger.defaults({ scroller: this.scrollerRef.current });
		window.scroller = this.scrollerRef.current;
		console.log("window.scroller --- ", window.scroller);
		target.setAttribute("style", "visibility:visible");
		this.container.current.setAttribute("style", "opacity:1");

		if (typeof window !== `undefined`) {
			//document.body.scrollTop = document.documentElement.scrollTop = 0
		}
		this.scrollContent = document.querySelector(".scroll-content");
		console.log("me.container -- ", document.querySelector(".scroll-content"));
		this.enterframe.setContainer(document.querySelector(".scroll-content"));
		this.enterframe.start();
		return () => {
			if (scrollbar) scrollbar.destroy();
			scrollbar.removeListener(ScrollTrigger.update);
		};
	}
	render() {
		const { children } = this.props;

		return (
			<IntlProvider locale={this.langKey}>
				<ContextProvider>
					<Provider store={store}>
						<Container ref={this.container} css={style}>
							<Libs.Styles.Reset />
							<Libs.Styles.Global.GlobalStyle />
							<Style.SiteStyle.StoryStyle />
							<WindowResize />
							<EnterFrame
								container={this.scrollContent}
								dispatch={store.dispatch}
								ref={(el) => {
									this.enterframe = el;
								}}
							></EnterFrame>

							<div className={"scrollcont"} ref={this.scrollerRef}>
								<Header />
								{children}
								<Footer langs={this.langsMenu} />
							</div>
							<Modules.Loader />
							<Libs.Atoms.Overlay />
						</Container>
					</Provider>
				</ContextProvider>
			</IntlProvider>
		);
	}
}

export default Layout;
