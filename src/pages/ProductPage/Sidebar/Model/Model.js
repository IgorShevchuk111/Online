import React, { useRef } from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { updateSelectedFilters } from "../../actions/actions";

function Model() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.selectedFilters);
  const data = useSelector((state) => state.data);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);

  const handleFilterClick = (filterValue, filterType) => {
    dispatch(updateSelectedFilters(filterValue, filterType));
  };

  const models =
    selectedFilters.brands.length === 0 && selectedFilters.colors.length === 0
      ? Object.values(data[selectedMenuItem] || {}).map((item) => item.model)
      : [
          ...new Set(
            Object.values(data[selectedMenuItem])
              .filter(
                (item) =>
                  selectedFilters.brands.some(
                    (brand) => brand === item.brand
                  ) ||
                  selectedFilters.colors.some((color) =>
                    item.color.includes(color)
                  )
              )
              .map((item) => item.model)
          ),
        ];
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
            <input type="checkbox" ref={selectAllRef}></input>
            <span className="model-checkmark"></span>
            <FiCheck className="model-checked" />
            All
          </label>
          {models.map((model, index) => (
            <div key={index}>
              <label className="model-input">
                <input
                  type="checkbox"
                  value={model}
                  checked={selectedFilters.models.includes(model)}
                  onChange={() => handleFilterClick(model, "models")}
                ></input>
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
