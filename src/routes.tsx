import { RouteObject } from "react-router-dom";
import { Home } from "./pages/home/Home";
export const routes: RouteObject[] = [
  {
    path: "*",
    element: <div>404</div>,
  },
  {
    path: "/",
    element: <Home />,
  },
];
