import React from "react";
import Form from "./Form";

export default function Home(props) {

  return (
    <>
      <div id="home" className={`${props.state === 'dark'? 'bg-black':' bg-white'} mt-[180px]`}>
        <section
          className="w-[95%] h-[600px] bg-cover bg-center rounded-xl flex justify-center items-start flex-col  m-auto  lg:px-28 px-10 gap-7 z-20"
          style={{ backgroundImage: "url(images/home.webp)" }}
        >
          <h1 data-aos="zoom-in" className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px]">
            Find your next Home in Las Vegas
          </h1>
          <p data-aos="zoom-in" className="text-white text-xl lg:pr-[500px] pr-0">
            "Through our proprietary platform, WpResidence is changing how
            agents and clients navigate the process of finding or selling a
            home."
          </p>
        </section>
      </div>

      <Form state ={props.state}/>
    </>
  );
}
