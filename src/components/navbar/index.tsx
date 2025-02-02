import React from 'react'
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='mt-5 '>
      {/* <h1 className=''>Ww's Market</h1> */}
      <div className='flex gap-10 justify-center items-center'> 
          <p>Home</p>
          <p>Contact</p>
          <p>About</p>
          <p>Sign Up</p>
        {/* <div className='flex gap-10'> 
          <MdFavoriteBorder />
          <SlBasket />
        </div> */}
      </div>
    </div>
  )
}

export default Navbar
