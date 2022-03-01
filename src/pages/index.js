import React from "react";

import { graphql, navigate, withPrefix } from "gatsby";

import * as Libs from "libs";

import * as Organisms from "../components/organisms";

class Index extends React.PureComponent {
	constructor(props) {
		super(props);

		this.data = props.data.wordpressPage;
	}
	componentDidMount() {
		if (this.init) this.init = false;
		Libs.Common.Config.excuteTransition();
	}
	render() {
		return (
			<>
				<Libs.Common.SEO.SEO />
				<Organisms.IndexPage
					data={this.data}
					data-type={"page"}
					className={"project-container"}
				/>
			</>
		);
	}
}

export default Index;

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				languages {
					defaultLangKey
					langs
				}
			}
		}
		wordpressPage(slug: { eq: "index" }) {
			acf {
				hero_rendering {
					localFile {
						childImageSharp {
							fluid(maxWidth: 2000, quality: 100) {
								src
							}
						}
					}
				}
			}
		}
	}
`;
