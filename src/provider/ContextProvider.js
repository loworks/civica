import React, { useState, useEffect } from "react";
import Client from "shopify-buy";
import Context from "libs/context/StoreContext";
import * as Libs from "libs";

const client = Client.buildClient({
	storefrontAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
	domain: `${process.env.SHOP_NAME}.myshopify.com`,
});

const ContextProvider = ({ children }) => {
	let initialStoreState = {
		client,
		adding: false,
		checkout: { lineItems: [] },
		products: [],
		shop: {},
	};

	const [store, updateStore] = useState(initialStoreState);
	let isRemoved = false;

	useEffect(() => {
		const initializeCheckout = async () => {
			// Check for an existing cart.
			const isBrowser = typeof window !== "undefined";
			const existingCheckoutID = isBrowser
				? localStorage.getItem("shopify_checkout_id")
				: null;

			const setCheckoutInState = (checkout) => {
				if (isBrowser) {
					localStorage.setItem("shopify_checkout_id", checkout.id);
				}

				updateStore((prevState) => {
					return { ...prevState, checkout };
				});
			};
			const langKey = Libs.Common.Func.getLangKey();

			//const createNewCheckout = () => store.client.checkout.create({presentmentCurrencyCode: "USD"})
			const fetchCheckout = (id) => store.client.checkout.fetch(id);

			if (existingCheckoutID) {
				try {
					const checkout = await fetchCheckout(existingCheckoutID);
					const currencyCode = checkout.currencyCode;

					if (
						(langKey === "en" && currencyCode !== "USD") ||
						(langKey === "ja" && currencyCode !== "JPY")
					) {
						localStorage.setItem("shopify_checkout_id", null);
					} else {
						if (!isRemoved && !checkout.completedAt) {
							setCheckoutInState(checkout);
							return;
						}
					}

					// Make sure this cart hasn’t already been purchased.
				} catch (e) {
					localStorage.setItem("shopify_checkout_id", null);
				}
			}
			const createNewCheckout = () =>
				langKey !== "en"
					? store.client.checkout.create()
					: store.client.checkout.create({ presentmentCurrencyCode: "USD" });

			const newCheckout = await createNewCheckout();

			if (!isRemoved) {
				setCheckoutInState(newCheckout);
			}
		};

		initializeCheckout();
	}, [store.client.checkout]);

	useEffect(
		() => () => {
			isRemoved = true;
		},
		[]
	);

	return (
		<Context.Provider
			value={{
				store,
				addVariantToCart: (variantId, quantity) => {
					console.error("client -- addCart");
					if (variantId === "" || !quantity) {
						console.error("Both a size and quantity are required.");
						return;
					}

					updateStore((prevState) => {
						return { ...prevState, adding: true };
					});

					const { checkout, client } = store;

					const checkoutId = checkout.id;
					const lineItemsToUpdate = [
						{ variantId, quantity: parseInt(quantity, 10) },
					];

					return client.checkout
						.addLineItems(checkoutId, lineItemsToUpdate)
						.then((checkout) => {
							updateStore((prevState) => {
								return { ...prevState, checkout, adding: false };
							});
						});
				},
				removeLineItem: (client, checkoutID, lineItemID) => {
					return client.checkout
						.removeLineItems(checkoutID, [lineItemID])
						.then((res) => {
							updateStore((prevState) => {
								return { ...prevState, checkout: res };
							});
						});
				},
				updateLineItem: (client, checkoutID, lineItemID, quantity) => {
					const lineItemsToUpdate = [
						{ id: lineItemID, quantity: parseInt(quantity, 10) },
					];

					return client.checkout
						.updateLineItems(checkoutID, lineItemsToUpdate)
						.then((res) => {
							updateStore((prevState) => {
								return { ...prevState, checkout: res };
							});
						});
				},
				restoreCheckout: () => {
					const restoreCheckout = async () => {
						const isBrowser = typeof window !== "undefined";
						const setCheckoutInState = (checkout) => {
							if (isBrowser) {
								localStorage.setItem("shopify_checkout_id", checkout.id);
							}

							updateStore((prevState) => {
								return { ...prevState, checkout };
							});
						};
						const langKey = Libs.Common.Func.getLangKey();

						const createNewCheckout = () =>
							langKey !== "en"
								? store.client.checkout.create()
								: store.client.checkout.create({
										presentmentCurrencyCode: "USD",
								  });
						const newCheckout = await createNewCheckout();
						if (!isRemoved) {
							setCheckoutInState(newCheckout);
						}
					};
					restoreCheckout();
					return client.checkout;
				},
			}}
		>
			{children}
		</Context.Provider>
	);
};
export default ContextProvider;
