import React, { useRef } from "react";
import "./Color.css";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { updateSelectedFilters } from "../../actions/actions";

function Color() {
  const data = useSelector((state) => state.data);
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const selectedFilters = useSelector((state) => state.selectedFilters);

  const selectAllRef = useRef();
  const dispatch = useDispatch();

  const handleFilterClick = (filterValue, filterType) => {
    dispatch(updateSelectedFilters(filterValue, filterType));
  };

  const colors =
    selectedFilters.brands.length === 0 && selectedFilters.models.length === 0
      ? [
          ...new Set(
            Object.values(data[selectedMenuItem] || {}).flatMap(
              (product) => product.color
            )
          ),
        ]
      : [
          ...new Set(
            Object.values(data[selectedMenuItem])
              .filter(
                (item) =>
                  selectedFilters.brands.some(
                    (brand) => brand === item.brand
                  ) ||
                  selectedFilters.models.some((model) =>
                    item.model.includes(model)
                  )
              )
              .flatMap((item) => item.color)
          ),
        ];
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
            <input type="checkbox" value="" ref={selectAllRef}></input>
            <span className="color-checkmark"></span>
            <FiCheck className="color-checked" /> All
          </label>
          {colors?.map((color, index) => (
            <div key={index}>
              <label className="color-input">
                <input
                  type="checkbox"
                  value={color}
                  checked={selectedFilters.colors.includes(color)}
                  onChange={() => handleFilterClick(color, "colors")}
                ></input>
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
