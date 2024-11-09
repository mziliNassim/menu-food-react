import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ infos, type }) => {
  let favoite = false;
  return (
    <>
      <div className={`card_ d-flex card-${type} animate`}>
        <img
          className="card-img-top"
          src={type == "meals" ? infos.strMealThumb : infos.strDrinkThumb}
          alt="{meal.strMeal}"
        />
        <div className="card-body position-relative">
          <h2 className="card-title text-light d-flex align-items-center justify-content-between">
            {type == "meals" ? infos.strMeal : infos.strCategory}
            <i
              className={`${favoite ? "bi bi-star-fill" : "bi  bi-star"} fs-5 icon`}
            ></i>
          </h2>
          <h3 className="pe-3 fs-5 text-light my-3">
            {type == "meals" ? infos.strMeal : infos.strGlass}
          </h3>
          <h4 className="card-title my-3 text-light">
            {type == "meals" ? infos.strArea : infos.strDrink}
          </h4>
          <p className="card-text desc text-light pe-3">
            <span>{infos.strInstructions.slice(0, 500) + "..."}</span>
          </p>
          <div className="events d-flex align-items-center justify-content-end position-absolute">
            {type == "meals" ? (
              <Link
                to={infos.strYoutube}
                target="_blanc"
                className="btn btn-danger "
              >
                YouTube
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
