import React, { useState } from "react";
import { data } from "../data/data.js";

function Food() {
  const [foods, setFood] = useState(data);

  // Filter Category
  const handleCategory = (category) => {
    setFood(
      data.filter((item) => {
        return category === item.category;
      })
    );
  };

  // Filter Price
  const handlePrice = (price) => {
    setFood(
      data.filter((item) => {
        return price === item.price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-500 text-4xl font-bold text-center mb-5">
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between  ">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700 ">Filter Type</p>
          <div className="flex  flex-wrap ">
            <button
              onClick={() => setFood(data)}
              className="mr-2 mt-1  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => handleCategory("burger")}
              className="mr-2 mt-1  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => handleCategory("pizza")}
              className="mr-2 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => handleCategory("salad")}
              className="mr-2 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => handleCategory("chicken")}
              className="mr-2 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => handlePrice("$")}
              className="mr-1 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $
            </button>
            <button
              onClick={() => handlePrice("$$")}
              className="mr-1 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$
            </button>
            <button
              onClick={() => handlePrice("$$$")}
              className="mr-1 mt-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => handlePrice("$$$$")}
              className="mr-1 mt-1  border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Display Food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-t-lg w-full h-[200px] object-cover"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
