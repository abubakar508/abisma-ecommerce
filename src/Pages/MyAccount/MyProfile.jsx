import React from 'react'
import AccDisplay from './AccDisplay'
import { Link } from 'react-router-dom'

function MyProfile() {
  return (
    <div>
        <div className=' sm:flex'>
            <div>
                <AccDisplay />
            </div>
            <div className=' grid grid-rows-2 gap-20 shadow-xl rounded-xl  sm:mt-11 sm:h-fit p-3 m-5'>
                <div className=' flex flex-col gap-32 sm:flex-row sm:flex-wrap'>
                <div className=' flex flex-col space-y-3 my-3'>
                    <small className=' text-sky-500 font-medium'>Full Name</small>
                    <small className=' text-gray-700'>I M Abu-Bakr</small>
                </div>
                <div className=' flex flex-col space-y-3 my-3'>
                    <small className=' text-sky-500 font-medium'>Email</small>
                    <small className=' text-gray-700'>abubakarismail508@gmail.com</small>
                    <Link to='/EditProfile' className=' border w-fit p-1 rounded-md hover:bg-sky-500 hover:text-slate-200'><small>Change</small></Link>
                </div>
                <div className=' flex flex-col space-y-3 my-3'>
                    <small className=' text-sky-500 font-medium'>Phone</small>
                    <small className=' text-gray-700'>+254720831147</small>
                    <Link to='/EditProfile' className=' border w-fit p-1 rounded-md hover:bg-sky-500 hover:text-slate-200'><small>Add</small></Link>
                </div>
                <div className='flex flex-col space-y-3 my-3'>
                    <small className=' text-sky-500 font-medium'>Gender</small>
                    <small className=' text-gray-700'>Male</small>
                </div>
                </div>
                <div className='flex flex-col space-y-3 my-3'>
                    <Link to='/EditProfile'><button className=' text-sm border-[2px] p-3 rounded-md border-sky-500 hover:text-sky-500 w-fit'>Edit Profile</button></Link>
                    <small className=' hover:text-sky-500 cursor-pointer'>Subscribe to Our Newsletter</small>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyProfile