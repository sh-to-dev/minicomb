import * as React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Image
} from 'react-bootstrap';
import NavLogo from '../../images/minicombLogo.svg';

const Footer = () => {
    return (
      <Container className="footer-wrapper">
        <Row>
          <Col>
            <Navbar>
              <Navbar.Brand href="/">
                <Image src={NavLogo} className="logo-1" />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="#pricing">contact</Nav.Link>
                <div className="social-wrapper">
                  <Nav.Link href=""><i className="fab fa-facebook-square"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-instagram"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-github"></i></Nav.Link>
                </div>
              </Nav>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
}

export default Footer;