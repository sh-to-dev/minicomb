import * as React from "react";
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";


const Hero = () => {
  return (
    <Container className="hero">
      <Row>
        <Col md={{span: 6, offset: 3}}>
          <h1>small homes. large living.</h1>
        </Col>
      </Row>
      <Row>
        <Col md={{ span:2, offset:4 }}>
          <PrimaryButton buttonText="learn more." />
        </Col>
        <Col md={2}>
          <SecondaryButton buttonText="sign up." />
        </Col>
      </Row>
      <Row>
        <Col md={{ span:10, offset: 1 }} className="hero-subtext">
          <span>
            inspiring small home living on any budget, without compromising design and functionality.
          </span>
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;