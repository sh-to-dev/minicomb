import * as React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';

import "../index.scss";
import Layout from '../layout/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Container>
          <Row>
            <Col>
              {/* going to put each compoent in here sperated by containers and rows  */}
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage
