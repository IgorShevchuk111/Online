import React from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { useSelector } from "react-redux";

function Model() {
  const modelsArray = useSelector((state) => state.productModels);
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
          {modelsArray?.map(({ name }, index) => (
            <div key={index}>
              <label className="model-input">
                <input type="checkbox"></input>
                <span className="model-checkmark"></span>
                <FiCheck className="model-checked" />
                {name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Model;
