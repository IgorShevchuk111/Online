import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ margin: "200px", textAlign: "center" }}>
      <h1>Error Url not found</h1>
      <Link to={"/"}>
        <div>Back</div>
      </Link>
    </div>
  );
}

export default ErrorPage;
