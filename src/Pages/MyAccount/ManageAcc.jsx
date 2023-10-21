import React from 'react'
import AccDisplay from './AccDisplay'
import firecouple from '../../Assets/firecouple.png'
import { Link } from 'react-router-dom'
import { SiContactlesspayment, SiVisa, SiMastercard } from 'react-icons/si'

function ManageAcc() {
  return (
    <div>
      <div className='sm:flex xl:items-center xl:justify-center'>
        <div>
          <AccDisplay/>
          
        </div>
        <div>
        <div>
          <div className=" shadow-xl  p-2 rounded-xl mt-4 sm:w-[full]">
            <div className=" border m-5 p-3">
              <h1 className=" uppercase ">Manage My Account</h1>
              <small className="  font-bold">
                Edit your account details from this section
              </small>
            </div>
            <div className=" flex flex-col sm:flex-row sm:flex-wrap">
              <div className="flex flex-col m-4 shadow-xl rounded-lg p-2">
                <h2 className="  font-bold uppercase mb-1">
                  Profile Details
                </h2>
                <div className=" flex items-center justify-center mb-3">
                  <img
                    src={firecouple}
                    alt=""
                    className=" rounded-full w-[70px] h-[70px]"
                  />
                </div>
                <Link to='/EditProfile' className=" hover:text-slate-200 border w-fit p-2 hover:bg-sky-700 ">
                  Edit
                </Link>
                <small className=" text-gray-700 text-xs  mt-3">
                  I M Abu-Bakr
                </small>
                <small className="  text-xs text-gray-700">
                  abubakarismail508@gmail.com
                </small>
                <small className=" hover:text-sky-500  mt-3">
                  Subscribe to Newsletter
                </small>
              </div>
              <div className="flex flex-col m-4 shadow-xl rounded-lg p-2 space-y-4">
                <h1 className="  uppercase font-bold">
                  Address Details
                </h1>
                <small className=" ">
                  Your Default Shipping Address
                </small>
                <Link to='/EditAddress' className=" hover:text-slate-200 border w-fit p-2 hover:bg-sky-700 ">
                  Edit
                </Link>
                <div className=" flex flex-col text-sky-700 ">
                  <small>234 Badlands Avenue, Umma University</small>
                  <small>Kajiado, kenya</small>
                  <i className="  text-gray-700">Opposite Kwa Babu</i>
                  <small className=" text-sky-500">(+254) 720831147</small>
                </div>
              </div>
              <div className="flex flex-col m-4 shadow-xl rounded-lg p-2 space-y-3">
                <h1 className="  font-bold uppercase">
                  Billing Details
                </h1>
                <small className=" text-gray-500">
                  Your Default Billing Details
                </small>
                <Link className=" hover:text-slate-200 border w-fit p-2 hover:bg-sky-700 ">
                  Edit
                </Link>
                <div className=" flex flex-col">
                  <div className=" flex items-center gap-3">
                    <SiContactlesspayment className=" w-[50px] h-[50px] text-sky-500" />
                    <SiMastercard
                      className=" w-[50px] h-[50px] text-sky-500"
                      title="Mastercard"
                    />
                    <SiVisa className=" w-[50px] h-[50px] text-sky-500" />
                  </div>
                  <small className=" text-gray-500">
                    Payment on Delivery
                  </small>
                </div>
                <div className=" flex flex-col">
                  <span>Default Credit Card Details</span>
                  <div className=" border items-center flex text-center justify-center bg-sky-500 text-slate-200 h-[25px] cursor-not-allowed">
                    <div className=" hover:hidden bg-sky-500 cursor-not-allowed">
                      <small> 4937 **** **** ****</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
        <section className=" m-11 overflow-y-scroll h-[400px]">
        <div className=" text-center">
          <h1 className="  uppercase font-bold">
            Recent craft Orders
          </h1>
        </div>
        <div className=" my-3 sm:flex sm:justify-between border  p-2 rounded-xl shadow-xl">
          <div className=" flex sm:flex-col sm:justify-around justify-between border sm:border-none my-3">
            <div className=" flex flex-col ">
              <small className=" font-bold text-sky-500">Order #</small>
              <small>4589657</small>
            </div>
            <div className=" flex flex-col ">
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Processing...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
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
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Processing...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
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
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Processing...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
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
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Processing...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
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
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Delivering...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
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
              <small className=" font-bold text-sky-500">Time Placed</small>
              <small>21/9/2023</small>
            </div>
          </div>
          <div className=" relative items-center flex justify-center my-4">
            <div className=" relative border">
              <img src={firecouple} alt="" className=" w-[150px] h-[150px]" />
              <div className=" absolute bg-sky-500 opacity-70 text-slate-200 p-2 bottom-0 cursor-wait">
                <h1 className="  uppercase font-bold">
                  Shipping...
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center flex-col">
            <h3 className="  font-bold">KES 3500</h3>
            <Link to='/OrderDetails' className=" uppercase  border p-2 hover:bg-sky-500 hover:text-slate-200">
              Manage Order
            </Link>
          </div>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}

export default ManageAcc