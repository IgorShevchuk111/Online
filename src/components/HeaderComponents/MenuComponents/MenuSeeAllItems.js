import React from "react";
import { Link } from "react-router-dom";

function MenuSeeAllItems() {
  return (
    <div>
      ListPhones
      <Link to={"/"}>
        <p>Back</p>
      </Link>
    </div>
  );
}

export default MenuSeeAllItems;
