import React, { useEffect } from "react";
import "./Products.css";
import ItemCard from "../../../components/ItemCard/ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { filteredData } from "../actions/actions";
import { useLocation } from "react-router";

function Products() {
  const dispatch = useDispatch();
  const location = useLocation();
  const selectedMenuCategory = useSelector(
    (state) => state.selectedMenuCategory
  );
  const brands = useSelector((state) => state.brands);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);

  useEffect(() => {
    dispatch(filteredData(brands));
  }, [brands, selectedMenuItem, dispatch]);
  useEffect(() => {
    const pathWithoutSlash = location.pathname.split("/").pop();
    if (pathWithoutSlash && pathWithoutSlash !== "") {
      dispatch({
        type: "ADD_STATE_SELECTED_MENU",
        value: pathWithoutSlash,
      });
    }
  }, [dispatch, location.pathname]);
  return (
    <>
      <div className="products-container">
        {selectedMenuCategory &&
          selectedMenuCategory.map((model, i) => (
            <div key={i}>
              <ItemCard model={model} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Products;
