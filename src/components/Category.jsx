import React from "react";
import { categories } from "../data/data";
function Category() {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-500 text-4xl font-bold text-center mb-5">
        Top Rated Menu Items
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg flex items-center justify-between p-4"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img className="w-20" src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
