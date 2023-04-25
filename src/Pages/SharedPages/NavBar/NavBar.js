import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  console.log(user);
  const menuItems = (
    <React.Fragment>
      <li className="text-sm font-semibold">
        <Link to="/">Home</Link>
      </li>
      <li className="text-sm font-semibold">
        <Link to="/blog">Blog</Link>
      </li>
      {user?.uid ? (
        <>
          <li className="text-sm font-semibold">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="text-sm font-semibold">
            <button onClick={handleLogOut}>signout</button>
          </li>
        </>
      ) : (
        <>
          <li className="text-sm font-semibold">
            <Link to="/login">Login</Link>
          </li>
          <li className="text-sm font-semibold">
            <Link to="/signup">Register</Link>
          </li>
        </>
      )}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn-none normal-case text-xl">
            <h1 className="text-2xl font-bold ml-5">
              Oto <span className="text-info font-bold">Deals</span>
            </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <label
        htmlFor="drawer-dashboard"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
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
    </div>
  );
};

export default NavBar;
