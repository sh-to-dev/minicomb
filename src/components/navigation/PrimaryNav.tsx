import * as React from "react";
import { Link } from "gatsby";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Image
} from 'react-bootstrap';

import SearchBar from "../inputs/SearchBar";
import PrimaryButton from "../buttons/PrimaryButton";

import NavLogo from '../../images/minicombLogo.svg';


const PrimaryNav = () => {
    return (
      <div className="primary-nav">
        <Container>
          <Row>
            <Col md={7}>
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="/">
                  <Image src={NavLogo} className="logo-1" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <NavDropdown title="about us." className="nav-link" id="collasible-nav-dropdown">
                      <Link to="/Team">our team.</Link>
                      <Link to="/Contact">contact us.</Link>
                      <Link to="/Careers">work with us.</Link>
                      <NavDropdown.Divider />                
                    </NavDropdown>
                    <NavDropdown title="small spaces." className="nav-link" id="collasible-nav-dropdown">
                      <Link to="/">Example</Link>
                      <Link to="/">Example</Link>
                      <Link to="/">Example</Link>
                      <NavDropdown.Divider />                
                    </NavDropdown>
                    <Link to="/Contact" className="nav-link">diy.</Link>
                    <NavDropdown title="budget." className="nav-link" id="collasible-nav-dropdown">
                      <Link to="/">personal finance</Link>
                      <Link to="/">furniture dupes</Link>
                      <Link to="/">cheap wins</Link>
                      <NavDropdown.Divider />                
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
            <Col md={2}>
              <PrimaryButton buttonText="Register" />
            </Col>
            <Col md={3}>
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default PrimaryNav;