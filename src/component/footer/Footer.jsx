import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaMobile } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

export default function Footer(props) {
  return (
    <div className={`${props.state === 'dark'?'bg-black':'bg-gray-800'}  mt-[10%]  px-5 lg:grid grid-cols-3 py-20`}>
      <div className='mx-10 flex gap-6 flex-col pb-10'>
        <h1 className='text-white text-2xl font-semibold'>About Us</h1>
        <p className='lg:w-[300px] text-slate-200 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, placeat? Odit aliquam, maiores ducimus perspiciatis cupiditate dolorum sit repellendus nulla?</p>
        <div className='flex'>
            <div className='bg-white mx-2 px-3 py-2 rounded-lg text-[20px]'>
                <FaFacebookF />
                </div>
            <div className='bg-white mx-2 px-3 py-2 rounded-lg text-[20px]'>
                <FaInstagram />
                </div>
            <div className='bg-white mx-2 px-3 py-2 rounded-lg text-[20px]'>
                <FaTwitter />
                </div>
            <div className='bg-white mx-2 px-3 py-2 rounded-lg text-[20px]'>
                <FaYoutube />
                </div>    
        </div>
        <p className='text-white pb-10'>Copyright &copy; Real Estate, All Rights Reserved</p>
      </div>
      <div className=' text-white mx-10 flex gap-10 flex-col pb-10'>
        <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
        <div>
        <div className='flex items-center justify-start'>
        <HiBuildingOffice  className='text-3xl mt-5'/>
        <p className='mt-5 mx-3'>10845 Griffith Peak Dr, Las Vegas, NV 89135</p>
        </div>
        <div className='flex items-center justify-start'>
        <FaMobile  className='text-3xl mt-5'/>
        <p className='mt-5 mx-3'>+91 879 098 8901</p>
        </div>
        <div className='flex items-center justify-start'>
        <GiRotaryPhone  className='text-3xl mt-5'/>
        <p className='mt-5 mx-3'>+91 123 678 0912</p>
        </div>
        <div className='flex items-center justify-start'>
        <MdEmail className='text-3xl mt-5'/>
        <p className='mt-5 mx-3'>office23@gmail.com</p>
        </div>
        </div>
      </div>

      <div className=' text-white mx-10 flex gap-10 flex-col '>
        <h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
        <div className='flex items-center'>
            <img className='w-[130px] h-[80px] rounded-lg' src="images/footerimage1.jpg" alt="" />
          <div className='mx-5'>
               <h1>Villa with amazing view</h1>
            <h1>$ 278.98</h1>
         </div>
        </div>
        <div className='flex items-centerpb-10'>
            <img className='w-[130px] h-[80px] rounded-lg' src="images/footerimage2.jpg" alt="" />
            <div className='mx-5'>
              <h1>Sea View Villa</h1>
            <h1>$ 789.23</h1>
            </div>
        </div>
      </div>
    </div>
  )
}
