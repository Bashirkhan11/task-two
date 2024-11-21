import React, {useEffect} from 'react'
import Testimonialsdata from './Testimonials.js';
import { FaStar } from "react-icons/fa";

export default function Testimonials(props) {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    })
  }, []);

  return (
    <>
        <div id='testimonials' className='mt-[5%] w-[95%] bg-trnasparent m-auto'>
      <div className='flex flex-col justify-center items-start gap-4 mx-10 mb-5'>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark' ?'text-white':'text-red-600'} `}>OUR CLIENTS</h1>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark' ?'text-white':'text-black'} text-4xl font-semibold`}>What are our clients saying about us</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mx-10'>
      {Testimonialsdata.map(value=>{
          return(
            <div data-aos='zoom-in' key={value.id} id='card' className={`${props.state === 'dark' ?' bg-gray-800':' bg-white hover:bg-red-100'} w-full h-[250px] lg:h-[300px] mt-[3%] rounded-xl`}>
            <div className=''>
                <div className='flex justify-start items-center'>
                   <div className="w-[70px] h-[70px] bg-red-100 mt-7 mx-3 rounded-[50%]">
                    <img src={value.image} alt="" />
                    </div> 
                    <div className='mx-4 mt-5'>
                    <h1 className={`${props.state === 'dark'?'text-white':''} text-xl font-semibold`}>{value.name}</h1>
                    <h1 className={`${props.state === 'dark'?'text-white':'text-gray-600'}`}>{value.title}</h1>
                    </div>
                </div>
                <p className={`${props.state === 'dark'? 'text-white':'text-gray-400'} px-5 py-3`}>The WP Estate team did an outstanding job helping me buy my first home. The high level of service and dedication</p>
                <div className='mx-3'>
                    <div className='flex'>
                        <FaStar className='text-[20px] text-yellow-500'/>
                        <FaStar className='text-[20px] text-yellow-500'/>
                        <FaStar className='text-[20px] text-yellow-500'/>
                        <FaStar className='text-[20px] text-yellow-500'/>
                        <FaStar className='text-[20px] text-yellow-500'/>
                    </div>
                </div>
            </div>
            </div>
          )
      })}
      </div>
     </div>
    </>
  )
}
