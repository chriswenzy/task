import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Register = () => {
  return (
    <React.Fragment>
      <Container fluid className="login-container ">
        <Container className="login-form  d-flex justify-content-center">
          <div className=" register-card card p-5 mt-5">
            <Form className="">
              <div className="text-center">
                <img src={logo} alt="logo" width={150} />
              </div>
              <Row className="my-4">
                <Col>
                  <Form.Label>First Name </Form.Label>
                  <Form.Control
                    placeholder="Enter first name"
                    className="p-3"
                  />
                </Col>
                <Col>
                  <Form.Label>Middle Name </Form.Label>
                  <Form.Control
                    placeholder="Enter middle name"
                    className="p-3"
                  />
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Form.Label>Last Name </Form.Label>
                  <Form.Control placeholder="Enter last name" className="p-3" />
                </Col>
                <Col>
                  <Form.Label>Email</Form.Label>
                  <Form.Control placeholder="Enter email" className="p-3" />
                </Col>
              </Row>

              <Link to="/register-confirm" className="d-grid gap-2 mt-5">
                <Button size="lg" className="p-3 text-white  bg-main">
                  REGISTER
                </Button>
              </Link>
              <div className="text-center m-3">
                <Link to="/">
                  <small>A member? Login</small>
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Register;
