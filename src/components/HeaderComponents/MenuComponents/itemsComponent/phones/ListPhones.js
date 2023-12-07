import React from "react";
import { Link } from "react-router-dom";

function ListPhones() {
  return (
    <div>
      ListPhones
      <Link to={"/"}>
        <p>Back</p>
      </Link>
    </div>
  );
}

export default ListPhones;
