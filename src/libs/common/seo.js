import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import * as Common from "../common";

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				titles {
					en
					ja
				}
				indexTitles {
					en
					ja
				}
				siteDescription {
					en
					ja
				}
				image
				author
				siteUrl
				languages {
					defaultLangKey
					langs
				}
			}
		}
	}
`;
export let siteUrl;
export const getBreadcrumbSchemaOrgJSONLD = (props, paging) => {
	Common.Config.setBreadcrumbProps(props, paging);
	let itemListElement = [];
	const getItemList = (prop) => {
		const len = itemListElement.length;

		return {
			"@type": "ListItem",
			position: len,
			item: {
				"@id": `${siteUrl}${prop.url ? prop.url : ""}`,
				url: `${siteUrl}${prop.url ? prop.url : ""}`,
				name: `${prop.title ? prop.title : prop.name}`,
			},
		};
	};
	props.map((prop, i) => {
		itemListElement.push(getItemList(prop));
	});
	return {
		"@context": "https://schema.org/",
		"@type": "BreadcrumbList",
		itemListElement: [...itemListElement],
	};
};

export function SEO({
	description,
	lang,
	title,
	ogImage,
	article,
	link,
	schemaOrgJSONLD,
}) {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				siteUrl = data.site.siteMetadata.siteUrl;
				const langs = data.site.siteMetadata.languages.langs;
				const metaTitle = lang
					? data.site.siteMetadata.titles[lang]
					: data.site.siteMetadata.title;
				const metaDescription =
					description || data.site.siteMetadata.siteDescription[lang];
				const image = ogImage
					? `https:${ogImage}`
					: data.site.siteMetadata.image;
				let canonicalTag = "";
				let hreflangTag = "";

				if (lang && langs.length !== 1) {
					const linkStr = link ? (link !== "index" ? link + "/" : "") : "";

					canonicalTag = (
						<link rel="canonical" href={`${siteUrl}/${lang}/${linkStr}`}></link>
					);
					hreflangTag = langs.map((langItem) => {
						return (
							<link
								rel="alternate"
								href={`${siteUrl}/${langItem}/${linkStr}`}
								hreflang={langItem}
							></link>
						);
					});
				}

				return (
					<Helmet
						htmlAttributes={{ lang: lang }}
						titleTemplate={
							title
								? `%s | ${metaTitle}`
								: data.site.siteMetadata.indexTitles[lang]
						}
					>
						<title>{title ? title : `${metaTitle}`}</title>
						{langs.length >= 1 ? canonicalTag : null}
						{langs.length >= 1 ? hreflangTag : null}

						<meta name="description" content={metaDescription} />
						<meta name="thumbnail" content={image} />
						<meta
							property="og:title"
							content={title ? `${title} | ${metaTitle}` : `${metaTitle}`}
						/>
						<meta property="og:description" content={metaDescription} />
						<meta
							property="og:type"
							content={article ? "article" : "website"}
						/>
						<meta property="og:image" content={image} />

						<meta name="twitter:card" content="summary_large_image" />
						<meta
							name="twitter:title"
							content={title ? `${title} | ${metaTitle}` : `${metaTitle}`}
						/>
						<meta name="twitter:description" content={metaDescription} />
						<meta name="twitter:site" content="@howltcoffee" />
						<meta name="twitter:image" content={image} />
						<link
							rel="preload"
							href="https://pagead2.googlesyndication.com/pagead/js/r20190828/r20190131/show_ads_impl.js"
							as="script"
						></link>
						{schemaOrgJSONLD
							? schemaOrgJSONLD.map((jsonld, i) => {
									return (
										<script type="application/ld+json">
											{JSON.stringify(jsonld)}
										</script>
									);
							  })
							: ""}
					</Helmet>
				);
			}}
		/>
	);
}

export default SEO;
