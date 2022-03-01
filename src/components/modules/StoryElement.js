import React, { PureComponent } from "react";

import { OverlayOpen } from "libs/redux/action";

import * as Transition from "../Transition";
import { css } from "@emotion/react";

import * as Modules from "./";
import { connect } from "react-redux";
import { WindowResize } from "libs/redux/event/WindowResize";
import * as Libs from "libs";
export class StoryElement extends PureComponent {
	storyContCss = () => {
		return css`
      position: relative;
     /* ${Libs.Styles.Mq.moreTab} {
        height: 100vh;
      }
      ${Libs.Styles.Mq.lessPab} {
        height: ${
					typeof window !== `undefined` ? window.innerHeight + "px" : "100vh"
				};
      }*/
    `;
	};
	contentContCss = () => {
		return css``;
	};
	ImgCss = () => {
		return css`
			pointer-events: none;
		`;
	};
	contentWrapperCss = () => {
		return css`
			&:nth-of-type(${this.currentSlide + 1}) {
				z-index: 1;
				visibility: visible;
			}
			&:nth-of-type(n + 2) {
				display: none;
			}

			visibility: hidden;
			position: absolute;
			width: 100vw;
			height: ${typeof window !== `undefined`
				? window.innerHeight + "px"
				: "100vh"};

			z-index: 0;
		`;
	};
	imgContCss = (objectFit) => {
		objectFit = objectFit ? objectFit : "cover";
		return css`
			height: ${typeof window !== `undefined`
				? window.innerHeight + "px"
				: "100vh"};
			margin-left: auto;
			margin-right: auto;
			.gatsby-image-wrapper {
				height: 100%;
				img {
					object-fit: ${objectFit} !important;
				}
			}
		`;
	};
	videoContCss = (objectFit) => {
		objectFit = objectFit ? objectFit : "cover";
		return css`
			height: ${typeof window !== `undefined`
				? window.innerHeight + "px"
				: "100vh"};
			margin-left: auto;
			margin-right: auto;

			height: 100%;
			video {
				object-fit: ${objectFit} !important;
			}
		`;
	};
	resumeButtonCss = () => css`
		width: 50px;
		height: 50px;
		position: absolute;
		right: 70px;
		top: 25px;
		z-index: 1000;
		transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
		.on-pause & {
			opacity: 0;
		}
		${Libs.Styles.Mq.moreTab} {
			right: 70px;
		}
		${Libs.Styles.Mq.lessPab} {
			right: 60px;
		}
		label {
			outline: none;
			display: block;
			width: 50px;
			height: 50px;
			cursor: pointer;
			/*background-color:#f00;*/
			span {
				position: relative;
				display: block;
				box-sizing: border-box;
				width: 25px;
				height: 30px;
				margin: 0 auto;
				border-color: transparent transparent transparent #ffffff;
				transition: 100ms all ease;
				will-change: border-width;

				/* paused state*/
				border-style: double;
				border-width: 0px 0px 0px 25px;
				top: 50%;
				transform: translateY(-50%);
			}
		}
		input[type="checkbox"] {
			visibility: hidden;
			outline: none;
			display: none;
			&:checked + label {
				span {
					/* play state*/
					border-style: solid;
					border-width: 15px 0 15px 25px;
				}
			}
		}
	`;

