import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

import Navigation from "./components/Navigation.jsx";
import Cards from "./components/Cards.jsx";
import Home from "./components/Home.jsx";
import NotFound from "./components/NotFound.jsx";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <BrowserRouter>
        <Navigation getSearchTerm={(term) => setSearchTerm(term)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/meals"
            element={<Cards type="meals" searchTerm={searchTerm} />}
          />
          d
          <Route
            path="/drinks"
            element={<Cards type="drinks" searchTerm={searchTerm} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
