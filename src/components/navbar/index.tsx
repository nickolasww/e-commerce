import React from "react";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="p-7 border-b-2 border-gray-200">
      <div className="mx-32 flex justify-stretch items-center">
        <a href="" className="font-bold text-3xl">
          Ww's Market
        </a>
        <ul className="flex gap-24 cursor-pointer text-lg">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">Contact</li>
          <li className="hover:underline">About</li>
          <li className="hover:underline">Sign Up</li>
        </ul>
        <div className="flex gap-10 ">
          <MdFavoriteBorder />
          <SlBasket />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
