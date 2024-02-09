import React from "react";
import Footer from "./components/Footer/Footer";
import "./App.css";
import MainPage from "./MainPage/MainPage";
import Header from "./components/HeaderComponents/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Bascket from "./components/HeaderComponents/basket/Basket";
import ProductListPage from "./ProductListPage/ProductListPage";
import Login from "./components/HeaderComponents/login-component/Login";
import ErrorPage from "./components/ErrorPage";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
                <Footer />
              </>
            }
          >
            <Route path="/:id" element={<ProductListPage />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="basket" element={<Bascket />}></Route>
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
