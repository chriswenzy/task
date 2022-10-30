import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const RegisterConfirm = () => {
  return (
    <React.Fragment>
      <Container fluid className="login-container ">
        <Container className="login-form  d-flex justify-content-center">
          <div className=" register-card card p-5 mt-5 text-center">
            <div className="text-center">
              <img src={logo} alt="logo" width={150} />
            </div>
            <h2 className="my-5">Congratulations !</h2>
            <h5 className="my-5">
              Registration was successful, Click on the button below to login
            </h5>
            <Link to="/" className="d-grid gap-2 mt-5">
              <Button size="lg" className="p-3 text-white  bg-main">
                Proceed to Login
              </Button>
            </Link>
          </div>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default RegisterConfirm;
