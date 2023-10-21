import React, { useEffect, useState } from 'react';
import trending1 from "../Assets/popularrr.png";
import trending3 from "../Assets/8.png";
import trending2 from '../Assets/popppp.png';
import trending4 from '../Assets/banner-girl-1.png'
import trending10 from '../Assets/2.png'
import trending5 from '../Assets/3.png'
import trending6 from '../Assets/6.png'
import trending7 from '../Assets/7.png'
import trending8 from '../Assets/8.png'
import trending9 from '../Assets/10.png'
import blue from '../Assets/blue-splash.png'
import purple from '../Assets/purplebest.png'
import heels from'../Assets/heels.jpeg'
import suit from '../Assets/suitman.png'
import green from '../Assets/green-splash.png'
import pink from '../Assets/pink-splash.png'
import {  AiFillCaretLeft, AiFillCaretRight, AiOutlineShoppingCart } from 'react-icons/ai';
 import { GiSelfLove, Gi3DHammer, GiTruck } from 'react-icons/gi';
 import { SiTrustpilot, Si4Chan } from 'react-icons/si'; 
 import {IoIosBrush} from "react-icons/io";
import { Link } from 'react-router-dom';

function Slickcarousel() {
     const SlickData = [
        {
            id: 1,
            photo: trending1,
            text: 'White shirt & pink trousers. A beautiful lady very beauiful. Like no other.'
        },
        {
            id: 2,
            photo: trending2,
            text: 'Long Sleeveed shirt with checked marks by crafted sole'
        },
        {
            id: 3,
            photo: trending3,
            text: 'Lorem ipsum dolor sit amet hakuna matata'
        },
        {
            id: 4,
            photo: trending4,
            text: 'Lorem ipsum dolor sit abubakar ismail blah blh blah'
        },
        {
            id: 5,
            photo: trending5,
            text: 'Lorem ipsum dolor sit abd gruesome and infidelity. All null and void'
        },
        {
            id: 6,
            photo: trending6,
            text: 'Lorem ipsum dolor sit amet. Lorem ipdum dolro sit amet.'
        },
     ]

     const [currentSlickIndex, setCurrentSlickIndex] = useState(0);
     const handleNext = () => {
        setCurrentSlickIndex((prevIndex) => (prevIndex + 1) % SlickData.length);
     };
     const handlePrev = () => {
        setCurrentSlickIndex((prevIndex) => (prevIndex - 1 + SlickData.length) % SlickData.length);
     };

     const currentSlick = SlickData[currentSlickIndex];
     useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
     }, [currentSlickIndex, SlickData])
  return (
    <div>
        <div className=' items-center justify-center flex flex-col'>
            <div className=' flex flex-col text-center justify-center items-center'>
                <div className=' rounded-xl p-3 mt-3'>
                <h1 className=' text-3xl text-gray-700 uppercase font-montserrat font-medium'>Our Special offers</h1>
                <small className=' font-montserrat font-medium text-indigo-600'>Won't you haste for this purchase? <br/> Well, another person will purchase.</small>
                </div>
            </div>
        <div className=' m-5 justify-center flex flex-col sm:flex-row relative items-center sm:items-stretch'>
            <div className=' flex flex-col sm:flex-row gap-2'>
                <div className=' h-[600px] sm:w-[500px] sm:h-[500px] relative m-2'>
                    <img src={currentSlick.photo} alt={currentSlick.text} className=' border-[5px] border-teal-600 rounded-xl w-full h-full object-cover' />
                    <div className=' absolute top-64 w-full flex justify-between'>
                        <AiFillCaretLeft className=' w-[50px] h-[50px] text-teal-600' onClick={handlePrev} />
                        <AiFillCaretRight className=' w-[50px] h-[50px] text-teal-600' onClick={handleNext} />
                    </div>
                    <div className=" flex flex-row left-8 bottom-10 gap-2 absolute z-50
      sm:bottom-3 sm:left-10 sm:flex-row">
        {SlickData.map((SlickDatas, index) => (
          <span id={SlickData.id}
            key={SlickDatas.id}
            className={`w-[40px] h-[10px] cursor-pointer ${currentSlickIndex === index ? 'bg-teal-600 transition-all animate-bounce delay-100' : ' bg-sky-500'}`}
            onClick={() => setCurrentSlickIndex(index)}
          />
        ))}
      </div>
                </div>
                <div className=' flex flex-row py-3 bg-teal-600 rounded-xl m-2 sm:w-[70px] sm:flex-col justify-between items-center p-2'>
                <AiOutlineShoppingCart className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/>
                  <GiSelfLove className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/>
                  <SiTrustpilot className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/>
                  <Link to='/ShirtModel'><IoIosBrush className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/></Link>
                  <Si4Chan className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/>
                  <Gi3DHammer className=' hover:text-slate-300 w-[25px] h-[25px] text-white'/>
                </div>
            </div>
            <div className='pl-2 relative   w-[300px] border m-2 p-2 flex flex-col gap-5 bg-teal-600 rounded-xl items-center'>
                <div className=' h-[100px] border  rounded-md p-1 relative'>
                <h1 className=' font-light text-slate-100'>{currentSlick.text}</h1>
                </div>
               
                <div>
                <div className=" flex flex-row left-8 bottom-10 gap-2
      sm:bottom-3 sm:left-10 sm:flex-row">
        {SlickData.map((SlickDatas, index) => (
          <span id={SlickData.id}
            key={SlickDatas.id}
            className={`w-[40px] h-[10px] cursor-pointer ${currentSlickIndex === index ? 'bg-sky-500 transition-all animate-bounce delay-100' : ' bg-yellow-500'}`}
            onClick={() => setCurrentSlickIndex(index)}
          />
        ))}
      </div>
                </div>
                
                <div className=' flex justify-center'>
                <button className=' bg-sky-500 p-1 text-slate-200 font-light w-[200px]
                lg:p-3  rounded-md'>Browse Products</button>
                </div>
                <div className=' flex gap-2 items-center border rounded-md Z-10'>
                    <div className=' z-10'>
                    <GiTruck className=' text-rose-500 w-[40px] h-[40px]' />
                    </div>
                    <div className=' z-10'>
                    <h1 className=' text-slate-100 text-lg'>Free Shipping</h1>
                    <small className=' text-slate-100 '>
Free shipping on all Kenyan orders  above KES 20000</small>
</div>
                </div>
               
               
            </div>
        </div>
        </div>
    </div>
  )
}

export default Slickcarousel