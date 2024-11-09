import React, { useState, useEffect } from "react";
import axios, { all } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import Card from "./Card";
import Loding from "./Loding";
import AlertMsg from "./AlertMsg";
import Paginationx from "./Paginationx.jsx";

const Cards = ({ allData, type }) => {
  const [filterdData, setFilterdData] = useState([]);
  const [pagedData, setPagedData] = useState([]);
  const [numPages, setNumPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [alertMsg, setAlertMsg] = useState(`Invalid ${type} !!`);
  const navigate = useNavigate();
  const { id: pageId, searchTerm } = useParams();

  // Searching
  useEffect(() => {
    setLoading(true);
    setFilterdData([]);
    if (searchTerm && searchTerm !== "") {
      let filteredData__;
      filteredData__ = allData.filter((el) => {
        if (type == "meals") {
          return el.strArea.toLowerCase().includes(searchTerm.toLowerCase());
        }
        if (type == "drinks") {
          return el.strCategory
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        }
      });
      setFilterdData(filteredData__);
    }
    setLoading(false);
  }, [searchTerm]);

  // Numbers of pages
  useEffect(() => {
    if (allData.length > 0) {
      if (pageId && searchTerm) {
        setNumPages(Math.floor(filterdData.length / 10));
      } else setNumPages(Math.floor(allData.length / 10));
    } else setFilterdData([]);
  }, [allData, filterdData]);

  // filterd data 10 card for Each page
  useEffect(() => {
    if (pageId) {
      setPagedData([]);
      setLoading(true);
      let dataPage = [];
      let maxCard = pageId * 10;
      if (pageId && searchTerm) {
        dataPage = filterdData.filter((data, i) => {
          if (i > maxCard - 10 && i <= maxCard) {
            return data;
          }
        });
      } else {
        dataPage = allData.filter((data, i) => {
          if (i > maxCard - 10 && i <= maxCard) {
            return data;
          }
        });
      }
      setPagedData(dataPage);
      setLoading(false);
    } else navigate(`/${type}/1`);
  }, [allData, pageId, filterdData]);

  // navigate to "/meals/:id" or "/meals/:searchTerm/:id"
  const getSelectedPage = (selected) => {
    window.scrollTo(0, 0);
    if (filterdData.length) {
      navigate(`/${type}/${searchTerm}/${selected + 1}`);
    } else navigate(`/${type}/${selected + 1}`);
  };

  return (
    <>
      <Container>
        <div className={`cards mt-5 pt-5 ${type}`}>
          {loading ? (
            <Loding loading={loading} />
          ) : pagedData.length > 0 ? (
            <>
              {pagedData.map((data, i) => {
                return <Card infos={data} key={i} type={type} />;
              })}
            </>
          ) : (
            alertMsg && <AlertMsg msg={alertMsg} />
          )}
        </div>
        <Paginationx
          numPages={numPages}
          pageId={pageId}
          getSelectedPage={getSelectedPage}
        />
      </Container>
    </>
  );
};

export default Cards;
