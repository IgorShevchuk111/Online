import React from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { useSelector } from "react-redux";

function Model() {
  const data = useSelector((state) => state.data);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  return (
    <>
      <div className="model-container">
        <h6>Model</h6>
        <div className="model-search-input">
          <input placeholder="Search for Model" />
          <CiSearch />
        </div>
        <div className="list-models">
          <label className="model-input mt-3">
            <input type="checkbox"></input>
            <span className="model-checkmark"></span>
            <FiCheck className="model-checked" />
            All
          </label>
          {Object.values(data[selectedMenuItem] || {}).map(
            ({ model }, index) => (
              <div key={index}>
                <label className="model-input">
                  <input type="checkbox"></input>
                  <span className="model-checkmark"></span>
                  <FiCheck className="model-checked" />
                  {model}
                </label>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Model;
