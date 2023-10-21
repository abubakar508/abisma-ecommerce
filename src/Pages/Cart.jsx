import React, { useEffect, useState } from "react";
import {AiFillDelete, AiOutlineArrowLeft} from 'react-icons/ai'
import { Link } from "react-router-dom";
import firecouple from "../Assets/firecouple.png";
import { MdDelete, MdRefresh, MdUpdate } from "react-icons/md";
import teal from '../Assets/teal.png'
function Cart() {
  const [count, setCount] = useState(0);

  const AddCount = () => {
    setCount(count + 1);
  };
  const LessCount = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 25) {
        setCount(count + 1);
      }
    });
  });
  return (
    <div>
      <div className=" text-center m-4 items-center">
        <h1 className=" uppercase font-bold text-xl font-montserrat">Craft Shopping Cart</h1>
      </div>
      <div>
      <div className="  m-10">
        <div className=" flex flex-col sm:flex-row justify-between items-center border-none sm:border mx-11 rounded m-2">
      <div className=" m-5 flex gap-4">
        <div className=" w-[150px] h-[150px] bg-teal-700 rotate-6">
          <img src={firecouple} alt="" className=" w-full h-full -rotate-6" />
        </div>
        <div className=" flex gap-3 items-start justify-center text-left flex-col font-montserrat">
          
            <small className=" text-lg font-light">Lorem ipsum dolor sit amet cosnecture adipisiscing!</small>
            <small className=" capitalize font-montserrat">Women</small>
            <small className=" capitalize font-montserrat">On Sale/ Customized</small>
            <Link to='/CheckOut'><button className=" border bg-teal-600 font-montserrat text-zinc-200 p-2 rounded-md ">Checkout</button></Link>
        </div>
      </div>
      <div>
        <MdDelete className=" w-[40px] h-[40px] text-teal-700 hover:text-red-600"/>
      </div>
       <div>
        <select name="" id="" className="block w-[100px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
       </div>
      <div className=" relative h-[100px] w-[130px] items-center flex justify-center">
        <small className=" text-xl font-medium uppercase text-white z-30">Kes 2500</small>
        <img src={teal} alt="" className=" absolute top-4 w-[120px] hover:text-teal-700" />
      </div>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between items-center border-none sm:border mx-11 rounded m-2">
      <div className=" m-5 flex gap-4">
        <div className=" w-[150px] h-[150px] bg-teal-700 rotate-6">
          <img src={firecouple} alt="" className=" w-full h-full -rotate-6" />
        </div>
        <div className=" flex gap-3 items-start justify-center text-left flex-col font-montserrat">
          
            <small className=" text-lg font-light">Lorem ipsum dolor sit amet cosnecture adipisiscing!</small>
            <small className=" capitalize font-montserrat">Women</small>
            <small className=" capitalize font-montserrat">On Sale/ Customized</small>
            <Link to='/CheckOut'><button className=" border bg-teal-600 font-montserrat text-zinc-200 p-2 rounded-md ">Checkout</button></Link>
        </div>
      </div>
      <div>
        <MdDelete className=" w-[40px] h-[40px] text-teal-700 hover:text-red-600"/>
      </div>
       <div>
        <select name="" id="" className="block w-[100px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
       </div>
      <div className=" relative h-[100px] w-[130px] items-center flex justify-center">
        <small className=" text-xl font-medium uppercase text-white z-30">Kes 2500</small>
        <img src={teal} alt="" className=" absolute top-4 w-[120px] hover:text-teal-700" />
      </div>
      </div>

      <div className=" flex flex-col sm:flex-row justify-between items-center border-none sm:border mx-11 rounded m-2">
      <div className=" m-5 flex gap-4">
        <div className=" w-[150px] h-[150px] bg-teal-700 rotate-6">
          <img src={firecouple} alt="" className=" w-full h-full -rotate-6" />
        </div>
        <div className=" flex gap-3 items-start justify-center text-left flex-col font-montserrat">
          
            <small className=" text-lg font-light">Lorem ipsum dolor sit amet cosnecture adipisiscing!</small>
            <small className=" capitalize font-montserrat">Women</small>
            <small className=" capitalize font-montserrat">On Sale/ Customized</small>
            <Link to='/CheckOut'><button className=" border bg-teal-600 font-montserrat text-zinc-200 p-2 rounded-md ">Checkout</button></Link>
        </div>
      </div>
      <div>
        <MdDelete className=" w-[40px] h-[40px] text-teal-700 hover:text-red-600"/>
      </div>
       <div>
        <select name="" id="" className="block w-[100px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
       </div>
      <div className=" relative h-[100px] w-[130px] items-center flex justify-center">
        <small className=" text-xl font-medium uppercase text-white z-30">Kes 2500</small>
        <img src={teal} alt="" className=" absolute top-4 w-[120px] hover:text-teal-700" />
      </div>
      </div>
      </div>



    <div className=' flex justify-between m-10 shadow-lg rounded-md p-2 bg-slate-300'>
               <Link to='/'> <div className=' flex items-center hover:text-teal-600 font-montserrat cursor-pointerhover:transition-all hover:transform hover:translate-x-1  '>
                    <AiOutlineArrowLeft/>
                    Continue SHopping Craft
                </div> </Link>
                <div className=" flex gap-3">
                <div className=' font-montserrat flex items-center hover:text-red-500 hover:transition-all hover:transform hover:translate-x-1 cursor-pointer'>
                    <MdRefresh/>
                    Update Cart
                </div>
                <div className=' font-montserrat flex items-center hover:text-red-500 hover:transition-all hover:transform hover:translate-x-1 cursor-pointer'>
                    <AiFillDelete/>
                    Clear Cart
                </div>
                </div>
               </div>
               </div>
    </div>
  );
}

export default Cart;
