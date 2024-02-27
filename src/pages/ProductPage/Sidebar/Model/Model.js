import React from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";

function Model() {
  const selectedMenuCategory = useSelector(
    (state) => state.selectedMenuCategory
  );

  const uniqueModel = [
    ...new Set(selectedMenuCategory?.map((item) => item.model)),
  ].filter((model) => model.trim());
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
          {uniqueModel.map((model, index) => (
            <div key={index}>
              <label className="model-input">
                <input type="checkbox"></input>
                <span className="model-checkmark"></span>
                <FiCheck className="model-checked" />

                {model}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Model;
