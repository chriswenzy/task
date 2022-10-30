import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../../../components/navbar/Navigation";
import book1 from "../../../assets/images/book-img1.png";
import book2 from "../../../assets/images/book-img2.png";
import { Link } from "react-router-dom";

const BookManagement = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <div className="mt-5">
          <Link to="/create-book" className="">
            <Button
              size="lg"
              className=" text-white  bg-main border-0 rounded-0 "
            >
              Create Book
            </Button>
          </Link>
        </div>
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
                <Link to="/edit-book" className="m-3">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Manage
                  </Button>
                </Link>

                <Link to="/edit-book">
                  <Button className="bg-main  fw-bold px-4">Borrow</Button>
                </Link>
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
                <Link to="/edit-book" className="m-3">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Manage
                  </Button>
                </Link>

                <Link to="/edit-book">
                  <Button className="bg-main  fw-bold px-4">Borrow</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default BookManagement;
