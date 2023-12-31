import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/Provider";
// import icon from "../../../../public/user-icon.png";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Components/hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const nav = (
    <>
      <div className="flex gap-1 items-center">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/ourMenu"}>Our Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/order/salad"}>Our Shop</NavLink>
        </li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Log Out
            </button>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to={"/singUp"}>SignUp</NavLink>
        </li>
        <li>
          <Link to={"/dashboard/cart"}>
            <button className="btn">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>
        </li>
      </div>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 opacity-90 max-w-7xl mx-auto text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt=""
              />{" "}
            </>
          ) : (
            <>
              <div></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
