import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <React.Fragment>
      <Container fluid className="login-container ">
        <Container className="login-form  d-flex justify-content-center">
          <div className=" login-card card p-5 mt-5">
            <Form className="">
              <div className="text-center">
                <img src={logo} alt="logo" width={150} />
              </div>
              <Form.Group className="mb-3">
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="p-3"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="p-3"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>

              <Link to="/dashboard" className="d-grid gap-2 mt-5">
                <Button size="lg" className="p-3 text-white  bg-main">
                  LOGIN
                </Button>
              </Link>

              <Link to="/register" className="d-grid gap-2 mt-3">
                <Button
                  size="lg"
                  className="p-3  outline-main bg-transparent text-black"
                >
                  REGISTER
                </Button>
              </Link>
              <div className="text-center m-3">
                <small>Forgot your password?</small>
              </div>
            </Form>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default Login;
