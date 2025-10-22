import React from "react";

const ToyCard = ({ card }) => {
  return (
    <div className="flex flex-col pt-3 border border-gray-300 rounded-lg shadow-md gap-3 bg-white cursor-pointer hover:scale-105 duration-300">
      <img
        src={card.pictureURL}
        alt="Shoes"
        className="rounded-xl w-full h-60 object-contain  "
      />

      <div className="px-4 pt-2">
        <h2 className="card-title text-start text-[#ff6f61]">{card.toyName}</h2>
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
        <button className="py-2 bg-[#ff6f61] hover:bg-[#4D96FF] rounded-b-lg font-bold text-white w-full">
          View More
        </button>
      </div>
    </div>

    // <div className="flex flex-col p-4 border border-gray-300 rounded-lg shadow-md gap-3 bg-white cursor-pointer hover:scale-105 duration-300">
    //     <img
    //       className="h-50 w-full object-cover rounded-lg"
    //       src={trendApp.image}
    //       alt="image"
    //     />
    //     <h2 className="text-lg font-semibold">{trendApp.title}</h2>
    //     <div className="flex justify-between items-center">
    //       <span className="bg-[#F1F5E8] px-2 rounded text-[#00D390] flex gap-1.5 items-center">
    //         <ArrowDownToLine size={16} /> {trendApp.downloads}
    //       </span>
    //       <span className="bg-[#FFF0E1] px-2 rounded text-[#FF8811] flex gap-1.5 items-center">
    //         <Star size={16}></Star>
    //         {trendApp.ratingAvg}
    //       </span>
    //     </div>
    //   </div>
  );
};

export default ToyCard;
