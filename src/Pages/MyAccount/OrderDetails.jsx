import React from "react";
import AccDisplay from "./AccDisplay";
import { BiSolidPackage } from "react-icons/bi";
import firecouple from "../../Assets/firecouple.png";
import { Link } from "react-router-dom";

function OrderDetails() {
  return (
    <div>
      <div className=" flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row xl:items-center xl:justify-center">
        <div>
          <AccDisplay />
        </div>
        <div className=" mt-14 p-3">
          <div className=" flex items-center shadow-xl justify-between border rounded-md sm:w-[700px] p-3">
            <div className=" grid gap-2">
              <div className=" flex gap-2">
                <small className=" font-bold">Order#:</small>
                <small className=" text-sky-500">72456269</small>
              </div>
              <div className=" flex gap-2">
                <small className=" font-bold">Placed on:</small>
                <small className=" text-sky-500">
                  {new Date().toLocaleDateString()}
                </small>
              </div>
            </div>
            <div className=" flex gap-2">
              <small className=" font-bold">Total:</small>
              <small className=" text-sky-500">Kes 2500</small>
            </div>
          </div>

          <div className=" border mt-5 rounded p-3">
            <div className=" flex items-center gap-3 border-b-2">
              <BiSolidPackage className=" w-[50px] h-[50px] text-orange-600" />
              <small className=" text-lg uppercase text-sky-500">
                Craft Package 1
              </small>
            </div>
            <div className=" flex items-center text-slate-700 mt-2 p-2 gap-2">
              <small>To be delivered on</small>
              <small className=" text-sky-500">
                {" "}
                Wednesday 25th april 2024
              </small>
            </div>
            <div className=" relative h-[70px]">
              <div className=" flex items-center ">
                <div
                  className=" aspect-square bg-red-500 w-[30px] h-[30px]"
                  title="Processing"
                />
                <div className=" h-[2px] w-[200px] bg-sky-700" />
                <div
                  className=" aspect-square bg-red-700 w-[30px] h-[30px]"
                  title="Shipping"
                />
                <div className=" h-[2px] w-[200px] bg-sky-700" />
                <div
                  className=" aspect-square bg-green-300 w-[30px] h-[30px]"
                  title="Shipped"
                />
                <div className=" h-[2px] w-[200px] bg-sky-700" />
                <div
                  className=" aspect-square bg-green-600 w-[30px] h-[30px]"
                  title="Delivered"
                />
              </div>
              <div className=" absolute bottom-3 bg-sky-500 text-white">
                <small className=" text-md">Processing</small>
              </div>
              <div className=" absolute bottom-3 right-0 bg-sky-500 text-white">
                <small className=" text-md">Delivered</small>
              </div>
            </div>
            <div className=" flex flex-col sm:flex-row sm:justify-between sm:p-3 items-center m-2 shadow-xl border p-2">
              <div className=" flex flex-col sm:flex-row items-center gap-3">
                <div className=" w-[100px] h-[100px] ">
                  <img
                    src={firecouple}
                    alt=""
                    className=" rounded-full w-full h-full"
                  />
                </div>
                <div>
                  <h4 className=" text-sky-500 font-bold text-center sm:text-left">
                    African dresses couple on a blah blah in a blah blah
                  </h4>
                </div>
              </div>

              <div className=" flex flex-col items-center border text-right">
                <div className=" flex gap-3 justify-end">
                  <small className=" font-bold">Quantity:</small>
                  <small className=" text-sky-500 text-lg">4</small>
                </div>
                <div className=" flex gap-3 items-center">
                  <small className=" font-bold">Total Price: </small>
                  <small className=" text-sky-500 text-lg">KES 14000</small>
                </div>
              </div>
            </div>
            <div className="m-5">
              <button className=" p-3 bg-orange-500 rounded-lg text-white hover:bg-orange-600">
                CheckOut
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-12 mt-5">
            <div className=" grid grid-cols-1 gap-6">
              <div className=" text-left p-3 flex flex-col space-y-2 border shadow-xl rounded-md">
                <small className=" font-bold">Shipping Address</small>
                <h4 className=" text-sky-500">I M Abu-Bakr</h4>
                <small className=" text-gray-400">
                  234 Badlands Avenue, Umma University, Kajiado
                </small>
                <small className=" text-gray-400">+254720831147</small>
                <Link
                  to="/EditAddress"
                  className=" hover:text-slate-200 border w-fit p-2 hover:bg-sky-700 "
                >
                  Edit
                </Link>
              </div>
              <div className=" text-left p-3 flex flex-col space-y-2 border shadow-xl rounded-md">
                <small className=" font-bold">Billing Address</small>
                <small className=" text-sky-500">I M Abu-Bakr</small>
                <small className=" text-gray-400">45** **** **** ****</small>
                <Link className=" hover:text-slate-200 border w-fit p-2 hover:bg-sky-700 ">
                  Edit
                </Link>
              </div>
            </div>
            <div className=" text-left p-3 flex flex-col space-y-6 border shadow-xl rounded-md">
              <small className=" font-bold">Total Summary</small>
              <div className=" flex justify-between">
                <small className=" capitalize">Subtotal</small>
                <small className=" font-medium uppercase">Kes 14000</small>
              </div>
              <div className="flex justify-between">
                <small className=" capitalize">Shipping Fee</small>
                <small className=" font-medium uppercase">Kes 250</small>
              </div>
              <div className=" flex justify-between">
                <small className=" capitalize">Total</small>
                <small className=" font-medium">KES 14250</small>
              </div>
              <div className=" text-gray-400 uppercase">
                <small>Paid on delivery</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
