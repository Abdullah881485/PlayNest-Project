import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen object-cover">
      <title>Error 404</title>
      <img
        src="https://png.pngtree.com/png-vector/20221014/ourmid/pngtree-page-not-found-error-404-png-image_6279587.png"
        alt=""
      />
      <Link to="/">
        <button className="btn bg-[#ff6f61] hover:bg-[#4D96FF] rounded-lg font-bold text-white mt-4">
          Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
