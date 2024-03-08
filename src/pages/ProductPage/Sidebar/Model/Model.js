import React, { useRef } from "react";
import "./Model.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FiCheck } from "react-icons/fi";
import { handleSelect } from "../../actions/actions";

function Model() {
  const selectAllRef = useRef();
  const dispatch = useDispatch();
  const filteredItems = useSelector((state) => state.filteredItems);
  const selectedProducts = useSelector((state) => state.selectedProducts);

  const filteredModels = selectedProducts.filter((product) =>
    filteredItems.some((item) => item.brand === product.brand)
  );

  const handleBrandClick = (model) => {
    dispatch(handleSelect(model));
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
            <input type="checkbox" ref={selectAllRef}></input>
            <span className="model-checkmark"></span>
            <FiCheck className="model-checked" />
            All
          </label>
          {filteredModels?.map(({ model, id }, index) => (
            <div key={index}>
              <label className="model-input">
                <input
                  type="checkbox"
                  value={model}
                  checked={
                    filteredModels.find((item) => item.model === model).checked
                  }
                  onChange={() => handleBrandClick({ model, id, selectAllRef })}
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
