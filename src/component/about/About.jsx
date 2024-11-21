import React, {useEffect} from 'react'

export default function About(props) {

    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out'
        });
      }, []);

  return (
<>
<div id='about' data-aos="zoom-in"  className='w-[90%] bg-transparent z-10 flex flex-col justify-center lg:flex-row m-auto mt-[8%]'>
      <div className='w-full'>
        <img data-aos="zoom-in"  src="images/about-image.jpg" className='w-full lg:w-[100%] lg:h-[600px] rounded-2xl' alt="" />
      </div>
      <div className='flex justify-center flex-col mx-5 mt-[3%]'>
        <h1 data-aos="zoom-in"  className={`${props.state === 'dark'? 'text-white':'text-red-600 '} mb-[6%] `}>WHO WE ARE</h1>
        <h1 data-aos="zoom-in"  className={`${props.state === 'dark'? 'text-white':'text-black'}  text-[40px] font-semibold leading-10 mb-[6%] `}>We help clients buy and sell houses since 1989</h1>
        <p data-aos="zoom-in"  className={`${props.state === 'dark'? 'text-white':'text-gray-600 '} mb-[6%] text-lg text-justify`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam eaque inventore voluptatum rem consectetur quae magni optio quis incidunt?</p>
        <button data-aos="zoom-in"  className='bg-red-600 text-white  hover:bg-black w-[120px] px-3 py-3 rounded-lg'>VIEW MORE</button>
      </div>
    </div>

    <div  className='w-full mt-[5%]'>
        <div className={`${props.state === 'dark'? 'bg-gray-800':' bg-red-100'} w-full lg:w-[95%] m-auto md:py-[5%]  flex  flex-col lg:flex-row justify-evenly items-start lg:items-center  px-[5%] rounded-tl-lg rounded-tr-lg`}>
            <div className='w-[30%] mt-10'>
                <h1 data-aos="zoom-in"  className={`${props.state === 'dark'?'text-white':'text-red-600'} `}>POPULAR AREAS</h1>
                <h1 data-aos="zoom-in"  className={`${props.state === 'dark'? 'text-white':''} text-[40px] font-semibold leading-10`}>Explore most popular areas</h1>
            </div>
            <div className='w-full mt-[5%] grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                <div data-aos="zoom-in"  className='h-[400px] w-full rounded-lg bg-cover bg-center mx-1 md:my-2 mt-[5%]' style={{backgroundImage: 'url(images/aboutimage2.jpg)'}}></div>
                <div data-aos="zoom-in"  className='h-[400px] w-full rounded-lg bg-cover bg-center mx-1 md:my-2 mt-[5%]' style={{backgroundImage: 'url(images/aboutimage3.jpg)'}}></div>
                <div data-aos="zoom-in"  className='h-[400px] w-full rounded-lg bg-cover bg-center mx-1 md:my-2 mt-[5%]' style={{backgroundImage: 'url(images/aboutimage4.jpg)'}}></div>
            </div>
        </div>

        <div className={`${props.state === 'dark'? 'bg-gray-800':' bg-red-100'} w-full lg:w-[95%] m-auto md:py-[5%]  flex  flex-col lg:flex-row justify-evenly items-start lg:items-center  px-[5%] rounded-bl-lg rounded-br-lg`}>
            <div className='w-[33%] flex justify-center items-center py-5'>
                <h1 data-aos="fade-up" className={`${props.state === 'dark'?'text-white':'text-black'}  text-7xl font-semibold inline px-[8%]`}>5K</h1>
                <h1 data-aos="fade-up" className={`${props.state === 'dark'? 'text-white':'text-gray-600'} text-lg inline `}>ACTIVE 
                    <br/>
                    LISTINGS
                </h1>
            </div>
            <div className='w-[33%] flex justify-center items-center py-5'>
                <h1 data-aos="fade-up"  className={`${props.state === 'dark'?'text-white':'text-black'}  text-7xl font-semibold inline px-[8%]`}>9K</h1>
                <h1 data-aos="fade-up"  className={`${props.state === 'dark'? 'text-white':'text-gray-600'} text-lg inline `}>SOLID 
                    <br/>
                    LISTINGS
                </h1>
            </div>
            <div className='w-[33%] flex justify-center items-center py-5'>
                <h1 data-aos="fade-up"  className={`${props.state === 'dark'?'text-white':'text-black'}  text-7xl font-semibold inline px-[8%]`}>6K</h1>
                <h1 data-aos="fade-up"  className={`${props.state === 'dark'? 'text-white':'text-gray-600'} text-lg inline `}>CLIENTS 
                <br/> 
                WE'VE SERVED
                </h1>
            </div>
        </div>
    </div>
</>
  )
}