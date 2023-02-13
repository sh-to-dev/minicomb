import * as React from "react";
import {
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import navLogo from '../../images/heroImg.png';

type Props = {
  featureTitle: string
}

const FeaturePost = ({featureTitle}: Props) => {
  return (
    <Container className="feature-post">
      <Row>
        <h2>{featureTitle}</h2>
      </Row>
      <Row>
        <Col>
          <Image src={navLogo} className="hero-img" />
        </Col>
      </Row>
    </Container>
  )
}

export default FeaturePost;