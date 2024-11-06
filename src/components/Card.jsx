import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Card = ({ infos, type }) => {
  return (
    <>
      <div className={`card_ d-flex card-${type}`}>
        <img
          className="card-img-top"
          src={type == "meals" ? infos.strMealThumb : infos.strDrinkThumb}
          alt="{meal.strMeal}"
        />
        <div className="card-body position-relative">
          <h2 className="card-title">
            {type == "meals" ? infos.strMeal : infos.strCategory}
          </h2>
          <h4 className="card-title my-3">
            {type == "meals" ? infos.strArea : infos.strDrink}
          </h4>
          <p className="card-text desc">
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
