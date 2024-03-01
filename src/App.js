import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Bascket from "./components/Basket";
import ProductPage from "./pages/ProductPage/ProductPage";
import Login from "./pages/LoginPage";
import ErrorPage from "./components/ErrorPage";
import OpenedItemPage from "./pages/OpenedItemPage";
import MainLayout from "./pages/MainLayout";

function App() {
  const isDarkMode = useSelector((state) => state.isDarkMode);
  return (
    <BrowserRouter>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/:productList" element={<ProductPage />} />
            <Route path="/:productList/:id" element={<OpenedItemPage />} />
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
