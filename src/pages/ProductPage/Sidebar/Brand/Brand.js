import React from "react";
import "./Brand.css";
import { CiSearch } from "react-icons/ci";

function Brand({ uniqueBrands }) {
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
                <input type="checkbox"></input>
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
