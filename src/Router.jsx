import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import LasViewer from "./pages/LasViewer";
import ObjectViewer from "./pages/ObjectViewer";
import ObjectViewer2 from "./pages/ObjectViewer2";
import Home from "./pages/Home";

const LogoutRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lasViewer",
    element: <LasViewer />,
  },
  {
    path: "/objectViewer",
    element: <ObjectViewer />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default function Router() {
  return <RouterProvider router={LogoutRouter} />;
}
