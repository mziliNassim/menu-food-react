import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const SignUP = () => {
  return (
    <>
      <div className="auth">
        <Container>
          <Form
            className="animate text-light"
            style={{ justifyContent: "flex-end" }}
          >
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <h1 className="nunito-font ">Sign UP</h1>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default SignUP;
