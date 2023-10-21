import React from 'react'
import AccDisplay from './AccDisplay'
import { Link } from 'react-router-dom'

function AddressBook() {
  return (
    <div>
        <div className=' flex flex-col sm:flex-row gap-4 xl:justify-center'>
            <div>
                <AccDisplay/>
            </div>
            <div className=' mt-10'>
                <div className=' p-4 rounded-xl shadow-xl m-2 flex justify-between border mt-12'>
                    <h1 className=' uppercase'>Address Book</h1>
                    <small className=' hover:text-sky-700 cursor-pointer'>Default Address</small>
                </div>
                <div className=' border rounded-xl shadow-xl p-3 m-3'>
                <div className=' m-2 mt-5 sm:flex sm:gap-4 sm:justify-around'>
                    <div className=' flex flex-col gap-3'>
                        <small className=' text-sky-500 font-medium'>Full Name</small>
                        <small>I M Abu-Bakr</small>
                        <small>Joined 2 days ago</small>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <small className=' text-sky-500 font-medium'>Address</small>
                        <small>234 Badlands avenue, Umma University</small>
                        <small>Kenya, Kajiado</small>
                    </div>
                    <div className=' flex flex-col gap-3'>
                        <small className=' text-sky-500 font-medium'>status</small>
                        <small>Default Address</small>
                    </div>
                    
                </div>
                <div className=' flex gap-3 mt-4 m-2'>
                        <Link to='/EditAddress'><button className=' border-[2px]  p-3 rounded-md w-[80px]'>Edit</button></Link>
                        <Link to='/AddAddress'><button className=' border-[2px] p-3 rounded-md flex'>Add New Address</button></Link>
                    </div>
                    </div>
                    <div className=' border m-3 rounded mt-5 p-4 text-center shadow-xl'>
                        <h1 className=' uppercase font-medium text-sky-500 '>Address/Shipping Policy</h1>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis commodi deleniti optio culpa dolore, eveniet id maxime reiciendis, doloribus sint nesciunt aliquid dolorum quasi molestiae enim fugit illum voluptatem.</small>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default AddressBook