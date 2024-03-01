import React, { useRef } from "react";
import "./Brand.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { createUniqueBrandsArray } from "../../actions/actions";
import { FiCheck } from "react-icons/fi";

function Brand() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const uniqueBrandsArray = useSelector((state) => state.uniqueBrandsArray);

  const handleBrandClick = (brand) => {
    selectAllRef.current.checked = false;
    dispatch(createUniqueBrandsArray(brand));
  };

  const handleSelectAll = () => {
    const updatedBrands = uniqueBrandsArray.map((item) => ({
      ...item,
      checked: selectAllRef.current.checked,
    }));
    dispatch(createUniqueBrandsArray(null, updatedBrands));
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
            <input
              type="checkbox"
              value=""
              onChange={handleSelectAll}
              ref={selectAllRef}
            ></input>
            <span className="brand-checkmark"></span>
            <FiCheck className="brand-checked" />
            All
          </label>
          {uniqueBrandsArray?.map(({ brand }, index) => (
            <div key={index}>
              <label className="brand-input">
                <input
                  type="checkbox"
                  value={brand}
                  checked={uniqueBrandsArray[index].checked}
                  onChange={() => handleBrandClick(brand)}
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
