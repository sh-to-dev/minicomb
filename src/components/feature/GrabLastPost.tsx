import * as React from "react";
import { useStaticQuery, graphql } from "gatsby"
import {
  Row,
  Col,
} from 'react-bootstrap';

import FeatureTile from "./FeatureTile";

const GrabLastPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPost(limit: 3, skip: 1, sort: { fields: date, order: DESC }) {
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

  const posts = data.allContentfulPost.edges
  return (
    <Row className="page-section">
      {posts.map(({ node: post }) => (
      <Col md={4}>
        <FeatureTile imgName={post.featureImage.file.url} title={post.heading} about="Feature Feature Feature"/>
      </Col>
      ))}
    </Row>
  )
}

export default GrabLastPosts;