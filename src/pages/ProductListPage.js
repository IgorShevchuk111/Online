import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { data } from "../data";
import { useSelector } from "react-redux";
import RangeSlider from "../components/RangeSlider";
import MenuSearchComponent from "../components/MenuSearchComponent";
import SortByDropdown from "../components/SortByDropdown";

function ProductListPage() {
  const selectedMenuItem = useSelector((state) => state.selectedMenuItem);
  const [selectedMenu, setSelectedMenu] = useState([]);

  useEffect(() => {
    const newSelectedMenu = Object.keys(data)
      .filter((key) => key === selectedMenuItem)
      .map((key) => data[key].models)
      .flat();
    setSelectedMenu(newSelectedMenu);
  }, [selectedMenuItem]);

  return (
    <>
      <div
        className="container rounded py-3 mb-5"
        style={{ background: "var(--bg-primary)" }}
      >
        <ul
          className="d-flex justify-content-between px-3"
          style={{
            listStyle: "none",
            fontSize: "0.9rem",
          }}
        >
          <li>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              data-test="icon"
              id="reassurance_item_satisfaction"
              className="fill-primary my-0 mr-3 align-middle"
            >
              <path
                d="M40.19 28.51A17.83 17.83 0 0040.94 16a14.63 14.63 0 00-3.28-5.36 14.9 14.9 0 00-5.29-3.44 19.3 19.3 0 00-6.3-1.26 18.29 18.29 0 00-6.34 1A20.93 20.93 0 009.47 14.5C4.33 21.43 5.14 32.36 11.81 38a17.79 17.79 0 005.55 3.24 16.51 16.51 0 006.35 1 18.63 18.63 0 0011.69-5 .79.79 0 011.11 0 .78.78 0 010 1.1 20.26 20.26 0 01-12.68 5.5 18.55 18.55 0 01-7-1 19.82 19.82 0 01-6.1-3.53 18.28 18.28 0 01-4.33-5.58 18.77 18.77 0 01-1.89-6.79 21.29 21.29 0 01.54-7 19.58 19.58 0 013-6.39 22.62 22.62 0 0111.1-8.39 20.11 20.11 0 017-1.08 20.82 20.82 0 016.92 1.36 16.27 16.27 0 019.73 10 17.51 17.51 0 01.88 7.06A21.23 21.23 0 0142 29.36a1 1 0 11-1.84-.78Z"
                className="cls-1"
              ></path>
              <path
                d="M14.32 22.71a11.5 11.5 0 003.22 6.49 9.2 9.2 0 006.57 2.54A12.65 12.65 0 0031 29.45a11.4 11.4 0 004.33-5.73 1 1 0 011.89.65A13.41 13.41 0 0132.09 31a14.54 14.54 0 01-8 2.54 11.47 11.47 0 01-4.21-.78 11 11 0 01-3.6-2.33A13.31 13.31 0 0112.66 23a.84.84 0 01.7-1 .85.85 0 01.96.71Z"
                className="cls-1"
              ></path>
              <path d="M24 20c.67-1.88.58-3.64-.21-3.92s-2 1-2.64 2.9-.58 3.64.2 3.92 1.97-.98 2.65-2.9Zm7.22-.17c.67-1.88.58-3.64-.21-3.92s-2 1-2.64 2.91-.58 3.64.21 3.92 1.97-1.02 2.64-2.91Z"></path>
              <path
                d="M36.12 42.34H36a1 1 0 01-.83-1.14l.93-3.55-3.84-.43a1 1 0 11.3-2l5.43.84-.84 5.43a1 1 0 01-1.03.85ZM11.06 27a1 1 0 01-.52-.14 1 1 0 01-.33-1.38l2.84-4.69 4.7 2.85a1 1 0 01-1 1.71l-3.1-2.15-1.7 3.32a1 1 0 01-.89.48Z"
                className="cls-1"
              ></path>
            </svg>
            <span>Free 30-day returns</span>
          </li>
          <li>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              data-test="icon"
              id="reassurance_service_delivery"
              className="fill-primary my-0 mr-3 align-middle"
            >
              <path
                d="M32.83 44a5.09 5.09 0 01-.95-.09L11.5 40.14a5.07 5.07 0 01-4-5.91l2.7-14.71a5.09 5.09 0 015.91-4l20.39 3.76a5.09 5.09 0 014 5.92l-2.7 14.7a5.08 5.08 0 01-5 4.14ZM15.18 17.39a3.07 3.07 0 00-3 2.5L9.42 34.6a3.07 3.07 0 002.45 3.58L32.25 42a3.08 3.08 0 003.58-2.45l2.75-14.71a3.07 3.07 0 00-2.45-3.58l-20.38-3.82a2.75 2.75 0 00-.57-.05Z"
                className="cls-1"
              ></path>
              <path
                d="M33.73 20.78h-.18a1 1 0 01-.8-1.17l1.07-5.71a6.69 6.69 0 00-10.37-6.76 6.62 6.62 0 00-2.8 4.29l-1.07 5.71a1 1 0 01-2-.37l1.07-5.71a8.7 8.7 0 0117.1 3.2L34.72 20a1 1 0 01-.99.78Z"
                className="cls-1"
              ></path>
              <path d="M25.06 26.78c-.19 1-.74 1.75-1.23 1.66s-.74-1-.55-2 .74-1.75 1.23-1.66.73 1 .55 2Zm3.45 2.38c-.5 0-.86-.87-.82-1.89s.48-1.84 1-1.82.87.87.82 1.89-.51 1.84-1 1.82ZM18.66 28a.38.38 0 01.52.1A16.42 16.42 0 0021 30.33a10.32 10.32 0 007.5 3.17.37.37 0 01.05.73 9.28 9.28 0 01-6-1.09 10.34 10.34 0 01-1.31-.88 9.7 9.7 0 01-1.12-1.1 7.8 7.8 0 01-1.53-2.7.37.37 0 01.07-.46Z"></path>
            </svg>
            <span>Free delivery on all items</span>
          </li>
          <li>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="48"
              viewBox="0 0 48 48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              data-test="icon"
              id="reassurance_service_warranty"
              className="fill-primary my-0 mr-3 align-middle"
            >
              <path d="M21.37 39.44a3.54 3.54 0 01-3.49-3.08l-.37-2.9-7.09 2.33a3.52 3.52 0 01-4.6-2.89L4 18.93a3.49 3.49 0 011-2.85A3.5 3.5 0 017.74 15l7.45.47-.37-2.9a3.52 3.52 0 014.85-3.7l22.17 9.23a3.52 3.52 0 01.77 6l-19.1 14.61a3.51 3.51 0 01-1.69.7 3.4 3.4 0 01-.45.03Zm-2.19-8.64.68 5.31a1.51 1.51 0 001.71 1.31 1.39 1.39 0 00.72-.3L41.4 22.56a1.51 1.51 0 00-.34-2.56L18.9 10.68a1.53 1.53 0 00-2.1 1.6l.68 5.3L7.62 17a1.56 1.56 0 00-1.21.48 1.54 1.54 0 00-.41 1.2l1.8 14a1.53 1.53 0 00.69 1.1 1.51 1.51 0 001.29.15Zm-13.5-14Z"></path>
              <path d="M26.31 21.42c0 .8-.32 1.45-.71 1.45s-.71-.65-.71-1.45.32-1.42.71-1.42.71.61.71 1.42Zm3-.72c-.39.05-.8-.55-.91-1.34s.11-1.49.5-1.54.79.54.9 1.33-.09 1.49-.48 1.55Zm-7.76 2.61a.31.31 0 01.42 0 11.89 11.89 0 001.68 1.43 8.33 8.33 0 001.91 1 8.45 8.45 0 004.33.35.3.3 0 01.32.19.28.28 0 01-.18.37 7.31 7.31 0 01-2.38.42 7.39 7.39 0 01-2.42-.39 7.56 7.56 0 01-1.13-.49 6.61 6.61 0 01-1-.69 6.09 6.09 0 01-1.57-1.86.29.29 0 01.03-.33Z"></path>
            </svg>
            <span>1-year minimum warranty</span>
          </li>
        </ul>
      </div>
      <div className="my-5 d-flex align-items-center">
        <div>
          <h3 className="font-weit-bold">Used Smartphones</h3>
          <div style={{ fontSize: "0.9rem" }}>
            Buy Used phones for cheap when you shop at Online-Shop. Explore our
            range of used android phones and iPhones and grab yourself the
            latest and cheapest smartphone only at Online-Shop. Help prevent
            e-waste and buy used phones instead.
          </div>
        </div>
        <SortByDropdown />
      </div>
      <div className="items-container">
        <div className="container-search">
          <div>
            <h6>Price</h6>
            <RangeSlider />
          </div>
          <MenuSearchComponent
            brands={[...new Set(selectedMenu.map((brand) => brand.brand))]}
            title={"Brand"}
          />
          <MenuSearchComponent
            models={[...new Set(selectedMenu.map((model) => model.model))]}
            title={"Model"}
          />
          <MenuSearchComponent
            colors={[...new Set(selectedMenu.flatMap((item) => item.color))]}
            title={"Color"}
          />
        </div>
        <div className="items-wraper">
          {selectedMenu.map((model, i) => (
            <div key={i} className="flex-item">
              <ItemCard model={model} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
