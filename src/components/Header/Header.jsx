import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/3082060.png";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = use(AuthContext);
  // console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "",
          text: "You logged out Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
        <div className="navbar w-[98%] md:w-[90%] mx-auto">
          <div className="navbar-start ">
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
                className="menu  dropdown-content bg-base-200 rounded-box z-2 mt-3 min-w-[300px] p-2 shadow font-semibold"
              >
                {links}
              </ul>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img className="w-8 md:w-14" src={logo} alt="" />
              <a className="logo-font text-lg md:text-3xl">PlayNest</a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-2 font-semibold">{links}</ul>
          </div>
          <div className="navbar-end flex  gap-3 items-center">
            {user && (
              <Link
                to="/myProfile"
                title={user && user.displayName}
                className="rounded-full bg-gray-300 cursor-pointer hover:shadow-xl"
              >
                <img
                  className=" w-7 md:w-10 rounded-full"
                  src={`${
                    user
                      ? user.photoURL
                      : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                  }`}
                  alt=""
                />
              </Link>
            )}
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-[#ff6f61] text-white rounded-md md:rounded-xl"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-[#ff6f61] text-white rounded-md md:rounded-xl"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
