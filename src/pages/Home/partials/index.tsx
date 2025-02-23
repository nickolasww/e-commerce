import * as React from "react";

import Navbar from "../../../components/navbar/index";
import Footer from "../../../components/footer/index"
import Categories from "../../../pages/categories/partials/index"

import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

import Today from "../../../pages/today/partials/index"
import ThisMonth from "../../../pages/thismonth/partials/index"
import OurProducts from "../../../pages/ourproducts/partials/index"
import Featured from "../../../pages/featured/partials/index"


const HomePage = () => {
  return (
    <header className="">
      <div className="">
        <Navbar />
        <div className="flex flex-col ml-40 mt-5 gap-3 text-lg font-normal">
          <a href="" className="hover:font-bold">
            Woman's Fashion
          </a>
          <a href="" className="hover:font-bold">
            Men's Fashion
          </a>
          <a href="" className="hover:font-bold">
            Electronics
          </a>
          <a href="" className="hover:font-bold">
            Home & Lifestyle
          </a>
          <a href="" className="hover:font-bold">
            Medicine
          </a>
          <a href="" className="hover:font-bold">
            Sports & Outdoor
          </a>
          <a href="" className="hover:font-bold">
            Baby's & Toys
          </a>
          <a href="" className="hover:font-bold">
            Groceries & Pets
          </a>
          <a href="" className="hover:font-bold">
            Health & Beauty
          </a>
        </div>

        <div className="flex justify-center  items-center ">
          <Today/>
        </div>

        <div className="flex justify-center items-center p-10">
        <Categories />
        </div>

        <div className="flex justify-center items-center p-10">
          <ThisMonth />
        </div>

        <div className="flex justify-center items-center p-10">
          <OurProducts />
        </div>

        <div className="flex justify-center items-center p-10">
          <Featured />
        </div>



      </div>

      <div>

        <div className="flex justify-center items-center gap-36 p-32">
          <div className="flex flex-col justify-center items-center ">
          <TbTruckDelivery className="text-6xl border-2 rounded-full border-black bg-gray-300 p-2"/>
          <h1 className="text-xl font-bold">
            FREE AND FAST DELIVERY
          </h1>
          <p className="text-sm">
            Free Delivery for all orders over $140
          </p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <RiCustomerService2Line className="text-6xl border-2 rounded-full border-black  bg-gray-300 p-2"/>
            <h1 className="text-xl font-bold">
              24/7 Customer Service
            </h1>
            <p className="text-sm">
              Friendly 24/7 Customer Support
            </p>
          </div>

          <div className="flex flex-col justify-center items-center ">
            <IoShieldCheckmarkSharp className="text-6xl border-2 rounded-full border-black p-2 bg-gray-300"/>
            <h1 className="text-xl font-bold">
              MONEY BACK GUARANTEE
            </h1>
            <p className="text-sm">
              We return money within 30 days
            </p>
          </div>

        </div>
      </div>
      <Footer/>
    </header>
  );
};

export default HomePage;
