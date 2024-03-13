import React, { useRef } from "react";
import "./Brand.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { updateSelectedFilters } from "../../actions/actions";

function Brand() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const data = useSelector((state) => state.data);
  const selectedFilters = useSelector((state) => state.selectedFilters);

  const brands =
    selectedFilters.models.length === 0 && selectedFilters.colors.length === 0
      ? [
          ...new Set(
            Object.values(data[selectedMenuItem] || {}).map(
              (item) => item.brand
            )
          ),
        ]
      : [
          ...new Set(
            Object.values(data[selectedMenuItem])
              .filter(
                (item) =>
                  selectedFilters.models.some(
                    (model) => model === item.model
                  ) ||
                  selectedFilters.colors.some((color) =>
                    item.color.includes(color)
                  )
              )
              .map((item) => item.brand)
          ),
        ];

  const handleFilterClick = (filterValue, filterType) => {
    dispatch(updateSelectedFilters(filterValue, filterType));
  };
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
            <input type="checkbox" value="" ref={selectAllRef}></input>
            <span className="brand-checkmark"></span>
            <FiCheck className="brand-checked" />
            All
          </label>
          {brands.map((brand, index) => (
            <div key={index}>
              <label className="brand-input">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedFilters.brands.includes(brand)}
                  onChange={() => handleFilterClick(brand, "brands")}
                ></input>
                <span className="brand-checkmark"></span>
                <FiCheck className="brand-checked" />
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
