import React, { useEffect, useState } from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth";

const SignIN = ({ isLogedIn }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ msg: "", type: "" });
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (isLogedIn) navigate("/");
  }, [isLogedIn]);

  const handleChnageSingIn = (e) => {
    const { value, name } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  // check validtion of data (user exist in DB)
  const validData = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    let signingUser = {
      username: loginUser.username,
      password: loginUser.password,
    };
    for (let user of users) {
      if (user.username == signingUser.username) {
        if (user.password == signingUser.password) {
          setAlert({ msg: "loging successfly !!!", type: "success" });
          return true;
        }
      }
    }
    setAlert({
      msg: "Invalid username or password!!",
      type: "warning",
    });
    return false;
  };

  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    if (validData()) {
      localStorage.setItem(
        "loginUser",
        JSON.stringify({
          username: loginUser.username,
          password: loginUser.password,
        })
      );
      setTimeout(() => {
        navigate("/");
      }, 200);
    }
    setTimeout(() => {
      setAlert({
        msg: "",
        type: "",
      });
    }, 2000);
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

            <Form.Group className="mb-4" controlId="formBasicTitle">
              <h1 className="nunito-font ">Sign IN</h1>
            </Form.Group>

            <hr className="text-center my-4" />

            <Form.Group className="mb-1" controlId="formBasicUsername">
              <Form.Label className="">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username..."
                name="username"
                value={loginUser.username}
                onChange={handleChnageSingIn}
              />
              <Form.Text className="text-muted text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label className="">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password..."
                name="password"
                value={loginUser.password}
                onChange={handleChnageSingIn}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex align-items-start gap-3"
              controlId="formBasicCheckbox"
            >
              <Link to="mdps">
                <p>Mot de passe oublié ?</p>
              </Link>
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-end mt-2"
              controlId="formBasicSubmit"
            >
              <Button variant="primary" type="submit" className="px-5">
                Login
              </Button>
            </Form.Group>

            <hr className="text-center my-4" />

            <Form.Group className="text-center" controlId="formBasicCheckbox">
              <span>Don't have account</span>{" "}
              <Link to="/auth/signup">Sign UP</Link>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignIN;
