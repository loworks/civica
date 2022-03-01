import { useStaticQuery, graphql } from "gatsby";

export const AllProductsEn = () => {
	const { allContentfulContentShop } = useStaticQuery(
		graphql`
			query allProductsEnQuery {
				allContentfulContentShop(filter: { node_locale: { eq: "en" } }) {
					edges {
						node {
							slug
							name
							updatedAt(formatString: "MMMM DD, YYYY, h:mm:ss")
							node_locale
							category {
								slug
								name
							}

							thumbnail {
								fluid(maxWidth: 400, quality: 70) {
									...GatsbyContentfulFluid_withWebp
								}
							}
							tags {
								name
								slug
								group
							}

							name
						}
					}
				}
			}
		`
	);
	return allContentfulContentShop.edges;
};
