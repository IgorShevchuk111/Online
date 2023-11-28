import React, { useState } from "react";
import "./Phones.css";
import { phones } from "../../../../header-data/menuData";

function Phones() {
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
        Phones
      </div>
      {showBrands && (
        <div className="phones-brands">
          {phones.map((brand, index) => (
            <div key={index}>
              <div
                onClick={() => toggleModel(brand.brand)}
                className={selectedBrand === brand.brand ? "selected" : ""}
              >
                {brand.brand}
              </div>
              {selectedBrand === brand.brand && (
                <div className="phones-brands-model">
                  {brand.model.map((model, modelIndex) => (
                    <div key={modelIndex}>{model}</div>
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

export default Phones;
