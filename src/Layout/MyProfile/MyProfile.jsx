import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user, updateUser, setUser, setLoading } = use(AuthContext);
  // console.log(user.photoURL);
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const picture = e.target.photo.value;
    setLoading(true);
    updateUser({ displayName: name, photoURL: picture })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: picture });
        Swal.fire({
          title: "",
          text: "Your account updated successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <title>PlayNest | My Profile</title>
      <div data-aos="zoom-in" className=" w-[90%] md:w-[50%] mx-auto my-20">
        <h1 className="mb-5 text-2xl logo-font text-[#ff6f61]">My Profile</h1>
        <div className="flex items-center gap-5">
          <img
            className=" w-15 md:w-18 rounded-full"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            }`}
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{`${user.displayName}`}</h1>
            <p className="text-gray-500 text-[12px] sm:text-sm">{`${user.email}`}</p>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col my-3">
            <label className="label text-sm md:text-lg">Display Name</label>
            <input
              name="name"
              type="text"
              className="input w-full placeholder:text-sm md:placeholder:text-[16px] rounded-lg "
              placeholder="Enter Your Name"
            />
            <label className="label text-sm md:text-lg">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full rounded-lg"
            />

            <button
              type="submit"
              className="shine-btn btn w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mt-4 bg-[#ff6f61] hover:bg-[#4D96FF] rounded-lg font-bold text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
