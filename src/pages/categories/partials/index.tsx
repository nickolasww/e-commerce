import * as React from "react";
import { IoIosPhonePortrait } from "react-icons/io";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";
import { FiHeadphones } from "react-icons/fi";
import { TbDeviceGamepad } from "react-icons/tb";

const Categories = () => {
  return (
    <div>
      <div className="flex gap-5 items-center pb-5">
        <div className="py-7 px-4 bg-red-500 rounded-lg"></div>
        <h1 className="text-red-500 font-semibold">Categories</h1>
      </div>
      <h2 className="text-4xl font-semibold">Browse By Category</h2>
      <div className="p-10">
      <ul className=" flex gap-10 ">
        <li className=" rounded-lg border-2 py-5 px-10 hover:bg-red-500 cursor-pointer" >
          <a href="" className="flex flex-col items-center justify-center">
            <IoIosPhonePortrait className="text-4xl " />
            Phones
          </a>
        </li>
        <li className="rounded-lg border-2 py-5 px-7 hover:bg-red-500 cursor-pointer">
          <a href="" className="flex flex-col items-center justify-center">
            <RiComputerLine className="text-4xl " />
          Computers
          </a>
        </li>
        <li className="rounded-lg border-2 py-5 px-6 hover:bg-red-500 cursor-pointer">
          <a href="" className="flex flex-col items-center justify-center">
            <BsSmartwatch  className="text-4xl "/>
          SmartWatch
          </a>
        </li>
        <li className="rounded-lg border-2 py-5 px-10 hover:bg-red-500 cursor-pointer">
          <a href="" className="flex flex-col items-center justify-center">
          <IoCameraOutline  className="text-4xl "/>
          Camera
          </a>
        </li>
        <li className="rounded-lg border-2 py-5 px-6 hover:bg-red-500 cursor-pointer">
          <a href="" className="flex flex-col items-center justify-center">
          <FiHeadphones  className="text-4xl"/>
          Headphones
          </a>
        </li>
        <li className="rounded-lg border-2 py-5 px-8 hover:bg-red-500 cursor-pointer">
          <a href="" className="flex flex-col items-center justify-center">
          <TbDeviceGamepad  className="text-4xl "/>
          Gaming
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Categories
