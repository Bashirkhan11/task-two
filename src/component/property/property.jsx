import React, {useEffect} from 'react'
import { FaBath, FaBed, FaHome, FaHeart, FaPlus, FaShareAlt, FaVideo } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TbMapPinFilled } from "react-icons/tb";
import { IoCameraSharp } from "react-icons/io5";
import property from './propertydata';



export default function Property(props) {

    useEffect(()=>{
        AOS.init({
      duration: 1000,
      easing: 'ease-in-out'

        })
    }, []);

  return (
    <div className='mt-[5%] w-[95%] bg-transparent m-auto pt-10'>
      <div>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark'? 'text-white':'text-red-600'} `}>PROPERTIES</h1>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark'? 'text-white':'text-black'} text-4xl font-semibold`}>Explore the latest properties available</h1>
      </div>
        <div className='flex justify-center flex-wrap gap-8'>
        {property.map((value)=>{
                        return(
                            <div data-aos='zoom-in' key={value.id} className={`${props.state === 'dark'?'bg-gray-800':' bg-white'} w-full  lg:w-[300px] lg:h-[520px] rounded-lg mt-[5%]`}>
                        <div className='h-[250px] lg:w-[300px] lg:h-[250px] bg-center bg-cover relative rounded-lg px-2' style={{backgroundImage: `url(${value.image})`}}>
                            <div className='flex justify-between text-white'>
                                <p className='mt-3 px-3 py-1 rounded-2xl bg-red-600'>Featured</p>
                                <div className='mt-4'>
                                    <p className='inline mr-1 px-3 py-1 rounded-2xl bg-red-600'>Sales</p>
                                    <p className='inline ml-1 px-3 py-1 rounded-2xl bg-red-600'>active</p>
                                </div>
                            </div>
                            <div className='w-full absolute bottom-0 text-white flex justify-between'>
                                <div>
                                <TbMapPinFilled className='text-white inline mx-2' />{value.imagetext}
                                </div>
                                <div className='flex justify-evenly items-center mr-5'>
                                <FaVideo className='mx-2'/>
                                <IoCameraSharp />
                            </div>
                            </div>
                        </div>
            
                        <div>
                            <h1 className={`${props.state === 'dark'? 'text-white':'text-black'}  text-2xl font-semibold px-5`}>{value.title}</h1>
                            <h1 className={`${props.state === 'dark'?'text-white':'text-red-600 '} text-2xl font-bold my-3 px-5`}>{value.price}</h1>
                            <p className={`${props.state === 'dark'? 'text-white':''} px-5`}>{value.description}</p>
                            <div className='flex lg:justify-between px-3 pt-4'> 
                              <div className='flex items-center '>
                              <FaBath  className='text-[30px] text-red-400 inline pr-2'/><span className={`${props.state === 'dark'? 'text-white':''}`}>3</span>
                              </div>
                              <div className='flex items-center mx-4'>
                              <FaBed  className='text-[30px] text-red-400 pr-2'/><span className={`${props.state === 'dark'? 'text-white':''}`}>4</span>
                              </div>
                              <div className='flex items-center mx-5'>
                              <FaHome  className='text-[30px] text-red-400 pr-2'/><span className={`${props.state === 'dark'? 'text-white':''}`}>{value.icontext1}</span>
                              </div>
                            </div>
                            <hr/>
                            <div className='flex justify-evenly items-center mt-3'>
                                <div>
                                <IoMdContact className='text-red-400 text-[35px] inline px-2'/><span className={`${props.state === 'dark'? 'text-white':''}`}>{value.icontext2}</span>
                                </div>
                                <div className='flex justify-evenly items-center'>
                                    <div className='border-2 border-gray-200 p-2 mx-1 hover:bg-black'>
                                        <FaShareAlt className=' text-[20px]  text-red-400'/>
                                    </div>
                                 <div className='border-2 border-gray-200 p-2 mx-1 hover:bg-black'>
                                       <FaHeart className='text-[20px]  text-red-400'/>
                                 </div>
                                <div className='border-2 border-gray-200 p-2 mx-1 hover:bg-black'>
                                        <FaPlus className=' text-[20px]  text-red-400'/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
        })}
        </div>

        <div className='mt-[5%] w-full flex justify-center'>
            <button data-aos='zoom-in' className='bg-red-600 hover:bg-black m-auto text-white  px-10 py-5 rounded-lg'>LOAD MORE</button>
        </div>
    </div>
  )
}
