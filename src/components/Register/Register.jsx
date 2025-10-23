import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="card-body  w-5/12 mx-auto my-20">
      <h1 className="text-2xl font-bold text-center my-4">Register</h1>
      <form className="fieldset">
        <label className="label text-[15px]">Name</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter Your Name"
        />
        <label className="label text-[15px]">Email</label>
        <input type="email" className="input w-full" placeholder="Email" />
        <label className="label text-[15px]">PhotoURL</label>
        <input
          type="text"
          className="input w-full"
          placeholder="Enter Your Picture Link"
        />
        <label className="label text-[15px]">Password</label>
        <input
          type="password"
          className="input w-full"
          placeholder="Password"
        />
        <div className="flex flex-col gap-2 mt-1 ">
          <p className="text-[15px]">
            Don't have an account?
            <Link to="/login">
              <span className="text-blue-500 link link-hover">
                Please,Login
              </span>
            </Link>
          </p>
        </div>
        <button className="btn bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
