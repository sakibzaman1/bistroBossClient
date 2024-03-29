import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // Sign Out Button

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      {user ? (
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      ) : (
        ""
      )}
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Our Shop</NavLink>
      </li>
      <li>
        <NavLink>
          <BsCart4></BsCart4>
          <div className="badge badge-secondary">+0</div>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 text-white bg-black max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <button onClick={handleLogOut}>Logout</button>
            ) : (
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            )}
          </div>
          <div className="avatar ml-4 mr-2">
            <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
