import { createBrowserRouter } from "react-router-dom";
import Main from "../LeyOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu/OurMenu";
import Order from "../Pages/order/order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LeyOut/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import Allusers from "../Pages/Dashboard/AllUsers/Allusers";
import AddIteams from "../Pages/Dashboard/AddIteams/AddIteams";
import AdminPrivateRoute from "./AdminPrivateRoute";
import ManageItems from "../Pages/Dashboard/ManageItem/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";

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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal-routes---------------------------
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admine-routes---------------------------
      {
        path: "allUsers",
        element: (
          <AdminPrivateRoute>
            <Allusers></Allusers>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manageIteams",
        element: (
          <AdminPrivateRoute>
            <ManageItems></ManageItems>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "addIteams",
        element: (
          <AdminPrivateRoute>
            <AddIteams></AddIteams>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminPrivateRoute>
            {" "}
            <UpdateItem></UpdateItem>
          </AdminPrivateRoute>
        ),
      },
    ],
  },
]);
