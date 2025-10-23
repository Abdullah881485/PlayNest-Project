import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Forgot = () => {
  const { resetPassword } = use(AuthContext);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);

    resetPassword(email)
      .then((result) => {
        console.log(result);
        Swal.fire({
          title: "",
          text: "Password reset mail sent,check your Mail",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "https://mail.google.com/";
  };
  return (
    <div data-aos="zoom-in" className="w-5/12 mx-auto my-40">
      <title>PlayNest | Forgot Password</title>
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
