import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const Forgot = () => {
  const { resetPassword } = use(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    resetPassword(email)
      .then((result) => {
        console.log(result);
        alert("Forgot Password Email Sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-5/12 mx-auto my-40">
      <form onSubmit={handleForgotPassword} className="fieldset">
        <label className="label text-[15px]">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="btn bg-[#ff6f61] hover:bg-[#4D96FF] font-bold text-white mt-4"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default Forgot;
