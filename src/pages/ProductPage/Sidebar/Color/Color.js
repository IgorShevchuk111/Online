import React, { useRef } from "react";
import "./Color.css";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { handleSelect } from "../../actions/actions";

function Color() {
  const selectedProducts = useSelector((state) => state.selectedProducts);
  const filteredItems = useSelector((state) => state.filteredItems);
  const selectAllRef = useRef();
  const dispatch = useDispatch();

  const selectedModels = selectedProducts.filter((product) =>
    filteredItems.some((item) => item.model === product.model)
  );
  const filteredColors = [
    ...new Set(selectedModels.flatMap((product) => product.color)),
  ];

  const handleColorClick = (color) => {
    dispatch(handleSelect(color));
  };

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
          {filteredColors?.map((color, index) => (
            <div key={index}>
              <label className="color-input">
                <input
                  type="checkbox"
                  value={color}
                  checked={
                    filteredColors.find((item) => item === color).checked
                  }
                  onChange={() => handleColorClick({ color, selectAllRef })}
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
