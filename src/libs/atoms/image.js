import React, { PureComponent } from "react";
import { css } from "@emotion/react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

class Image extends PureComponent {
	imgCss = () => {
		const ratio = this.state.ratio;
		return css`
			> div {
				${ratio ? { "padding-bottom": ratio + "% !important" } : ""}
			}
		`;
	};
	setRatio = (value) => {
		this.setState({ ratio: value });
		this.setState({ ratio: value });
		// this.state.ratio = value
	};
	getRatio = () => {
		return this.state.ratio === 0 ? this.ratio : this.state.ratio;
	};
	constructor(props) {
		super(props);
		this.ratio = 0;
		this.state = { ratio: 0 };
	}
	componentDidMount() {
		this.setRatio(this.ratio);
	}

	render() {
		const props = this.props;

		return (
			<StaticQuery
				query={graphql`
					query {
						images: allFile {
							edges {
								node {
									relativePath
									name
									childImageSharp {
										fluid(maxWidth: 1600, quality: 80) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				`}
				render={(data) => {
					const image = data.images.edges.find((n) => {
						return n.node.relativePath.includes(props.src);
					});
					if (!image) {
						return null;
					}

					const fluid = image.node.childImageSharp.fluid;
					this.ratio = (1 / fluid.aspectRatio) * 100;
					this.setRatio(this.ratio);

					return (
						<Img
							css={this.imgCss}
							alt={props.alt}
							fluid={fluid}
							fadeIn={props.onload ? false : true}
							onLoad={props.onload ? props.onload : null}
						/>
					);
				}}
			/>
		);
	}
}

export default Image;
