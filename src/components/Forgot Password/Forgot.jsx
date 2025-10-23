import React from "react";

const Forgot = () => {
  return (
    <div className="w-5/12 mx-auto my-40">
      <form className="fieldset">
        <label className="label text-[15px]">Email</label>
        <input
          type="email"
          className="input w-full"
          placeholder="Enter Your Email"
        />
        <button className="btn bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white mt-4">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Forgot;
