import React from "react";
import "./ItemCard.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars";

function ItemCard({ model, items }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openItemPage = (model) => {
    dispatch({ type: "ADD_STATE_OPEN_ITEM", value: model });
    navigate(`${items ? `${items}/` : ""}${model.model.replace(/\s+/g, "-")}`);
  };
  return (
    <>
      <div
        className="itemCardContainer hover"
        onClick={() => openItemPage(model)}
      >
        <div className="itemCardImg">
          <img src={model.img} alt={`slide-${model.model}`} />
        </div>
        <div>{model.model}</div>
        <small>Storage :</small>
        <small className="mx-3">{model.storage}</small>
        <Stars size={12} />
        <small>Price:</small>
        <small className="mx-3">{model.price + "  £"}</small>
      </div>
    </>
  );
}

export default ItemCard;
