import { useStaticQuery, graphql } from "gatsby"

const grabAllPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost {
        edges {
          node {
            slug
            heading
            body {
              body
            }
            summary
            featureImage {
              file {
                url
              }
            }
          }
        }
      }
    }
    `)
  return data.allContentfulPost.edges
}

export default grabAllPosts;