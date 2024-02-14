import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Stars from "./Stars";

function ItemCard({ model }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const openItemPage = (model) => {
    dispatch({ type: "ADD_STATE_OPEN_ITEM", value: model });
  };
  return (
    <Link
      className="itemCard"
      to={`${location.pathname}/${model.model.replace(/\s+/g, "-")}`}
    >
      <div
        onClick={() => openItemPage(model)}
        className="wrapper"
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "20px 24px",
        }}
      >
        <img
          style={{ width: "200px" }}
          className="slider__img"
          src={model.img}
          alt={`slide-${model.model}`}
        />
        <div className=" my-4">
          <div>{model.model}</div>
          <small>Storage :</small>
          <small className="mx-3">{model.storage}</small>
          <Stars size={12} />
          <div>
            <small>Price:</small>
            <small className="mx-3">{model.price + "  £"}</small>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