	closeButtonCss = () => css`
		position: absolute;
		right: 20px;
		top: 30px;
		z-index: 1000;
		transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
		.on-pause & {
			opacity: 0;
		}
	`;
	helpButtonCss = () => css`
		position: absolute;
		right: 20px;
		top: 80px;
		z-index: 1000;
		transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
		span {
			pointer-events: none;
		}
		.on-pause & {
			opacity: 0;
		}
	`;
	BlockItem = (childMargin = 80, childMarginSp = 60) => {
		return css`
			position: absolute;
			z-index: 100;

			${Libs.Common.Func.getPcSpVwValue(
				"margin-top",
				childMargin,
				childMarginSp
			)};
			&:first-child {
				margin-top: 0px;
			}
		`;
	};
	BlockImageCss = () => {
		return css`
			position: absolute;
			z-index: 99;
			top: 0px;
			left: 0px;
			width: 100vw;
			height: 100vh;
		`;
	};
	DetailBlockCss = () => {
		return css`
			position: absolute;
			z-index: 101;

			height: auto;

			${Libs.Styles.Mq.moreTab} {
				width: 40vw;
				bottom: 10vh;
				left: 10vw;
			}
			${Libs.Styles.Mq.lessPab} {
				width: 88vw;
				bottom: 5vh;
				left: 6vw;
			}
		`;
	};
	ItemCss = () => {
		return css`
			z-index: 110;
		`;
	};
	InnerBlockItemCss = (childMargin = 30, childMarginSp = 10) => {
		return css`
			${Libs.Common.Func.getPcSpVwValue(
				"margin-top",
				childMargin,
				childMarginSp
			)};
			&:first-child {
				margin-top: 0px;
			}
		`;
	};
	// object-fit: contain !important;
	constructor(props) {
		super(props);
		const { story, slug } = this.props;
		this.items = story[0].items;
		this.indicator = React.createRef();
		this.storyCont = React.createRef();
		this.currentSlide = 0;
		this.currentContentName = null;
		this.itemNum = 0;
		this.counter = 0;
		this.imgLoadedList = [];
		this.imgLoadCheckerFlag = false;
		this.isInitLoadCounter = 3;
		this.state = {
			ready: false,
		};
		this.mediaRefs = [];
		this.mediaCounter = 0;

		this.metaInfoList = [];
		this.barHeight = 0;
		this.loadImageCounter = 1;

		this.imgloadStartComplete = false;
	}
	resumeClickHandler = (event) => {
		const video = this.metaInfoList[this.currentSlide];

		// this.indicator.pause()
		if (!this.indicator.getIsPause()) {
			this.indicator.pause();
		} else {
			this.indicator.restart();
		}

		return false;
	};
	closeClickHandler = () => {
		const { dispatch } = this.props;
		let langKey = Libs.Common.Func.getLangKey();
		this.indicator.complete();
		const cont = document.querySelector("html");
		let category = null;
		if (cont.classList.contains("category-works")) {
			category = "works";
		} else if (cont.classList.contains("category-journal")) {
			category = "journal";
		} else if (cont.classList.contains("category-shop")) {
			category = "shop";
		}
		Transition.TrigerFadeTransition.TrigerFadeTransition(
			`/${langKey}/${category}/`,
			dispatch
		);
	};
	helpClickHandler = () => {
		const { dispatch } = this.props;
		dispatch(OverlayOpen({ element: Modules.Help }));
	};
	getElementImage = (content, css, inner, num) => {
		const imgSrc = WindowResize.currentType(WindowResize.lessPab)
			? content.imageSp
				? content.imageSp
				: content.image
			: content.image;

		this.ratio = imgSrc && imgSrc.sizes ? imgSrc.sizes.aspectRatio : 1;
		if (!inner) {
			//content.widthPc = getElementWidth(content, "pc")
			//content.widthSp = getElementWidth(content, "sp")
		}

		if (!content.image) {
			return "";
		} else {
			if (content.image.fluid && content.image.fluid.src) {
				return (
					<div css={css} className={"story-item"}>
						<Libs.Atoms.ImageElement
							css={[this.imgContCss(content.objectFit), this.ImgCss()]}
							styles={content}
							onload={(props = num) => {
								this.setMedialoaded(num);
							}}
						/>
					</div>
				);
			} else {
				this.mediaRefs[num] = true;
				this.mediaCounter++;

				return (
					<div css={css} className={"story-item"}>
						<Libs.Atoms.VideoElement
							ontimeupdate={(instance, event, props = num) => {
								if (this.indicator)
									this.indicator.update(num, event.target.currentTime);
							}}
							css={[this.videoContCss(content.objectFit), this.ImgCss()]}
							styles={content}
							onloadmetadata={(instance, duration, props = num) => {
								this.setVideoMetaData(num, instance, duration);
							}}
							onload={(instance, props = num) => {
								this.setMedialoaded(num, instance);
							}}
						/>
					</div>
				);
			}
		}
	};
	getElementText = (content, css, inner) => {
		const elementType = Libs.Common.Func.getTextType(content.type);

		return (
			<elementType.element
				css={css}
				styles={content}
				className={content.class ? content.class : ""}
			>
				{content.text}
			</elementType.element>
		);
	};
	getElementLink = (content, css, inner) => {
		return (
			<Libs.Atoms.LinkElement
				icon={content.icon}
				css={css}
				className={content.class}
				styles={content}
			>
				{content.label}
			</Libs.Atoms.LinkElement>
		);
	};
	getBlockElement = (content, isInner, num) => {
		const contCss = isInner ? this.ItemCss : this.contentWrapperCss;
		const absoluteItemCss = isInner ? null : this.ItemCss;
		const detailItemCss = isInner ? null : this.ItemCss;
		const childMargin = content.childMargin ? content.childMargin : 15;
		const childMarginSp = content.childMarginSp ? content.childMarginSp : 10;
		let isImage = false;

		const bodyContent = content.body.map((bodyItem, i) => {
			if (!bodyItem.spacePc && i !== 0 && isInner) {
				bodyItem.spacePc = `${childMargin} 0 0 0`;
			}
			if (!bodyItem.spaceSp && i !== 0 && isInner) {
				bodyItem.spaceSp = `${childMarginSp} 0 0 0`;
			}

			if (bodyItem.internal.type === "ContentfulElementImage") {
				isImage = true;
				return this.getElementImage(bodyItem, this.BlockImageCss, true, num);
			} else if (bodyItem.internal.type === "ContentfulElementText") {
				return this.getElementText(bodyItem, isInner ? null : this.ItemCss);
			} else if (bodyItem.internal.type === "ContentfulElementTextField") {
				return (
					<Libs.Atoms.RichText
						styles={bodyItem}
						css={isInner ? null : this.ItemCss}
						className={bodyItem.class ? bodyItem.class : ""}
					>
						{bodyItem.field}
					</Libs.Atoms.RichText>
				);
			} else if (bodyItem.internal.type === "ContentfulElementLink") {
				return this.getElementLink(bodyItem, isInner ? null : this.ItemCss);
			} else if (bodyItem.internal.type === "ContentfulElementEmbed") {
				return (
					<Libs.Atoms.EmbedElement
						css={absoluteItemCss}
						styles={bodyItem}
					></Libs.Atoms.EmbedElement>
				);
			} else if (bodyItem.internal.type === "ContentfulElementBlock") {
				return this.getBlockElement(bodyItem, true);
			}
		});
		if (num && !isImage) {
			this.imgLoadedList[num] = true;
		}
		return (
			<Libs.Atoms.BlockElement
				className={"story-item"}
				css={contCss}
				styles={content}
			>
				{bodyContent}
			</Libs.Atoms.BlockElement>
		);
	};

