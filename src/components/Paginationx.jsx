import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const Paginationx = ({ pagesNums }) => {
  const navigate = useNavigate();

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        previousLabel="< previous"
        onPageChange={() => navigate(`/meals/${pagesNums}`)}
        // pageCount={numPages} ==> No Movies In Pages over 500
        pageCount={500}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
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
