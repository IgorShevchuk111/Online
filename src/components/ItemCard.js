import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Stars from "./Stars";

function ItemCard({ model, items }) {
  const dispatch = useDispatch();

  const openItemPage = (model) => {
    dispatch({ type: "ADD_STATE_OPEN_ITEM", value: model });
  };
  return (
    <Link
      className="itemCard"
      to={`${items ? `${items}/` : ""}${model.model.replace(/\s+/g, "-")}`}
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
