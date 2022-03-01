import React, { PureComponent } from "react";
import { css } from "@emotion/react";
import * as Styles from "../../libs/styles";
import * as Common from "../../common";
import * as Atoms from "../atoms";
import {
	FacebookShareButton,
	FacebookIcon,
	TwitterShareButton,
	TwitterIcon,
	LineShareButton,
	LineIcon,
	EmailShareButton,
	EmailIcon,
	PocketShareButton,
	PocketIcon,
	WhatsappShareButton,
	WhatsappIcon,
} from "react-share";

class ShareList extends PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { data } = this.props;
		const config = {
			via: "howltcoffee",
			size: 40,
			href: typeof window !== `undefined` ? window.location.href : "",
			iconBgStyle: { fill: "#fff" },
			logoFillColor: "#000",
		};
		const contCss = css`
			text-align: center;
			> * {
				display: inline-block;
				margin: 0 10px;
			}
		`;

		return (
			<div className="social-buttons" css={contCss}>
				<TwitterShareButton
					description={"aaa"}
					url={config.href}
					title={data.title}
					via={config.via}
				>
					<TwitterIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</TwitterShareButton>
				<LineShareButton url={config.href} title={data.title} via={config.via}>
					<LineIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</LineShareButton>
				<FacebookShareButton url={config.href}>
					<FacebookIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</FacebookShareButton>
				<WhatsappShareButton
					url={config.href}
					title={data.title}
					via={config.via}
				>
					<WhatsappIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</WhatsappShareButton>
				<EmailShareButton url={config.href} title={data.title} via={config.via}>
					<EmailIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</EmailShareButton>
				<PocketShareButton
					url={config.href}
					title={data.title}
					via={config.via}
				>
					<PocketIcon
						size={config.size}
						iconBgStyle={config.iconBgStyle}
						logoFillColor={config.logoFillColor}
					/>
				</PocketShareButton>
			</div>
		);
	}
}

export default ShareList;
