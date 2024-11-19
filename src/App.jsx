import React, {useEffect} from 'react'
import Navbar from "./component/Navbar/Navbar"
import Home from './component/home/Home'
import About from './component/about/About'
import Property from './component/property/property'
import Services from './component/services/Services.jsx'
import Testimonials from './component/testimonials/Testimonials.jsx'
import Contact from './component/contact/Contact.jsx'
import Footer from './component/footer/Footer.jsx'

import { FaSun, FaArrowUp, FaMoon  } from "react-icons/fa";
import { useState } from "react"

function App() {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
  }, []);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black', color = 'white';
    }else{
      setMode('light')
      document.body.style.backgroundColor = ''
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    {/* navbar commponent */}
    <Navbar state={mode}/>

    {/* home commponent */}
    <Home state={mode}/>

    {/* about commponent */}
    <About state={mode}/>

    {/* property commponent */}
    <Property state={mode}/>

    {/* services commponent */}
    <Services state={mode}/>

    {/* testimonials commponent */}
    <Testimonials state={mode}/>

    {/* contact commponent */}
    <Contact state={mode}/>

    {/* footer commponent */}
    <Footer state={mode}/>

    <div style={{zIndex: '1000'}} className="w-[60px] h-[60px] fixed right-[2%]  bottom-[60%] text-[25px] bg-orange-500 rounded-[50%] flex justify-center items-center cursor-pointer">
    {/* loght & dark mode button */}  
   {
     mode === 'light'?
     <FaMoon onClick={toggleMode} />
     :
     <FaSun onClick={toggleMode} />
   }
    </div>

    <div style={{zIndex: '1000'}} className="w-[60px] h-[60px] fixed right-[10%] bottom-[10%] text-[25px] bg-red-600 hover:bg-black text-white rounded-[50%] flex justify-center items-center cursor-pointer">
    {/* scroll up  button */}
    <FaArrowUp onClick={scrollToTop}/>
    </div>

    </>
  )
}

export default App
