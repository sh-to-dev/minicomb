import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

const FeaturePost = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost(limit: 1, sort: { fields: date, order: DESC }) {
        edges {
          node {
            slug
            heading
            author
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

  const post = data.allContentfulPost.edges[0].node
  return (
    <div>
      <Container className="feature-post">
        <Row className="feature-post-info">
          <h3>{post.heading}</h3>
          <div>{post.author}</div>
        </Row>
        <Row>
          <Col>
            <Image src={post.featureImage.file.url} className="hero-img" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FeaturePost;