	indicatorResume = () => {
		const video = this.metaInfoList[this.currentSlide];
		if (this.mediaRefs[this.currentSlide] && !video) {
			console.log("ERROR");
		}
		if (video) {
			video.instance.play();
		}
		if (!this.imgloadStartComplete) {
			this.setLoadImage();
		}
		this.indicator.resume(video ? video.duration : null);
	};
	setVideoMetaData = (id, instance, duration) => {
		instance.pause();
		this.metaInfoList[id] = { instance: instance, duration: duration };
	};
	setMedialoaded = (id, instance) => {
		if (!this.imgLoadedList[id]) {
			this.imgLoadedList[id] = true;
		}
		if (this.imgLoadCheckerFlag && this.imgLoadedList[this.currentSlide]) {
			const cont = document.querySelector("html");
			cont.classList.remove(`page-load`);

			this.indicatorResume();
		}
	};
	imgLoadedChecker = (init) => {
		this.imgLoadCheckerFlag = false;
		if (this.imgLoadedList[this.currentSlide]) {
			const cont = document.querySelector("html");
			cont.classList.remove(`page-load`);
			this.indicatorResume();
		} else {
			const cont = document.querySelector("html");
			cont.classList.add(`page-load`);
			this.imgLoadCheckerFlag = true;
		}
	};
	componentDidMount() {
		this.itemNum = this.items.length;

		if (typeof window !== `undefined`) {
			this.setState({ ready: true });
		}
		this.storyItems = document.getLibs.AtomsByClassName("story-item");
	}
	setLoadImage = () => {
		const me = this;
		setTimeout(function() {
			//console.log("this -- ", me.storyItems)
			me.loadImage();
		}, 200);
	};
	loadImage = () => {
		const me = this;
		const len =
			this.isInitLoadCounter && this.isInitLoadCounter < me.storyItems.length
				? this.isInitLoadCounter
				: me.storyItems.length;

		if (me.loadImageCounter < len) {
			me.storyItems[me.loadImageCounter].style.display = "block";
			me.loadImageCounter++;

			if (me.loadImageCounter == me.storyItems.length) {
				me.imgloadStartComplete = true;
			} else if (me.isInitLoadCounter == me.loadImageCounter) {
				me.isInitLoadCounter = null;
			} else {
				me.setLoadImage();
			}
		}
	};
	shouldComponentUpdate(nextProps, nextState) {
		const cont = document.querySelector("html");

		if (nextProps.screenH !== this.storyCont.clientHeight) {
			this.storyCont.style.height = `${nextProps.screenH}px`;
			return true;
		}
		if (cont.classList.contains("now-transition")) {
			return false;
		}

		if (this.currentContentName !== nextProps.current) {
			this.currentContentName = nextProps.current;
			//this.indicator.init(this.itemNum)

			this.indicator.init(this.itemNum, this.metaInfoList);
			this.setLoadImage();
			this.imgLoadedChecker(true);
			return false;
		} else {
			if (!isNaN(nextProps.sliderId)) {
				if (this.metaInfoList[this.currentSlide]) {
					this.metaInfoList[this.currentSlide].instance.pause();
				}
				this.currentSlide = nextProps.sliderId;
				this.imgLoadedChecker();
				return true;
			} else {
				return false;
			}
		}
		return false;
	}

