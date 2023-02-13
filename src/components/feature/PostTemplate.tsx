import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const PostTemplate = ({ data }) => {
  const post = data.contentfulPost
  return (
    <Container className="post">
        <Row className="single-post-page">
          <Col className="single-post-wrapper">
            <h2 className="post-heading">{post.heading}</h2>
            {/* <img className="post-feature-img" src={post.featureImage.file.url} /> */}
            <div className="post-body">{post.body.body}</div>
          </Col>
        </Row>
    </Container>
  )
}

export const query = graphql`
  query PostsQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      heading
      body {
        body
      }
    }
  }
`

export default PostTemplate;