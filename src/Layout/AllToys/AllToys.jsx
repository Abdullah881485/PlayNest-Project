import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import ToyCard from "../../components/ToyCard/ToyCard";
import Loader from "../../components/Loader/Loader";

const AllToys = () => {
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(false);
  const toys = useLoaderData();
  //   console.log(toys);

  const term = search.trim().toLowerCase();

  const handleSearch = (e) => {
    setLoading(true);
    setSearch(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  const searchBikeData =
    term.length > 0
      ? toys.filter((toy) => toy.toyName.toLowerCase().includes(term))
      : toys;
  const sortedData = [...searchBikeData].sort((a, b) => {
    if (sortOption === "low") return a.price - b.price;
    if (sortOption === "high") return b.price - a.price;
    return 0;
  });
  return (
    <div className="my-10 w-[85%] mx-auto">
      <h1 className="text-2xl logo-font md:text-3xl font-semibold text-[#ff6f61] text-center my-5">
        All Toy Collection
      </h1>
      <p className="text-gray-500 text-center mb-10 max-w-3xl mx-auto">
        Discover a wide variety of toys for every age and interest — from
        educational and creative playsets to fun collectibles, all in one place!
      </p>
      <div className="flex items-center justify-between flex-col md:flex-row gap-4 my-5">
        <label className="input flex items-center gap-2 w-full md:w-auto rounded-lg focus:outline-none focus:border-blue-500">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            className="focus:outline-none"
            placeholder="Search Toys..."
          />
        </label>

        <select
          className="select select-bordered w-full md:w-[200px] focus:outline-none rounded-lg"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {loading ? (
          <div className="col-span-4 flex justify-center items-center">
            <Loader></Loader>
          </div>
        ) : sortedData.length === 0 ? (
          <div className="flex flex-col items-center gap-5 col-span-4">
            <img
              className="w-1/5"
              src="https://i.ibb.co/WNx9fPtb/no-result-found.png"
              alt="error-icon"
            />
            <p className="text-gray-500">
              The toy you searched for is not available. Try another search.
            </p>
          </div>
        ) : (
          sortedData.map((card) => (
            <ToyCard key={card.id} card={card}></ToyCard>
          ))
        )}
      </div>
    </div>
  );
};

export default AllToys;
