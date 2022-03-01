import React, { useContext } from "react";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { OverlayOpen } from "../redux/action";
import StoreContext from "../context/StoreContext";
import reduce from "lodash/reduce";
import * as Store from "../store";
import * as LibsAtoms from "./";

export const IconBag = (props) => {
	let { type, ...rest } = props;
	const dispatch = useDispatch();
	const useQuantity = () => {
		const {
			store: { checkout },
		} = useContext(StoreContext);
		const items = checkout ? checkout.lineItems : [];
		const total = reduce(items, (acc, item) => acc + item.quantity, 0);
		return [total !== 0, total];
	};
	const onBag = () => {
		dispatch(OverlayOpen({ element: Store.Bag, props: { ...rest } }));
	};
	const bacCss = () => css`
		cursor: pointer;
		position: relative;
	`;
	const bagUnitCont = () => css`
		position: absolute;
		top: 0;
		right: 0;
		background-color: #000;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		color: #fff;
		font-size: 0.625rem;
		line-height: 1;
		transform: translate(50%, -50%);
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		-webkit-align-items: center;
		-moz-align-items: center;
		-ms-align-items: center;
		-o-align-items: center;
		align-items: center;
		-webkit-justify-content: center;
		-ms-justify-content: center;
		justify-content: center;
	`;
	const [hasItems, quantity] = useQuantity();

	return (
		<div
			{...rest}
			css={bacCss}
			onClick={() => {
				onBag();
			}}
		>
			<LibsAtoms.Icon type="bag" />

			<span css={bagUnitCont}>{quantity}</span>
		</div>
	);
};
