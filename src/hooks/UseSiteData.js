import { useStaticQuery, graphql } from "gatsby"

export const useSiteData = () => {
  const data = useStaticQuery(
    graphql`
      query UseSiteData {
        site {
          siteMetadata {
            languages {
              defaultLangKey
              langs
            }
          }
        }
      }
    `
  )

  return data
}
