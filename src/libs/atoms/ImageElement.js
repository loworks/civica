import React, { PureComponent } from "react";
import { elementHoc } from "./ElementHoc";
import Img from "gatsby-image";
import * as LibsAtoms from "./";
import { css } from "@emotion/react";
import * as Styles from "../styles";
import { WindowResize } from "../redux/event/WindowResize";
import * as Common from "../common";
export class ImageElement extends PureComponent {
	constructor(props) {
		super(props);
		this.imgElement = React.createRef();
		this.state = { imgContHeight: 0 };
		this.imgCont = React.createRef();
	}
	componentDidMount() {
		this.setState({
			imgContHeight: this.imgCont.clientWidth / this.ratio,
		});
	}
	render() {
		let {
			className,
			onload,

			src,
			forwardedref,
			children,
			data,
			caption = null,

			...rest
		} = this.props;

		const getElementWidth = (props, type, parent) => {
			const keys =
				type === "pc" ? ["widthPc", "width_pc"] : ["widthSp", "width_sp"];
			return props[keys[0]] || props[keys[1]]
				? props[keys[0]]
					? props[keys[0]]
					: props[keys[1]]
				: parent && (parent[keys[0]] || parent[keys[1]])
				? parent[keys[0]]
					? parent[keys[0]]
					: parent[keys[1]]
				: "auto";
		};

		const stylesObj = {
			display: "block",
		};
		const styles = data.instance.styles;
		const videoSrc = styles.image.fluid.src ? null : styles.image.file.url;
		const imgSrc = WindowResize.currentType(WindowResize.lessPab)
			? styles.imageSp
				? styles.imageSp
				: styles.image
			: styles.image;

		this.ratio = imgSrc ? imgSrc.sizes.aspectRatio : 1;

		styles.widthPc = getElementWidth(styles, "pc");
		styles.widthSp = getElementWidth(styles, "sp");

		const website_url = Common.Config.websiteUrl;
		const localhost = Common.Config.localUrl;
		const link = this.props.data.instance.styles.link;
		const classStr = data.instance.styles.class;

		const imgContCss = () => {
			const objectFit = styles.objectFit ? styles.objectFit : "cover";
			const objectFitSp = styles.objectFitSp
				? styles.objectFitSp
				: styles.objectFit
				? styles.objectFit
				: "cover";
			const heightValue = this.state.imgContHeight;
			return css`
				.gatsby-image-wrapper {
					${Styles.Mq.lessPab} {
						height: ${heightValue}px;
					}
					img {
						${Styles.Mq.moreTab} {
							object-fit: ${objectFit} !important;
						}
						${Styles.Mq.lessPab} {
							object-fit: ${objectFitSp} !important;
						}
					}
				}
			`;
		};

		const getLinkElement = () => {
			if (link.startsWith(website_url) || link.startsWith(localhost)) {
				return (
					<>
						<LibsAtoms.AnimationLink
							to={link.slice(link.indexOf(website_url) + website_url.length)}
						>
							<Img
								onLoad={(props) => {
									this.imgElement.imageRef.current.classList.add("loaded");
									if (onload) onload();
								}}
								ref={(el) => {
									this.imgElement = el;
								}}
								fluid={imgSrc.fluid}
								alt={imgSrc.title}
							/>
						</LibsAtoms.AnimationLink>
						{caption ? (
							<LibsAtoms.H4
								styles={{
									spFontSize: 11,
									spLineHeight: 14,
									spacingPc: { top: 10 },
									spacingSp: { top: 10 },
								}}
							>
								{caption}
							</LibsAtoms.H4>
						) : (
							""
						)}
					</>
				);
			} else {
				return (
					<a
						href={link}
						target={`${link.startsWith(website_url) ? "_self" : "_new"}`}
						rel={`${link.startsWith(website_url) ? "" : "noopener noreferrer"}`}
					>
						<Img
							onLoad={(props) => {
								this.imgElement.imageRef.current.classList.add("loaded");
								if (onload) onload();
							}}
							ref={(el) => {
								this.imgElement = el;
							}}
							fluid={imgSrc.fluid}
							alt={imgSrc.title}
						/>
						{caption ? (
							<LibsAtoms.H4
								styles={{
									fontPc: {
										fontSize: 14,
										lineHeight: 15,
										textAligh: "center",
									},
									fontSp: {
										fontSize: 14,
										lineHeight: 15,
										textAligh: "center",
									},

									positionPc: { space: "10 0 0 0" },
									positionSp: { space: "10 0 0 0" },
								}}
							>
								{caption}
							</LibsAtoms.H4>
						) : (
							""
						)}
					</a>
				);
			}
		};
		const Tag = styles.containerTag ? styles.containerTag : "div";

		return (
			<Tag
				ref={[
					forwardedref,
					(el) => {
						this.imgCont = el;
					},
				]}
				css={[data.func(stylesObj, data.instance)(), imgContCss()]}
				className={`${className ? className : ""} img-cont ${
					onload ? "img-element" : ""
				} ${classStr ? classStr : ""}`}
				{...rest}
			>
				<div
					className={"img-inner-cont"}
					ref={(el) => {
						this.imgCont = el;
					}}
				>
					{videoSrc ? (
						<video
							className="bg-video"
							muted=""
							autoplay=""
							loop=""
							playsinline=""
						>
							<source src={videoSrc} type="video/mp4" />
							<track />
						</video>
					) : imgSrc ? (
						link ? (
							getLinkElement()
						) : (
							<>
								<Img
									onLoad={(props) => {
										this.imgElement.imageRef.current.classList.add("loaded");
										if (onload) onload();
									}}
									ref={(el) => {
										this.imgElement = el;
									}}
									fluid={imgSrc.fluid}
									alt={imgSrc.title}
								/>
								{caption ? (
									<LibsAtoms.H4
										styles={{
											fontPc: {
												fontSize: 14,
												lineHeight: 15,
												textAlign: "center",
												fontFace: "sansserif",
											},
											fontSp: {
												fontSize: 14,
												lineHeight: 15,
												fontFace: "sansserif",
												textAlign: "center",
											},

											positionPc: { space: "10 0 0 0" },
											positionSp: { space: "10 0 0 0" },
										}}
									>
										{caption}
									</LibsAtoms.H4>
								) : (
									""
								)}
							</>
						)
					) : (
						""
					)}
				</div>
			</Tag>
		);
	}
}

export default elementHoc(ImageElement);
