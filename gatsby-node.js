const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`./src/components/feature/PostTemplate.tsx`)

  return graphql(`
    {
      allContentfulPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allContentfulPost.edges

    posts.forEach(post => {
      createPage({
        path: `/posts/${post.node.slug}`,
        component: postTemplate,
        context: {
          id: post.node.id,
        },
      })
    })
  })
}
