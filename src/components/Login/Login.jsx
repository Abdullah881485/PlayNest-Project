import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Login = () => {
  const { signIn } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        alert("You don't have an account yet");
      });
  };

  return (
    <div className="card-body  w-5/12 mx-auto my-20">
      <h1 className="text-2xl font-bold text-center my-4">Login</h1>
      <form onSubmit={handleLogin} className="fieldset">
        <label className="label text-[15px]">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />
        <label className="label text-[15px]">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
        />
        <div className="flex flex-col gap-2 mt-1 ">
          <Link
            to="/forgotPass"
            className="link link-hover text-[15px] text-blue-500"
          >
            Forgot password?
          </Link>
          <p className="text-[15px]">
            Don't have an account?Please,
            <Link to="/register">
              <span className="text-blue-500 link link-hover">Register</span>
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
