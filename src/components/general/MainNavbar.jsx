import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BsHandbagFill } from 'react-icons/bs';
import './MainNavbar.scss';

function MainNavbar(props) {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/cart">
          <div className="shopping-bag-holder">
            <BsHandbagFill className="shopping-bag" />
            {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info text-light"> */}
            <span className="shopping-bag-price badge rounded-pill bg-info text-light">
              99
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
