import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";

import { WindowResize } from "../redux/event/WindowResize";
import { css } from "@emotion/react";

export class VideoElement extends PureComponent {
	constructor(props) {
		super(props);

		this.videoCont = React.createRef();
		this.videoElement = null;
	}
	play() {
		var promise = this.videoElement.play();
		if (promise !== undefined) {
			promise
				.catch((error) => {
					// Show a UI element to let the user manually start playback
				})
				.then(() => {
					// Auto-play started
				});
		}
	}
	pause() {
		var promise = this.videoElement.pause();
		this.videoElement.currentTime = 0;
		if (promise !== undefined) {
			promise
				.catch((error) => {
					// Auto-play was prevented
					// Show a UI element to let the user manually start playback
				})
				.then(() => {
					// Auto-play started
				});
		}
	}
	componentDidMount() {
		let { onload, onloadmetadata, ontimeupdate } = this.props;

		this.videoElement = this.videoCont.getElementsByTagName("video")[0];

		this.videoElement.addEventListener("error", (event) => {
			//  console.log("state -- videoElement -- error", event)
		});
		this.videoElement.addEventListener("timeupdate", (event) => {
			if (ontimeupdate) ontimeupdate(this, event);
		});
		this.videoElement.addEventListener("loadedmetadata", (event) => {
			if (onloadmetadata) onloadmetadata(this, event.target.duration);
		});

		if (this.videoElement) {
			this.videoElement.onloadeddata = (event) => {
				event.target.classList.add("loaded");
				if (onload) onload(this);
			};
		}
		this.videoElement.load();
	}
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

		const getElementWidth = (props, type, parent) => {
			const keys =
				type == "pc" ? ["widthPc", "width_pc"] : ["widthSp", "width_sp"];
			return props[keys[0]] || props[keys[1]]
				? props[keys[0]]
					? props[keys[0]]
					: props[keys[1]]
				: parent && (parent[keys[0]] || parent[keys[1]])
				? parent[keys[0]]
					? parent[keys[0]]
					: parent[keys[1]]
				: 100;
		};

		const stylesObj = {
			display: "block",
		};
		const styles = data.instance.styles;
		//const videoSrc = styles.image.fluid.src ? null : styles.image.file.url
		const videoSrc = WindowResize.currentType(WindowResize.lessPab)
			? styles.imageSp
				? styles.imageSp
				: styles.image
			: styles.image;

		styles.widthPc = getElementWidth(styles, "pc");
		styles.widthSp = getElementWidth(styles, "sp");

		const classStr = data.instance.styles.class;

		return (
			<div
				ref={forwardedRef}
				css={data.func(stylesObj, data.instance)}
				className={`${className ? className : ""} img-cont ${
					onload ? "img-element" : ""
				} ${classStr ? classStr : ""} video-cont`}
				{...rest}
				ref={(el) => {
					this.videoCont = el;
				}}
				dangerouslySetInnerHTML={{
					__html: `
        <video

          muted
          playsinline
        >
        <source src="${videoSrc.file.url}" type="video/mp4" />
        </video>`,
				}}
			/>
		);
	}
}

export default elementHoc(VideoElement);
