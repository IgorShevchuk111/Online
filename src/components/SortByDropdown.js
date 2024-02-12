import React from "react";

function SortByDropdown() {
  return (
    <div>
      <div style={{ width: "200px" }}>
        <button className="button-sort-by">
          <label htmlFor="sort">Sort by</label>
          <span className="position-relative">
            <select id="sort" className="appearance-none ">
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <svg
              aria-hidden="true"
              fill="currentColor"
              height="24"
              viewBox="0 0 48 48"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 h-[2.4rem] w-[2.4rem] flex-shrink-0 user-select-none pointer-events-none text-icon-primary-light"
            >
              <path d="M24 29.51a1 1 0 01-.71-.29l-9-9a1 1 0 010-1.42 1 1 0 011.41 0l8.3 8.3 8.32-8.32a1 1 0 011.41 0 1 1 0 010 1.42l-9 9a1 1 0 01-.73.31Z"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default SortByDropdown;
