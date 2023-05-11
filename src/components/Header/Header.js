import React from "react";
import "./Header.css";
import logo from "../../Images/original_logo.JPG";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  // const activeStyle = {
  //   fontWeight: "bold",
  //   color: "cyan",
  // };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="header-container sticky-top"
        style={{ height: "75px" }}
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/home">
              <img
                src={logo}
                width="85"
                height="75"
                alt="Logo"
                className="nav-img p-1 img-fluid"
                style={{
                  // border: "1px solid white",
                  borderRadius: "20px",
                }}
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="menu-bg ms-auto d-flex align-items-center">
              <NavLink to="/home" className="menu-text">
                Home
              </NavLink>

              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavLink className="dropdown-item" to="/about">
                  Company Profile
                </NavLink>
                <NavLink className="dropdown-item" to="/message">
                  Chairman and MD's Message
                </NavLink>
                {/* <NavLink className="dropdown-item" to="/team">
                  Our Team
                </NavLink> */}
              </NavDropdown>
              <NavLink to="/services" className="menu-text">
                Services
              </NavLink>
              <NavLink to="/testimonials" className="menu-text">
                Testimonials
              </NavLink>
              <NavLink to="/clients" className="menu-text">
                Clients
              </NavLink>
              <NavLink to="/contact" className="menu-text">
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
