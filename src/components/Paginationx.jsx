import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Paginationx = ({ numPages, getSelectedPage }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={({ selected }) => getSelectedPage(selected)}
        pageCount={numPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        containerClassName={"pagination my-5 justify-content-center"}
        pageClassName={"page-item"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Paginationx;
