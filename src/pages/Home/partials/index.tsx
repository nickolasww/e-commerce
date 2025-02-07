import React from "react";
import Navbar from "../../../components/navbar/index";

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
      </div>
    </header>
  );
};

export default HomePage;
