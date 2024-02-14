import React from "react";
import { useSelector } from "react-redux";
import ButtonAddToBasket from "../components/ButtonAddToBasket";
import AddToFavourites from "../components/AddToFavourites";
import Stars from "../components/Stars";
import Breadcrumb from "../components/Breadcrumb";
import Delivery from "../components/Delivery";

function OpenedItemPage() {
  const openedItem = useSelector((state) => state.openedItem);
  return (
    <>
      <div className="container-fluid" style={{ background: "white" }}>
        <Breadcrumb />
        {openedItem && (
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  style={{ width: "100%" }}
                  src={openedItem.img}
                  alt={openedItem.model}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-between">
                  <h3>{openedItem.model}</h3>
                  <h5>{openedItem.price} £</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <Stars size={14} />
                  <ButtonAddToBasket />
                  <AddToFavourites />
                </div>
                <hr />
                <Delivery />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OpenedItemPage;
