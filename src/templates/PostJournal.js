import React, { Component } from "react";
import { css } from "@emotion/react";

import PropTypes from "prop-types";

import { graphql } from "gatsby";
import { connect } from "react-redux";
import * as Common from "../common";
import * as Transition from "../components/Transition";
import * as Libs from "libs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

class PostJournal extends Component {
	//--------------------------------------
	//  Styles
	//--------------------------------------
	closeButtonCss = () => css`
		position: fixed;
		right: 20px;
		top: 30px;
		z-index: 1000;
		transition: opacity 0.3s cubic-bezier(0.71, 0.01, 0.45, 1.01);
		.on-pause & {
			opacity: 0;
		}
	`;
	//--------------------------------------
	//  Scripts
	//--------------------------------------
	contCss = () => css``;
	constructor(props) {
		super(props);

		this.h1cont = React.createRef();
		this.infoCont = React.createRef();
		this.captionCont = React.createRef();
		this.infoHeaderCont = React.createRef();
		this.articleHeader = React.createRef();

		this.counter = 0;
		this.state = {
			ready: false,
			display: false,
		};
	}

	componentDidMount() {
		Libs.Common.Config.excuteTransition();
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	closeClickHandler = () => {
		const { dispatch } = this.props;
		let langKey = Libs.Common.Func.getLangKey();

		const node = document.querySelector(".project-container");
		const dataset = node.dataset;
		const slug = dataset.current;
		console.log("slug -- ", slug);
		let category = "journal";
		Transition.TrigerFadeTransition.TrigerFadeTransition(
			`/${langKey}/${category}/`,
			dispatch,
			slug
		);
	};
	render() {
		const { data, pageContext } = this.props;
		const journal = data.contentfulContentJournal;
		const { next, prev } = pageContext;
		const lang = journal.node_locale;
		let filters = [];
		for (let i = 0; i < journal.tags.length; i++) {
			const tag = journal.tags[i];
			if (tag.group === "Artist") {
				filters.push(tag.slug);
			}
		}
		console.log("componentDidMount");
		let schemaOrgJSONLDList = [];
		schemaOrgJSONLDList.push(
			Libs.Common.SEO.getBreadcrumbSchemaOrgJSONLD(
				[
					{ name: "Home", url: `/` },
					{
						name: "journal",
						url: `/${journal.category.slug}/`,
					},
					{
						name: journal.name,
						title: journal.title,

						url: `/${journal.category.slug}/${journal.slug}/`,
					},
				],
				{
					next: `/${journal.category.slug}/${next.slug}/`,
					prev: `/${journal.category.slug}/${prev.slug}/`,
				}
			)
		);
		console.log("journal -- ", journal.body);
		return (
			<>
				<Libs.Common.SEO.SEO
					title={journal.title}
					lang={lang}
					schemaOrgJSONLD={schemaOrgJSONLDList}
					description={
						journal.description
							? documentToReactComponents(
									JSON.parse(journal.description.raw)
							  )[0].props.children[0]
							: journal.title
					}
					ogImage={journal.thumbnail.fluid.src}
					link={`${journal.category.slug}/${journal.slug}`}
				/>

				<section
					className={"article project-container "}
					data-prev={prev.slug}
					data-next={next.slug}
					data-current={journal.slug}
					data-currentname={journal.name}
					data-categoryname={journal.category.name}
					data-categoryslug={journal.category.slug}
					data-type={"post"}
					css={this.contCss}
					ref={this.container}
				>
					<Libs.Modules.BodyElement
						layoutTypeFunc={Common.Func.getCardType}
						elementTypeFunc={Common.Func.getElementType}
						body={journal.body}
					/>
				</section>
				<Libs.Atoms.ButtonClose
					css={this.closeButtonCss}
					color={"#000"}
					activeClass={"type-post"}
					clickHandler={this.closeClickHandler}
				/>
			</>
		);
	}
}
PostJournal.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object,
	}),
};

export default connect(null, null, null, { forwardRef: true })(PostJournal);

export const pageQuery = graphql`
	query journalQuery($id: String!) {
		site {
			siteMetadata {
				languages {
					defaultLangKey
					langs
				}
			}
		}
		contentfulContentJournal(id: { eq: $id }) {
			node_locale
			slug
			name
			title
			id
			date(formatString: "MMM Do, YY")

			description {
				raw
			}
			thumbnail {
				fluid(maxWidth: 400, quality: 70) {
					...GatsbyContentfulFluid_withWebp
				}
			}

			body {
				... on ContentfulElementFlexColumn {
					...FlexColumn
				}
			}
			category {
				name
				slug
			}
			tags {
				name
				slug
				group
			}
		}
	}
`;