	render() {
		const { story, slug, next, prev, category } = this.props;
		const items = this.items;

		this.mediaCounter = 0;
		return (
			<div
				css={this.storyContCss}
				ref={(el) => {
					this.storyCont = el;
				}}
			>
				<Modules.SliderIndicators
					len={items.length}
					next={next}
					prev={prev}
					category={category}
					ref={(el) => {
						this.indicator = el;
					}}
				></Modules.SliderIndicators>

				<div className={"playpause bc-button"} css={this.resumeButtonCss}>
					<input
						className={"bc-button"}
						type="checkbox"
						value="None"
						id="playpause"
						name="check"
					/>
					<label
						className={"bc-button"}
						for="playpause"
						tabindex="1"
						onClick={(event) => {
							this.resumeClickHandler();
							event.stopPropagation();

							return false;
						}}
					>
						<span className={"bc-button"}></span>
					</label>
				</div>
				<Libs.Atoms.ButtonClose
					css={this.closeButtonCss}
					color={"#fff"}
					activeClass={"on-story"}
					clickHandler={this.closeClickHandler}
				/>
				<Libs.Atoms.LinkElement
					onClick={(event) => {
						this.helpClickHandler();
						return false;
					}}
					styles={{
						url: "",
						fontPc: {
							fontSize: 20,
							bold: true,
							color: "#fff",
							letterSpacing: 1,
						},
						fontSp: {
							fontSize: 20,
							bold: true,
							color: "#fff",
							letterSpacing: 1,
						},
					}}
					css={this.helpButtonCss}
				>
					HELP
				</Libs.Atoms.LinkElement>
				<div css={this.contentContCss}>
					{items &&
						items.map((item, i) => {
							if (item.__typename === "ContentfulElementBlock") {
								return this.getBlockElement(item, false, i);
							} else if (item.__typename === "ContentfulElementImage") {
								return this.getElementImage(
									item,
									this.contentWrapperCss,
									false,
									i
								);
							}
						})}
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state, filter) => {
	return {
		sliderId: Number(state.SliderReducer.sliderId),
		current: state.TransitionReducer.current,
		screenH: state.ResizeReducer.screenHeight,
	};
};

export default connect(mapStateToProps)(StoryElement);
