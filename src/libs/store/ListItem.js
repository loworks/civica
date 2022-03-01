import React, { useContext } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import StoreContext from "../context/StoreContext";
import * as Atoms from "../atoms";
import * as Common from "../common";
import * as Styles from "../styles";

const LineItem = (props) => {
	const { item } = props;
	const {
		updateLineItem,
		removeLineItem,
		store: { client, checkout },
	} = useContext(StoreContext);

	const contCss = (props) => {
		return css`
			display: flex;
			padding: 20px 0;
			justify-content: space-between;
			&:not(&:first-child) {
				border-top: 1px solid #efefef;
			}
		`;
	};
	const leftCont = (props) => {
		return css`
			width: 80%;
			${Styles.Mq.moreTab} {
				margin-left: 5%;
			}
			${Styles.Mq.lessPab} {
				margin-left: 3%;
			}
		`;
	};
	const flexCss = (props) => {
		return css`
			display: flex;
			justify-content: space-between;
			align-items: center;
		`;
	};

	const spnCss = (props) => {
		return css`
			text-transform: uppercase;
			vertical-align: middle;
		`;
	};

	const imgContCss = (props) => {
		return css`
			display: inline-block;
			height: 60px;
			width: 65px;

			overflow: hidden;
			position: relative;
			img {
				transform: translateX(-50%);
				left: 50%;
				position: absolute;
				height: 100%;
			}
		`;
	};
	const counterContCss = (props) => {
		return css`
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 80px;
		`;
	};
	const buttonCss = (props) => {
		const getIcon = (type) => {
			if (type === "add") {
				return css`
					&:before {
						height: 8px;
						width: 1px;
					}

					&:after {
						height: 1px;
						width: 8px;
					}
				`;
			} else {
				return css`
					&:after {
						height: 1px;
						width: 8px;
					}
				`;
			}
		};
		return css`
			cursor: pointer;
			border: 1px solid #000;
			background-color: #fff;
			font-size: 12px;
			height: 22px;
			width: 22px;
			border-radius: 4px;
			position: relative;

			&:after,
			&:before {
				content: "";
				display: block;
				background-color: #000;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			${getIcon(props)}

			font-size: 8px;
		`;
	};
	const variantTitleCss = (props) => {
		return css`
			width: 40%;
		`;
	};
	const textStyles = {
		fontPc: {
			fontFace: "sansserif",
			fontSize: 14,
			lineHeight: 14,
			letterSpacing: 0.5,
		},
		fontSp: {
			fontFace: "sansserif",
			fontSize: 14,
			lineHeight: 14,
			letterSpacing: 0.5,
		},
	};

	const variantImage = item.variant.image ? (
		<img src={item.variant.image.src} alt={`${item.title} product shot`} />
	) : null;

	const handleRemove = () => {
		removeLineItem(client, checkout.id, item.id);
	};
	const handleQuantityChange = (event) => {
		let value = item.quantity;
		const classList = event.currentTarget.classList;

		if (classList.contains("add")) {
			value += 1;
		} else if (classList.contains("sub")) {
			value -= 1;
		}

		updateLineItem(client, checkout.id, item.id, value);
	};

	let price = Common.StoreFunc.getPrice(item.variant.presentmentPrices);
	price = price
		.replace("$", "")
		.replace("¥", "")
		.replace(",", "");

	const currencyLetter = Common.Func.getLangKey() === "en" ? "$" : "¥";

	return (
		<div css={contCss}>
			<Link css={imgContCss} to={`/shop/${item.variant.product.handle}/`}>
				<Atoms.Image
					src={item.variant.image.src}
					alt={`${item.title} product shot`}
				/>
				{variantImage}
			</Link>
			<div css={leftCont}>
				<div css={flexCss}>
					<Atoms.H4
						styles={{
							fontPc: { fontFace: "sansserif", fontSize: 18, lineHeight: 18 },
							fontSp: { fontFace: "sansserif", fontSize: 16, lineHeight: 16 },
							positionPc: { space: "0 0 4 0" },
							positionSp: { space: "0 0 4 0" },
						}}
					>
						{item.title}
					</Atoms.H4>
					<div>
						<a href="#" onClick={handleRemove}>
							<Atoms.Span styles={{ fontFace: "sansself" }}>Remove</Atoms.Span>
						</a>
					</div>
				</div>
				<div css={flexCss}>
					<Atoms.P css={variantTitleCss}>
						<Atoms.Span css={spnCss} styles={textStyles}>
							{item.variant.title !== "Default Title" &&
							item.variant.title !== "Title: Default Title"
								? item.variant.title
								: ""}
						</Atoms.Span>
					</Atoms.P>
					<div css={counterContCss}>
						<button
							className={"sub"}
							onClick={(event) => handleQuantityChange(event)}
							css={buttonCss}
						></button>
						<Atoms.Span css={spnCss} styles={textStyles}>
							{` ${item.quantity} `}
						</Atoms.Span>
						<button
							className={"add"}
							onClick={(event) => handleQuantityChange(event)}
							css={[buttonCss("add")]}
						></button>
					</div>
					<div>
						<Atoms.Span styles={textStyles}>
							{currencyLetter + price}
						</Atoms.Span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LineItem;
