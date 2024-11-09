import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
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

const Navigation = ({ isLogedIn }) => {
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const expand = "md";

  useEffect(() => {
    if (location.pathname.startsWith("/meals")) setType("meals");
    else if (location.pathname.startsWith("/drinks")) setType("drinks");
    else setType("");
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.value == "") {
      navigate(`/${type}/1`);
    } else navigate(`/${type}/${e.target.value}/1`);
  };

  const handleClickLogout = () => {
    localStorage.removeItem("loginUser");
    navigate("/auth/signin");
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
              </Nav>

              <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                {type && (
                  <Form.Control
                    type="search"
                    placeholder="Search a menu..."
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                  />
                )}

                {!isLogedIn ? (
                  <Link to="/auth/signin" className="text-decoration-none">
                    <Button variant="outline-primary d-flex align-items-center gap-2">
                      <i className="bi bi-person-fill-lock"></i>
                      <span>Login</span>
                    </Button>
                  </Link>
                ) : (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="outline-warning"
                      className=" d-flex align-items-center gap-2"
                      id="dropdown-basic"
                    >
                      <i className="bi bi-person-circle"></i>
                      <span className="text-uppercase">
                        {localStorage.getItem("loginUser") &&
                          JSON.parse(localStorage.getItem("loginUser"))
                            .username}
                      </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item>
                        <Link
                          to="/favorites"
                          className="text text-decoration-none text-dark"
                        >
                          favorites
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item onClick={handleClickLogout}>
                        <span className="text text-decoration-none text-dark">
                          Logout
                        </span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
