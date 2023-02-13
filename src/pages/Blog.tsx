import React from "react"
import { Link } from "gatsby";
import grabAllPosts from "../components/feature/GrabAllPosts";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

const Blog = () => {
  const posts = grabAllPosts()
  return (
    <Container className="blog">
        <Row className="blog-page">
        {posts.map(({ node }) => (
          <Col className="blog-post-wrapper" key={node.slug}>
            <Link to={`/posts/${node.slug}`}>
              <h2 className="blog-heading">{node.heading}</h2>
              <img className="blog-feature-img" src={node.featureImage.file.url} />
              <div className="blog-summary">{node.summary}</div>
            </Link>
          </Col>
        ))}
        </Row>
    </Container>
  )
}

export default Blog;