import { useStaticQuery, graphql } from "gatsby"

export const WorksCategoryTagData = () => {
  const { contentfulCommonCategory } = useStaticQuery(
    graphql`
      query CommonWorksCategoryJaQuery {
        contentfulCommonCategory(slug: { eq: "works" }) {
          node_locale
          slug
          content___works {
            tags {
              name
              slug
              group
            }
          }
        }
      }
    `
  )
  return contentfulCommonCategory
}
