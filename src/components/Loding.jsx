import React from "react";

const Loding = ({ loading }) => {
  return (
    <>
      {loading && (
        // <div className="loading-conatiner">
        //   <div className="loading"></div>
        // </div>

        <div
          id="spinner"
          className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      )}
    </>
  );
};

export default Loding;
