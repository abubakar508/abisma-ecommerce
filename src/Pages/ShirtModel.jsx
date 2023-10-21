import React from 'react'
import ShirtRenderer from './ShirtRenderer'
import {FaRobot} from 'react-icons/fa6'
import {TfiWrite} from 'react-icons/tfi'
import {IoMdCall} from 'react-icons/io'
import {RiWhatsappFill} from 'react-icons/ri'
function ShirtModel() {
  return (
    <div>
        <div className=' fixed justify-center items-center flex'>
            <div className=' flex flex-col justify-between backdrop-blur w-[120px] m-1'>
                <input type="color" className=' bg-sky-500 rounded-md mt-2' />
                <input type="file"  className=' mt-2 '/>
                <button type='submit' className=' bg-sky-500 w-[120px] p-2 rounded-md mt-2 font-montserrat font-bold text-white
                 hover:text-black'>Craft</button>
                <div className=' mt-3 rounded-md flex  bg-sky-500 justify-around text-slate-200'>
                    <FaRobot className=' w-[30px] h-[50px] hover:text-black '/>
                    <TfiWrite className=' w-[30px] h-[50px] hover:text-black'/>  
                </div>
                <div className=' m-2 text-slate-50 flex items-center justify-around bg-sky-500 rounded-md'>
                <IoMdCall className=' w-[30px] h-[50px] hover:scale-95 hover:text-black'/>
                <RiWhatsappFill className=' w-[30px] h-[50px] hover:scale-95 hover:text-black'/>
            </div>
            <div className=' border-sky-500 border-[3px]'>
                <small className=' text-slate-200 font-montserrat font-medium '>
                    In this section, Customize the 3D image to the best of your individual's or company's desire.
                </small>
            </div>
            </div>
        </div>
<ShirtRenderer/>

    </div>
  )
}

export default ShirtModel