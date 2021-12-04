import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';

import Layout from '../layout/Layout';

const OurTeam = () => {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="Investment-page-wrapper">
                Caravan Investment Services Section
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
}

export default OurTeam;