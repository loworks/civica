import React, { useContext } from "react";
import { css } from "@emotion/react";
import StoreContext from "../context/StoreContext";
import LineItem from "./ListItem";
import * as Atoms from "../atoms";
import * as Common from "../common";
const Cart = (props) => {
	const { forwardRef } = props;
	const itemContCss = (props) => {
		return css`
			display: flex;
			justify-content: space-between;
			padding: 10px 0;
			border-top: 1px solid #efefef;
			> * {
				line-height: 0;
				align-self: center;
			}
		`;
	};
	const buttonCss = (props) => {
		return css`
			width: 100%;
			${Common.Func.getPcSpVwValue("margin-top", 30, 30)};
			button {
				width: 100%;
			}
		`;
	};

	const {
		store: { checkout },
	} = useContext(StoreContext);

	const handleCheckout = () => {
		const locale = checkout.currencyCode === "USD" ? "en" : "ja";
		const url = `${checkout.webUrl}&locale=${locale}`;
		console.log("handleAddToCart -- ", checkout.webUrl);
		window.open(url);
	};

	const lineItems = checkout.lineItems.map((item) => (
		<LineItem key={item.id.toString()} item={item} />
	));

	if (checkout.lineItems.length === 0) {
		return (
			<Atoms.P
				ref={forwardRef}
				styles={{
					spacePc: "0 0 50 0",
					fontPc: {
						fontSize: 26,
						fontFace: "sansserif",
						bold: true,
						textAlign: "center",
					},
					fontSp: {
						fontSize: 28,
						fontFace: "sansserif",
						bold: true,
						textAlign: "center",
					},
				}}
			>
				Your bag is empty.
			</Atoms.P>
		);
	} else {
		return (
			<div ref={forwardRef}>
				{lineItems}
				<div css={itemContCss}>
					<Atoms.H4
						styles={{
							fontPc: {
								fontFace: "sansserif",
								fontSize: 16,
								lineHeight: 16,
								letterSpacing: 0.5,
							},
							fontSp: {
								fontFace: "sansserif",
								fontSize: 16,
								lineHeight: 16,
								letterSpacing: 0.5,
							},
						}}
					>
						Subtotal
					</Atoms.H4>
					<Atoms.Span
						styles={{
							fontPc: {
								fontFace: "sansserif",
								fontSize: 16,
								lineHeight: 16,
								letterSpacing: 0.5,
							},
							fontSp: {
								fontFace: "sansserif",
								fontSize: 16,
								lineHeight: 16,
								letterSpacing: 0.5,
							},
						}}
					>
						{Common.StoreFunc.changeFormatToPrice(
							checkout.subtotalPriceV2.amount,
							checkout.currencyCode
						)}
					</Atoms.Span>
				</div>
				{/*<div css={itemContCss}>
        <Atoms.H4
          styles={{ fontFace: "sansself", pcFontSize: 14, spFontSize: 14 }}
        >
          Taxes
        </Atoms.H4>
        <Atoms.Span styles={{ fontFace: "sansself" }}>
          {Common.StoreFunc.changeFormatToPrice(
            checkout.totalTax,
            checkout.currencyCode
          )}
        </Atoms.Span>
      </div>
      <div css={itemContCss}>
        <Atoms.H4
          styles={{ fontFace: "sansself", pcFontSize: 14, spFontSize: 14 }}
        >
          Total
        </Atoms.H4>
        <Atoms.Span styles={{ fontFace: "sansself" }}>
          {Common.StoreFunc.changeFormatToPrice(
            checkout.totalPriceV2.amount,
            checkout.currencyCode
          )}
        </Atoms.Span>
      </div>*/}
				<Atoms.ButtonElement
					css={buttonCss}
					disabled={checkout.lineItems.length === 0}
					onClick={handleCheckout}
					spanStyles={{
						fontPc: {
							fontSize: 20,
							fontFace: "sansserif",
							bold: true,
							letterSpacing: ".5",
						},
						fontSp: {
							fontSize: 20,
							fontFace: "sansserif",
							bold: true,
							letterSpacing: ".5",
						},
					}}
				>
					Check out
				</Atoms.ButtonElement>
			</div>
		);
	}
};

export default Cart;
