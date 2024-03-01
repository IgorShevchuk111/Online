import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { fetchData } from "./ProductPage/actions/actions";

function MainLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
