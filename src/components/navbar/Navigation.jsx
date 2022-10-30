import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logoWhite from "../../assets/images/logo-white.png";
import notify from "../../assets/images/notification.png";
import user from "../../assets/images/user-nav.png";

const Navigation = () => {
  return (
    <React.Fragment>
      <Navbar expand="lg" className="bg-main text-white">
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <img src={logoWhite} alt="app logo" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/dashboard" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="/users" className="text-white">
                Users
              </Nav.Link>
              <Nav.Link href="/books" className="text-white">
                Books
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <div className="mx-2">
                {" "}
                <img src={notify} alt="notification icon" />
              </div>
              <div className="mx-5">
                {" "}
                <img src={user} alt="user icon" />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
