import React, { PureComponent } from "react";
import { css, keyframes } from "@emotion/react";

import { connect } from "react-redux";
import { SliderChange } from "libs/redux/action";
import { TimelineMax } from "gsap";
import * as Transition from "../Transition";
import * as Libs from "libs";
export class SliderIndicators extends PureComponent {
	//--------------------------------------
	//  Libs.Styles
	//--------------------------------------
	sliderIndicators = () =>
		css`
			position: absolute;
			top: 10px;
			left: 50%;
			transform: translateX(-50%);
			z-index: 4;
			transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
			.on-pause & {
				opacity: 0;
			}
		`;
	indicatorCont = () => css`
		${Libs.Styles.Flex.flexLine({ around: true })}

		width: 90vw;
	`;

	indicator = () => css`
		position: relative;
		display: block;
		flex-grow: 1;

		background: rgba(255, 255, 255, 0.5);
		margin: 0 0.2vw;
		height: 5px;
		overflow: hidden;
		cursor: pointer;
		.progressbar {
			display: block;
			height: 100%;
			position: absolute;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: #fff;
			pointer-events: none;
			transform-origin: top left;
			transform: matrix(0, 0, 0, 1, 0, 0);
		}
	`;

	Clickable = () => css`
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.2) 0%,
			rgba(0, 0, 0, 0) 20%,
			rgba(0, 0, 0, 0) 100%
		);

		z-index: 2;
		transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
		.on-pause & {
			opacity: 0;
		}
	`;

	//--------------------------------------
	//  Scripts
	//--------------------------------------

	constructor(props) {
		super(props);

		this.indicats = [];
		this.len = 0;
		this.interval = 5;
		this.indicatorRefs = [];
		this.progressbarRefs = [];
		this.state = {
			ready: 0,
			page: 1,
		};

		this.currentSlide = 0;
		this.isStartSet = false;
		this.isInit = true;
		this.sliderActive = false;
		this.startSeconds = 0;
		this.currentSecound = 0;
		this.realSecound = 0;
		this.prevSliderId = this.currentSlide;
		this.prevTarget = "SLIDERCHANGE";
		this.currentX = 0;
		this.isPause = false;
		this.isComplete = false;
		this.downTime = null;
		this.clickableRef = React.createRef();
		this.overlayState = false;
		this.isCheckingLoaded = false;
		this.duration = 5;
	}
	componentDidMount() {
		const { len, next, prev, category } = this.props;
		let langKey = Libs.Common.Func.getLangKey();
		this.prevLink = `/${langKey}/${category.slug}/${prev}/`;
		this.nextLink = `/${langKey}/${category.slug}/${next}/`;
	}
	componentWillUnmount() {
		this.complete();
	}
	shouldComponentUpdate(nextProps, nextState) {
		if (this.overlayState !== nextProps.overlayState) {
			if (nextProps.overlayState === true) {
				if (this.tl) this.tl.pause();

				if (this.isTouch) {
					document.removeEventListener("touchstart", this.MouseDownHandler);
				} else {
					document.removeEventListener("mousedown", this.MouseDownHandler);
				}
			} else if (nextProps.overlayState === false) {
				if (this.tl && !this.isCheckingLoaded && !this.isPause) {
					this.tl.resume();
				}
				if (this.isTouch) {
					document.addEventListener("touchstart", this.MouseDownHandler);
				} else {
					document.addEventListener("mousedown", this.MouseDownHandler);
				}
			}
			this.overlayState = nextProps.overlayStat;
			return false;
		}
		return false;
	}
	init(len) {
		this.len = len;
		this.setState({ ready: true, currentSlide: 0 });
		this.isStartSet = true;

		this.IntervalStart();
		this.isTouch = Libs.Common.Config.isTouchDevice();
		if (this.isTouch) {
			document.addEventListener("touchstart", this.MouseDownHandler);
		} else {
			document.addEventListener("mousedown", this.MouseDownHandler);
		}
	}

