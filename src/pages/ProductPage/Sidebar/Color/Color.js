import React, { useRef } from "react";
import "./Color.css";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { createControlledColors } from "../../actions/actions";

function Color() {
  // const filteredItems = useSelector((state) => state.filteredItems);
  const colorArray = useSelector((state) => state.colorArray);
  // const uniqueColor = [
  //   ...new Set(filteredItems?.flatMap((item) => item.color)),
  // ].filter((color) => color.trim());
  const selectAllRef = useRef();
  const dispatch = useDispatch();

  const handleColorClick = (color, id) => {
    selectAllRef.current.checked = false;
    dispatch(createControlledColors(color));
  };

  const handleSelectAll = () => {
    const updatedColors = colorArray.map((item) => ({
      ...item,
      checked: selectAllRef.current.checked,
    }));
    dispatch(createControlledColors(null, updatedColors));
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
            <input
              type="checkbox"
              value=""
              onChange={handleSelectAll}
              ref={selectAllRef}
            ></input>
            <span className="color-checkmark"></span>
            <FiCheck className="color-checked" /> All
          </label>
          {colorArray.map(({ color, id }, index) => (
            <div key={index}>
              <label className="color-input">
                <input
                  type="checkbox"
                  value={color}
                  checked={colorArray[index].checked}
                  onChange={() => handleColorClick(color, id)}
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
