import React from "react";
import AccDisplay from "./AccDisplay";
import { Link } from "react-router-dom";
import firecouple from "../../Assets/firecouple.png";

function MyOrders() {
  return (
    <div>
      <div className=" flex flex-col sm:flex-row xl:justify-center">
        <div>
          <AccDisplay />
        </div>
        <div className=" mt-14">
            <div className=" m-5 p-3 flex flex-row gap-6 items-center">
                <label htmlFor="" className=" uppercase font-medium text-sky-500">Show:</label>
                <select name="" id="" className=" border p-3">
                <option value="">All Orders</option>
                    <option value="">Last 5 orders</option>
                    <option value="">Last 15 orders</option>
                    <option value="">Last 6 Months</option>
                    <option value="">Orders placed in 2024</option>
                </select>
            </div>
          <div>
            <section className=" m-4 overflow-y-scroll scroll-m-2 overf h-[400px] sm:w-[400px]">
              <div className=" text-center">
                <h1 className="  uppercase font-bold">All craft Orders</h1>
              </div>
              <div className=" my-3 sm:flex-row flex justify-between   border  p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around justify-between border sm:border-none my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
              <div className=" my-3 sm:flex sm:justify-between border  p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around justify-between border sm:border-none my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
              <div className=" my-3 sm:flex sm:justify-between border  p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around justify-between border sm:border-none my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
              <div className=" my-3 sm:flex sm:justify-between border  p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around justify-between border sm:border-none my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
              <div className=" my-3 border sm:flex sm:justify-between p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around sm:border-none justify-between border my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
              <div className=" my-3 border sm:flex sm:justify-between p-2 rounded-xl shadow-xl">
                <div className=" flex sm:flex-col sm:justify-around sm:border-none justify-between border my-3">
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">Order #</small>
                    <small>4589657</small>
                  </div>
                  <div className=" flex flex-col ">
                    <small className=" font-bold text-sky-500">
                      Time Placed
                    </small>
                    <small>21/9/2023</small>
                  </div>
                </div>
                <div className=" relative items-center flex justify-center my-4">
                  <div className=" relative border">
                    <img
                      src={firecouple}
                      alt=""
                      className=" w-[150px] h-[150px]"
                    />
                    <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 ">
                      <h1 className="  uppercase font-bold">Delivered</h1>
                    </div>
                  </div>
                </div>
                <div className=" flex items-center justify-center flex-col">
                  <h3 className="  font-bold">KES 3500</h3>
                  <Link className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
                    Order Again
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
