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
          <p>125 gb</p>
          <p>Price 345 £</p>
        </div>
      ) : (
        <div>
          <img src={phone.img} alt="foto" />
          <p>125 gb</p>
          <p>Price 345 £</p>
        </div>
      )}
    </div>
  );
}

export default Item;
