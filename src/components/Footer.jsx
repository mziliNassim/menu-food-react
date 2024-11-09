import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="">
        <footer className="text-center text-lg-start text-white">
          <div className="container p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h2 className="mb-4 font-weight-bold text-warning nunito-font fs-2 fs-md-6">
                    ResToresT
                  </h2>
                  <p>
                    Food and Drinks made with love! At [ResToresT], we serve
                    fresh, tasty meals in a cozy spot. Join us for a memorable
                    dining experience!
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-warning pacifico-regular-font">
                    Navigation links
                  </h6>
                  <p>
                    <Link to="/" className="text-white text-decoration-none">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/about"
                      className="text-white text-decoration-none"
                    >
                      About
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/about"
                      className="text-white text-decoration-none"
                    >
                      About
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/contact"
                      className="text-white text-decoration-none"
                    >
                      Contact US
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-warning pacifico-regular-font">
                    Useful links
                  </h6>
                  <p>
                    <Link
                      to="/meals"
                      className="text-white text-decoration-none"
                    >
                      Meals
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/drinks"
                      className="text-white text-decoration-none"
                    >
                      Drinks
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/account"
                      className="text-white text-decoration-none"
                    >
                      Your Account
                    </Link>
                  </p>
                  <p>
                    <Link
                      to="/help"
                      className="text-white text-decoration-none"
                    >
                      Help
                    </Link>
                  </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 ">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-warning pacifico-regular-font">
                    Contacts
                  </h6>
                  <p>
                    <i class="bi bi-house-door-fill me-2"></i>
                    <span>New York, NY 10012, US</span>
                  </p>
                  <p>
                    <i class="bi bi-envelope-fill me-2"></i>
                    <span>info@gmail.com</span>
                  </p>
                  <p>
                    <i class="bi bi-telephone-fill me-2"></i>
                    <span>+ 01 234 567 88</span>
                  </p>
                  <p>
                    <i class="bi bi-telegram me-2"></i>
                    <span>+ 01 234 567 89</span>
                  </p>
                </div>
              </div>
            </section>

            <hr className="my-3" />

            <section className="p-3 pt-0">
              <div className="row d-flex align-items-center">
                <div className="col-md-12 col-lg-4 text-strat text-md-center">
                  <div className="">
                    <span>© 2024 Copyright</span>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4 text-center text-md-center my-3">
                  <div>
                    <Link
                      className="text-primary text-decoration-none"
                      to="/termsandconditions"
                    >
                      Terms and Conditions
                    </Link>{" "}
                    <span>and the</span>{" "}
                    <Link
                      className="text-primary  text-decoration-none"
                      to="/cookiepolicy"
                    >
                      Cookie Policy
                    </Link>
                    <span>.</span>
                  </div>
                </div>

                <div className="col-md-12 col-lg-4 text-center text-md-center">
                  <a
                    href="https://instagram.com/nassim__dev/"
                    target="_blanc"
                    className="btn btn-outline-light m-1 rounded-circle"
                    role="button"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>

                  <a
                    href="https://instagram.com/nassim__dev/"
                    target="_blanc"
                    className="btn btn-outline-light m-1 rounded-circle"
                    role="button"
                  >
                    <i class="bi bi-twitter"></i>
                  </a>

                  <a
                    href="https://instagram.com/nassim__dev/"
                    target="_blanc"
                    className="btn btn-outline-light m-1 rounded-circle"
                    role="button"
                  >
                    <i class="bi bi-google"></i>
                  </a>

                  <a
                    href="https://instagram.com/nassim__dev/"
                    target="_blanc"
                    className="btn btn-outline-light m-1 rounded-circle"
                    role="button"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
