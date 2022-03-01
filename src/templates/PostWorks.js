import React, { Component } from "react";
import { css } from "@emotion/react";

import PropTypes from "prop-types";

import { graphql } from "gatsby";

import * as Libs from "libs";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

class PostWorks extends Component {
	//--------------------------------------
	//  Libs.Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------

	constructor(props) {
		super(props);

		this.articleHeader = React.createRef();

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
		const works = data.wordpressPost;
		const { next, prev } = pageContext;
		if (!works) {
			return <></>;
		}
		return (
			<>
				<Libs.Common.SEO
					title={works.acf.metaTitle ? works.acf.metaTitle : works.title}
					description={
						works.acf.metaDescription
							? works.acf.metaDescription
							: works.acf.description
					}
					ogImage={works.thumbnail ? works.thumbnail.fluid.src : null}
					link={`${works.slug}`}
				/>

				<section
					className="article project-container"
					css={this.contCss}
					data-prev={prev.slug}
					data-next={next.slug}
					data-current={works.slug}
					data-currentname={works.name}
					data-categoryname={works.categories[0].name}
					data-categoryslug={works.categories[0].slug}
					data-type={"post"}
				>
					<div>
						<div>
							<Atoms.H1
								styles={{
									positionPc: { space: "0 0 15 0" },
									positionSp: { space: "0 0 15 0" },
								}}
							>
								{works.title}
							</Atoms.H1>
						</div>
					</div>
				</section>
			</>
		);
	}
}
PostWorks.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default PostWorks;
export const pageQuery = graphql`
	query artworkQuery($id: String!) {
		wordpressPost(id: { eq: $id }) {
			id
			title
			slug
			content
			date(formatString: "MMMM DD, YYYY")

			categories {
				name
				slug
			}
		}
	}
`;
