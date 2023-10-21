import React from 'react'
import {HiGift} from 'react-icons/hi2'
import {BiNews} from 'react-icons/bi'
import {MdToday} from 'react-icons/md'
import {BiSolidCustomize} from 'react-icons/bi'
import {FaPlaneArrival} from 'react-icons/fa'
import {GiPaintRoller} from "react-icons/gi"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <section className=' flex justify-around bg-white border-b-2 border-sky-500 p-1 text-sky-500'>
           <Link to='/NotFound'><div className=' flex flex-col items-center justify-center font-montserrat text-xs '>
            <div><HiGift className='  text-indigo-600'/></div>
            Gift Cards
            </div></Link> 
            <div className='flex flex-col items-center justify-center font-montserrat text-xs '>
            <div><FaPlaneArrival className=' text-indigo-600'/></div>
            New Arrivals
            </div>
            <Link to='/Blog'><div className='flex flex-col items-center justify-center font-montserrat text-xs '>
            <div><BiNews className='  text-indigo-600'/></div>
            Blog
            </div></Link>
            <div className='flex flex-col items-center justify-center font-montserrat text-xs '>
            <div><MdToday className='  text-indigo-600'/></div>
            Value of the day
            </div>
            <div className='flex flex-col items-center justify-center font-montserrat text-xs '>
            <div><BiSolidCustomize className='  text-indigo-600'/></div>
            Self customize
            </div>
        </section>

          <Link to='/ShirtModel'>  <div className=' fixed flex right-0 top-[200px] bg-sky-500 p-2 rounded shadow-2xl z-50'>
            <div>
            <GiPaintRoller className=' w-6 h-6 text-slate-200 hover:text-black hover:transform hover:transition-all hover:ease-in-out'/>
            </div>
            <div className=' hidden md:block  font-montserrat font-bold text-slate-200'>
            <small className=''>Customize</small>
            </div>
            </div>
            </Link>
        </div>
  )
}

export default Header