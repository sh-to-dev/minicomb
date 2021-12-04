import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const Contact = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="contact-page-wrapper">
                Caravan Contact Section
              </div>
              <a href="mailto:pushkarprehar1@gmail.com">Link text</a>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default Contact;