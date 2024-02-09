import React from "react";
import { Link } from "react-router-dom";
import "./Person.css";

function Person() {
  return (
    <div className="material-symbols-outlined mx-4 login d-flex align-items-center justify-content-center">
      <Link className="login person " to="login">
        person
      </Link>
    </div>
  );
}

export default Person;
