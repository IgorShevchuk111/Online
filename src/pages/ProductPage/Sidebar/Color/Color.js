import React from "react";
import "./Color.css";
import { CiSearch } from "react-icons/ci";

function Color({ uniqueColor }) {
  return (
    <>
      <div className="color-container">
        <h6>Color</h6>
        <div className="color-search-input">
          <input placeholder="Search for Color" />
          <CiSearch />
        </div>
        <div className="list-colors">
          <label className="color-input mt-3">
            <input type="checkbox"></input>
            <span className="checkmark"></span>
            All
          </label>
          {uniqueColor.map((color, index) => (
            <div key={index}>
              <label className="color-input">
                <input type="checkbox"></input>
                <span className="checkmark"></span>
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Color;
