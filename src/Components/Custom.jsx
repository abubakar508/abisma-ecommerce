import React, { useState } from 'react';
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
import { Link } from 'react-router-dom';
import { HiSquare2Stack } from 'react-icons/hi2';
import { AiOutlineClose } from 'react-icons/ai';

function Custom() {
    const TrendingDatas = [
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending1,
        },
        {
            title: 'Shirt are worn inside out, quite good',
            price: 'KES 3500',
            color: 'Red and Blue',
            image: trending2,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending3,
        },
        {
            title: 'Crafted Sole offer on the way',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending4,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending5,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending6,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending7,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending8,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending9,
        },
        {
            title: 'Laughing enthusiastic lady',
            price: 'KES 2000',
            color: 'Brown and Pink',
            image: trending10,
        },
    ];

    const [hoverStates, setHoverStates] = useState(Array(TrendingDatas.length).fill(false));

    const handleMouseEnter = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = true;
        setHoverStates(newHoverStates);
    };

    const handleMouseLeave = (index) => {
        const newHoverStates = [...hoverStates];
        newHoverStates[index] = false;
        setHoverStates(newHoverStates);
    };
    const [modal, setModal] = useState(false);
    const modalOpen = () => {
        setModal(true)
    };
    const noModal = () => {
        setModal(false)
    };
    const [modal1, setModal1] = useState(false);
    const modal1Open = () => {
      setModal1(true);
    };
    const noModal1 = () => {
      setModal1(false);
    };
  return (
    <div className=' sm:m-20 md:m-20 lg:m-20 m-0 '>
        <div>
            <div className='flex justify-center gap-2 mt-4 m-1 items-center'>
                <button className=' bg-sky-500 p-2 rounded-lg text-white font-montserrat text-sm hover:bg-sky-600 '>Self Customize</button>
                <button className=' bg-sky-500 p-2 rounded-lg text-white font-montserrat text-sm hover:bg-sky-600 '>New Arrivals</button>
                <button className=' bg-sky-500 p-2 rounded-lg text-white font-montserrat text-sm hover:bg-sky-600 '>Adult Clothes</button>
                <button className=' bg-sky-500 p-2 rounded-lg text-white font-montserrat text-sm hover:bg-sky-600 '>Kids Fashion</button>
            </div>
            <div className=' relative m-0 mt-4 
             lg:flex lg:flex-row lg:justify-center lg:mt-20
            '>
                <div className=' absolute md:relative lg:w-[400px]  bottom-0 z-20 items-center text-center
                 flex flex-col sm:relative sm:mt-8 sm:mb-8  lg:items-center lg:justify-center lg:mr-4
                  '>
                    <h1 className=' font-montserrat text-3xl text-sky-500 font-bold'>Lorem ipsum dolor sit amet</h1>
                    <small className=' text-slate-200 font-montserrat
                     sm:text-slate-400 md:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at quis suscipit perferendis! Odio perferendis eius, reiciendis molestiae minima aliquam autem unde quas aspernatur, fuga incidunt rem quisquam odit est.</small>
                    <div className=' relative hidden sm:hidden md:hidden
                    lg:hidden'>
                        <img src={blue} alt="" className=' w-[300px]' />
                    </div>
                </div>
                
                <div className=' sm:grid sm:grid-cols-2 sm:gap-5 md:grid md:grid-cols-3'>
                    <div className=' relative'>
                    <img src={purple} alt="" className=' w-full rounded-3xl sm:w-[400px] md:w-[300px] md:h-[500px]' />
                    </div>
                    <img src={suit} alt="" className=' hidden sm:block sm:w-[400px] sm:rounded-3xl md:w-[300px] md:h-[300px] md:mt-32' />
                    <img src={heels} alt="" className=' hidden md:block md:w-[300px] md:h-[300px] rounded-3xl md:mt-4' />
                </div>
            </div>
        </div>
        <div className=' flex flex-col justify-center text-center mt-4 mb-4 border-b-[8px] pb-4 border-sky-500
          rounded-xl'>
            <h1 className=' text-sky-500 font-montserrat font-bold text-3xl'>Crafted Products</h1>
            <small className=' text-slate-800 font-montserrat font-medium'>Select from our crafted products</small>
        </div>
        <div className=' flex flex-col gap-12 mt-4 md:flex md:flex-row md:flex-wrap md:gap-10 justify-center items-center font-poppins'>
        {TrendingDatas.map((product, index) => (
          <div
            className=" w-56"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Link to="/ProductDetail">
              {" "}
              <div className="w-56 p-1 relative bg-gradient-to-t from-white/90 via-teal-600/70 rounded-lg">
                <img
                  src={product.image}
                  alt=""
                  className="relative rounded-lg w-80 h-64 object-cover"
                />
                {hoverStates[index] && (
                  <div className="absolute top-[120px] items-center justify-center flex p-2">
                    Will input Data later!
                  </div>
                )}
                <div className="absolute bottom-2 right-4">
                  <h3 className="font-montserrat font-medium text-lg text-black">
                    {product.price}
                  </h3>
                </div>
              </div>
            </Link>
            <div className="ml-2 flex flex-col mt-1">
              <small className="font-light font-montserrat text-sm text-slate-500">
                {product.title}
              </small>
              <span className="font-montserrat font-medium rounded-lg text-slate-400">
                {product.color}
              </span>
            </div>
            <div className="flex items-center justify-between mt-2 w-full">
              <button
                className="rounded-lg bg-sky-500 flex text-slate-200 p-2
                             hover:bg-sky-400 hover:text-slate-100"
               
              >
                Quick View
              </button>

              <button
                className="bg-sky-500 rounded-lg text-slate-200 p-2
                                     font-montserrat font-medium"
                                     onClick={modalOpen}
              >
                Add to Bag
              </button>
            </div>
          </div>
        ))}
            </div>
            <div className={` h-screen w-screen fixed top-0 z-40 bg-black/50  items-center justify-center flex
        ${ modal ? 'translate-y-0' : '-translate-y-full'} ${ setModal ? 'delay-200' : 'delay-0' } transition-transform duration-1000 ease-in-out`}
        onMouseEnter={modal1Open} onMouseLeave={noModal1}
       >
            <div className=" relative w-screen h-screen flex items-center justify-center">
            {modal1 && (
                <div onClick={noModal}className=" cursor-pointer">
                    <AiOutlineClose className=" text-white absolute top-10 left-10 w-[60px] h-[60px] bg-teal-600 rounded-full p-1
                      hover:bg-white hover:text-black hover:transition-all hover:ease-in-out hover:transform  hover:delay-75"/>
                </div>
                )}
          <div className={`grid grid-cols-2 w-[600px] h-[350px] rounded-md bg-teal-600 m-1 sm:m-0
          ${ setModal ? 'delay-400' : 'delay-0' }`}  >
            <div className=" grid">
                
              <div>
                <span className=" flex items-center gap-2 text-white"><HiSquare2Stack className=" w-[30px] h-[30px] rotate-6 text-sky-500" /> Item is added succesfully!</span>
              </div>
              <div className=" items-center flex justify-center">
              <div className=" w-[150px] h-[150px] shadow-xl shadow-gray-700 bg-gray-400">
                <img src={trending1} alt="" className=" w-[150px] h-[150px] object-cover rotate-6 hover:rotate-0" />
              </div>
              </div>
              <div className=" items-center text-center justify-center flex flex-col drop-shadow-lg">
                <small className=" text-white text-lg font-light">Shirt are worn inside out, quite good</small>
                <span className=" text-white text-lg font-light">
                  Quantity: <small>1</small>
                </span>
              </div>
              <div className=" items-center text-center justify-around flex">
                <span className=" text-xl text-white font-bold">KES 2500</span>
                
              </div>
            </div>
            <div className=" grid items-center justify-center">
                <span className=" text-white">1 item(s) in your cart</span>
                <Link to='/'><button className=" p-2 shadow-xl shadow-gray-700 rounded hover:bg-slate-200 my-2 hover:text-black bg-slate-100 text-teal-600" onClick={noModal}>Continue Shopping Craft</button></Link>
                <Link to='/Cart'><button className=" p-2 shadow-xl shadow-gray-700 rounded hover:bg-slate-200 my-2 hover:text-black bg-slate-100 text-teal-600">View Cart</button></Link>
                <Link to='/CheckOut'><button className=" p-2 shadow-xl shadow-gray-700 rounded hover:bg-slate-200 my-2 hover:text-black bg-sky-500 text-white
                 hover:transition-all hover:ease-in-out hover:transform hover:delay-100" onClick={noModal}>Proceed to Checkout</button></Link>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Custom