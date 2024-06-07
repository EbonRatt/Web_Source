import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const NavBar = () => {
  const [nav, useNav] = useState(false);

  const handleClick = () => {
    useNav(!nav);
  };

  return (
    <div className=" max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left Side  */}
      <div className="flex items-center">
        <div className="cursor-pointer">
          <AiOutlineMenu size={25} onClick={handleClick} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-0 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className="flex items-center bg-gray-200 rounded-full px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="focus:outline-none p-2 w-full bg-transparent "
          type="text"
          placeholder="Search Food"
        />
      </div>

      {/* Cart Button */}
      <button className="bg-black text-white hidden md:flex items-center py-2">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu */}
      {/* OverLay */}
      {nav && (
        <div className="bg-black/80 fixed left-0 top-0 z-10 w-full h-screen"></div>
      )}

      {/* Side Drawer Menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleClick}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4">
              <TbTruckDelivery size={25} className="mr-4" />
              Order
            </li>
            <li className="flex text-xl py-4">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="flex text-xl py-4">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="flex text-xl py-4">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>

            <li className="flex text-xl py-4">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="flex text-xl py-4">
              <BsFillSaveFill size={25} className="mr-4" />
              Best Ones
            </li>
            <li className="flex text-xl py-4">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
