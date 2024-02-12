import React from "react";
import Footer from "./components/Footer";
import "./index.css";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Bascket from "./components/Basket";
import ProductListPage from "./pages/ProductListPage";
import Login from "./pages/LoginPage";
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
