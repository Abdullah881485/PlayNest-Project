import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ slideData }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        style={{ borderRadius: "12px", overflow: "hidden" }}
      >
        {slideData.map((slide) => (
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-10">
                <img
                  src={slide.pictureURL}
                  alt={slide.toyId}
                  className="w-80 object-cover"
                />
                <div>
                  <h1 className=" text-xl md:text-2xl font-semibold mb-3 text-[#ff6f61]">
                    {slide.toyName}
                  </h1>
                  <p className="text-blue-500 font-semibold text-[15px] md:text-lg">
                    Price: {slide.price} $
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
