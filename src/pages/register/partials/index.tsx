import React from "react";
import Navbar from "../../../components/navbar";

const Register = () => {
  return (
    <header className="">
      <Navbar />
      <div className="w-1/2">
        <img src="" alt="" className="" />
      </div>
      <div className="w-1/2">
        <h1>Create an account</h1>
        <p>Enter your details below</p>

        <input
        type="text" 
        placeholder="Name"
        className="border-b-2 border-gray-500 focus:outline-none"
        />

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
    </header>
  );
};

export default Register;
