import React from 'react'
import muslimoffers from '../Assets/muslimoffers.png'
import brownhijabi from '../Assets/brownhijabi.png'
import arabe2 from '../Assets/Arabe2.png'
function Muslimoffers() {
  return (
    <div>
        <div className=' relative mt-4 lg:flex lg:flex-row lg:items-center lg:justify-center'>
            <div className=' absolute bottom-0 m-3 flex flex-col gap-1
            sm:relative sm:items-center sm:justify-center sm:text-center lg:text-center lg:items-center lg:justify-center lg:w-[400px]'>
                <h1 className=' font-montserrat text-2xl text-sky-500 font-semibold
                 sm:text-3xl sm:font-bold'>Lorem ipsum dolor sit amet!</h1>
                <small className=' font-montserrat font-medium text-slate-200 sm:text-black md:text-black lg:text-black'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis inventore perferendis quasi ad iste natus vero eligendi totam. Porro, amet. Ipsam dolores, sapiente doloribus voluptates optio veritatis. Facere, quibusdam eos!</small>
                <button className=' p-2 bg-sky-500 text-slate-200 font-montserrat font-medium'>Shop Now</button>
            </div>
            <div className=' sm:grid sm:grid-cols-2 sm:m-6 sm:gap-4
            md:grid md:grid-cols-3
            lg:grid lg:grid-cols-2 lg:w-[400px] lg:aspect-square '>
                <img src={muslimoffers} alt="" className=' rounded-3xl h-[400px] lg:h-[300px]' />
                <img src={brownhijabi} alt="" className=' rounded-3xl hidden sm:block sm:h-[400px] sm:w-[300px] lg:h-[300px]' />
                <div className=' lg:col-span-2 lg:w-fit'>
                <img src={arabe2} alt="" className=' md:h-[400px] hidden md:block lg:block rounded-3xl
                   lg:w-[700px] lg:h-[300px]' />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Muslimoffers