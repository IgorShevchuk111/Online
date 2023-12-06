import React from "react";
import ErrorPage from "./components/ErrorPage";

const LazyApp = React.lazy(() => import("./App"));
const LazyAllPhones = React.lazy(() =>
  import(
    "./components/HeaderComponents/MenuComponents/itemsComponent/phones/AllApplePhones"
  )
);

const routes = [
  {
    path: "/",
    element: <LazyApp />,
    children: [{ path: "apple-phones", element: <LazyAllPhones /> }],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
