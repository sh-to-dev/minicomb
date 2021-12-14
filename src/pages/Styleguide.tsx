import * as React from "react"; 
import {
  Container,
  Col,
  Row
} from 'react-bootstrap';
import PrimaryButton from "../components/buttons/PrimaryButton";
import SearchBar from "../components/inputs/SearchBar";
import { FeatureTile } from "../components";

import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col md={3}>
            <PrimaryButton buttonText="example button" />
          </Col>
          <Col md={4}>
            <SearchBar />
          </Col>
        </Row>
        <Row>
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
    </Layout>
  )
}

export default Contact;