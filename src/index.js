import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
        {routes.map(({ path, element, children }, index) => (
          <Route key={index} path={path} element={element}>
            {children &&
              children.map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  </Suspense>
);
