import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";

import { letters, urlMealsByLetter, urlDrinksByLetter } from "../data/data.js";

import Card from "./Card";
import Loding from "./Loding";
import AlertMsg from "./AlertMsg";

const Cards = ({ type, searchTerm }) => {
  const location = useLocation();
  const [allData, setAllData] = useState([]);
  const [filterddata, setFilterdData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDataAxios = async (url) => {
    setLoading(true);
    setAllData([]);
    let allDataFetch = [];
    for (let letter of letters) {
      try {
        const response = await axios.get(url + letter);
        if (location.pathname == "/meals") {
          if (response.data.meals)
            allDataFetch = [...allDataFetch, ...response.data.meals];
        } else {
          if (response.data.drinks)
            allDataFetch = [...allDataFetch, ...response.data.drinks];
        }
      } catch (error) {
        console.log("Error:", error);
      }
    }
    if (allDataFetch.length > 0) {
      setAllData(allDataFetch);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (allData.length == 0) {
      if (location.pathname === "/meals") {
        fetchDataAxios(urlMealsByLetter);
      } else if (location.pathname === "/drinks") {
        fetchDataAxios(urlDrinksByLetter);
      }
    }
    if (searchTerm !== "") {
      setFilterdData([]);
      let filteredData__ = allData.filter(
        (el) =>
          el.strArea.toLowerCase().includes(searchTerm.toLowerCase()) ||
          el.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterdData(filteredData__);
      return;
    }
  }, [location, searchTerm]);

  return (
    <>
      <Loding loading={loading} />
      <Container>
        <div className={`cards mt-3 ${type}`}>
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
