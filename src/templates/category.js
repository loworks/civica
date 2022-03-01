import React, { PureComponent } from "react";
import { graphql } from "gatsby";

import * as Organisms from "../components/organisms";
import { css } from "@emotion/react";
import * as Libs from "libs";
export class Category extends PureComponent {
	contCss = () => css`
		${Libs.Common.Func.getPcSpVwValue("margin-top", 350, 275, true)};
	`;

	constructor(props) {
		super(props);
		this.itemNum = 0;
		this.counter = 0;
	}
	componentDidMount() {
		Libs.Common.Config.excuteTransition();
	}
	render() {
		const { data, pageContext } = this.props;
		const posts = data.allWordpressPost.edges;

		const currentSlug = pageContext.slug;

		this.itemNum = posts ? posts.length : 0;

		return (
			<>
				<Libs.Common.SEO
					title={posts.name}
					link={posts.slug}
					description={"posts.description.description"}
				/>

				<section
					css={this.contCss}
					className={"project-container init-animat-cont category"}
					data-current={posts.slug}
					data-currentname={posts.name}
					data-type={"category"}
					data-categoryslug={currentSlug}
					data-categoryname={posts.name}
				>
					<Organisms.CategoryPage
						type={"category"}
						items={posts}
						slug={currentSlug}
					/>
				</section>
			</>
		);
	}
}

export default Category;
export const pageQuery = graphql`
	query categoryQuery($slug: String!) {
		allWordpressPost(
			filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
		) {
			edges {
				node {
					slug
					title

					categories {
						name
						slug
					}
				}
			}
		}
	}
`;
