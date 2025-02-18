import * as React from "react";

import Input from "../../components/input";

import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="p-4 border-b-2 border-gray-200">
      <div className="mx-32 flex justify-stretch items-center">
        <a href="/" className="font-bold text-2xl">
         BCC MARKETPLACE
        </a>
        <ul className="flex gap-10 cursor-pointer text-lg">
          <li className="hover:underline">
            <a href="/">
              Home
            </a>
          </li>
          <li className="hover:underline">
            <a href="/Contact">
              Contact
            </a>
          </li>
          <li className="hover:underline">
            <a href="/About">
              About
            </a>
          </li>
          <li className="hover:underline">
            <a href="/Register">
            Sign Up
            </a>
          </li>
        </ul>
        <div className="flex gap-5 justify-center items-center ">
          <Input type="text" placeholder="Search" className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none"/>
          <MdFavoriteBorder className="text-2xl cursor-pointer" />
          <SlBasket className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
