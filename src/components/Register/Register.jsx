import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } =
    use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const picture = e.target.picture.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password need to be atleast 6 digit or longer",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have an Uppercase letter in the password",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have an lowercase letter in the password",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else {
      ("");
    }
    console.log({ name, email, picture, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: picture })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: picture });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });

        Swal.fire({
          title: "",
          text: "Account Created Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "You Already Have an Account",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        Swal.fire({
          title: "",
          text: "Your account created successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div data-aos="zoom-in" className="card-body  w-5/12 mx-auto my-10">
      <title>PlayNest | Register</title>
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
            Already have an account?Please
            <Link to="/login">
              <span className="text-blue-500 link link-hover">,Login</span>
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="btn bg-[#ff6f61] hover:bg-[#4D96FF]  font-bold text-white mt-4"
        >
          Register
        </button>
        <div className="my-5 flex flex-col justify-center items-center gap-5">
          <p className="text-gray-500 text-[17px] text-center">Or</p>
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
