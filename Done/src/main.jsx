import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.css";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/StarWarsGame";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
