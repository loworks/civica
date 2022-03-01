import { useStaticQuery, graphql } from "gatsby";

export const AllProductsJa = () => {
	const { allContentfulContentShop } = useStaticQuery(
		graphql`
			query allProductsJaQuery {
				allContentfulContentShop(filter: { node_locale: { eq: "ja" } }) {
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
