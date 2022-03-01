import { useStaticQuery, graphql } from "gatsby"

export const useEnWorksData = () => {
  const { allContentfulContentWorks } = useStaticQuery(
    graphql`
      query worksListEnQuery {
        allContentfulContentWorks(
          limit: 4
          filter: { node_locale: { eq: "en" } }
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
  return allContentfulContentWorks.edges
}
