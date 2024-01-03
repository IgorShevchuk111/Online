import React from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Main from "./components/MainComponents/Main";
import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Header />
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
