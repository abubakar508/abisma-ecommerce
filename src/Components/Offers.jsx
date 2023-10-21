import React from 'react'
import { Link } from 'react-router-dom'
import yellow from '../Assets/yellow-splash.png'

function Offers() {
  return (
    <div>
        <div className=' items-center flex flex-col justify-center'>
        <div className=' flex-col flex items-center text-center justify-center mt-4  bg-teal-800 w-full h-[1000px] p-3 relative'>
            <img src={yellow} alt="" className=' absolute bottom-0' />
            <div className=' z-20'>
            <div className=' grid grid-cols-4 gap-2'>
                <div className=' bg-black w-[80px] h-[80px] p-4 text-slate-200 items-center text-center uppercase'>
                    <h1 className=' leading-2 font-bold text-xl'>OO</h1>
                    <span className=' font-medium text-sky-500'>Days</span>
                </div>
                <div className=' bg-black w-[80px] h-[80px] p-4 text-slate-200 items-center text-center uppercase'>
                    <h1 className=' leading-2 font-bold text-xl'>OO</h1>
                    <span className=' font-medium text-sky-500'>Hours</span>
                </div>
                <div className=' bg-black w-[80px] h-[80px] p-4 text-slate-200 items-center text-center uppercase'>
                    <h1 className=' leading-2 font-bold text-xl'>OO</h1>
                    <span className=' font-medium text-sky-500'>Mins</span>
                </div>
                <div className=' bg-black w-[80px] h-[80px] p-4 text-slate-200 items-center text-center uppercase'>
                    <h1 className=' leading-2 font-bold text-xl'>OO</h1>
                    <span className=' font-medium text-sky-500'>Sec</span>
                </div>
            </div>
            <div className='flex flex-col space-y-3 mb-2'>
                <h1 className=' uppercase text-3xl font-medium text-gray-100'>Kajiado Offers!</h1>
                <span className=' text-gray-100 uppercase font-light'>Official launch</span>
                <h2 className=' uppercase text-xl font-bold text-gray-100'>Don't Miss!</h2>
            </div>
            <div className=' flex flex-col items-center justify-center space-y-3'>
                <small className=' text-gray-100 text-sm'>Enjoy free shipping on purchase of 5 items and above worth KES 15000</small>
                <Link className=' bg-sky-500 p-3 w-fit text-white uppercase rounded-sm'>Set Reminder</Link>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Offers