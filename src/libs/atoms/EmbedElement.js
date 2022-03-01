import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";

import { css } from "@emotion/react";
export class EmbedElement extends PureComponent {
	componentDidMount() {}
	render() {
		let {
			className,
			onload,
			src,
			forwardedRef,
			children,
			data,
			caption = null,

			...rest
		} = this.props;

		const contCss = (type) => {
			if (type == "Twitter") {
			} else if (type == "Instagram") {
				return css`
					position: relative;
					height: 0;
					padding-bottom: calc(125% + 220px);
					overflow: hidden;
					iframe {
						position: absolute;
						left: 0;
						width: 100%;
						height: 100%;
					}
				`;
			} else {
				return css`
					position: relative;
					height: 0;
					padding: 0 0 56.25%;
					overflow: hidden;
					iframe {
						position: absolute;
						left: 0;
						width: 100%;
						height: 100%;
					}
				`;
			}
		};

		const stylesObj = {
			display: "block",
		};

		const type = data.instance.styles.type;

		const getEmbedElement = () => {
			if (type === `Giphy`) {
				return (
					<iframe
						src={`https://giphy.com/embed/${data.instance.styles.embedId}`}
						width="100%"
						height="100%"
						frameBorder="0"
						class="giphy-embed"
						allowFullScreen
					></iframe>
				);
			} else if (type === `Vimeo2`) {
				return (
					<video
						className="bg-video"
						muted=""
						autoplay=""
						loop=""
						playsinline=""
					>
						<source
							src="https://player.vimeo.com/external/453763810.hd.mp4?s=2f1533511bd577f1196b4f9a2e74e5afa6e9cb57&amp;profile_id=175"
							type="video/mp4"
						/>
					</video>
				);
			} else if (type === `Vimeo`) {
				return (
					<iframe
						src={`https://player.vimeo.com/video/${data.instance.styles.embedId}?autoplay=0&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0`}
						width="100%"
						height="100%"
						frameborder="0"
						autoplay="1"
					></iframe>
				);
			} else if (type === `Youtube`) {
				return (
					<iframe
						src={`https://www.youtube.com/embed/${data.instance.styles.embedId}`}
						width="100%"
						height="100%"
						frameborder="0"
						autoplay="1"
					></iframe>
				);
			} else if (type === `Twitter`) {
				return (
					<blockquote class="twitter-tweet">
						<a href={`${data.instance.styles.embedId}`}></a>
					</blockquote>
				);
			} else if (type === `Instagram`) {
				return (
					<blockquote
						class="instagram-media"
						data-instgrm-permalink={`https://www.instagram.com/p/${data.instance.styles.embedId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
						data-instgrm-version="14"
					></blockquote>
				);
			}
		};

		return (
			<div
				ref={forwardedRef}
				css={[data.func(stylesObj, data.instance)()]}
				className={`${
					className ? className : "giphy-item"
				} embed-cont embed-${type} ${onload ? "img-element" : ""}`}
				{...rest}
			>
				<div>
					<div css={[contCss(type)]}>{getEmbedElement()}</div>
				</div>
			</div>
		);
	}
}

export default elementHoc(EmbedElement);
