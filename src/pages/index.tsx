import * as React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';

import Hero from "../components/misc/Hero";
import FeaturePost from "../components/feature/FeaturePost";
import GrabLastPosts from "../components/feature/GrabLastPost";
import InfoBlock from "../components/misc/InfoBlock";

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
              <h2>minicomb living.</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <FeaturePost />
            </Col>
          </Row>
          <GrabLastPosts />
          <Row>
            <Col>
              <h2>minicomb is here to help.</h2>
            </Col>
          </Row>
          <Row>
            <InfoBlock 
              imgName="interior-design2" 
              title="creating a world of elegantly functional living spaces."
              content="minicomb is on a mission to inspire small living on any budget, without compromising design & functionality." 
            />
            <InfoBlock 
              imgName="back-home2" 
              title="a home decor vision you can actually achieve."
              content="minicomb provides true-to-life product reviews & small home advice, so you can focus on what matters most." 
              left
            />
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

export default IndexPage
