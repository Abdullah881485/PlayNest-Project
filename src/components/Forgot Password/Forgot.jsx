import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Forgot = () => {
  const { resetPassword, forgotEmail } = use(AuthContext);

  // console.log(forgotEmail);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);

    resetPassword(email)
      .then((result) => {
        const _user = result.user;
        // console.log(result);
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
    <div
      data-aos="zoom-in"
      className=" w-11/12 md:w-8/12 lg:w-5/12 mx-auto my-10 md:my-40"
    >
      <title>PlayNest | Forgot Password</title>
      <form onSubmit={handleForgotPassword} className="fieldset">
        <h1 className="text-2xl logo-font text-center my-4 text-[#ff6f61]">
          Enter Your Email
        </h1>
        <label className="label text-[15px]">Email</label>
        <input
          defaultValue={forgotEmail}
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
