import React, { useEffect, useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const SignIN = ({ isLogedIn }) => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ msg: "", type: "" });
  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    checked: true,
  });

  useEffect(() => {
    if (isLogedIn) navigate("/");
  }, [isLogedIn]);

  // check validtion of data (username and password)
  const validData = () => {
    return true;
  };

  const handleChnageSingIn = (e) => {
    const { value, name, checked, type } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmitSingIn = (e) => {
    e.preventDefault();
    if (loginUser.name == "" || loginUser.password == "")
      // setAlert({ msg: "Empty feilds !!!", type: "warnig" });
      window.alert("mpty feilds !!!");
    else {
      if (!validData())
        setAlert({ msg: "Invalid Username Or Password !!!", type: "warnig" });
      else {
        localStorage.setItem(
          "loginUser",
          JSON.stringify({
            username: loginUser.username,
            password: loginUser.password,
          })
        );
        navigate("/");
      }
    }
  };

  return (
    <>
      <div className="auth">
        <Container>
          <Form
            onSubmit={handleSubmitSingIn}
            className="animate text-light"
            style={{ justifyContent: "flex-end" }}
          >
            <Form.Group className="mb-4" controlId="formBasicTitle">
              <h1 className="nunito-font ">Sign IN</h1>
            </Form.Group>

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
              className="mb-3 d-flex align-items-start justify-content-between"
              controlId="formBasicCheckbox"
            >
              <div className="d-flex align-items-start gap-3">
                <Form.Check
                  type="checkbox"
                  name="checked"
                  checked={loginUser.checked}
                  onChange={handleChnageSingIn}
                  id="checked"
                />
                <label htmlFor="checked">
                  <span>I agree to the </span>
                  <Link
                    to="/termsandconditions"
                    className="text-decoration-none"
                  >
                    Terms and Conditions
                  </Link>
                  <span> and the </span>
                  <Link to="/cookiepolicy" className="text-decoration-none">
                    Cookie Policy
                  </Link>
                  <span>.</span>
                </label>
              </div>
              <Link to="/auth/signup">Sign UPS</Link>
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-end"
              controlId="formBasicCheckbox"
            >
              <Button variant="primary" type="submit" className="px-5">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignIN;
