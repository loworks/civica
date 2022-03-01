require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
const languages = require("./src/data/languages");
var BrotliPlugin = require("brotli-webpack-plugin");
module.exports = {
	plugins: [
		new BrotliPlugin({
			asset: "[path].br[query]",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
		}),
	],
};
module.exports = {
	siteMetadata: {
		title: `Blank Project`,
		titles: { ja: `Blank Project`, en: `Blank Project` },
		indexTitles: {
			ja: `CIVICA`,
			en: `CIVICA `,
		},
		author: `@loworks`,
		siteUrl: `https://loworks.co.jp`,
		languages,
		image: "https://loworks.co.jp/og.jpg",
		siteDescription: {
			ja: `Blank Project`,
			en: `Blank Project`,
		},
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},

		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				typekit: {
					id: "lur7ltl",
				},
			},
		},
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `ifstudiony.com/sites/civica`,

				protocol: `https`,

				hostingWPCOM: false,

				useACF: true,
				auth: {},
				// Set to true to debug endpoints on 'gatsby build'
				verboseOutput: false,
			},
		} /*{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `tff.loworks.org`,

				protocol: `http`,

				hostingWPCOM: false,

				useACF: true,
				auth: {},
				// Set to true to debug endpoints on 'gatsby build'
				verboseOutput: false,
			},
		},
*/,
		{
			resolve: "gatsby-plugin-i18n",
			options: {
				langKeyForNull: "any",
				langKeyDefault: languages.defaultLangKey,
				useLangKeyLayout: false,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		{
			resolve: `gatsby-source-instagram`,
			options: {
				username: `589791115`,
				access_token:
					"EAAIQJL8zjXEBABccNffcOhdhsnscmX7Uw9Um9F35qMYlhmrHfrfPmcQn2MarpO9NsyDZCAHxCcNJn8N9doBSm2Rt75SxisLTBxhyxDT2smTSF6XE5bDRGnbU8jKUijG0sA33NdQo3pvKmxeJE9YVS8o58UqDtLQwRyirsQgZDZD",

				instagram_id: "2058334751108601",
			},
		},
		{
			resolve: "gatsby-plugin-transition-link",
			options: {
				layout: require.resolve(`./src/layouts`),
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-emotion`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Howlt`,
				short_name: `howlt`,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#fff`,
				display: `minimal-ui`,
				icon: `src/images/h-icon.png`,
			},
		},

		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					"G-M3WLBKM252", // Google Analytics / GA
				],
			},
		},
		{
			resolve: `gatsby-source-shopify`,
			options: {
				// The domain name of your Shopify shop. This is required.
				// Example: 'gatsby-source-shopify-test-shop' if your Shopify address is
				// 'gatsby-source-shopify-test-shop.myshopify.com'.
				shopName: process.env.SHOP_NAME,

				// An API access token to your Shopify shop. This is required.
				// You can generate an access token in the "Manage private apps" section
				// of your shop's Apps settings. In the Storefront API section, be sure
				// to select "Allow this app to access your storefront data using the
				// Storefront API".
				// See: https://help.shopify.com/api/custom-storefronts/storefront-api/getting-started#authentication
				accessToken: process.env.SHOPIFY_ACCESS_TOKEN,

				// Set verbose to true to display a verbose output on `npm run develop`
				// or `npm run build`. This prints which nodes are being fetched and how
				// much time was required to fetch and process the data.
				// Defaults to true.
				verbose: true,
			},
		},
		/*

     {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-54DFNCN`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Sku"],
        secretKey: process.env.STRIPE_SECRET_KEY,
        downloadFiles: true,
        auth: false,
      },
    },*/

		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: [`/404`],
				output: `/sitemap.xml`,
				query: `
          {
          site {
              siteMetadata {
                  siteUrl
              }
          }

          allSitePage {
              edges {
                  node {
                      path
                  }
              }
          }
      }`,
				serialize: ({ site, allSitePage }) =>
					allSitePage.edges.map((edge) => {
						return {
							url: site.siteMetadata.siteUrl + edge.node.path,
						};
					}),
			},
		},
	],
};
