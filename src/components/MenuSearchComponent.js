import React, { useState } from "react";
import Search from "./Search";

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
        <h6 htmlFor="Search">{props.title}</h6>
        <Search
          placeholderSearchFor={"Search for"}
          placeholderTitle={props.title}
        />
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
