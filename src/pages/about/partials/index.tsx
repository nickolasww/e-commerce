import * as React from "react";
import Navbar from "../../../components/navbar";

import { CiShop } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";

// @ts-ignore
import AboutJumbotron from "../../../assets/AboutJumbotron.svg";

const About = () => {
  return (
      <header>
        <Navbar />
        <div className="flex justify-center items-center py-20 pl-40">
          <div className="w-1/2">
            <h1 className="text-6xl font-semibold mb-10 "> Our Story</h1>
            <p className="mb-5"> Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense
              in Bangladesh. Supported by wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
            </p>
            <p className="">
              Exclusive has more than 1 Million products to offer,
              growing at a very fast. Exclusive offers a diverse
              assotment in categories ranging  from consumer.
            </p>
          </div>

          <div className="w-1/2">
            <img  src={AboutJumbotron} alt="" />
          </div>

        </div>

          <ul className="flex gap-20 items-center justify-center">
            <li className="flex flex-col items-center justify-center border-2 p-8">
            <CiShop className="text-4xl" />
            <h1 className="text-xl font-bold">10.5K</h1>
            <p>Sallers active our site</p>
            </li>

            <li className="flex flex-col items-center justify-center border-2 p-8">
            <CiDollar className="text-4xl"/>
            <h1 className="text-xl font-bold ">33K</h1>
            <p>Monthly Product Sale</p>
            </li>

            <li className="flex flex-col items-center justify-center border-2 px-7 py-8">
            <MdOutlineShoppingBag className="text-4xl"/>
            <h1 className="text-xl font-bold">45.5K</h1>
            <p>Customer active in our site</p>
            </li>

            <li className="flex flex-col items-center justify-center border-2 px-7 py-8">
            <FaSackDollar className="text-4xl"/>
            <h1 className="text-xl font-bold">25K</h1>
            <p>Anual gross sale in our site</p>
            </li>
          </ul>

          <div className="flex ">
            <div>
              <img src="" alt=""/>
            </div>

            <div>

            </div>
          </div>


      </header>
  )
}

export default About