	IntervalStart() {
		if (this.isComplete || this.len === 0) return;

		const { dispatch } = this.props;
		this.duration = null;
		if (this.tl) this.tl.kill();
		this.tl = new TimelineMax({ pause: true });
		this.progressbarRefs.forEach((item, index) => {
			if (index >= this.currentSlide) {
				item.style.transform = ``;
				item.style.transformOrigin = `left center`;
				item.style.transform = `scale(0, 1)`;
				this.tl.set(item, {
					scaleX: 0,
					transformOrigin: `left center`,
				});
			} else {
				item.style.transformOrigin = `left center`;
				item.style.transform = ``;
				item.style.transform = `scale(1, 1)`;
				this.tl.set(item, {
					scaleX: 1,
					transformOrigin: `left center`,
				});
			}
		});
	}

	setTl = (durationNum) => {
		const me = this;
		this.isCheckingLoaded = true;
		this.duration = durationNum ? durationNum : 5;
		const currentItem = this.progressbarRefs[me.currentSlide];
		this.tl
			.set(currentItem, {
				scaleX: 0,
				transformOrigin: `left center`,
			})
			.to(currentItem, this.duration, {
				scaleX: 1,
				ease: "none",
				transformOrigin: `left center`,
			})
			.call(function() {
				me.tl.pause();
				me.isCheckingLoaded = true;

				me.currentSlide++;
				if (me.currentSlide >= me.len) {
					me.navigate(me.nextLink, "next");
					return;
				}
				me.set(me.currentSlide);
			});
		// me.tl.pause()
		if (this.isPause) {
			me.tl.pause();
		}
	};
	update = (id, current) => {
		if (id !== this.currentSlide || !this.tl) return;
		if (this.duration) {
			if (this.duration === current) {
				this.currentSlide++;
				if (this.currentSlide >= this.len) {
					this.navigate(this.nextLink, "next");
					return;
				}
				this.set(this.currentSlide);
			} else {
				this.tl.pause(current);
			}
		}
	};

	set = (id) => {
		const { dispatch } = this.props;
		this.tl.kill();

		this.IntervalStart();
		dispatch(SliderChange(null, id));
	};

