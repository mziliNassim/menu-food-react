import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";
import Loding from "./Loding";

import hero from "../img/hero.png";

const Home = () => {
  const [loading, setLoading] = useState(true);
  // const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 650);
  }, [loading]);

  return (
    <>
      <div className="home p-0">
        {loading ? (
          <Loding loading={loading} />
        ) : (
          <div className=" pt-5">
            <div className="bg-dark hero-header p-4">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="fw-semibold display-3 text-white animated slideInLeft">
                      Enjoy Our
                      <br />
                      Meals, Drinks
                    </h1>
                    <p className="text-white animated slideInLeft my-4 pb-2">
                      Indulge in our delightful selection of meals and
                      refreshing drinks, crafted to satisfy your taste buds with
                      flavors that are both bold and comforting. Every dish and
                      beverage is thoughtfully prepared with quality ingredients
                      and attention to detail, bringing you a dining experience
                      that’s more than just a meal—it’s a moment to savor.
                      Whether you're in the mood for something hearty, light, or
                      a bit of both, our menu offers a variety that caters to
                      every craving. Let us elevate your dining experience with
                      flavors that linger and moments to remember.
                    </p>
                    <Link
                      to="/about"
                      className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft fw-semibold"
                    >
                      About{" "}
                      <span className="nunito-font text-warning ">
                        ResToresT
                      </span>
                    </Link>
                  </div>
                  <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                    <img className="img-fluid" src={hero} alt="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
