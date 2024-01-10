import React from "react";
import "./MenuSearchComponent.css";

function MenuSearchComponent() {
  return (
    <div>
      <div className="relative">
        <label htmlFor="BrandSearch">Brand</label>
        <input id="BrandSearch" placeholder="Search for Brand"></input>
        <span className="material-symbols-outlined  absolute band-search">
          search
        </span>
      </div>
      <div className="filterBrandContainer">
        <ul className="brandList">
          <li className="flex">
            <input type="checkbox" id="All"></input>
            <label htmlFor="All">All</label>
          </li>
          <li className="flex">
            <input type="checkbox" id="Apple"></input>
            <label htmlFor="Apple">Apple</label>
          </li>
          <li className="flex">
            <input type="checkbox" id="Huawei"></input>
            <label htmlFor="Huawei">Huawei</label>
          </li>
          <li className="flex">
            <input type="checkbox" id="Xiaomi"></input>
            <label htmlFor="Xiaomi">Xiaomi</label>
          </li>
          <li className="flex">
            <input type="checkbox" id="Google"></input>
            <label htmlFor="Google">Google</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchComponent;
