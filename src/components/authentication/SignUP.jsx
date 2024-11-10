import React, { useEffect, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import Auth from "./Auth";

const SignUP = ({ isLogedIn }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ msg: "", type: "success" });
  const [logupUser, setLogupUser] = useState({
    username: "",
    email: "",
    password: "",
    confermPassword: "",
    checked: false,
  });

  useEffect(() => {
    if (isLogedIn) navigate("/");
  }, [isLogedIn]);

  const handleChnageSingIn = (e) => {
    const { value, name, checked, type } = e.target;
    setLogupUser({
      ...logupUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // check validtion of data (username and password)
  const validData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (logupUser.username.trim() !== "" && logupUser.username.length >= 5) {
      if (emailRegex.test(logupUser.email)) {
        if (logupUser.password.length >= 8) {
          if (logupUser.password === logupUser.confermPassword) {
            if (logupUser.checked) {
              setAlert({
                msg: "Sign UP successfly",
                type: "success",
              });
              return true;
            } else
              setAlert({
                msg: "Accept terms and condition !!!",
                type: "warning",
              });
          } else setAlert({ msg: "Password Don't Match !!!", type: "warning" });
        } else
          setAlert({
            msg: "Password is at least 8 characters !!!",
            type: "warning",
          });
      } else setAlert({ msg: "Invalid Email !!!", type: "warning" });
    } else setAlert({ msg: "Invalid Username !!!", type: "warning" });
    return false;
  };

  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    if (validData()) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.push({
        username: logupUser.username,
        email: logupUser.email,
        password: logupUser.password,
      });
      localStorage.setItem("users", JSON.stringify(users));
      navigate("/auth/signin");
    }
  };

  return (
    <>
      <Auth />
      <div className="auth">
        <Container>
          <Form
            onSubmit={handleSubmitSingIn}
            className="animate text-light form"
            style={{ justifyContent: "flex-end" }}
          >
            {alert.msg && (
              <Alert variant={alert.type} className="text-center p-2">
                {alert.msg}
              </Alert>
            )}

            <Form.Group className="" controlId="formBasicTitle">
              <h1 className="nunito-font">Sign UP</h1>
            </Form.Group>

            <hr className="text-center" />

            <Form.Group className="" controlId="formBasicUsername">
              <Form.Label className="">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username..."
                name="username"
                value={logupUser.username}
                onChange={handleChnageSingIn}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="formBasicEmail">
              <Form.Label className="">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email..."
                name="email"
                value={logupUser.email}
                onChange={handleChnageSingIn}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="formBasicConfirmPassword">
              <Form.Label className="">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password..."
                name="password"
                value={logupUser.password}
                onChange={handleChnageSingIn}
              />
            </Form.Group>

            <Form.Group className="my-2" controlId="formBasicPassword">
              <Form.Label className="">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Conferm password..."
                name="confermPassword"
                value={logupUser.confermPassword}
                onChange={handleChnageSingIn}
              />
            </Form.Group>

            <Form.Group
              className="my-3 d-flex align-items-start gap-3"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                name="checked"
                checked={logupUser.checked}
                onChange={handleChnageSingIn}
                id="checked"
              />
              <label htmlFor="checked">
                <span>I agree to the </span>
                <Link to="/termsandconditions" className="text-decoration-none">
                  Terms and Conditions
                </Link>
                <span> and the </span>
                <Link to="/cookiepolicy" className="text-decoration-none">
                  Cookie Policy
                </Link>
                <span>.</span>
              </label>
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-end "
              controlId="formBasicSubmit"
            >
              <Button variant="primary" type="submit" className="px-5">
                Sign UP
              </Button>
            </Form.Group>

            <hr className="text-center" />

            <Form.Group className="text-center" controlId="formBasicCheckbox">
              <span>Allredy have account</span>{" "}
              <Link to="/auth/signin">Sign IN</Link>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignUP;
