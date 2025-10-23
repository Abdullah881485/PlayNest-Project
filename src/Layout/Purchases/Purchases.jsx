import React, { useEffect, useState } from "react";

const Purchases = () => {
  const [purchased, setPurchased] = useState([]);
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("purchased")) || [];
    setPurchased(stored);
  }, []);

  const handleCancel = (id) => {
    const updated = purchased.filter((pcs) => pcs.toyId !== id);
    setPurchased(updated);
    localStorage.setItem("purchased", JSON.stringify(updated));
  };

  if (purchased.length === 0) {
    return (
      <div className="w-10/12  mx-auto my-50 text-center text-gray-500">
        <h2 className="text-xl font-semibold">No Purchases Found</h2>
        <p>Try adding some toys first...</p>
      </div>
    );
  }
  return (
    <div className="w-10/12 mx-auto my-20">
      {purchased.map((card) => (
        <div className="flex flex-col gap-10">
          <div className="w-full my-2 flex justify-between items-center bg-base-200 px-4 py-5 rounded-2xl shadow-md hover:shadow-xl">
            <div className="flex items-center gap-3">
              <img className="w-18 object-cover" src={card.pictureURL} alt="" />
              <div className="flex flex-col gap-1">
                <h1 className="font-semibold">{card.toyName}</h1>
                <p className="text-blue-500">{card.price}</p>
              </div>
            </div>
            <div>
              <h1
                onClick={() => handleCancel(card.toyId)}
                className="cursor-pointer"
              >
                ❌
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Purchases;
