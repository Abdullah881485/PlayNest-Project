import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";
import logo from "../../assets/3082060.png";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { RiAccountCircle2Fill } from "react-icons/ri";

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
      <li className="ml-2">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="ml-2">
        <NavLink to="/allToys">All Toys</NavLink>
      </li>
      {user && (
        <>
          <li className="ml-2">
            <NavLink to="/myProfile">My Profile</NavLink>
          </li>
          <li className="ml-2">
            <NavLink to="/purchases">My purchase</NavLink>
          </li>
        </>
      )}
      <li className="ml-2">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/feedback">Feedback</NavLink>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-10 bg-white">
      <div className=" bg-base-100 shadow-sm ">
        <div className="navbar w-[98%] md:w-[85%] mx-auto">
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
            {user ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1 cursor-pointer">
                  <img
                    className="w-10 rounded-full"
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co/HT6sMcVr/2015-10-06-FB-person.webp"
                    }
                    alt=" not found"
                  />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content card card-sm bg-white z-1 shadow-md  p-2 w-70"
                >
                  <div className="card-body  text-gray-500 ">
                    <h1 className="text-[15px] font-bold">
                      {user.displayName ? user.displayName : "Anonymous"}
                    </h1>
                    <p className="text-xs font-semibold">{user.email}</p>
                    <div className="pt-2  border-t-2 border-gray-200">
                      <Link
                        to="/myProfile"
                        className=" text-gray-500 rounded-md font-bold cursor-pointer py-1.5 hover-glow btn-sm btn-ghost text-[14px] btn justify-start hover:bg-gray-800 hover:text-gray-200 w-full mt-2 "
                      >
                        <RiAccountCircle2Fill size={20} />
                        Profile
                      </Link>
                      <button
                        onClick={handleLogOut}
                        className=" text-white shine-btn rounded-lg bg-[#ff6f61] hover:bg-[#4D96FF] font-bold cursor-pointer py-1.5 px-7 btn-sm  w-full text-center mt-2 "
                      >
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="shine-btn bg-[#ff6f61] text-white font-semibold px-4 py-2 text-xs md:text-sm rounded-lg cursor-pointer hover:bg-[#4D96FF]  transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
