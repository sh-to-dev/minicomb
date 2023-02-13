import * as React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Hero from "../components/misc/Hero";
import FeaturePost from "../components/feature/FeaturePost";
import FeatureTile from "../components/feature/FeatureTile";

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
              <Hero />
            </Col>
          </Row>
          <Row>
            <Col>
              <FeaturePost featureTitle="minicomb living." />
            </Col>
          </Row>
          <Row className="page-section">
            <Col md={4}>
              <FeatureTile imgName="feature1" title="Feature One" about="Feature Feature Feature"/>
            </Col>
            <Col md={4}>
              <FeatureTile imgName="feature2" title="Feature Two" about="Feature Feature Feature"/>
            </Col>
            <Col md={4}>
              <FeatureTile imgName="feature3" title="Feature Three" about="Feature Feature Feature"/>
            </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage
