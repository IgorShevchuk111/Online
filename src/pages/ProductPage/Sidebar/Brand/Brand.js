import React from "react";
import "./Brand.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { addBrand } from "../../actions/actions";
import { data } from ".././../../../data";

function Brand() {
  const dispatch = useDispatch();
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);

  const handleBrandClick = (brand) => {
    if (brand) {
      dispatch(addBrand(brand));
    }
  };
  const uniqueBrands = [
    ...new Set(data[selectedMenuItem]?.models.map((item) => item.brand)),
  ].filter((brand) => brand.trim());

  return (
    <>
      <div className="brand-container">
        <h6>Brand</h6>
        <div className="brand-search-input">
          <input placeholder="Search for Brand" />
          <CiSearch />
        </div>
        <div className="list-brands">
          <label className="brand-input mt-3">
            <input type="checkbox"></input>
            <span className="checkmark"></span>
            All
          </label>
          {uniqueBrands.map((brand, index) => (
            <div key={index}>
              <label className="brand-input">
                <input
                  type="checkbox"
                  value={brand}
                  onChange={(e) => handleBrandClick(e.target.value)}
                ></input>
                <span className="checkmark"></span>
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Brand;
