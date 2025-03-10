import * as React from "react";

import Input from "../../components/input";

import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


// @ts-ignore
import BCCLOGO from "../../assets/icon/LogoBcc.png";

const Navbar = () => {
  return (
    <header className="border-b-2 border-gray-200 pt-5">
      <div className="mx-24 flex justify-between items-center">
        <a href="/" className="cursor-pointer w-20"> 
         <img src={BCCLOGO} alt="BCC LOGO"/> 
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
        <div className="flex gap-10 justify-center items-center ">
          
          <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg p-2 group">
            <Input type="text" placeholder="Search" className=" w-0 p-0 group-hover:w-40 group-hover:px-2 duration-200 transition-all focus:outline-none"/>
            <IoMdSearch className="text-2xl "/>
          </div>

          <div>

          </div>
          
          <MdFavoriteBorder className="text-2xl cursor-pointer" />
          <SlBasket className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
