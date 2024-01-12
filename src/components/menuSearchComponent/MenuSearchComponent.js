import React, { useState } from "react";
import "./MenuSearchComponent.css";

function MenuSearchComponent(props) {
  const [selectedItems, setSelectedItems] = useState([]);
  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };
  return (
    <div>
      <div className="relative">
        <label htmlFor="Search">{props.title}</label>
        <input id="Search" placeholder={`Search for ${props.title}`}></input>
        <span className="material-symbols-outlined  absolute band-search">
          search
        </span>
      </div>
      <div className="filterContainer">
        <ul className="list">
          <li className="flex">
            <input type="checkbox" id="All"></input>
            <label htmlFor="All">All</label>
          </li>
          {props.brands &&
            props.brands.map((brand, i) => (
              <li className="flex" key={i}>
                <input
                  type="checkbox"
                  id={props.title}
                  checked={selectedItems.includes(brand)}
                  onChange={() => handleCheckboxChange(brand)}
                ></input>
                <label htmlFor={props.title}>{brand}</label>
              </li>
            ))}
          {props.models &&
            props.models.map((item, i) => (
              <li className="flex" key={i}>
                <input type="checkbox" id={props.title}></input>
                <label htmlFor={props.title}>{item}</label>
              </li>
            ))}

          {props.colors &&
            props.colors.map((item, i) => (
              <li className="flex" key={i}>
                <input type="checkbox" id={props.title}></input>
                <label htmlFor={props.title}>{item}</label>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuSearchComponent;
