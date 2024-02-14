import React from "react";
import { useSelector } from "react-redux";
import ButtonAddToBasket from "../components/ButtonAddToBasket";
import AddToFavourites from "../components/AddToFavourites";
import Stars from "../components/Stars";
import Breadcrumb from "../components/Breadcrumb";
import Delivery from "../components/Delivery";
import Free30DayReturns from "../components/Free30DayReturns";
import ReactBootstrapAccordion from "../components/ReactBootstrapAccordion";

function OpenedItemPage() {
  const openedItem = useSelector((state) => state.openedItem);
  return (
    <>
      <div
        className="container-fluid"
        style={{ background: "white", height: "100vh" }}
      >
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
                <div className="d-flex align-items-center mt-4 justify-content-between">
                  <Stars size={14} />
                  <ButtonAddToBasket openedItem={openedItem} />
                  <AddToFavourites />
                </div>
                <hr />
                <div className="d-flex justify-content-evenly">
                  <Delivery />
                  <Free30DayReturns />
                </div>
                <ReactBootstrapAccordion />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default OpenedItemPage;
