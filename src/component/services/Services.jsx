import React, {useEffect} from 'react'
import { FaHome, FaCameraRetro, FaSearch } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { BiSolidCalendarPlus } from "react-icons/bi";
import { MdRealEstateAgent } from "react-icons/md";
import Servicesdata from './servicesdata.js'


export default function Services(props) {

  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    })
  }, []);

  return (
    <div className={`${props.state === 'dark'?'bg-gray-800':'bg-red-100'} mt-[5%] w-[95%] rounded-2xl m-auto pt-10 px-[5%]  flex flex-col justify-start`}>
      <div className='mt-[2%] mb-[5%] ml-[15%]'>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark'? 'text-white':'text-red-600'} `}>OUR SERVICES</h1>
        <h1 data-aos='zoom-in' className={`${props.state ==='dark' ? 'text-white':'text-black'} text-4xl font-semibold`}>Top real estate<br/> services available</h1>
      </div>

      <div className='flex flex-wrap  gap-4 justify-center  '>
      {Servicesdata.map(value=>{
          return(
            <div data-aos='zoom-in' key={value.id} id='card' className={`${props.state === 'dark' ?' hover:bg-black bg-black':' hover:bg-red-300 bg-white'} h-[300px] lg:w-[280px] shadow-[0_6px_0px_-1px_rgba(200,0,0,0.9)] rounded-lg   mb-[5%]`}>
            <div className='mx-5 flex flex-col items-start'>
                <div className='w-[100px] h-[100px] flex justify-center items-center bg-red-100  mt-5 rounded-[50%]'>
                   <div className="text-[40px] text-red-600">{
                      value.id === 1 ?
                      <MdRealEstateAgent />
                      : value.id === 2 ?
                      <FaHome />
                      : value.id === 3 ?
                      <GoLaw />
                      : value.id === 4 ?
                      <FaSearch />
                      : value.id === 5 ?
                      <BiSolidCalendarPlus />
                      : <FaCameraRetro />
                    }
                    </div> 
                </div>
                <h1 className={`${props.state === 'dark' ?'text-white':''} text-2xl font-semibold mt-4`}>{value.title}</h1>
                <p className={`${props.state === 'dark'?'text-white':'text-gray-600'} text-lg w-[250px]  mt-4`}>{value.description}</p>
                <p className={`${props.state === 'dark' ?'text-white border-white':'text-red-600 border-red-600'} inline font-semibold mt-4 border-b-2 `}>READ MORE</p>
            </div>
            </div>
          )
      })}
      </div>
     </div>
  )
}
