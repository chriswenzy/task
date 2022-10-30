import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../../../components/navbar/Navigation";
import userPic from "../../../assets/images/user-nav.png";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <div className="mt-5">
          <Link to="/create-user" className=" my-3">
            <Button
              size="lg"
              className=" text-white  bg-main border-0 rounded-0 "
            >
              Create User
            </Button>
          </Link>
        </div>
        <Row className="mt-5">
          <Col md={3}>
            <Card className="text-center p-2 border-0 shadow rounded">
              <Card.Body>
                <img src={userPic} alt="user profile " className="my-4" />
                <h5 className="fw-bold">Chris Chuks</h5>
                <h6>chris@gmail.com</h6>
                <p>090342121234</p>
                <p className="text-warning fw-bold">Librarian</p>
                <Link to="/edit-user">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Edit
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-2 border-0 shadow rounded">
              <Card.Body>
                <img src={userPic} alt="user profile " className="my-4" />
                <h5 className="fw-bold">Chris Chuks</h5>
                <h6>chris@gmail.com</h6>
                <p>090342121234</p>
                <p className="text-warning fw-bold">Librarian</p>
                <Link to="/edit-user">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Edit
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-2 border-0 shadow rounded">
              <Card.Body>
                <img src={userPic} alt="user profile " className="my-4" />
                <h5 className="fw-bold">Chris Chuks</h5>
                <h6>chris@gmail.com</h6>
                <p>090342121234</p>
                <p className="text-warning fw-bold">Librarian</p>
                <Link to="/edit-user">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Edit
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="text-center p-2 border-0 shadow rounded">
              <Card.Body>
                <img src={userPic} alt="user profile " className="my-4" />
                <h5 className="fw-bold">Chris Chuks</h5>
                <h6>chris@gmail.com</h6>
                <p>090342121234</p>
                <p className="text-warning fw-bold">Librarian</p>
                <Link to="/edit-user">
                  <Button className="bg-transparent text-dark fw-bold px-4 outline-main">
                    Edit
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default UserManagement;
