import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const picture = e.target.picture.value;
    const password = e.target.password.value;
    console.log({ name, email, picture, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setUser(user);
        alert("Account created Successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Email already used");
      });
  };

  return (
    <div className="card-body  w-5/12 mx-auto my-20">
      <h1 className="text-2xl font-bold text-center my-4">Register</h1>
      <form onSubmit={handleRegister} className="fieldset">
        <label className="label text-[15px]">Name</label>
        <input
          name="name"
          type="text"
          className="input w-full"
          placeholder="Enter Your Name"
          required
        />
        <label className="label text-[15px]">Email</label>
        <input
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
          required
        />
        <label className="label text-[15px]">PhotoURL</label>
        <input
          name="picture"
          type="text"
          className="input w-full"
          placeholder="Enter Your Picture Link"
          required
        />
        <label className="label text-[15px]">Password</label>
        <input
          name="password"
          type="password"
          className="input w-full"
          placeholder="Password"
          required
        />
        <div className="flex flex-col gap-2 mt-1 ">
          <p className="text-[15px]">
            Already have an acount?Please
            <Link to="/login">
              <span className="text-blue-500 link link-hover">,Login</span>
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white mt-4"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
