import React from "react";
import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="my-50 flex justify-center items-center">
      <Triangle
        visible={true}
        height="90"
        width="90"
        color="#ff6f61"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
