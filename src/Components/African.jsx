import React from 'react'
import african1 from '../Assets/africa-2.png'
import african2 from '../Assets/african-3.png'
import african3 from '../Assets/african-4.png'
import african5 from '../Assets/african-6.png'
import african6 from '../Assets/african-7.png'

function African() {
  return (
    <div className=' md:m-20 lg:m-20 sm:m-20 m-0'>
        <div className=' relative flex justify-center gap-10 flex-row sm:flex-col sm:mt-20 md:flex md:flex-row '>
            <div className=' flex flex-col text-center justify-center items-center
            absolute z-20 bottom-0
            sm:relative
            md:relative md:w-[270px]
            lg:w-[400px] lg:bg-gradient-to-t lg:rounded-3xl'>
                <h1 className=' text-slate-200 text-xl
                sm:text-slate-700 sm:bg-transparent mb-4 sm:uppercase sm:bg-sky-100 sm:rounded-xl font-montserrat'>Culture in Couture: <span className=' text-sky-500 text-2xl font-montserrat font-bold'> Crafted Sole's </span> African Attire Adventure.</h1>
                <small className=' text-slate-300 font-montserrat
                sm:text-gray-700'>Wrap yourself in vibrant threads,
                     let your culture be your guide. With
                      Crafted Sole, take a fashionable stride.
                       From kente to Ankara, our styles are pure,
                        for a cultural journey that's worth much
                         more. Embrace tradition with a modern
                          flair, African attire that's beyond
                           compare. Shop now and wear your roots
                            with pride, Crafted Sole, where culture
                             and fashion collide.</small>
            </div>
            <div className=' relative mt-4 flex flex-row gap-5 sm:grid sm:grid-cols-2
            lg:flex'>
                <img src={african2} alt="" className=' h-[500px] rounded-3xl hidden md:block md:w-[200px] md:h-[350px] sm:block sm:mt-0
                lg:h-[500px]' />
                <img src={african3} alt="" className=' rounded-3xl mt-10 w-[640px] md:w-[200px] md:h-[350px] sm:h-[500px] sm:mt-0 relative' />
                <div className=' hidden md:block'>
                <img src={african5} alt="" className=' h-[500px] rounded-3xl hidden md:hidden lg:block md:w-[200px] md:h-[300px]'/>
                <img src={african6} alt="" className=' rounded-3xl mt-4 md:h-[145px] md:w-[200px] md:mt-4
                lg:relative lg:left-0 lg:h-[200px] lg:w-[200px]' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default African