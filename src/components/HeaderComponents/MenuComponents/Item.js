import React from "react";
import "./Menu.css";
import { useParams } from "react-router-dom";
import { phones } from "../../../header-data/menuData";

function Item(props) {
  const { id } = useParams();
  const phone = phones.find((phone) => phone.model.includes(id));
  return (
    <div className="item-container">
      {!id ? (
        <div>
          <img src={props.items.img} alt="foto" />
          <p>{props.items.brand}</p>
          <p>{props.items.model}</p>
          <p>{props.items.price}</p>
        </div>
      ) : (
        <div>
          <img src={phone.img} alt="foto" />
          <p>{phone.brand}</p>
          <p>{phone.price}</p>
        </div>
      )}
    </div>
  );
}

export default Item;
