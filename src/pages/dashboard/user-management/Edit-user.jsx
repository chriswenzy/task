import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Navigation from "../../../components/navbar/Navigation";
import { Link } from "react-router-dom";

const EditUser = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Form className="">
              <Row className="mt-5">
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
              <Row className="my-4">
                <Col>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    placeholder="Enter phone number"
                    className="p-3"
                  />
                </Col>
                <Col>
                  <Form.Label>Role</Form.Label>
                  <Form.Control placeholder="Enter email" className="p-3" />
                </Col>
              </Row>

              <div className="text-center mt-5">
                <Link to="/users" className=" m-5">
                  <Button
                    size="lg"
                    className="px-5 text-white rounded-0 "
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Link>
                <Link to="/users" className=" mt-5">
                  <Button
                    size="lg"
                    className="px-5 text-white  bg-main rounded-0"
                  >
                    Update
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default EditUser;
