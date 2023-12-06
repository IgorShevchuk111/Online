import React from "react";

const LazyApp = React.lazy(() => import("./App"));

const routes = [{ path: "/", element: <LazyApp /> }];

export default routes;
