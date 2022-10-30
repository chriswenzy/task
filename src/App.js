import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/authentication/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/authentication/Register";
import RegisterConfirm from "./pages/authentication/Register-confirm";
import Dashboard from "./pages/dashboard/dashboard";
import UserManagement from "./pages/dashboard/user-management";
import CreateUser from "./pages/dashboard/user-management/Create-user";
import EditUser from "./pages/dashboard/user-management/Edit-user";
import BookManagement from "./pages/dashboard/book-management";
import CreateBook from "./pages/dashboard/book-management/Create-book";
import EditBook from "./pages/dashboard/book-management/Edit-book";
import BookCheckManagement from "./pages/dashboard/book-check-management";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/register-confirm" element={<RegisterConfirm />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/users" element={<UserManagement />} />
          <Route exact path="/create-user" element={<CreateUser />} />
          <Route exact path="/edit-user" element={<EditUser />} />
          <Route exact path="/books" element={<BookManagement />} />
          <Route exact path="/create-book" element={<CreateBook />} />
          <Route exact path="/edit-book" element={<EditBook />} />
          <Route exact path="/book-check" element={<BookCheckManagement />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
