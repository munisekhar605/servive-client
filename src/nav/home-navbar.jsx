import './home-navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginModel from './LoginModel';
import SignupModel from './signupModel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomeNavbar() {
  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [JWT, setJWT] = useState(localStorage.getItem('JWT'));
  const navigate = useNavigate(); // For programmatic navigation

  // Handle navigation for Men, Women, Kids, and Cart
  const handleNavigation = (path) => {
    navigate(path); // Updates the route without reloading the page
  };

  const loginForm = () => {
    setSignup(false);
    setLogin(true);
  };

  const signupForm = () => {
    setLogin(false);
    setSignup(true);
  };

  const handleCancelSignup = () => {
    setSignup(false);
  };

  const handleCancelLogin = () => {
    setLogin(false);
  };

  return (
    <>
      <Navbar expand="lg" className="nav-background-color">
        <Container>
          <Navbar.Brand className="nav-name-title" onClick={() => handleNavigation('/')}>
            SERVIVE SHOP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/')}>
                HOME
              </Nav.Link>
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/men')}>
                MEN
              </Nav.Link>
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/women')}>
                WOMEN
              </Nav.Link>
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/kids')}>
                KIDS
              </Nav.Link>
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/cart')}>
                CART
              </Nav.Link>
              <Nav.Link className="nav-text-color" onClick={() => handleNavigation('/orders')}>
                ORDERS
              </Nav.Link>
            </Nav>
            {!JWT && (
              <>
                <Nav.Link className="nav-login-button" onClick={loginForm}>
                  Login
                </Nav.Link>
                <Nav.Link className="nav-signup-button" onClick={signupForm}>
                  SignUp
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {login && <LoginModel cancel={handleCancelLogin} />}
      {signup && <SignupModel cancel={handleCancelSignup} />}
    </>
  );
}

export default HomeNavbar;

