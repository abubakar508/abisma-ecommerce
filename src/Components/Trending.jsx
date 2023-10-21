import React, { useState } from "react";
import trending1 from "../Assets/popularrr.png";
import trending3 from "../Assets/8.png";
import trending2 from "../Assets/popppp.png";
import trending4 from "../Assets/banner-girl-1.png";
import trending10 from "../Assets/2.png";
import trending5 from "../Assets/3.png";
import trending6 from "../Assets/6.png";
import trending7 from "../Assets/7.png";
import trending8 from "../Assets/8.png";
import trending9 from "../Assets/10.png";
import { Link } from "react-router-dom";
import { HiSquare2Stack } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

function Trending() {
  const TrendingDatas = [
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending1,
    },
    {
      title: "Shirt are worn inside out, quite good",
      price: "KES 3500",
      color: "Red and Blue",
      image: trending2,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending3,
    },
    {
      title: "Crafted Sole offer on the way",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending4,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending5,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending6,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending7,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending8,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending9,
    },
    {
      title: "Laughing enthusiastic lady",
      price: "KES 2000",
      color: "Brown and Pink",
      image: trending10,
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    Array(TrendingDatas.length).fill(false)
  );

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
    setModal(true);
  };
  const noModal = () => {
    setModal(false);
  };
  const [modal1, setModal1] = useState(false);
  const modal1Open = () => {
    setModal1(true);
  };
  const noModal1 = () => {
    setModal1(false);
  };
  return (
    <div>
        <div className=" relative">
      <div className=" font-montserrat flex justify-center items-center text-center flex-col rounded-xl via-white/70">
        <div className=" p-2 m-3">
          <h1 className=" text-2xl font-montserrat font-semibold text-sky-500 ">
            Trending Items
          </h1>
          <div className=" md:w-[600px]">
            <small className=" font-medium font-montserrat text-xs text-black">
              Discover the latest must-haves in our eCommerce wonderland! Dive
              into a curated selection of hot, top-rated items, meticulously
              chosen by our experts to bring you unparalleled style, quality,
              and innovation. Elevate your shopping experience with these
              coveted treasures, designed to cater to your unique tastes and
              preferences. Don't miss out on what's making waves in the world of
              fashion and lifestyle
            </small>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-12 mt-4 md:flex md:flex-row md:flex-wrap md:gap-10 justify-center items-center font-poppins">
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
    </div>
  );
}

export default Trending;
