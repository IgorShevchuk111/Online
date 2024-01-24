import React from "react";

function Search() {
  return (
    <div>
      <input
        className="position-relative"
        placeholder="What are you looking for?"
      ></input>
      <svg
        className="position-absolute top-9 right-26"
        style={{ top: "9px", right: "26px" }}
        aria-hidden="true"
        fill="currentColor"
        height="16"
        viewBox="0 0 48 48"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 36a16 16 0 1116-16 16 16 0 01-16 16Zm0-30a14 14 0 1014 14A14 14 0 0020 6Z"></path>
        <path d="M43.08 44.08a1 1 0 01-.7-.29L29.9 31.31a1 1 0 111.41-1.41l12.48 12.48a1 1 0 010 1.41 1 1 0 01-.71.29Z"></path>
      </svg>
    </div>
  );
}

export default Search;
