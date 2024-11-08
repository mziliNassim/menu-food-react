import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";

import { letters, urlMealsByLetter, urlDrinksByLetter } from "./data/data.js";

import Navigation from "./components/Navigation.jsx";
import Cards from "./components/Cards.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";
import ToTop from "./components/ToTop.jsx";

const App = () => {
  const [allDataMeals, setAllDataMeals] = useState([]);
  const [allDataDrinks, setAllDataDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMealsData = async () => {
    let allDataFetch = [];
    for (let letter of letters) {
      try {
        const response = await axios.get(urlMealsByLetter + letter);
        if (response.data.meals) {
          allDataFetch = [...allDataFetch, ...response.data.meals];
        }
        setAllDataMeals(allDataFetch);
      } catch (error) {
        setAllDataMeals([]);
        console.log("Error:", error);
      }
    }
  };

  const fetchDrinksData = async () => {
    let allDataFetch = [];
    for (let letter of letters) {
      try {
        const response = await axios.get(urlDrinksByLetter + letter);
        if (response.data.drinks) {
          allDataFetch = [...allDataFetch, ...response.data.drinks];
        }
        setAllDataDrinks(allDataFetch);
      } catch (error) {
        setAllDataDrinks([]);
        console.log("Error:", error);
      }
    }
  };

  useEffect(() => {
    fetchMealsData();
    fetchDrinksData();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navigation getSearchTerm={(term) => setSearchTerm(term)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/meals"
            element={
              <Cards
                type="meals"
                allData={allDataMeals}
                searchTerm={searchTerm}
              />
            }
          >
            <Route
              path="/meals/:id"
              element={<Cards allData={allDataMeals} searchTerm={searchTerm} />}
            />
          </Route>
          <Route
            path="/drinks"
            element={
              <Cards
                type="drinks"
                allData={allDataDrinks}
                searchTerm={searchTerm}
              />
            }
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToTop />
      </BrowserRouter>
    </>
  );
};

export default App;
