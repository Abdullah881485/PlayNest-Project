import React from "react";

const MyProfile = () => {
  return (
    <div>
      <div className="w-[50%] mx-auto my-20">
        <h1 className="mb-5 text-2xl font-bold text-[#ff6f61]">My Profile</h1>
        <div className="flex items-center gap-5">
          <img
            className="w-18 rounded-full"
            src="https://i.ibb.co.com/twmK0082/700674.png"
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">MR Ramim</h1>
            <p className="text-gray-500 text-sm">mdramim@gmail.com</p>
          </div>
        </div>
        <form>
          <div className="flex flex-col my-3">
            <label className="label">Display Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Your Name"
            />
            <label className="label">Photo URL</label>
            <input type="text" className="input w-full" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn w-3/12 mt-4 bg-[#ff6f61] hover:bg-[#4D96FF] rounded-lg font-bold text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
