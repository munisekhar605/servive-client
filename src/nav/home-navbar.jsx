import  './home-navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function homeNavbar() {
  return (
    <Navbar expand="lg" className="nav-background-color">
      <Container>
        <Navbar.Brand className="nav-name-title" href="#home">SERVIVE SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-text-color" href="#home">MEN</Nav.Link>
            <Nav.Link className="nav-text-color">WOMEN</Nav.Link>
            <Nav.Link className="nav-text-color">KIDS</Nav.Link>
            <Nav.Link className="nav-text-color">CART</Nav.Link>
            <Nav.Link className="nav-text-color">OREDRS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default homeNavbar;
