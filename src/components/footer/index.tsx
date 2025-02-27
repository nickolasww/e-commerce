import * as React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

const Footer = () => {
  return (
    <header>
      <div className='flex gap-20 bg-blue-950 text-white p-20 justify-center '> 
        <div className='flex flex-col gap-2'>
          <h1 className='font-semibold text-xl'>BCC's Market</h1>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          {/* enter email */}
        </div>

        <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-xl'>Support</h2>
          <p className='w-52'>111 Bjoy sarani, Dhaka, DH 1515, Bangladesh</p>
          <p>WwMarket@gmail.com</p>
          <p>+88015-8888-9999</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h3 className='font-semibold text-xl'>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className='flex flex-col gap-2'>
          <h4 className='font-semibold text-xl'>Quick Link</h4>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className='flex flex-col gap-5'>
          <h1 className='font-semibold text-xl'>Download App</h1>
          <p>Save $3 with App New User Only</p>
            <div className='flex gap-5 text-xl cursor-pointer'>
              <FiFacebook />
              <FiTwitter />
              <FaInstagram />
              <LuLinkedin />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Footer
