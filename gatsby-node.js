const _ = require("lodash");
const path = require("path");
const slash = require(`slash`);
const { createFilePath } = require("gatsby-source-filesystem");
//const { paginate } = require('gatsby-awesome-pagination')

const getOnlyPublished = (edges) =>
	_.filter(edges, ({ node }) => node.status === "publish");

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	return graphql(`
		{
			allWordpressCategory {
				edges {
					node {
						id
						name
						slug
					}
				}
			}
		}
	`)
		.then((result) => {
			if (result.errors) {
				result.errors.forEach((e) => console.error(e.toString()));
				return Promise.reject(result.errors);
			}

			const categoryTemplate = path.resolve(`./src/templates/category.js`);

			_.each(result.data.allWordpressCategory.edges, (edge) => {
				createPage({
					path: `/${edge.node.slug}/`,
					component: slash(categoryTemplate),
					context: {
						id: edge.node.id,
						name: edge.node.name,
						slug: edge.node.slug,
					},
				});
			});
		})

		.then(() => {
			return graphql(`
				{
					allWordpressPage {
						edges {
							node {
								id
								slug
							}
						}
					}
				}
			`);
		})
		.then((result) => {
			if (result.errors) {
				result.errors.forEach((e) => console.error(e.toString()));
				return Promise.reject(result.errors);
			}

			const pageTemplate = path.resolve(`./src/templates/page.js`);
			const edges = result.data.allWordpressPage.edges;

			_.each(edges, (edge, index) => {
				// We need a common ID to cycle between locales.

				const slug = edge.node.slug;
				if (slug !== "index") {
					createPage({
						// Each page is required to have a `path` as well
						// as a template component. The `context` is
						// optional but is often necessary so the template
						// can query data specific to each page.
						path: `/${slug}/`,
						component: slash(pageTemplate),
						context: {
							id: edge.node.id,
						},
					});
				}
			});
		});
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
	if (getConfig().mode === "production") {
		actions.setWebpackConfig({
			devtool: false,
		});
	}
};
exports.onCreateWebpackConfig = ({
	stage,
	rules,
	loaders,
	plugins,
	actions,
}) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				libs: path.resolve(__dirname, "src/libs"),
			},
		},
	});
};

/*
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type == "ContentfulPageIndex") {
    createNodeField({
      node,
      name: "collection",
      value: node.node_locale,
    })
  }
}
*/
