import React from "react";
import { Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// [
//   "primary",
//   "secondary",
//   "success",
//   "danger",
//   "warning",
//   "info",
//   "light",
//   "dark",
// ]

const AlertMsg = ({ msg }) => {
  let variant = "warning";
  return (
    <>
      <Alert key={variant} variant={variant} className="m-auto text-center">
        {msg}{" "}
        <NavLink to="/meals" className="text text-{variant}">
          <strong className="">All Meals</strong>
        </NavLink>
      </Alert>
    </>
  );
};

export default AlertMsg;
