import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import MaterialUISwitch from "./ThemeSwitch";

function NavBarMain() {
  const linkStyle = {
    color: "black",
    paddingLeft: "10px",
    textDecoration: "none",
  };
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/page-1" style={linkStyle}>
            Page1
          </Link>
          <Link to="/page-2" style={linkStyle}>
            Page2
          </Link>
          <Link to="/page-3" style={linkStyle}>
            Page3
          </Link>
          <MaterialUISwitch />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarMain;
