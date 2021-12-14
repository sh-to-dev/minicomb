import * as React from "react";
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import navLogo from '../../images/heroImg.png';



const Hero = () => {
  return (
    <Container className="hero">
      <Row>
        <Col>
          <Image src={navLogo} className="hero-img" />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero;