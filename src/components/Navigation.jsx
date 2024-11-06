import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Offcanvas, Form } from "react-bootstrap";

const Navigation = ({ getSearchTerm }) => {
  const navigate = useNavigate();
  const expand = "md";

  const handleSearch = (e) => {
    if (e.target.value == "") navigate(`/meals`);
    // else navigate(`/meals/${e.target.value}`);
    getSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary navBar">
        <Container>
          <div className="Brand brand">
            <NavLink
              to="/"
              className="Brand brand text-dark text-decoration-none"
            >
              {/* <img src={logo} alt="wiki-logo" className="logo" /> */}
              <h3 className="">Nassim MZILI</h3>
            </NavLink>
          </div>

          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Nassim MZILI
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="align-items-center  justify-content-end flex-grow-1 pe-3">
                <NavLink
                  to="/meals"
                  className="text-dark text-decoration-none mx-3 navLink"
                >
                  Meals
                </NavLink>
                {/* <NavLink
                  to="/drinks"
                  className="text-dark text-decoration-none mx-3 navLink"
                >
                  Drinks
                </NavLink> */}
              </Nav>
              <Form onSubmit={(e) => e.preventDefault()} className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search a menu..."
                  className="me-2"
                  aria-label="Search"
                  onChange={handleSearch}
                />
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
