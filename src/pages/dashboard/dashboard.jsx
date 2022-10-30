import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../components/navbar/Navigation";
import userMgt from "../../assets/images/user-mgt-icon.png";
import bookMgt from "../../assets/images/book-mgt-icon.png";
import checkedIn from "../../assets/images/checkin-icon.png";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Row className="mt-5">
          <Col md={3}>
            <Link to="/users">
              <Card className="text-center p-2 border-0 shadow">
                <Card.Body>
                  <img src={userMgt} alt="user management" className="my-4" />
                  <h5 className="fw-bold">Users Management</h5>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/books">
              <Card className="text-center p-2 border-0 shadow">
                <Card.Body>
                  <img src={bookMgt} alt="book management" className="my-4" />
                  <h5 className="fw-bold">Book Management</h5>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col md={3}>
            <Link to="/book-check">
              <Card className="text-center p-2 border-0 shadow">
                <Card.Body>
                  <img
                    src={checkedIn}
                    alt="checkin management"
                    className="my-4"
                  />
                  <h5 className="fw-bold">Checkin / Checkout</h5>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="mt-5">
              <h5 className="fw-bold mt-5">Recent Activities</h5>
              <Table bordered hover>
                <thead>
                  <tr className="bg-main">
                    <th>S/N</th>
                    <th>Name</th>
                    <th>Action</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Chris</td>
                    <td>Checked in a book</td>
                    <td>30th Oct, 2022 </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Created a new User</td>
                    <td>30th Oct, 2022</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Solomon</td>
                    <td>Edited a book Info</td>
                    <td>30th Oct, 2022</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Dashboard;
