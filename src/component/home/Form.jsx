import React from 'react'

export default function Form(props) {
  return (
    <>
      <div data-aos="zoom-in" className="bg-transparent z-10">
        <div className={`${props.state === 'dark'? 'bg-gray-800': ' bg-white'} lg:w-[70%] w-full m-auto flex lg:flex-row justify-center items-center flex-col gap-6 p-8 rounded-xl -mt-14`}>
            <div className="w-full">
                <h1 className={`text-black font-semibold ${props.state === 'dark'? 'text-white': ''}`}>LOCATION</h1>
                <input type="text" placeholder="Enter an address, state, city or pincode" className="bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]" />
            </div>

            <div className="w-full">
                <h1 className={`text-black font-semibold ${props.state === 'dark'? 'text-white': ''}`}>TYPE</h1>
                <select id="selectOption" name="selectOption" className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
                    <option value disabled>Select Property</option>
                    <option value="option1">Rentals</option>
                    <option value="option2">Sales</option>
                    <option value="option3">Commercial</option>
                </select>
            </div>
            <div className="w-full">
                <h1 className={`text-black font-semibold ${props.state === 'dark'? 'text-white': ''}`}>CATEGORY</h1>
                <select id="selectOption" name="selectOption" className="bg-white p-2 border-b-[1px] w-full mt-2 border-[#c9c7c1] text-gray-500 text-md">
                    <option value disabled>Property Category</option>
                    <option value="option1">Apartment</option>
                    <option value="option2">Duplex</option>
                    <option value="option3">Condos</option>
                    <option value="option3">Houses</option>
                    <option value="option3">Villas</option>
                </select>
                </div>
            <div className="w-full">
                <button className="bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale-105 transition-transform duration-300">SUBMIT</button>
            </div>
            </div>
      </div>
    </>
  )
}
