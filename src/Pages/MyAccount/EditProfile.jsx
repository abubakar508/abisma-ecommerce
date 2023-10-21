import React from 'react'
import AccDisplay from './AccDisplay'
import { Link } from 'react-router-dom'

function EditProfile() {
  return (
    <div>
        <div className=' sm:flex xl:items-center xl:justify-center'>
            <div>
                <AccDisplay  />
            </div>
            <div className=' mt-12  shadow-xl sm:w-[800px] p-2 '>
                <div className=' m-4 p-1'>
                    <h1 className=' uppercase font-medium'>Edit Your Profile</h1>
                    <small className=' text-gray-500'>You can craft your profile to your desire!</small>
                </div>
                <div className=' p-5 grid grid-cols-2 gap-16'>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder=' I M' className="blockFirst rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder=' Abu-Bakr' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='abubaakrismail508@gmail.com' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="" >Phone</label>
                    <input type="number" placeholder='+254720831147' className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">Gender</label>
                    <select name="" id="" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
                        <option value="">Male</option>
                        <option value="">Female</option>
                        <option value="">Shoga na Mahanithi</option>
                    </select>
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">Birthday Details</label>
                    <input type="date" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-sky-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6" />
                </div>
                <div className=' flex flex-col gap-2'>
                    <label htmlFor="">Upload Photo</label>
                    <div className=' w-[300px] h-[200px] items-center flex justify-center text-center border-dashed border-[2px] border-teal-600'>
                        <div className=' items-center justify-center flex'>
                    <input type="file" className=' bg-none w-[98px]' />
                    </div>
                    </div>
                </div>
                </div>
                <div className=' flex items-center justify-start m-3 p-2'>
                    <Link to='/MyProfile'><button className=' border p-4 w-[120px] text-center items-center rounded-md bg-sky-500 text-white font-medium text-lg'>Save</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditProfile