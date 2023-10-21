import React from 'react'
import {SiDior} from "react-icons/si";
import {SiNike} from "react-icons/si";
import {CgChanel} from "react-icons/cg";
import {SiJordan} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
import {SiFila} from "react-icons/si";
function Brands() {
  return (
    <div>

        <div className=' flex flex-col text-center justify-center mt-4 mb-4'>
            <div className=' flex flex-col items-center justify-center border mb-4 m-4'>
                <h1 className=" font-montserrat text-2xl hover:border-b-4 hover:border-orange-500 hover:rounded mb-2 font-medium text-sky-500">Brands</h1>
                <small className=' font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero consequuntur sunt quia praesentium excepturi quos adipisci, ab nemo sed quod hic corporis, at quaerat minima autem repudiandae quo eveniet.</small>
            </div>
            <div className=' text-black flex  border p-4 justify-between items-center'>
                <SiAdidas className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
                <SiFila className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
                <SiJordan className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
                <SiNike className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
                <SiDior className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
                <SiPuma className=' w-[40px] h-[40px] bg-orange-500 rounded-full hover:bg-sky-500 hover:text-slate-200'/>
            </div>
            <div>
                <div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands