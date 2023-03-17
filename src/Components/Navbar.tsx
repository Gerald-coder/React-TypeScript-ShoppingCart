import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SVG } from "../Utilities/Svg";

function NavBar() {
  return (
    <Navbar sticky="top" className="mb-3 bg-white shadow-sm">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          className="rounded-circle"
          variant="outline-primary"
        >
          <div
            className="rounded-circle bg-danger"
            style={{
              position: "absolute",
              bottom: "-.5rem",
              color: "white",
              width: "1.2rem",
              height: "1.5rem",
              right: "0",
            }}
          >
            3
          </div>
          <SVG />
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavBar;
