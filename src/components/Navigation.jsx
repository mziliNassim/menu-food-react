import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  Offcanvas,
  Form,
  NavDropdown,
  Dropdown,
  Button,
} from "react-bootstrap";

const Navigation = ({ getSearchTerm }) => {
  const navigate = useNavigate();
  const expand = "md";

  const handleSearch = (e) => {
    // if (e.target.value == "") navigate(`/meals`);
    // else navigate(`/meals/${e.target.value}`);
    getSearchTerm(e.target.value);
  };

  return (
    <>
      <Navbar
        key={expand}
        expand={expand}
        className=" navBar "
        style={{ position: "fixed" }}
      >
        <Container>
          <div className="Brand brand">
            <NavLink
              to="/"
              className="Brand brand text-warning text-decoration-none"
            >
              {/* <img src={logo} alt="wiki-logo" className="logo" /> */}
              <h3 className="nunito-font">ResToresT</h3>
            </NavLink>
          </div>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            className="bg-secondary text text-light"
          />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            className=""
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header className="" closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                ResToresT
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
              <Nav className="align-items-center   justify-content-end flex-grow-1 pe-3">
                <NavLink
                  to="/meals"
                  className=" text-decoration-none mx-3 navLink"
                >
                  Meals
                </NavLink>
                <NavLink
                  to="/drinks"
                  className=" text-decoration-none mx-3 navLink"
                >
                  Drinks
                </NavLink>

                {/* <Dropdown>
                  <Dropdown.Toggle
                    className="navLink bg-transparent border-none"
                    id="dropdown-basic"
                  >
                    Favorits
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="navBar"
                    style={{ background: "#0f172b" }}
                  >
                    <Dropdown.Item className="dropdown bg-transparent">
                      <Link to="/favorites/meals" className="dropdownNavLink ">
                        Meals
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown bg-transparent">
                      <Link to="/favorites/drinks" className="dropdownNavLink ">
                        Drinks
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
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
              <Form className="d-flex">
                {/* <Link to="/login">
                  <Button variant="outline-primary d-flex align-items-center gap-2">
                    <i className="bi bi-person-fill-lock"></i>
                    Login
                  </Button>
                </Link> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
