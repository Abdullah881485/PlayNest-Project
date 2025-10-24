import React, { Suspense } from "react";
import Slider from "../../components/Slider/Slider";
import { useLoaderData } from "react-router";
import ToyCard from "../../components/ToyCard/ToyCard";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const data = useLoaderData();
  const slideData = data.slice(0, 4);
  // console.log(slideData);

  // console.log(data);

  return (
    <div>
      <title>PlayNest | Home</title>
      <div className=" my-10 w-[85%] mx-auto">
        <div>
          <Slider slideData={slideData}></Slider>
        </div>
        <div data-aos="fade-up" className="my-10 space-y-5">
          <h1 className="text-2xl logo-font md:text-3xl font-semibold text-[#ff6f61] text-center">
            Populer Toys
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {data.map((card) => (
              <ToyCard key={card.toyId} card={card}></ToyCard>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="my-20 space-y-5">
          <h1 className="text-3xl font-semibold text-center logo-font text-[#ff6f61]">
            Our Mission
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              className="w-full md:w-6/12 rounded-lg"
              src="https://i.ibb.co.com/8gNwYbJv/vintage-toy-shelf-with-teddy-bears-classic-figurines-rustic-wooden-setting-529344-15941.jpg"
              alt="toy shop"
            />
            <div>
              <h2 className=" text-center md:text-start text-2xl font-bold text-[#FF4C60] mb-4">
                Why Families Love PlayNest
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-center md:text-start">
                At PlayNest, we're passionate about making childhood magical and
                meaningful. Every toy we offer is carefully chosen to ensure
                safety, spark imagination, and bring smiles to every home. Your
                happiness matters — from browsing to delivery!
              </p>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="my-20">
          <h2 className="text-3xl text-[#FF4C60] mb-6 text-center logo-font">
            Meet Our Local Sellers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-center">
            We proudly support local toy makers and small businesses. Here are
            some of our featured sellers:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src="https://i.ibb.co.com/twmK0082/700674.png"
                alt=""
              />
              <h3 className="text-xl font-semibold text-[#4D96FF] mb-1">
                Rafiq Toys
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Rafiq’s Wooden Wonders
              </p>
              <p className="text-gray-500 text-xs">rafiq@localtoys.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src="https://i.ibb.co.com/R4ygBp4q/icon-5887126-960-720.webp"
                alt=""
              />
              <h3 className="text-xl font-semibold text-[#4D96FF] mb-1">
                Nadia Crafts
              </h3>
              <p className="text-gray-600 text-sm mb-2">
                Nadia’s Creative Toys
              </p>
              <p className="text-gray-500 text-xs">nadia@localtoys.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src="https://i.ibb.co.com/BKBKvg9X/1730273.png"
                alt=""
              />
              <h3 className="text-xl font-semibold text-[#4D96FF] mb-1">
                ToyFun Hub
              </h3>
              <p className="text-gray-600 text-sm mb-2">Toys R Us Local</p>
              <p className="text-gray-500 text-xs">contact@toysruslocal.com</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                src="https://i.ibb.co.com/qF0kr8PH/779159.png"
                alt=""
              />
              <h3 className="text-xl font-semibold text-[#4D96FF] mb-1">
                Happy Hands
              </h3>
              <p className="text-gray-600 text-sm mb-2">Happy Kids Toys</p>
              <p className="text-gray-500 text-xs">info@happykids.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
