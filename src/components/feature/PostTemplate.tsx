import React from "react";
import grabAllPosts from "./GrabAllPosts";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const PostTemplate = () => {
  const post = grabAllPosts();
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

export default PostTemplate;