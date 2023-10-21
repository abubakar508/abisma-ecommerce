import React, { useState, useEffect } from 'react';
import photo1 from "../Assets/popularrr.png";
import photo3 from "../Assets/8.png";
import photo2 from '../Assets/popppp.png';
import photo4 from '../Assets/banner-girl-1.png'
import photo10 from '../Assets/2.png'
import photo5 from '../Assets/3.png'
import photo6 from '../Assets/6.png'
import photo7 from '../Assets/7.png'
import photo8 from '../Assets/8.png'
import photo9 from '../Assets/10.png'

export const Carousel = () => {
  const carousels = [
    {
      id: 1,
      photo: photo1,
    },
    {
      id: 2,
      photo: photo2,
    },
    {
      id: 3,
      photo: photo3,
    },
    {
      id: 4,
      photo: photo4,
    },
    {
      id: 5,
      photo: photo5,
    },
  ];
  
  const [currentcarouselIndex, setCurrentcarouselIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentcarouselIndex((prevIndex) => (prevIndex + 1) % carousels.length);
  };
  
  const handlePrev = () => {
    setCurrentcarouselIndex((prevIndex) => (prevIndex - 1 + carousels.length) % carousels.length);
  };
  
  const currentcarousel = carousels[currentcarouselIndex];

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, [currentcarouselIndex, carousels]);
  
  return (
    <div>
      <div className=" border p-5 relative w-full rounded">
      <div className=" relative">
        <div className=" relative">
          <div className=" sm:w-full sm:h-full w-full h-full">
            <img src={currentcarousel.photo} alt={currentcarousel.name} className={` rounded-md w-full h-[500px] sm:h-[600px] object-cover
             transition-transform duration-1000 ease-in-out`} />
            </div>
            <div className=" absolute bottom-0 left-0 bg-gradient-to-t from-black/70 pt-28 p-2 w-full  rounded-md
             sm:top-20 sm:pt-0 sm:h-fit sm:bg-sky-500/20 sm:w-[500px] sm:left-8">
                <div className=' pl-6 backdrop-blur-sm rounded-md sm:pl-0'>
            <p className=" text-lg uppercase font-medium text-white">Crafted Sole Exclusive</p>
            <small className=" text-slate-200 text-lg">Discover the latest must-haves in our eCommerce wonderland!
            Experience fashion that goes beyond the ordinary.</small>
            <div className=' flex items-center'>
                <div className=' w-[10px] h-[10px] bg-red-500' />
                <div  className=' h-[2px] w-[100px] bg-gradient-to-r from-red-500/100 to-green-600/100'/>
                <div className=' w-[10px] h-[10px] bg-green-600' />
                <div  className=' h-[2px] w-[100px] bg-sky-500 bg-gradient-to-r from-green-500/100 to-yellow-600/100'/>
                <div className=' w-[10px] h-[10px] bg-yellow-500' />
                <div  className=' h-[2px] w-[100px] bg-sky-500 bg-gradient-to-r from-yellow-500/100 to-pink-600/100'/> 
                <div className=' w-[10px] h-[10px] bg-pink-500' />
                <div  className=' h-[2px] w-[100px] bg-sky-500 bg-gradient-to-r from-pink-500/100 to-black/100 hidden sm:block'/>
                <div className=' w-[10px] h-[10px] bg-black hidden sm:block' />
                <div  className=' h-[2px] w-[100px] bg-sky-500 bg-gradient-to-r from-black/100 to-sky-500/100 hidden sm:block'/>
                <div className=' w-[10px] h-[10px] bg-sky-500 hidden sm:block' />
                <div  className=' h-[2px] w-[100px] bg-sky-500 bg-gradient-to-r from-sky-500/100 to-purple-600/100 hidden sm:block'/>
                <div className=' w-[10px] h-[10px] bg-purple-600 hidden sm:block' />
                </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" flex flex-col left-8 bottom-10 gap-2 absolute
      sm:top-20 sm:left-14 sm:flex-row">
        {carousels.map((carousel, index) => (
          <span id={carousels.id}
            key={carousel.id}
            className={`w-[10px] h-[40px] sm:w-[40px] sm:h-[10px] cursor-pointer ${currentcarouselIndex === index ? 'bg-teal-600' : ' bg-sky-500'}`}
            onClick={() => setCurrentcarouselIndex(index)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};
