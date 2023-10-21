import React from 'react'
import AccDisplay from './AccDisplay'
import { Link } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'

function EditAddress() {
  return (
    <div>
        <div className=' sm:flex xl:justify-center'>
            <div>
                <AccDisplay />
            </div>
            <div className=' flex flex-col'>
            <div  className=' mt-14 m-3 border rounded-xl shadow-xl p-4 h-fit'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-11'>
                <div className=' grid gap-4'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='Enter your first name' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
                </div>
                <div  className=' grid gap-4'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='Enter your last name' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"/>
                </div>
                <div  className=' grid gap-4'>
                    <label htmlFor="">Phone</label>
                    <input type="number" placeholder='+254720831147' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div  className=' grid gap-4'   >
                    <label htmlFor="">County</label>
                    <select  className=" bg-sky-500 p-3 blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
                        <option value="">Nairobi</option>
                        <option value="">Kajiado</option>
                        <option value="">Narok</option>
                        <option value="">Nakuru</option>
                        <option value="">Eldoret</option>
                        <option value="">Kakamega</option>
                        <option value="">Busia</option>
                        <option value="">Bungoma</option>
                        <option value="">Kitale</option>
                        <option value="">Machakos</option>
                        <option value="">Kiambu</option>
                        <option value="">Meru</option>
                        <option value="">Mombasa</option>
                        <option value="">Taita Taveta</option>
                        <option value="">Voi</option>
                    </select>
                </div>
                <div className=' grid gap-4' >
                    <label htmlFor="">Town</label>
                    <input type="text" placeholder='Town/Street' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' grid gap-4'>
                    <label htmlFor=""> Zip/Postal code</label>
                    <input type="number" placehodler='0000' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
            </div>
            </div>
            <div className=' mt-5 w-fit m-10 flex gap-5 items-center'>
                <Link to='/AddressBook' className=' flex items-center p-3 border-[2px] border-sky-500  font-medium rounded-md hover:text-slate-500'><AiOutlineLeft />Back</Link>
                <Link to='/AddressBook'><button className=' p-3 border-[2px] border-sky-500  font-medium rounded-md hover:text-slate-500'>Save</button></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EditAddress