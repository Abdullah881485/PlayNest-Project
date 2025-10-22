import React from "react";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router";
import ToyCard from "../../components/ToyCard/ToyCard";

const Home = () => {
  const data = useLoaderData();
  const slideData = data.slice(0, 4);
  // console.log(slideData);

  // console.log(data);

  return (
    <div>
      <div className=" my-10 w-[85%] mx-auto">
        <div>
          <Slider slideData={slideData}></Slider>
        </div>
        <div className="my-10 space-y-5">
          <h1 className="text-xl font-semibold">Populer Toys</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((card) => (
              <ToyCard key={card.toyId} card={card}></ToyCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
