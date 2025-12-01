import React from "react";
import { Link } from "react-router";

const ToyCard = ({ card }) => {
  return (
    <div className="flex flex-col pt-3 border border-gray-300 rounded-lg shadow-md hover:shadow-2xl transition-all gap-3 bg-white cursor-pointer duration-300">
      <img
        src={card.pictureURL}
        alt="Shoes"
        className="rounded-xl w-full h-60 object-contain  "
      />

      <div className="px-4 pt-2">
        <h2 className="card-title h-10 text-start text-[#ff6f61]">
          {card.toyName}
        </h2>
        <p className="text-sm font-medium text-gray-600 ">{card.sellerName}</p>
        <p className="text-lg font-bold text-[#4D96FF] ">
          Price : {card.price} $
        </p>
        <div className="flex justify-between  text-center text-gray-500">
          <p>⭐ {card.rating}</p>
          <p>Stock : {card.availableQuantity}</p>
        </div>
      </div>
      <div className="card-actions w-full flex justify-center">
        <Link
          to={`toyDetails/${card.toyId}`}
          className="py-2 bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white w-full text-center"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