	resume(duration) {
		if (this.tl) this.setTl(duration);
		this.isCheckingLoaded = false;
	}
	restart() {
		this.isPause = false;
		if (this.tl) this.tl.resume();
	}
	pause() {
		if (this.tl) {
			this.tl.pause();
			this.isPause = true;
		}
	}
	getIsPause() {
		return this.isPause;
	}
	complete = () => {
		const { dispatch } = this.props;
		if (this.isComplete) return;
		if (this.tl) {
			this.tl.kill();
			this.tl.kill();
			this.tl = null;
		}
		this.isComplete = true;
		this.currentSlide = 0;

		dispatch(SliderChange(null, 0, true));
	};
	navigate = (to, direction) => {
		const { dispatch } = this.props;

		this.complete();
		Transition.TrigerSlideTransition.TrigerSlideTransition(
			to,
			direction,
			dispatch
		);
	};
	ClickableClickHandler = (props) => {
		let screenCenter = 0;

		if (this.isComplete || this.len === 0) return;

		if (typeof window !== `undefined`) {
			screenCenter = window.innerWidth / 2;
		}

		const pageX = props.pageX;
		let id = 0;
		if (pageX > screenCenter) {
			if (this.currentSlide >= this.len - 1) {
				this.navigate(this.nextLink, "next");
				return;
			}
			id = this.currentSlide += 1;
		} else {
			if (this.currentSlide <= 0) {
				this.navigate(this.prevLink, "prev");
				return;
			}
			id = this.currentSlide -= 1;
		}

		this.set(id);
	};
	getPage(event, page) {
		return event.changedTouches ? event.changedTouches[0][page] : event[page];
	}
	MouseDownHandler = (props) => {
		if (this.isComplete || this.len === 0) return;
		let tagName = props.target.tagName;

		let tagCheck =
			props.target.classList && props.target.classList.contains("bc-button")
				? true
				: false;

		if (
			tagName === "SELECT" ||
			tagName === "INPUT" ||
			tagName === "BUTTON" ||
			tagName === "A" ||
			tagName === "LABEL" ||
			tagCheck
		) {
			return false;
		}

		// props.stopPropagation()
		// props.preventDefault()

		this.downTime = new Date().getTime();
		if (this.tl) {
			this.tl.pause();
		}
		this.startPageX = this.getPage(props, "pageX");
		this.startPageY = this.getPage(props, "pageY");
		this.basePageX = this.startPageX;
		this.basePageY = this.startPageY;
		this.directionX = 0;
		this.distX = 0;
		this.startTime = props.timeStamp;
		this.slideNode = document.querySelector(".tl-wrapper--mount");
		const cont = document.getElementsByTagName("html")[0];

		cont.classList.add("on-pause");
		if (this.isTouch) {
			document.addEventListener("touchend", this.MouseUpHandler);
			document.addEventListener("touchmove", this.MoveHandler);
		} else {
			document.addEventListener("mouseup", this.MouseUpHandler);
			document.addEventListener("mousemove", this.MoveHandler);
		}
	};
	MoveHandler = (props) => {
		if (this.isComplete || this.len === 0) return;
		//props.stopPropagation()
		//props.preventDefault()
		let pageX = this.getPage(props, "pageX");
		let pageY = this.getPage(props, "pageY");
		let newX = 0;
		this.distX = 0;
		this.distY = 0;
		this.distX = pageX - this.basePageX;
		this.distY = pageY - this.basePageY;
		this.directionX =
			this.distX === 0 ? this.directionX : this.distX > 0 ? -1 : 1;
		newX = pageX - this.startPageX;
		this.nodeMove(newX / 5);

		this.basePageX = pageX;
		this.basePageY = pageY;
	};
	MouseUpHandler = (props) => {
		if (this.isComplete || this.len === 0) return;
		if (this.isTouch) {
			document.removeEventListener(" touchmove", this.MoveHandler);
			document.removeEventListener(" touchend", this.MouseUpHandler);
		} else {
			document.removeEventListener("mousemove", this.MoveHandler, false);
			document.removeEventListener(this.MoveHandler, this, false);
			document.removeEventListener("mouseup", this.MouseUpHandler, false);
		}
		//props.stopPropagation()
		//props.preventDefault()
		let pageX = this.getPage(props, "pageX");
		let pageY = this.getPage(props, "pageY");
		let distXup = pageX - this.startPageX;
		let distYup = pageY - this.startPageY;
		let directionXup = distXup === 0 ? this.directionX : distXup > 0 ? -1 : 1;
		const absDistX = Math.abs(distXup);
		const absDistY = Math.abs(distYup);
		const upTime = props.timeStamp;

		const swipedistance = this.isTouch ? 150 : 300;
		if (upTime - this.startTime < 300 && absDistX < 5 && absDistY < 5) {
			this.ClickableClickHandler(props);
		} else if (absDistX > swipedistance && directionXup > 0) {
			this.navigate(this.nextLink, "next");
		} else if (absDistX > swipedistance && directionXup < 0) {
			this.navigate(this.prevLink, "prev");
		} else {
			this.nodeMove(0);
			if (this.tl && !this.isCheckingLoaded && !this.isPause) {
				this.tl.resume();
			}
		}
		const cont = document.getElementsByTagName("html")[0];
		cont.classList.remove("on-pause");
	};
	nodeMove = (x) => {
		this.currentX = x;

		this.slideNode.style["transform"] = "translate3d(" + x + "px, 0, 0)";
	};
	render() {
		const { len, next, prev, category } = this.props;

		const indicats = [];
		for (let i = 0; i < len; i++) {
			indicats.push(`indicat-${i}`);
		}
		this.sliderInfo = this.props.sliderinfo;
		return (
			<>
				<div className="slider-indicator" css={this.sliderIndicators}>
					<div css={this.indicatorCont}>
						{indicats.map((item, id) => {
							return (
								<div
									data-id={id}
									key={id}
									css={this.indicator}
									ref={(el) => {
										this.indicatorRefs[id] = el;
									}}
								>
									<div
										className="progressbar"
										ref={(el) => {
											this.progressbarRefs[id] = el;
										}}
									></div>
								</div>
							);
						})}
					</div>
				</div>
				<div
					css={this.Clickable}
					ref={(el) => {
						this.clickableRef = el;
					}}
					/*onClick={props => this.ClickableClickHandler(props)}
          onMouseDown={props =>
            this.isTouch === "pc"
              ? this.MouseDownHandler(props)
              : null
          }
          onTouchStart={props => {
            return this.isTouch
              ? this.MouseDownHandler(props)
              : null
          }}*/
				></div>
			</>
		);
	}
}

export default connect(
	(state) => ({
		overlayState: state.OverlayReducer.state,
	}),
	null,
	null,
	{ forwardRef: true }
)(SliderIndicators);
