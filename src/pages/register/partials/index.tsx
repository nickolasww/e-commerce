import * as React from "react";

import Navbar from "../../../components/navbar";
import Input from "../../../components/input";
import Footer from "../../../components/footer/index"
// @ts-ignore
import Registerimg from "../../../../src/assets/RegisterImg.svg"


const Register = () => {
  return (
    <header className="">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-">
          <img src={Registerimg} alt="" className="" />
        </div>

        <div className="">
          <h1 className="text-5xl font-normal">Create an account</h1>
          <p className="mt-2">Enter your details below</p>

          <div className="flex flex-col gap-8 my-5">
            <Input type="text" placeholder="Name" />

            <Input type="text" placeholder="Email or Phone Number" />

            <Input type="text" placeholder="Password" />
          </div>

          <button className="text-white bg-red-600 hover:bg-red-700 px-20 py-3">
            Create Account
          </button>

          <p className="flex gap-3">
            Already have account?
            <a href="" className="font-semibold">
              Log in
            </a>
          </p>
        </div>
      </div>
      <Footer/>
    </header>
  );
};

export default Register;
