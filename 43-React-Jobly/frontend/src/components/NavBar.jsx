import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page1 from "pages/Page1";
import Page2 from "pages/Page2";
import Page3 from "pages/Page3";

function NavBarMain() {
  const linkStyle = {
    color: "black",
    paddingLeft: "10px",
    textDecoration: "none",
  };
  return (
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={linkStyle}>
              Page1
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
            {/* <Nav.Link>Page1</Nav.Link>
            <Nav.Link href="/page-2">Page2</Nav.Link>
            <Nav.Link href="/page-3">Page3</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/page-1" element={<Page1 />}></Route>
        <Route path="/page-2" element={<Page2 />}></Route>
        <Route path="/page-3" element={<Page3 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavBarMain;