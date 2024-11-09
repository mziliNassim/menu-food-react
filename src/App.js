import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";

import { letters, urlMealsByLetter, urlDrinksByLetter } from "./data/data.js";

import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import ToTop from "./components/ToTop";
import ToBottom from "./components/ToBottom";
import SignIN from "./components/authentication/SignIN";
import SignUP from "./components/authentication/SignUP";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [allDataMeals, setAllDataMeals] = useState([]);
  const [allDataDrinks, setAllDataDrinks] = useState([]);
  const [isLogedIn, setIsLogedIn] = useState(false);

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

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem("loginUser")) setIsLogedIn(true);
      else setIsLogedIn(false);
    }, 1000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navigation isLogedIn={isLogedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth">
            <Route path="" element={<SignIN isLogedIn={isLogedIn} />} />
            <Route path="signin" element={<SignIN isLogedIn={isLogedIn} />} />
            <Route path="signup" element={<SignUP isLogedIn={isLogedIn} />} />
          </Route>
          <Route
            path="/meals"
            element={<Cards type="meals" allData={allDataMeals} />}
          >
            <Route
              path="/meals/:id"
              element={<Cards allData={allDataMeals} />}
            />
            <Route
              path="/meals/:searchTerm/:id"
              element={<Cards allData={allDataMeals} />}
            />
          </Route>
          <Route
            path="/drinks"
            element={<Cards type="drinks" allData={allDataDrinks} />}
          >
            <Route
              path="/drinks/:id"
              element={<Cards allData={allDataMeals} />}
            />
            <Route
              path="/drinks/:searchTerm/:id"
              element={<Cards allData={allDataMeals} />}
            />
          </Route>
        </Routes>
        <Footer />
        <ToTop />
        {/* <ToBottom /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
