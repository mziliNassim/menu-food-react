import React from "react";

const Loding = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="loading-conatiner">
          <div className="loading"></div>
        </div>
      )}
    </>
  );
};

export default Loding;
