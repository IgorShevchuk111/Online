import React, { useRef } from "react";
import "./Brand.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { handleSelect } from "../../actions/actions";
import { handleSelectAll } from "../../actions/actions";
import { FiCheck } from "react-icons/fi";

function Brand() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const selectedProducts = useSelector((state) => state.selectedProducts);
  const filteredItems = useSelector((state) => state.filteredItems);

  const uniqueProductsObject = selectedProducts.reduce((acc, product) => {
    acc[product.brand] = product;
    return acc;
  }, {});
  const uniqueBrandsArray = Object.values(uniqueProductsObject);

  const handleClickAll = (selectAllRef) => {
    dispatch(handleSelectAll(selectAllRef));
  };
  const handleClick = (item) => {
    dispatch(handleSelect(item));
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
              onChange={() => handleClickAll(selectAllRef)}
              ref={selectAllRef}
            ></input>
            <span className="brand-checkmark"></span>
            <FiCheck className="brand-checked" />
            All
          </label>
          {uniqueBrandsArray?.map(({ brand, id }, index) => (
            <div key={index}>
              <label className="brand-input">
                <input
                  type="checkbox"
                  value={brand}
                  checked={
                    filteredItems.find((item) => item.brand === brand)
                      ?.checked || false
                  }
                  onChange={() => handleClick({ brand, id, selectAllRef })}
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
