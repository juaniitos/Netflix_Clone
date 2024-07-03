import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/">
        <img
          src="https://image.tmdb.org/t/p/original/your_logo_path_here.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="TMDB logo"
        />
        TMDB
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/movies">Películas</Nav.Link>
          <Nav.Link as={Link} to="/series">Series</Nav.Link>
          <Nav.Link as={Link} to="/people">Gente</Nav.Link>
          <NavDropdown title="Más" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/trending">Tendencias</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/top-rated">Más valoradas</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/upcoming">Próximamente</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Nav>
          <Nav.Link href="#">
            <i className="bi bi-plus-lg"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-bell-fill"></i>
            <span className="badge bg-danger">1</span>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="bi bi-person-circle"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
