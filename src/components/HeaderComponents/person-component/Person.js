import React from "react";
import { Link } from "react-router-dom";
import "./Person.css";

function Person() {
  return (
    <div className="material-symbols-outlined d ">
      <Link className="login person" to="login">
        person
      </Link>
    </div>
  );
}

export default Person;
