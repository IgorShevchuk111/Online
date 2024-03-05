import React, { useRef } from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { createControlledModels } from "../../actions/actions";

function Model() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const modelArray = useSelector((state) => state.modelArray);

  const handleBrandClick = (model) => {
    selectAllRef.current.checked = false;
    dispatch(createControlledModels(model));
  };

  const handleSelectAll = () => {
    const updatedBrands = modelArray.map((item) => ({
      ...item,
      checked: selectAllRef.current.checked,
    }));
    dispatch(createControlledModels(null, updatedBrands));
  };
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
            <input
              type="checkbox"
              onChange={handleSelectAll}
              ref={selectAllRef}
            ></input>
            <span className="model-checkmark"></span>
            <FiCheck className="model-checked" />
            All
          </label>
          {modelArray.map(({ model }, index) => (
            <div key={index}>
              <label className="model-input">
                <input
                  type="checkbox"
                  value={model}
                  checked={modelArray[index].checked}
                  onChange={() => handleBrandClick(model)}
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
