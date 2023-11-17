import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // TODO :get isadmine value from the database
  const isadmine = true;
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isadmine ? (
            <>
              <li>
                <NavLink to={"/dashboard/admineHome"}>
                  <FaHome></FaHome> Admine Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addIteams"}>
                  <FaUtensils></FaUtensils> Add iteams
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageIteams"}>
                  <FaList></FaList> Manage Iteams
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart> My cart
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar></FaCalendar> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAd></FaAd> Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/booking"}>
                  <FaList></FaList> My Booking
                </NavLink>
              </li>
            </>
          )}
          {/* shered navlinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSearch></FaSearch> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaShoppingCart></FaShoppingCart> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
