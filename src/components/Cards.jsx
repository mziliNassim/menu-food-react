import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Card from "./Card";
import Loding from "./Loding";
import AlertMsg from "./AlertMsg";
import Paginationx from "./Paginationx.jsx";

const Cards = ({ allData, type, searchTerm }) => {
  const [loading, setLoading] = useState(true);
  const [filterddata, setFilterdData] = useState([]);
  const [pagesNums, setPagesNums] = useState(0);
  const pageId = useParams().id;

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
    if (pageId) {
      alert(`pageId :  ${pageId}`);
    }
  }, [pageId]);

  return (
    <>
      {pagesNums !== 0 && <Paginationx pagesNums={pagesNums} />}
      <Loding loading={loading} />
      <Container>
        <div className={`cards mt-5 pt-5 ${type}`}>
          {searchTerm == "" ? (
            allData.map((infos, index) =>
              infos ? <Card infos={infos} key={index} type={type} /> : null
            )
          ) : filterddata.length == 0 ? (
            <AlertMsg msg={`Invalid ${type} for term you are searching!!`} />
          ) : (
            filterddata.map((infos, index) => (
              <Card infos={infos} key={index} type={type} />
            ))
          )}
        </div>
      </Container>
    </>
  );
};

export default Cards;
