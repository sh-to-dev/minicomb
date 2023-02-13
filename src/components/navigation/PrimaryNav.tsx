import * as React from "react";
import { Link } from "gatsby";
import {
  Nav,
  Navbar,
  NavDropdown,
  Image
} from 'react-bootstrap';

import SearchBar from "../inputs/SearchBar";
import PrimaryButton from "../buttons/PrimaryButton";
import NavCTA from "../CTAs/NavCTA";

import NavLogo from '../../images/minicombLogo.svg';


const PrimaryNav = () => {
    return (
      <>
        <div className="primary-nav">
          <Navbar className="minicomb-primary-nav" collapseOnSelect expand="lg">
            <Nav className="nav-tier-1">
              <div>
                <Navbar.Brand href="/">
                  <Image src={NavLogo} className="logo-1" />
                </Navbar.Brand>
              </div>
              <div className="nav-tier-1-btn-wrapper">
                <PrimaryButton buttonText="news letter" />
                <div className="social-wrapper">
                  <Nav.Link href=""><i className="fab fa-lg fa-facebook-square"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-lg fa-instagram"></i></Nav.Link>
                  <Nav.Link href=""><i className="fab fa-lg fa-github"></i></Nav.Link>
                </div>
                <SearchBar />
              </div>
            </Nav>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto nav-tier-2">
                <NavDropdown title="small spaces." className="nav-link" id="collasible-nav-dropdown">
                  <Link to="/">Example</Link>
                  <Link to="/">Example</Link>
                  <Link to="/">Example</Link>
                  <NavDropdown.Divider />                
                </NavDropdown>
                <NavDropdown title="about us." className="nav-link" id="collasible-nav-dropdown">
                  <Link to="/Team">our team.</Link>
                  <Link to="/Contact">contact us.</Link>
                  <Link to="/Careers">work with us.</Link>
                  <NavDropdown.Divider />                
                </NavDropdown>
                <NavDropdown title="diy." className="nav-link" id="collasible-nav-dropdown">
                  <Link to="/">personal finance</Link>
                  <Link to="/">furniture dupes</Link>
                  <Link to="/">cheap wins</Link>
                  <NavDropdown.Divider />                
                </NavDropdown>
                <NavDropdown title="budget." className="nav-link" id="collasible-nav-dropdown">
                  <Link to="/">personal finance</Link>
                  <Link to="/">furniture dupes</Link>
                  <Link to="/">cheap wins</Link>
                  <NavDropdown.Divider />                
                </NavDropdown>
                <NavDropdown title="planning." className="nav-link" id="collasible-nav-dropdown">
                  <Link to="/">personal finance</Link>
                  <Link to="/">furniture dupes</Link>
                  <Link to="/">cheap wins</Link>
                  <NavDropdown.Divider />                
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <NavCTA />
      </>
    )
}

export default PrimaryNav;