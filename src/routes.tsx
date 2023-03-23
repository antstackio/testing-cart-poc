import { RouteObject } from "react-router-dom";
import AdditionTwo from "./pages/addition-page/AdditionTwo";
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
  {
    path: "/add",
    children: [
      {
        path: "two",
        element: <AdditionTwo />,
      },
    ],
  },
];
