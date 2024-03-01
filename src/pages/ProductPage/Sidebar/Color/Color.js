import React from "react";
import "./Color.css";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";

function Color() {
  const filteredItems = useSelector((state) => state.filteredItems);
  const uniqueColor = [
    ...new Set(filteredItems?.flatMap((item) => item.color)),
  ].filter((color) => color.trim());
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
            <span className="color-checkmark"></span>
            <FiCheck className="color-checked" /> All
          </label>
          {uniqueColor.map((color, index) => (
            <div key={index}>
              <label className="color-input">
                <input type="checkbox"></input>
                <span className="color-checkmark"></span>
                <FiCheck className="color-checked" />
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
