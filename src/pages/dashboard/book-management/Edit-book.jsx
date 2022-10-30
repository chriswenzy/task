import React from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import Navigation from "../../../components/navbar/Navigation";
import { Link } from "react-router-dom";

const EditBook = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Form className="">
              <Row className="mt-5">
                <Col>
                  <Form.Label>Cover page Image </Form.Label>
                  <Form.Control className="p-3" type="file" />
                </Col>
                <Col>
                  <Form.Label>Title </Form.Label>
                  <Form.Control
                    placeholder="Enter title"
                    className="p-3"
                    type="text"
                  />
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Form.Label>ISBN </Form.Label>
                  <Form.Control
                    placeholder="Enter ISBN"
                    className="p-3"
                    type="number"
                  />
                </Col>
                <Col>
                  <Form.Label>Revision Number</Form.Label>
                  <Form.Control
                    placeholder="Enter  revision number"
                    className="p-3"
                    type="number"
                  />
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Form.Label>Publisher</Form.Label>
                  <Form.Control
                    placeholder="Enter publisher"
                    className="p-3"
                    type="text"
                  />
                </Col>
                <Col>
                  <Form.Label>
                    Author <small>(Authors)</small>{" "}
                  </Form.Label>
                  <Form.Control
                    placeholder="Enter author"
                    className="p-3"
                    type="text"
                  />
                </Col>
              </Row>

              <Row className="my-4">
                <Col>
                  <Form.Label>Date added to library</Form.Label>
                  <Form.Control className="p-3" type="date" />
                </Col>
                <Col>
                  <Form.Label>Genre of book </Form.Label>
                  <Form.Control
                    placeholder="Enter genre of book"
                    className="p-3"
                    type="text"
                  />
                </Col>
              </Row>

              <div className="text-center mt-5">
                <Link to="/books" className=" m-5">
                  <Button
                    size="lg"
                    className="px-5 text-white rounded-0 "
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </Link>
                <Link to="/books" className=" mt-5">
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

export default EditBook;
