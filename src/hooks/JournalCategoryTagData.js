import { useStaticQuery, graphql } from "gatsby"

export const JournalCategoryTagData = () => {
  const { contentfulCommonCategory } = useStaticQuery(
    graphql`
      query CommonJournalCategoryJaQuery {
        contentfulCommonCategory(slug: { eq: "journal" }) {
          node_locale
          slug
          content___journal {
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
