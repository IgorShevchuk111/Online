import React, { useState, useContext } from "react";
import "./Items.css";
import { AppContext } from "../../../../App";
import { Link } from "react-router-dom";

function Items(props) {
  const toggleShowItem = useContext(AppContext).toggleShowItem;

  const [showBrands, setShowBrands] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleToggle = () => {
    setShowBrands(!showBrands);
  };

  const toggleModel = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
  };

  const showModel = () => {
    console.log("show");
    toggleShowItem();
  };

  return (
    <div className="container">
      <div className="title" onClick={handleToggle} id="phones">
        {props.name}
      </div>
      {showBrands && (
        <div className="phones-brands">
          {props.items.map((brand, index) => (
            <div key={index}>
              <div
                onClick={() => toggleModel(brand.brand)}
                className={selectedBrand === brand.brand ? "selected" : ""}
              >
                {brand.brand}
              </div>
              {selectedBrand === brand.brand && (
                <div className="phones-brands-model">
                  <Link to="/apple-phones">
                    <div className="see-all-items">
                      <small>See all</small>
                      <small className="material-symbols-outlined">
                        chevron_right
                      </small>
                    </div>
                  </Link>
                  {brand.model.map((model, modelIndex) => (
                    <div onClick={showModel} key={modelIndex}>
                      {model}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Items;
