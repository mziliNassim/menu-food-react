import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Card from "./Card";
import Loding from "./Loding";
import AlertMsg from "./AlertMsg";
import Paginationx from "./Paginationx.jsx";

const Cards = ({ allData, type, searchTerm }) => {
  const [loading, setLoading] = useState(true);
  const [filterdData, setFilterdData] = useState([]);
  const [pagedData, setPagedData] = useState([]);
  const [numPages, setNumPages] = useState(0);

  const pageId = useParams().id;
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm !== "") {
      setLoading(true);
      setFilterdData([]);
      let filteredData__ = allData.filter(
        (el) =>
          el.strArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterdData(filteredData__);
    }
    setLoading(false);
  }, [searchTerm]);

  useEffect(() => {
    if (allData.length == 0) {
      setFilterdData([]);
    } else {
      setNumPages(Math.ceil(allData.length / 10));
    }
  }, [allData]);

  useEffect(() => {
    if (pageId) {
      setPagedData([]);
      let maxCard = pageId * 10;
      let dataPage = allData.filter((data, i) => {
        if (i > maxCard - 10 && i <= maxCard) {
          return data;
        }
      });
      setPagedData(dataPage);
    } else navigate("/meals/1");
  }, [pageId, allData]);

  const getSelectedPage = (selected) => {
    navigate(`/meals/${selected + 1}`);
  };

  return (
    <>
      <Loding loading={loading} />
      <Container>
        <div className={`cards mt-5 pt-5 ${type}`}>
          {searchTerm == "" ? (
            pagedData.length > 0 ? (
              pagedData.map((infos, index) =>
                infos ? <Card infos={infos} key={index} type={type} /> : null
              )
            ) : (
              <AlertMsg msg={`Invalid ${type} !!`} />
            )
          ) : filterdData.length == 0 ? (
            <AlertMsg msg={`Invalid ${type} for term you are searching!!`} />
          ) : (
            filterdData.map((infos, index) => (
              <Card infos={infos} key={index} type={type} />
            ))
          )}
          {pageId !== 0 && (
            <Paginationx
              numPages={numPages}
              pageId={pageId}
              getSelectedPage={getSelectedPage}
            />
          )}
        </div>
      </Container>
    </>
  );
};

export default Cards;
