import React from "react";

const Auth = () => {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", "[]");
  }
  return <></>;
};

export default Auth;
