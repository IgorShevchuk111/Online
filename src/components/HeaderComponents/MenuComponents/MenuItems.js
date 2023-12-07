import React, { useState } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function MenuItems(props) {
  const [showBrands, setShowBrands] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleToggle = () => {
    setShowBrands(!showBrands);
  };

  const toggleModel = (brand) => {
    setSelectedBrand(brand === selectedBrand ? null : brand);
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
                  <div className="see-all-items">
                    <Link to="/apple-phones">
                      <small>See all</small>
                    </Link>
                    <small className="material-symbols-outlined">
                      chevron_right
                    </small>
                  </div>

                  {brand.model.map((model, modelIndex) => (
                    <div key={modelIndex}>
                      <Link to={`apple-phones/phone/${model}`}>{model}</Link>
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

export default MenuItems;
