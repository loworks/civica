import { useStaticQuery, graphql } from "gatsby"

export const useJaJournalData = () => {
  const { allContentfulContentJournal } = useStaticQuery(
    graphql`
      query journalListJaQuery {
        allContentfulContentJournal(
          limit: 4
          filter: { node_locale: { eq: "ja" } }
        ) {
          edges {
            node {
              slug
              title
              name
              category {
                slug
                name
              }
              updatedAt(formatString: "MMMM DD, YYYY, h:mm:ss")

              node_locale
              thumbnail {
                fluid(maxWidth: 400, quality: 70) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
              tags {
                name
                slug
                group
              }
            }
          }
        }
      }
    `
  )
  return allContentfulContentJournal.edges
}
