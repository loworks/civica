import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";
import * as Common from "../common";

import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	Autoplay,
} from "swiper";
import "swiper/swiper.min.css";

import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";

export class SwipeElement extends PureComponent {
	constructor(props) {
		super(props);
		this.state = { firstElementHeight: 0, swiperWidth: 0 };
		this.firstElementRef = React.createRef();
	}
	componentDidMount() {
		let { data } = this.props;
		const fiestElement = document.querySelector(".first-element");
		if (fiestElement) {
			const w = document.querySelector(".first-element").clientWidth;
			const ratio = data.instance.styles.items[0].image.sizes.aspectRatio;
			console.log("fiestElement -- ", fiestElement);
			this.setState({
				firstElementHeight: w / ratio,
				swiperWidth: w,
			});
		}
	}
	shouldComponentUpdate(nextProps, nextState) {
		const cont = document.querySelector(".embed-cont");
		const prev = document.querySelector(".swiper-button-prev");
		const next = document.querySelector(".swiper-button-next");
		const pagination = document.querySelector(".swiper-pagination");
		console.log("fiestElement -- 1", cont);
		if (nextState.firstElementHeight) {
			if (cont) {
				cont.appendChild(pagination);
				cont.appendChild(prev);
				cont.appendChild(next);
			}
			return true;
		}
	}
	render() {
		SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
		let {
			className,
			onload,
			src,
			forwardedRef,
			children,
			data,
			caption = null,
			getBlockElement,
			getElementImage,
			loop,
			...rest
		} = this.props;
		const device = Common.Func.getDeviceSize();

		const stylesObj = {
			display: "block",
		};
		const swipeNavigationCss = (props) => {
			const swiperSize = 300;
			return css`
				.swiper-button-prev,
				.swiper-button-next {
					position: absolute;
					top: 50%;
					width: calc(44 / 44 * 27) px;
					height: 28px;
					margin-top: calc(-1 * 44 / 2) px;
					z-index: 10;
					cursor: pointer;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #000;
					&.swiper-button-disabled {
						opacity: 0.35;
						cursor: auto;
						pointer-events: none;
					}
					&:after {
						font-family: swiper-icons;
						font-size: 28px;
						font-weight: bold;
						text-transform: none !important;
						letter-spacing: 0;
						text-transform: none;
						font-variant: initial;
						line-height: 1;
					}
				}
				.swiper-button-prev,
				.swiper-container-rtl .swiper-button-next {
					&:after {
						content: "prev";
					}
					left: -50px;
					right: auto;
				}
				.swiper-button-next,
				.swiper-container-rtl .swiper-button-prev {
					&:after {
						content: "next";
					}
					right: -50px;
					left: auto;
				}

				@each $navColorName, $navColorValue in $colors {
					.swiper-button-prev,
					.swiper-button-next {
						color: #fff !important;
					}
				}
				.swiper-button-lock {
					display: none;
				}
			`;
		};
		const swipePageNationCss = (props) => {
			const len = data.instance.styles.items.length;
			const margin = device !== "lessPab" ? 50 : 20;
			const display = len > 1 ? "block" : "none";
			const bulletWitdh = this.state.swiperWidth
				? this.state.swiperWidth / len - margin
				: 10;
			return css`
				.swiper-pagination {
					display: ${display};
					position: absolute;
					text-align: center;
					transition: 300ms opacity;
					transform: translate3d(0, 0, 0);
					z-index: 10;
					width: ${this.state.swiperWidth}px;
					&.swiper-pagination-hidden {
						opacity: 0;
					}
				}
				/* Common Styles */
				.swiper-pagination-fraction,
				.swiper-pagination-custom,
				.swiper-pagination-bullets {
					bottom: -25px;
				}
				.swiper-pagination-bullet {
					margin: 0 2px;
				}
				/* Bullets */
				.swiper-pagination-bullets-dynamic {
					overflow: hidden;
					font-size: 0;
					.swiper-pagination-bullet {
						transform: scale(0.33);
						position: relative;
					}
					.swiper-pagination-bullet-active {
						transform: scale(1);
					}
					.swiper-pagination-bullet-active-main {
						transform: scale(1);
					}
					.swiper-pagination-bullet-active-prev {
						transform: scale(0.66);
					}
					.swiper-pagination-bullet-active-prev-prev {
						transform: scale(0.33);
					}
					.swiper-pagination-bullet-active-next {
						transform: scale(0.66);
					}
					.swiper-pagination-bullet-active-next-next {
						transform: scale(0.33);
					}
				}
				.swiper-pagination-bullet {
					width: ${bulletWitdh}px;
					height: 2px;
					display: inline-block;
					border-radius: 2px;
					border: 1px solid #000;
					background: #000;
					opacity: 0.2;

					.swiper-pagination-clickable & {
						cursor: pointer;
					}
				}
				.swiper-pagination-bullet-active {
					opacity: 1;
					background: #000;
				}

				.swiper-container-vertical {
					> .swiper-pagination-bullets {
						right: 10px;
						top: 50%;
						transform: translate3d(0px, -50%, 0);
						.swiper-pagination-bullet {
							margin: 6px 0;
							display: block;
						}
						&.swiper-pagination-bullets-dynamic {
							top: 50%;
							transform: translateY(-50%);
							width: 8px;
							.swiper-pagination-bullet {
								display: inline-block;
								transition: 200ms transform, 200ms top;
							}
						}
					}
				}

				.swiper-container-horizontal {
					.swiper-pagination-bullets {
						&.swiper-pagination-bullets-dynamic {
							left: 50%;
							transform: translateX(-50%);
							white-space: nowrap;
							.swiper-pagination-bullet {
								transition: 200ms transform, 200ms left;
							}
						}
					}
					&.swiper-container-rtl
						> .swiper-pagination-bullets-dynamic
						.swiper-pagination-bullet {
						transition: 200ms transform, 200ms right;
					}
				}
				/* Progress */
				.swiper-pagination-progressbar {
					background: rgba(0, 0, 0, 0.25);
					position: absolute;
					.swiper-pagination-progressbar-fill {
						background: #007aff;

						position: absolute;
						left: 0;
						top: 0;
						width: 100%;
						height: 100%;
						transform: scale(0);
						transform-origin: left top;
					}
					.swiper-container-rtl & .swiper-pagination-progressbar-fill {
						transform-origin: right top;
					}
					.swiper-container-horizontal > &,
					.swiper-container-vertical
						> &.swiper-pagination-progressbar-opposite {
						width: 100%;
						height: 4px;
						left: 0;
						top: 0;
					}
					.swiper-container-vertical > &,
					.swiper-container-horizontal
						> &.swiper-pagination-progressbar-opposite {
						width: 4px;
						height: 100%;
						left: 0;
						top: 0;
					}
				}

				.swiper-pagination-lock {
					display: none;
				}
			`;
		};
		const swipeCss = (props) => {
			return css`
				position: relative;

				.swiper-container {
					height: ${this.state.firstElementHeight
						? this.state.firstElementHeight + "px"
						: "auto"};
					.gatsby-image-wrapper {
						height: ${this.state.firstElementHeight
							? this.state.firstElementHeight + "px"
							: "auto"};
						img {
							object-fit: contain !important;
						}
					}
					.img-cont {
						height: auto;
						width: auto;
					}
				}
			`;
		};

		return (
			<div
				ref={forwardedRef}
				css={[
					swipeCss(),
					device !== "lessPab" ? swipeNavigationCss() : "",
					swipePageNationCss(),
					data.func(stylesObj, data.instance)(),
				]}
				className={`${className ? className : "giphy-item"} embed-cont ${
					onload ? "img-element" : ""
				}`}
				{...rest}
			>
				<Swiper
					slidesPerView={1}
					navigation
					autoplay={false}
					centeredSlides={true}
					pagination={{ clickable: false }}
					grabCursor={true}
					speed={600}
					loop={loop !== null ? loop : false}
				>
					{data.instance.styles.items &&
						data.instance.styles.items.map((item, i) => {
							if (item.internal.type === "ContentfulElementBlock") {
								return (
									<SwiperSlide>{getBlockElement(item, false, i)}</SwiperSlide>
								);
							} else if (item.internal.type === "ContentfulElementImage") {
								return (
									<SwiperSlide>
										{getElementImage(item, null, false, i, "first-element")}
									</SwiperSlide>
								);
							}
						})}
				</Swiper>
			</div>
		);
	}
}

export default elementHoc(SwipeElement);
