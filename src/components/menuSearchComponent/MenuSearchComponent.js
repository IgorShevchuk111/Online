import React from "react";
import "./MenuSearchComponent.css";

function MenuSearchComponent(props) {
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
          {props.items &&
            props.items.map((item, i) => (
              <li className="flex" key={i}>
                <input type="checkbox" id={props.title}></input>
                <label htmlFor={props.title}>{item.brand}</label>
              </li>
            ))}
          {props.models &&
            props.models.map((item, i) => (
              <li className="flex" key={i}>
                <input type="checkbox" id={props.title}></input>
                <label htmlFor={props.title}>{item.model}</label>
              </li>
            ))}

          {props.color &&
            props.color.map((item, i) => (
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
