import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar bg="success" expand="md">
      <Container>
        <Navbar.Brand href="#home" className="text-light">
          Expenses Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Link to="/" className="nav-link">
              <i className="fa-solid fa-right-to-bracket text-light"></i>
            </Link>
            <Link to="/register" className="nav-link">
              <i className="fa-solid fa-user-pen text-light"></i>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
