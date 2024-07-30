import React from 'react';
import Slider from "react-slick";
import pic from "../Images/chatbot.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2900,
  };

  return (
    <div className='w-[80%] relative mt-20 flex mx-auto justify-center pb-5'>
      <div className='w-full h-full mx-auto'>
        <h1 className='mt-10 bg-gradient-to-b uppercase from-gray-700 to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-snug text-transparent dark:from-white dark:to-slate-900/10'>Services</h1>
        <div className='w-[60%] mx-auto h-full mt-10'>
          <Slider {...settings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className='w-full mx-auto border border-gray-600 rounded-xl p-4'>
                <div className='grid grid-cols-2'>
                  <div className='flex justify-center items-center'>
                    <img src={pic} alt="chatbot" className='w-[300px]' />
                  </div>
                  <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl font-semibold text-white'>AI CHAT BOTS</h1>
                    <p className='text-white text-xl mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reprehenderit in asperiores repellendus tempore cum doloribus modi nulla, debitis alias possimus odio unde culpa eligendi ducimus architecto corporis quae saepe?
                    </p>
                    <button className='px-4 py-2 text-white mt-4 border w-[150px] border-white rounded-2xl hover:bg-white hover:text-black font-semibold'>TRY NOW</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
