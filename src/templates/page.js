import React, { Component } from "react";
import { css } from "@emotion/react";

import { graphql } from "gatsby";

import * as Organisms from "../components/organisms";
import * as Libs from "libs";
class Page extends Component {
	//--------------------------------------
	// Styles
	//--------------------------------------
	sectionCss = () =>
		css`
			${Libs.Styles.Mixin.containerCss()}
		`;

	//--------------------------------------
	//  Scripts
	//--------------------------------------

	constructor(props) {
		super(props);

		this.init = true;
		//Transition.InitTransition.InitTransition(Common.Config.getDispatcher)
	}
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}
	componentWillMount() {}
	componentDidMount() {
		if (this.init) this.init = false;
		Libs.Common.Config.excuteTransition();
	}
	componentWillUnmount() {}

	getElement(page) {
		if (page.slug === "index") {
			return (
				<Organisms.IndexPage
					body={page.body}
					data-type={"page"}
					className={"project-container"}
				/>
			);
		} else if (page.slug === "howltcoffee") {
			return (
				<Organisms.HowltCoffeePage
					lang={page.node_locale}
					body={page.body}
					data-type={"page"}
					className={"project-container"}
				/>
			);
		} else if (page.slug === "about") {
			return (
				<Organisms.AboutPage body={page.body} className={"project-container"} />
			);
		} else if (page.slug === "contact") {
			return (
				<Organisms.ContactPage
					body={page.body}
					className={"project-container"}
				/>
			);
		} else if (page.slug === "shopping-info") {
			return (
				<Organisms.PolicyPage
					body={page.body}
					className={"project-container"}
				/>
			);
		} else if (page.slug === "privacy-policy") {
			return (
				<Organisms.PolicyPage
					body={page.body}
					className={"project-container"}
				/>
			);
		}
	}

	render() {
		const { data } = this.props;
		const page = data.wordpressPage;

		const element = this.getElement(page);
		return (
			<>
				<Libs.Common.SEO.SEO
					title={page.name !== "Index" ? page.name : null}
					description={page.description ? page.description.description : null}
					lang={page.node_locale}
					link={page.slug}
				/>
				{element}
			</>
		);
	}
}

export default Page;

export const pageQuery = graphql`
	query pageQuery($id: String!) {
		site {
			siteMetadata {
				languages {
					defaultLangKey
					langs
				}
			}
		}
		wordpressPage(id: { eq: $id }) {
			acf {
				hero_rendering {
					localFile {
						childImageSharp {
							fluid(maxWidth: 1400, quality: 100) {
								src
							}
						}
					}
				}
			}
		}
	}
`;
