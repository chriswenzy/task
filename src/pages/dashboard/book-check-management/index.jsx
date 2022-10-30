import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Tabs,
  Form,
} from "react-bootstrap";
import Navigation from "../../../components/navbar/Navigation";
import book1 from "../../../assets/images/book-img1.png";
import book2 from "../../../assets/images/book-img2.png";
import { Link } from "react-router-dom";

const BookCheckManagement = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="my-5"
        >
          <Tab eventKey="all" title="All books">
            <Row>
              <Col md={4}>
                <div>
                  <Form>
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="rounded-pill"
                      aria-label="Search"
                    />
                  </Form>
                </div>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col md={4}>
                <Card className=" p-2 border-0 shadow rounded">
                  <Card.Img variant="top" src={book1} />
                  <Card.Body>
                    <h5 className="fw-bold">Title: Think outside the box</h5>
                    <h6>
                      <strong>Author:</strong> Chris
                    </h6>
                    <h6>
                      {" "}
                      <strong>ISBN:</strong> 76774778
                    </h6>
                    <hr />
                    <p>
                      {" "}
                      <strong>Published Date:</strong> 17-May-2022
                    </p>
                    <hr />

                    <div className="text-center">
                      <Link to="/edit-book">
                        <Button className="bg-main  fw-bold px-4">
                          View Info
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className=" p-2 border-0 shadow rounded">
                  <Card.Img variant="top" src={book2} />
                  <Card.Body>
                    <h5 className="fw-bold">Title: Think outside the box</h5>
                    <h6>
                      <strong>Author:</strong> Chris
                    </h6>
                    <h6>
                      {" "}
                      <strong>ISBN:</strong> 76774778
                    </h6>
                    <hr />
                    <p>
                      {" "}
                      <strong>Published Date:</strong> 17-May-2022
                    </p>
                    <hr />
                    <div className="text-center">
                      <Link to="/edit-book">
                        <Button className="bg-main  fw-bold px-4">
                          View Info
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="checkedIn" title="Checked In">
            <Row className="mt-5">
              <Col md={4}>
                <Card className=" p-2 border-0 shadow rounded">
                  <Card.Img variant="top" src={book1} />
                  <Card.Body>
                    <h5 className="fw-bold">Title: Think outside the box</h5>
                    <h6>
                      <strong>Author:</strong> Chris
                    </h6>
                    <h6>
                      {" "}
                      <strong>ISBN:</strong> 76774778
                    </h6>
                    <hr />
                    <p>
                      {" "}
                      <strong>Published Date:</strong> 17-May-2022
                    </p>
                    <hr />
                    <div className="text-center">
                      <Link to="/edit-book">
                        <Button className="bg-main  fw-bold px-4">
                          View Info
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className=" p-2 border-0 shadow rounded">
                  <Card.Img variant="top" src={book2} />
                  <Card.Body>
                    <h5 className="fw-bold">Title: Think outside the box</h5>
                    <h6>
                      <strong>Author:</strong> Chris
                    </h6>
                    <h6>
                      {" "}
                      <strong>ISBN:</strong> 76774778
                    </h6>
                    <hr />
                    <p>
                      {" "}
                      <strong>Published Date:</strong> 17-May-2022
                    </p>
                    <hr />
                    <div className="text-center">
                      <Link to="/edit-book">
                        <Button className="bg-main  fw-bold px-4">
                          View Info
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="checkedOut" title="Checked Out">
            <Row className="mt-5">
              <Col md={4}>
                <Card className=" p-2 border-0 shadow rounded">
                  <Card.Img variant="top" src={book1} />
                  <Card.Body>
                    <h5 className="fw-bold">Title: Think outside the box</h5>
                    <h6>
                      <strong>Author:</strong> Chris
                    </h6>
                    <h6>
                      {" "}
                      <strong>ISBN:</strong> 76774778
                    </h6>
                    <hr />
                    <p>
                      {" "}
                      <strong>Published Date:</strong> 17-May-2022
                    </p>
                    <hr />
                    <div className="text-center">
                      <Link to="/edit-book">
                        <Button className="bg-main  fw-bold px-4">
                          View Info
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </React.Fragment>
  );
};

export default BookCheckManagement;
