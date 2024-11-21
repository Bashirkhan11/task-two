import React, {useEffect} from 'react'

export default function Contact(props) {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    })
  },[]);
  return (
    <div id='contact' className={`${props.state === 'dark'?'bg-gray-800':'bg-red-100'} mt-[5%] lg:w-[95%] m-auto rounded-xl pt-10 lg:flex`}>
      <div  data-aos='zoom-in' className={`${props.state === 'dark'?'bg-black':'bg-white'} mx-[5%] flex flex-col rounded-xl lg:mb-[5%] lg:w-[80%]`}>
        <h1 className={`${props.state === 'dark'?'text-white':''} text-2xl font-semibold mx-8 mt-5`}>Send us a message today</h1>
        <input className='border-2 mt-5 px-2 py-3 rounded-xl mx-8' type="text" placeholder='Enter your full name here'/>
        <input className='border-2 mt-5 px-2 py-3 rounded-xl mx-8' type="text" placeholder='Enter your email'/>
        <input className='border-2 mt-5 px-2 py-3 rounded-xl mx-8' type="number" placeholder='Enter your mobile number'/>
        <textarea className='border-2 mt-5 px-2 rounded-xl mx-8 h-[150px]' type="textarea" placeholder='Enter your message here...'/>
        <button className='bg-red-600 hover:bg-black font-semibold mb-10 py-3 mx-10 mt-5 text-white rounded-lg'>SEND EMAIL</button>
      </div>

      <div className='mt-[10%] mx-10'>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark'?'text-white':'text-red-600'} mb-3 lg:mb-[5%]`}>REACH US</h1>
        <h1 data-aos='zoom-in' className={`${props.state === 'dark'?'text-white':''} text-4xl font-semibold mb-5 lg:mb-[5%]`}>Get in touch with us today and our team will assist you</h1>
        <p data-aos='zoom-in' className={`${props.state === 'dark'?'text-white':'text-gray-400'} mb-5 lg:mb-[5%]`}>Our experts and developers would love to contribute their expertise and insights and help you today. Contact us to help you plan your next transaction, either buying or selling a home.</p>
        <button className='bg-red-600 px-5 py-3 rounded-lg mb-[15%] text-white font-semibold hover:bg-black'>CONTACT US</button>
      </div>
    </div>
  )
}
