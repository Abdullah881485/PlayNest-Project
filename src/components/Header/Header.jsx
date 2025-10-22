import React from "react";
import { NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/3082060.png";
const Header = () => {
  const links = (
    <>
      <li className="ml-3">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="ml-3">
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
      <li className="ml-3">
        <NavLink to="/purchases">My purchase</NavLink>
      </li>
    </>
  );
  return (
    <nav>
      <div className=" bg-base-100 shadow-sm">
        <div className="navbar w-[90%] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img className="w-14" src={logo} alt="" />
              <a className="font-bold text-2xl">PlayNest</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 font-semibold">{links}</ul>
          </div>
          <div className="navbar-end flex  gap-3 items-center">
            <div className="rounded-full bg-gray-300 p-2">
              <img className="w-8" src={logo} alt="" />
            </div>
            <a className="btn bg-[#ff6f61] text-white rounded-xl">Sign in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
