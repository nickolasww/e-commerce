import * as React from "react";

import Navbar from "../../../components/navbar";
import Input from "../../../components/input";
import Footer from "../../../components/footer/index"
// @ts-ignore
import Registerimg from "../../../../src/assets/RegisterImg.svg"


const Login = () => {
  return (
      <header className="">
        <Navbar />
        <div className="flex justify-center items-center py-20">
          <div className="w-1/2">
            <img src={Registerimg} alt="" className="" />
          </div>

          <div className="w-1/2 pl-52">
            <h1 className="text-5xl font-semibold">Log in to Exclusive</h1>
            <p className="mt-2">Enter your details below</p>

            <div className="flex flex-col gap-8 my-5">
              <Input type="text" placeholder="Email or Phone Number" className="border-b-2 border-gray-300 w-96 p-2 focus:outline-none"/>

              <Input type="text" placeholder="Password" className="border-b-2 border-gray-300 w-96 p-2 focus:outline-none" />
            </div>

            <div className="flex  items-center gap-36 ">
            <button className="text-white bg-red-600 hover:bg-red-700 px-10 py-3 ">
              Log in
            </button>
              <a href="" className="font-semibold text-red-500">Forget Password ?</a>
            </div>


          </div>
        </div>
        <Footer/>
      </header>
  )
}

export default Login
