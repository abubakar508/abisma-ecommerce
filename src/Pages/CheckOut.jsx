import React from 'react'
import { Link } from 'react-router-dom'

function CheckOut() {
  return (
    <div>
      <section className=' space-y-3 flex flex-col sm:flex-row items-center justify-center'>
        <div className=' border m-4'>
          <div className=' border m-2 flex flex-col items-center space-y-3'>
            <h1 className=' font-montserrat uppercase font-bold text-gray-700'>1. Review your order.</h1>
            <small className=' font-montserrat text-gray-600'>Review items in Cart Before Checking out.</small>
            <Link to='/Cart'><button className=' bg-teal-600 text-zinc-100 p-2 rounded-md uppercase'>Go Back to Cart</button></Link>
          </div>
          <div className=' border p-2 m-2 flex flex-col space-y-3'>
            <label htmlFor="" className=' font-light'>Shipping to:</label>
            <div>
            <select name="" id="" className="block w-[270px] sm:w-[100px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat uppercase">
              <option value="">Select County of Shipment</option>
              <option value="">Nairobi</option>
              <option value="">Kajiado</option>
              <option value="">Kisumu</option>
              <option value="">Mombasa</option>
              <option value="">Uasin Gishu</option>
              <option value="">Kakamega</option>
              <option value="">Busia</option>
              <option value="">Bungoma</option>
              <option value="">Migori</option>
              <option value="">Nanyuki</option>
              <option value="">Taita Taveta</option>
              <option value="">Lamu</option>
              <option value="">Vihiga</option>
              <option value="">Meru</option>
              <option value="">Marsabit</option>
              <option value="">Machakos</option>
              <option value="">Kiambu</option>
              <option value="">Narok</option>
            </select>
            </div>
            <div className=' border space-y-3'>
              <label htmlFor="" className=' font-light'>Select Delivery</label>

              <div className= 'flex items-center gap-3 justify-around p-4 border-[2px] rounded-lg m-2 hover:bg-teal-600 hover:text-white'>
                <div>
                <input type="checkbox" name="" id="" checked className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600 w-[30px] h-[30px]" />
                </div>
                <div className=' flex flex-col'>
                 <span className=' text-stone-900 font-light'>Drop Off</span>
                 <small className=' text-stone-900 font-light'>Pick your item(s) from a designated dropping point.</small>
                </div>
                <div>

                </div>
                
              </div>
               <div className= 'flex items-center gap-3 justify-around p-4 border-[2px] rounded-lg m-2 hover:bg-teal-600 hover:text-white'>
                <div>
                <input type="checkbox" name="" id="" className="block rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-teal-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600 w-[30px] h-[30px]" />
                </div>
                <div className=' flex flex-col'>
                 <span className=' text-stone-900 font-light'>Door delivery</span>
                 <small className=' text-stone-900 font-light'>Get your item(s) delivered on your doorstep</small>
                </div>
                <div>

                </div>
                
              </div>
            </div>
          </div>

        </div>
        <div className=' border m-4'>
          <div className=' items-center flex flex-col space-y-2 mb-4'>
            <h1 className=' uppercase font-medium'>2. Personal details</h1>
            <small className=' font-light'>Your personal credentials and location is required.</small>
          </div>
          <div className=' sm:grid sm:grid-cols-2'>
          <div className=' flex justify-between p-2 my-4 items-center sm:flex-col sm:space-y-3 sm:items-start sm:p-2'>
            <label htmlFor="" >First Name:</label>
            <input type="text" placeholder='I M' className='block rounded-md placeholder:text-white border-0 py-1.5 text-white shadow-xl shadow-gray-700 ring-1 ring-inset ring-teal-600 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600' />
          </div>
          <div className=' flex justify-between p-2 my-4 items-center sm:flex-col sm:space-y-3 sm:items-start sm:p-2'>
            <label htmlFor="" >Last Name:</label>
            <input type="text" placeholder='Abu-Bakr' className='block rounded-md placeholder:text-white border-0 py-1.5 text-white shadow-xl shadow-gray-700 ring-1 ring-inset ring-teal-600 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600' />
          </div>
          <div className=' flex justify-between p-2 my-4 items-center sm:flex-col sm:space-y-3 sm:items-start sm:p-2'>
            <label htmlFor="" >Email:</label>
            <input type="email" placeholder='abubakarismail508@gmail.com' className='block rounded-md placeholder:text-white border-0 py-1.5 text-white shadow-xl shadow-gray-700 ring-1 ring-inset ring-teal-600 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600' />
          </div>
          <div className=' flex justify-between p-2 my-4 items-center sm:flex-col sm:space-y-3 sm:items-start sm:p-2'>
            <label htmlFor="" >Input your location in details</label>
            <input type="text" placeholder='Input your location in details' className='block rounded-md placeholder:text-white border-0 py-1.5 text-white shadow-xl shadow-gray-700 ring-1 ring-inset ring-teal-600 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6
         font-montserrat bg-teal-600' />
          </div>
          </div>
          <div className=' items-center flex flex-col text-center space-y-3 my-3'>
            <h1 className=' uppercase font-medium'>Confirmation</h1>
            <small>Confirm your personal details and delivery location area correct, then complete your order.</small>
            <button className=' border p-3 uppercase hover:text-white hover:bg-teal-600 hover:transition-all hover:ease-in-out hover:delay-75'>Complete Order</button>
          </div>

        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default CheckOut