import React from "react";
import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";


function AccDisplay() {
  return (
    <div>
      <div className=" flex flex-col sm:flex-row sm:items-start sm:m-11 m-2 items-center space-y-3 gap-2">
        <div className=" sm:w-[250px] gap-2 w-full flex sm:flex-col">
          <div className=" flex flex-col border rounded-xl space-y-3 shadow-xl p-1 w-full my-2">
            <h5 className=" font-semibold">
              Hello{" "}
              <span className=" font-bold text-sky-500">I M Abu-Bakr</span>
            </h5>
            <div className=" flex gap-3">
              <small>{new Date().toLocaleDateString()}</small>
              <small className=" text-sky-700">
                {new Date().toLocaleTimeString()}
              </small>
            </div>
            <Link to='/ManageAcc' className=" font-light text-sky-700 hover:text-indigo-600">
              Manage My Account
            </Link>
            <Link to='/MyProfile' className=" font-light text-sky-700 hover:text-indigo-600">
              My Profile
            </Link>
            <Link to='/AddressBook' className=" font-light text-sky-700 hover:text-indigo-600">
              Address Book
            </Link>
            <Link to='/MyOrders' className=" font-light text-sky-700 hover:text-indigo-600">
              My Orders
            </Link>
            <Link to='/PaymentOptions' className=" font-light text-sky-700 hover:text-indigo-600">
              My Payment Options
            </Link>
            <Link to='/Returns' className=" font-light text-sky-700 hover:text-indigo-600">
              My Returns & Cancellations
            </Link>
          </div>
          <div className=" border shadow-xl w-full rounded-xl items-center flex flex-col justify-center text-center my-2">
           <Link to='/MyOrders'> <div className="  m-3 items-center flex flex-col p-1">
              <GiShoppingCart className=" border w-[40px] h-[40px] text-sky-200 bg-teal-600 rounded-full p-1" />
              <h1 className=" font-bold text-xl text-teal-700">8</h1>
              <small className=" uppercase font-semibold">Orders Placed</small>
            </div>
            </Link>
            <div className="  m-3 items-center flex flex-col p-1">
              <AiOutlineClose className=" border w-[40px] h-[40px] text-sky-200 bg-teal-600 rounded-full p-1" />
              <h1 className=" font-bold text-xl text-teal-700">0</h1>
              <small className=" uppercase font-semibold">
                Cancelled Orders
              </small>
            </div>
           <Link to='/Wishlist'> <div className="  m-3 items-center flex flex-col p-1">
              <AiOutlineHeart className=" border w-[40px] h-[40px] text-sky-200 bg-teal-600 rounded-full p-1" />
              <h1 className=" font-bold text-xl text-teal-700">13</h1>
              <small className=" uppercase font-semibold">Wishlist</small>
            </div>
            </Link>
          </div>
        </div>
        
      </div>
    
    </div>
  );
}

export default AccDisplay;
