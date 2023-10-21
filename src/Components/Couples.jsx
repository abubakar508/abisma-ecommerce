import React from 'react'
import firecouple from '../Assets/firecouple.png'
import jewellery from '../Assets/jewellery.png'
import orange from '../Assets/couplesorange.png'
import corange from '../Assets/coupleorange.png'
import greensplash from '../Assets/green-splash.png'
import pinksplash from '../Assets/pink-splash.png'
function Couples() {
  return (
    <div>
        <div>
            <div className=' mt-4 relative
            lg:flex lg:flex-row lg:items-center lg:justify-center'>
                
                 
            <div className=' flex flex-col gap-3 absolute bottom-0 m-3
             sm:relative sm:text-center sm:justify-center sm:items-center
             lg:w-[400px]'>
                <div>
                <span className=' p-2 rounded-3xl border border-slate-500 hidden lg:block
                font-montserrat'>Get more couple deals</span>
            </div>
            <img src={greensplash} alt="" className=' hidden sm:hidden md:hidden lg:block absolute
                 -z-10 left-0'  />
                 <img src={pinksplash} alt=""
                 className=' hidden sm:hidden md:hidden lg:block absolute
                 -z-10 right-0' />
                <h1 className=' text-sky-500 font-montserrat font-bold text-2xl'>Matching Crafts For Couples</h1>
                <small className=' text-slate-200 font-montserrat font-bold
                 sm:text-black'>Delve into our world in fashion styels. Couples are not left behind. We spice up your love by embracing your presence with our matching products.
                 click below to shop couple crafts.</small>
                <button className=' w-[100px] p-2 bg-sky-500 text-slate-200 font-montserrat font-bold
                sm:w-[150px] sm:p-3'>Shop Now</button>
            </div>
            <div className=' sm:grid sm:grid-cols-2 sm:items-center sm:justify-center sm:p-12
             md:grid-cols-3 md:gap-3
             lg:grid lg:grid-cols-4'>
                <img src={firecouple} alt="" className=' rounded-3xl
                   sm:w-[250px] sm:h-[400px]
                    md:h-[400px]' />
                <img src={jewellery} alt="" className=' hidden sm:block
                 sm:w-[250px] sm:h-[400px] rounded-3xl
                  md:h-[250px]' />
                 <img src={orange} alt="" className='hidden sm:hidden 
                 md:block md:h-[600px] md:w-[300px] md:rounded-3xl' />
                 <img src={corange} alt="" className=' hidden sm:hidden md:hidden lg:block
                  rounded-3xl' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Couples