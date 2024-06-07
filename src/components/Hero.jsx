import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="relative max-h-[500px]">
        <div className="absolute flex flex-col max-h-[500px] justify-center w-full h-full bg-black/40">
          <h1 className="px-4 text-4xl text-white sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl text-white  sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Foods</span> Delivered
          </h1>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_1280.jpg"
          alt=""
          className="max-h-[500px] object-cover w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
