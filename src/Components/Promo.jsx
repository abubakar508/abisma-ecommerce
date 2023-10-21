import React from 'react'
import collection from '../Assets/collection_2_4.png'
import black from '../Assets/black-splash-remv.png'
import { Link } from 'react-router-dom'

function Promo() {
  return (
    <div>

        <div className=' justify-center p-2 grid lg:grid-cols-2 m-4 mt-32 mb-32 border '>
            <div className=' items-center flex justify-center'>
                <div className=' relative rounded-lg w-[360px] h-[500px]'>
                    <img src={collection} alt="" className=' rounded-lg w-full h-full' />
                    <button className=' absolute top-60 left-32 p-4 bg-white text-sky-500 font-medium
                    hover:bg-sky-500 hover:text-white'>Shop Now</button>
                </div>
            </div>
            <div>
                <div className=' grid grid-cols-2 gap-4 lg:gap-3 xl:w-fit xl:gap-5 mt-3'>
                    <div className=' w-[170px] h-[200px] lg:w-[200px] xl:w-[240px] relative'>
                        <img src={collection} alt="" className=' object-cover w-full h-full rounded-lg' />
                        <div className=' absolute top-0 p-3'>
                            <small className=' text-sky-500'>Women</small>
                            <p className=' text-gray-700'>Lorem ipsum dolor sit amet!</p>
                            <button className=' p-2 bg-sky-500 hover:bg-sky-600 text-white font-medium'>Tops</button>
                        </div>
                    </div>
                    <div className=' w-[170px] h-[200px] lg:w-[200px] xl:w-[240px] relative'>
                        <img src={collection} alt="" className=' object-cover w-full h-full rounded-lg' />
                        <div className=' absolute top-0 p-3'>
                            <small className=' text-sky-500'>Women</small>
                            <p className=' text-gray-700'>Lorem ipsum dolor sit amet!</p>
                            <button className=' p-2 bg-sky-500 hover:bg-sky-600 text-white font-medium'>Bottoms</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' h-[150px] w-[370px] mt-3 relative lg:mt-10 lg:w-[470px] xl:w-[500px]'>
                    <img src={collection} alt="" className=' w-full h-full object-cover rounded-lg' />
                    <img src={black} alt="" className=' absolute top-0 object-cover  w-[350px] h-[150px] mix-blend-darken' />
                    <div className=' flex items-center rotate-90 absolute top-9 right-0 w-fit'>
                        <div className=' p-1 border-[2px] border-gray-700 w-fit aspect-square'>
                        <Link to='/Women'><div className='  aspect-square w-[19px] h-[19px] bg-sky-500 hover:bg-orange-600' title='Women Section' /></Link>
                        </div>
                        <div className=' w-[40px] h-[2px] bg-gray-700' />
                    </div>
                    <div className=' w-[400px] lg:w-[500px] mt-10 items-center justify-center flex '>
                        <button className=' hidden w-[400px] lg:w-[470px] bg-sky-700 p-3 text-slate-100 font-medium rounded-lg sm:hidden md:hidden lg:block'>Shop Now</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo