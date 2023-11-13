import { createBrowserRouter } from "react-router-dom";
import Main from "../LeyOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/order/order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/ourMenu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);
