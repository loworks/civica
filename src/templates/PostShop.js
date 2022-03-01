import React, { Component } from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";
import { OverlayOpen } from "libs/redux/action";
import { graphql } from "gatsby";

import * as Store from "../libs/store";
import * as Modules from "../components/modules";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { connect } from "react-redux";
import * as Libs from "libs";
class PostShop extends Component {
	//--------------------------------------
	//  Libs.Styles
	//--------------------------------------

	articleHeaderCss = () => {
		let lessPabCss = null;
		if (this.state.ready) {
			lessPabCss = css`
				height: ${this.articleHeader.clientHeight}px;
			`;
		}
		return css`
			${Libs.Styles.Mq.lessPab} {
				${lessPabCss}
			}
		`;
	};
	blocks = () =>
		css`
			margin-top: 10vw;

			margin-left: auto;
			margin-right: auto;
		`;

	imgContCss = (aspectRatio) => {
		const heightValue = this.state.imgContHeight;
		if (aspectRatio <= 1) {
			return css`
				height: 100vh;
				${Libs.Styles.Mq.moreTab} {
					height: 100vh;
					margin-left: auto;
					margin-right: auto;
					.gatsby-image-wrapper {
						height: 100%;
						img {
							object-fit: contain !important;
						}
					}
				}
				${Libs.Styles.Mq.lessPab} {
					height: ${heightValue}px;
					.gatsby-image-wrapper {
						height: ${heightValue}px;
					}
				}
			`;
		}
	};

	inlineAncher = () =>
		css`
			${Libs.Styles.Mixin.textAncher()}
		`;
	//--------------------------------------
	//  Scripts
	//--------------------------------------

	constructor(props) {
		super(props);

		// console.log("data ---", this.props, productInfo)
		this.articleHeader = React.createRef();
		/*
    this.imgSrc = WindowResize.currentType(WindowResize.lessPab)
      ? productInfo.headerImage.imageSp
        ? productInfo.headerImage.imageSp
        : productInfo.headerImage.image
      : productInfo.headerImage.image
    this.ratio = this.imgSrc.sizes.aspectRatio*/
		this.state = {
			ready: false,
			display: false,
		};
	}

	componentDidMount() {
		Libs.Common.Config.excuteTransition();
	}

	render() {
		const { data, pageContext } = this.props;
		const productInfo = data.contentfulContentShop;
		const product = data.shopifyProductVariant.product;

		const { next, prev } = pageContext;
		const lang = productInfo.node_locale;
		const available = product.availableForSale;

		const price = Libs.Common.StoreFunc.getPrice(
			data.shopifyProductVariant.presentmentPrices.edges
		);

		const buttonCss = () => css`
			position: absolute;
			z-index: 10000;
			transform: translateX(-50%);
			left: 50%;
			transition: opacity 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
			opacity: 0;
			.on-story & {
				opacity: 1;
			}
			.on-pause & {
				opacity: 0;
			}
			.now-transition & {
				transition: opacity 0.5s cubic-bezier(0.71, 0.01, 0.45, 1.01);
				opacity: 0;
			}
			${Libs.Styles.Mq.moreTab} {
				top: 100px;
				width: 300px;
			}
			${Libs.Styles.Mq.lessPab} {
				bottom: 8%;
				width: 88vw;
			}
		`;
		const clickHandler = () => {
			const { dispatch } = this.props;

			dispatch(
				OverlayOpen({
					element: Store.ProductForm,
					props: { product, productInfo },
				})
			);
			return false;
		};
		return (
			<>
				<Libs.Common.SEO.SEO
					title={productInfo.title ? productInfo.title : productInfo.name}
					lang={lang}
					description={
						productInfo.description
							? documentToReactComponents(
									JSON.parse(productInfo.description.raw)
							  )[0].props.children[0]
							: productInfo.title
					}
					ogImage={productInfo.thumbnail.fluid.src}
					link={`${productInfo.category.slug}/${productInfo.slug}`}
				/>
				<section
					className="article project-container"
					data-prev={prev.slug}
					data-next={next.slug}
					data-current={productInfo.slug}
					data-currentname={productInfo.name}
					data-categoryname={productInfo.category.name}
					data-categoryslug={productInfo.category.slug}
					data-type={"post"}
				>
					{
						<Libs.Atoms.ButtonElement
							css={buttonCss}
							onClick={() => {
								clickHandler();
								return false;
							}}
							spanStyles={{
								fontPc: {
									fontSize: 18,
									fontFace: "sansserif",
									bold: true,
									letterSpacing: 0.5,
								},
								fontSp: {
									fontSize: 18,
									fontFace: "sansserif",
									bold: true,
									letterSpacing: 0.5,
								},
							}}
						>
							{available ? price : price + " / SOLD OUT"}
						</Libs.Atoms.ButtonElement>
					}
				</section>
			</>
		);
	}
}
PostShop.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};
export default connect(null, null, null, { forwardRef: true })(PostShop);

export const pageQuery = graphql`
	query shopQuery($id: String!, $shopifyId: String!) {
		site {
			siteMetadata {
				languages {
					defaultLangKey
					langs
				}
			}
		}
		contentfulContentShop(id: { eq: $id }) {
			node_locale
			slug
			name
			title
			shopifyId
			date(formatString: "MMM Do, YY")

			description {
				raw
			}
			thumbnail {
				fluid(maxWidth: 400, quality: 70) {
					...GatsbyContentfulFluid_withWebp
				}
			}
			story {
				items {
					... on ContentfulElementImage {
						...Image
					}
				}
			}
			category {
				name
				slug
			}
			tags {
				name
				slug
			}
		}
		shopifyProductVariant(shopifyId: { eq: $shopifyId }) {
			id
			shopifyId
			price
			presentmentPrices {
				edges {
					node {
						price {
							amount
							currencyCode
						}
					}
				}
			}
			product {
				id
				title
				handle
				productType
				description
				descriptionHtml
				shopifyId
				availableForSale
				options {
					id
					name
					values
				}
				variants {
					id
					title
					price
					presentmentPrices {
						edges {
							node {
								price {
									amount
									currencyCode
								}
							}
						}
					}
					availableForSale
					shopifyId
					selectedOptions {
						name
						value
					}
				}
				priceRange {
					minVariantPrice {
						amount
						currencyCode
					}
					maxVariantPrice {
						amount
						currencyCode
					}
				}
			}
		}
	}
`;
