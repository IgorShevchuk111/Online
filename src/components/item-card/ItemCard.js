import React from "react";

function ItemCard({ model }) {
  return (
    <div
      className="wrapper"
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "20px 24px",
      }}
    >
      <div>Most wanted</div>
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
        <div>
          <svg
            aria-label="filledStar"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m25.75 6.07 4.73 9.43A1.93 1.93 0 0032 16.55l10.56 1.51a1.92 1.92 0 011.09 3.28L36 28.68a1.91 1.91 0 00-.56 1.71l1.8 10.36a1.94 1.94 0 01-2.83 2l-9.45-4.89a2 2 0 00-1.82 0l-9.45 4.89a1.94 1.94 0 01-2.83-2l1.8-10.36a1.91 1.91 0 00-.56-1.71l-7.7-7.34a1.92 1.92 0 011.09-3.28l10.56-1.51a1.93 1.93 0 001.47-1.05l4.73-9.43a2 2 0 013.5 0Z"></path>
          </svg>
          <svg
            aria-label="filledStar"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m25.75 6.07 4.73 9.43A1.93 1.93 0 0032 16.55l10.56 1.51a1.92 1.92 0 011.09 3.28L36 28.68a1.91 1.91 0 00-.56 1.71l1.8 10.36a1.94 1.94 0 01-2.83 2l-9.45-4.89a2 2 0 00-1.82 0l-9.45 4.89a1.94 1.94 0 01-2.83-2l1.8-10.36a1.91 1.91 0 00-.56-1.71l-7.7-7.34a1.92 1.92 0 011.09-3.28l10.56-1.51a1.93 1.93 0 001.47-1.05l4.73-9.43a2 2 0 013.5 0Z"></path>
          </svg>
          <svg
            aria-label="filledStar"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m25.75 6.07 4.73 9.43A1.93 1.93 0 0032 16.55l10.56 1.51a1.92 1.92 0 011.09 3.28L36 28.68a1.91 1.91 0 00-.56 1.71l1.8 10.36a1.94 1.94 0 01-2.83 2l-9.45-4.89a2 2 0 00-1.82 0l-9.45 4.89a1.94 1.94 0 01-2.83-2l1.8-10.36a1.91 1.91 0 00-.56-1.71l-7.7-7.34a1.92 1.92 0 011.09-3.28l10.56-1.51a1.93 1.93 0 001.47-1.05l4.73-9.43a2 2 0 013.5 0Z"></path>
          </svg>
          <svg
            aria-label="filledStar"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m25.75 6.07 4.73 9.43A1.93 1.93 0 0032 16.55l10.56 1.51a1.92 1.92 0 011.09 3.28L36 28.68a1.91 1.91 0 00-.56 1.71l1.8 10.36a1.94 1.94 0 01-2.83 2l-9.45-4.89a2 2 0 00-1.82 0l-9.45 4.89a1.94 1.94 0 01-2.83-2l1.8-10.36a1.91 1.91 0 00-.56-1.71l-7.7-7.34a1.92 1.92 0 011.09-3.28l10.56-1.51a1.93 1.93 0 001.47-1.05l4.73-9.43a2 2 0 013.5 0Z"></path>
          </svg>
          <svg
            aria-label="halfFilledStar"
            fill="currentColor"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.39 43a2.88 2.88 0 01-1.68-.55 2.78 2.78 0 01-1.11-2.75l1.7-9.82a.82.82 0 00-.24-.72l-7.2-7a2.82 2.82 0 011.57-4.81l10-1.44a.82.82 0 00.57-.41l4.45-8.93a2.84 2.84 0 015.08 0L31 15.5a.82.82 0 00.63.45l10 1.44a2.82 2.82 0 011.57 4.81l-7.2 7a.82.82 0 00-.24.72l1.7 9.81a2.79 2.79 0 01-1.11 2.76 2.83 2.83 0 01-3 .22L24.39 38a.83.83 0 00-.78 0l-8.9 4.63a2.84 2.84 0 01-1.32.37ZM24 7a.8.8 0 00-.75.46l-4.45 8.93a2.84 2.84 0 01-2.14 1.54l-9.94 1.44a.8.8 0 00-.68.56.77.77 0 00.21.83l7.2 7a2.81 2.81 0 01.82 2.5L12.57 40a.79.79 0 00.32.79.83.83 0 00.9.07l8.89-4.63a2.86 2.86 0 012.64 0l8.89 4.63a.83.83 0 00.9-.07.79.79 0 00.32-.79l-1.7-9.82a2.81 2.81 0 01.82-2.5l7.2-6.95a.82.82 0 00-.47-1.4l-9.94-1.44a2.84 2.84 0 01-2.14-1.54l-4.45-8.89A.8.8 0 0024 7Z"></path>
            <path d="M24 5.56a1.89 1.89 0 00-1.74 1l-4.58 9.13a1.91 1.91 0 01-1.43 1L6 18.22a1.86 1.86 0 00-1 3.18l7.42 7.11a1.83 1.83 0 01.58 1.65l-1.75 10a1.89 1.89 0 002.75 2l9.17-4.74a1.88 1.88 0 01.92-.21Z"></path>
          </svg>
          <span className="mx-3" style={{ fontSize: "12px" }}>
            (11115)
          </span>
        </div>
        <div>
          <small>Price:</small>
          <small className="mx-3">{model.price + "  £"}</small>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
