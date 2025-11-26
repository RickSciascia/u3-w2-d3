import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NetflixNavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/logo.png" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-netflix">
          <Nav className="me-auto">
            <Link className="fw-bold nav-link" to="/">
              Home
            </Link>
            <Link className="fw-bold nav-link" to="/tvshows">
              TV Shows
            </Link>
            <Link className="fw-bold nav-link" to="">
              Movies
            </Link>
            <Link className="fw-bold nav-link" to="">
              Recently Added
            </Link>
            <Link className="fw-bold nav-link" to="">
              My List
            </Link>
          </Nav>
          <div className="d-flex align-items-center">
            <i className="bi bi-search icons"></i>
            <div id="kids" className="fw-bold">
              KIDS
            </div>
            <i className="bi bi-bell icons"></i>
            <Link to="/account">
              <i className="bi bi-person-circle icons"></i>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NetflixNavBar;
