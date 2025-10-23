import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const [toyTry, setToyTry] = useState(false);

  const toyDetails = useLoaderData();
  const { id } = useParams();
  const clickId = parseInt(id);
  const clickDetails = toyDetails.find((toy) => toy.toyId === clickId);
  const handleTryNow = () => {
    const purchase = JSON.parse(localStorage.getItem("purchased")) || [];
    const addCheck = purchase.find((add) => add.toyId === clickId);
    if (addCheck) {
      alert("toy already added");
      return;
    } else {
      purchase.push(clickDetails);
      alert("Toy Successfully Purchased");
    }
    localStorage.setItem("purchased", JSON.stringify(purchase));
  };
  return (
    <div className="my-10 w-8/12 mx-auto">
      <div className="hero mb-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={clickDetails.pictureURL}
            alt={clickDetails.toyName}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl font-bold">{clickDetails.toyName}</h1>
            <h2 className="text-lg font-semibold text-[#ff6f61] ">
              {clickDetails.subCategory}
            </h2>
            <p className="text-gray-500">{clickDetails.description}</p>
            <h1 className="text-xl font-semibold text-[#4D96FF]">
              Price: ${clickDetails.price}
            </h1>
            <div className="flex items-center gap-6 text-gray-700">
              <p className="flex items-center gap-1 font-semibold">
                ⭐ <span className="font-semibold">{clickDetails.rating}</span>
                /5
              </p>
              <p className="text-blue-500 font-semibold">
                <span className="font-semibold text-gray-500">In Stock:</span>{" "}
                {clickDetails.availableQuantity}
              </p>
            </div>
            <p className="text-gray-500">
              Seller: {clickDetails.sellerName} | contact :
              <a
                className="text-blue-500 ml-1"
                href={`mailto:${clickDetails.sellerEmail}`}
              >
                {clickDetails.sellerEmail}
              </a>
            </p>

            <button
              onClick={() => setToyTry(!toyTry)}
              className="btn bg-[#ff6f61] hover:bg-[#4D96FF]  font-bold text-white"
            >
              Try Now
            </button>
          </div>
        </div>
      </div>
      {toyTry && (
        <div className="w-10/12 mx-auto py-10 border-t-2 border-gray-300">
          <h1 className="text-xl font-semibold">Try Now</h1>
          <div className="card-body ">
            <form onSubmit={handleTryNow} className="fieldset">
              <label className="label text-[15px]">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter Your Name"
                required
              />
              <label className="label text-[15px] ">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Enter Your Email"
                required
              />

              <button className="btn mt-4 bg-[#ff6f61] hover:bg-[#4D96FF]  font-bold text-white">
                Try Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToyDetails;
